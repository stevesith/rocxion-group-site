"use client";
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{
          __html: `
            <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js" type="module"></script>
            <dotlottie-wc src="https://lottie.host/d42397f1-2e04-4495-83b3-4ba83c719dc6/tXIfQDYcPO.lottie" style="width: 400px;height: 400px" autoplay loop></dotlottie-wc>
          `,
        }}
      />
      <p className="text-secondary-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="inline-block px-6 py-3 bg-[#28beef] text-white rounded-full font-semibold shadow-md hover:bg-[#1fa5d9] transition-colors">
        Go Home
      </Link>
    </div>
  );
}
