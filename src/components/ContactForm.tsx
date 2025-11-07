'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EnvelopePaperFill } from 'react-bootstrap-icons';
import Button from './Button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [serverStatus, setServerStatus] = useState<number | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    // Load reCAPTCHA v3 script if not already loaded
    if (typeof window !== 'undefined' && !(window as any).grecaptcha) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [RECAPTCHA_SITE_KEY]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error while editing
    if (error) setError(null);
    // Clear field error for this field
    const field = e.target.name as keyof typeof fieldErrors;
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateFields = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) errs.email = 'Email address is required.';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Message is required.';
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setServerStatus(null);

    // Client-side validation
    if (!validateFields()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // If reCAPTCHA site key is present, run grecaptcha to get a token
      let recaptchaToken: string | undefined;
      if (RECAPTCHA_SITE_KEY && typeof window !== 'undefined' && (window as any).grecaptcha) {
        try {
          recaptchaToken = await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
        } catch (recapErr) {
          console.error('reCAPTCHA execute error:', recapErr);
          setError('reCAPTCHA validation failed. Please try again.');
          setIsSubmitting(false);
          return;
        }
      }

      // Submit to server API which will send the email
      const payload = { ...formData, ...(recaptchaToken ? { recaptchaToken } : {}) };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setServerStatus(response.status);
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setError(null);
      } else {
        let serverMsg = 'Server error submitting form. Please try again later.';
        try {
          const err = await response.json();
          if (err && (err.error || err.message)) {
            serverMsg = err.error || err.message;
          }
        } catch (jsonErr) {
          // ignore
        }
        // Friendly override for common statuses
        if (response.status === 429) serverMsg = 'Too many requests — please wait a moment and try again.';
        if (response.status === 400 && serverMsg.toLowerCase().includes('recaptcha')) serverMsg = 'reCAPTCHA verification failed. Please try again.';
        setError(serverMsg);
        console.error('Server error submitting form:', serverMsg);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error — please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-soft text-center"
      >
        <div className="mb-4 flex justify-center">
          <EnvelopePaperFill className="w-16 h-16 text-primary-500" />
        </div>
        <h3 className="text-2xl font-bold text-secondary-800 mb-4">Thank You!</h3>
        <p className="text-secondary-600 mb-6">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="primary"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-soft"
    >
      <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-heading">Send Us a Message</h3>
      
      {error && (
        <div role="alert" aria-live="assertive" className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
          <div className="flex items-start justify-between">
            <div>{error}</div>
            {serverStatus === 429 && (
              <button
                type="button"
                onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)}
                disabled={isSubmitting}
                className="ml-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white text-sm rounded-full border"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-200"
              placeholder="Your full name"
            />
            {fieldErrors.name && (
              <p className="mt-2 text-sm text-white bg-gradient-to-r from-red-500 to-red-600 border border-red-700 rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {fieldErrors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-200"
              placeholder="your.email@example.com"
            />
            {fieldErrors.email && (
              <p className="mt-2 text-sm text-white bg-gradient-to-r from-red-500 to-red-600 border border-red-700 rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {fieldErrors.email}
              </p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-200"
            placeholder="083 123 4567"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all duration-200 resize-none"
            placeholder="Tell us about your project requirements..."
          />
            {fieldErrors.message && (
              <p className="mt-2 text-sm text-white bg-gradient-to-r from-red-500 to-red-600 border border-red-700 rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {fieldErrors.message}
              </p>
            )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;