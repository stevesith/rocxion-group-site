import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import Redis from 'ioredis';

/*
  Server-side protections added:
  - In-memory per-IP rate limiter (simple, configurable)
  - Optional reCAPTCHA v3 verification when RECAPTCHA_SECRET is provided and client supplies `recaptchaToken`

  Env vars used:
  - SENDGRID_API_KEY
  - EMAIL_FROM
  - EMAIL_TO
  - RECAPTCHA_SECRET (optional)
*/

// Simple in-memory rate limiter (per-IP). NOT suitable for multi-instance production.
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'); // default 1 minute
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '5'); // default 5 requests per window
const ipRequestMap: Map<string, number[]> = new Map();

// Redis client (optional). If REDIS_URL is provided, use Redis for rate limiting across instances.
const REDIS_URL = process.env.REDIS_URL || process.env.REDIS_HOST;
let redisClient: Redis | null = null;
try {
  if (REDIS_URL) {
    redisClient = new Redis(process.env.REDIS_URL || {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined,
      password: process.env.REDIS_PASSWORD,
    } as any);
  }
} catch (err) {
  console.warn('Failed to initialize Redis client for rate limiting, falling back to in-memory limiter.', err);
  redisClient = null;
}

// Expected env vars:
// SENDGRID_API_KEY, EMAIL_FROM, EMAIL_TO
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'no-reply@rocxiongroup.co.za';
const EMAIL_TO = process.env.EMAIL_TO || 'thuhu.mahlangu@gmail.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Rate limiting by IP (Redis-backed when available, otherwise in-memory)
    const xff = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || request.headers.get('cf-connecting-ip') || '';
    const ip = (xff.split(',')[0] || '').trim() || 'unknown';

    if (redisClient) {
      try {
        const key = `contact_rl:${ip}`;
        const windowSeconds = Math.max(1, Math.floor(RATE_LIMIT_WINDOW_MS / 1000));
        const count = await redisClient.incr(key);
        if (count === 1) {
          await redisClient.expire(key, windowSeconds);
        }
        if (count > RATE_LIMIT_MAX) {
          console.warn(`Rate limit exceeded for IP ${ip} (redis)`);
          return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }
      } catch (redisErr) {
        console.warn('Redis rate limit check failed, falling back to in-memory limiter', redisErr);
        // fall through to in-memory below
      }
    }

    // In-memory fallback limiter
    const now = Date.now();
    const timestamps = ipRequestMap.get(ip) || [];
    // Remove timestamps outside the window
    const recent = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
    recent.push(now);
    ipRequestMap.set(ip, recent);
    if (recent.length > RATE_LIMIT_MAX) {
      console.warn(`Rate limit exceeded for IP ${ip}`);
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Read body once
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    // Optionally verify reCAPTCHA v3 token if provided
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
    if (RECAPTCHA_SECRET) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA token required' }, { status: 400 });
      }

      try {
        const verifyResp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(recaptchaToken)}&remoteip=${encodeURIComponent(ip)}`,
        });
        const verifyJson = await verifyResp.json();
        // For v3, check score; default threshold 0.5
        const score = typeof verifyJson.score === 'number' ? verifyJson.score : 0;
        const success = verifyJson.success === true;
        const actionOk = !verifyJson.action || verifyJson.action === 'contact_form';
        const scoreThreshold = parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD || '0.5');
        if (!success || !actionOk || score < scoreThreshold) {
          console.warn('reCAPTCHA verification failed', verifyJson);
          return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
        }
      } catch (recapErr) {
        console.error('reCAPTCHA verification error', recapErr);
        return NextResponse.json({ error: 'reCAPTCHA verification error' }, { status: 500 });
      }
    }

    const nameVal = name;
    const emailVal = email;
    const phoneVal = phone;
    const messageVal = message;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Compose email
    const subject = `Website Contact: ${name}`;
    const textBody = `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`;
    const htmlBody = `<p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br/>')}</p>`;

    const msg = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject,
      text: textBody,
      html: htmlBody,
    };

    // Send email
    await sgMail.send(msg);

    console.log('Contact form email sent to recipient:', EMAIL_TO, { name, email, phone });

    // Send automated confirmation email to the visitor (best-effort)
    try {
      const confirmSubject = `Thanks for contacting Rocxion Group`;
      const confirmText = `Hi ${name},\n\nThank you for reaching out. We received your message and will get back to you within 24 hours.\n\nSummary of your message:\n${message}\n\nBest regards,\nRocxion Group`;
      const confirmHtml = `<p>Hi ${name},</p>
        <p>Thank you for reaching out. We received your message and will get back to you within 24 hours.</p>
        <h4>Summary of your message:</h4>
        <p>${message.replace(/\n/g, '<br/>')}</p>
        <p>Best regards,<br/>Rocxion Group</p>`;

      const confirmMsg = {
        to: email,
        from: EMAIL_FROM,
        subject: confirmSubject,
        text: confirmText,
        html: confirmHtml,
      };

      await sgMail.send(confirmMsg);
      console.log('Confirmation email sent to visitor:', email);
    } catch (confirmError) {
      // Don't fail the whole request if confirmation fails; log for diagnostics
      console.error('Failed to send confirmation email to visitor:', confirmError);
    }

    return NextResponse.json(
      {
        message: 'Form submitted and email sent successfully',
        data: { name, email, phone: phone || 'Not provided' }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}