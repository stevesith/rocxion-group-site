'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  imageOffsetX?: number; // px
  imageOffsetY?: number; // px
  heroImages?: string[]; // Array of image URLs
  showLearnMore?: boolean;
}

const HeroSection = ({ 
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage,
  imageOffsetX = 0,
  imageOffsetY = 0,
  heroImages = [
    "/images/hero/20251019_120654_imgupscaler.ai_Enhancer_4K.png",
    "/images/hero/20251019_183622_imgupscaler.ai_Enhancer_4K.png",
    "/images/hero/AI WhatsApp Image 2025-06-12 at 19_imgupscaler.ai_Enhancer Pro_2K.png",
    "/images/hero/d43e05127412991.61416e174dba4.jpg",
    "/images/hero/DJI_0041_imgupscaler.ai_Enhancer_4K.png",
    "/images/hero/image001.jpeg",
    "/images/hero/image005.jpeg",
    "/images/hero/image006.jpeg",
    "/images/hero/WhatsApp Image 2025-06-12 at 19.49.55_21fe9841.png",
    "/images/hero/WhatsApp Image 2025-06-12 at 19.49.55_c48f5db2.png"
  ],
  showLearnMore,
}: HeroSectionProps & { showLearnMore?: boolean }) => {
  showLearnMore = showLearnMore ?? true;
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Carousel of background images */}
      <div className="absolute inset-0 w-full h-[135vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[current]}
              alt="Hero background"
              fill
              className="object-cover"
              priority
              style={{
                transform: `translate(${imageOffsetX}px, ${imageOffsetY}px)`
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Pagination dots */}
      {heroImages && heroImages.length > 1 && (
        <nav
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3"
          aria-label="Hero image pagination"
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={current === idx ? 'true' : 'false'}
              className={
                `w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 ` +
                (current === idx ? 'bg-white' : 'bg-white/40')
              }
            />
          ))}
        </nav>
      )}
      {/* Sky blue overlay above image */}
  <div className="absolute inset-0 bg-[#28beef] bg-opacity-20 mix-blend-multiply z-20 pointer-events-none" />
      {/* Optional gradient overlay for extra contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-30 pointer-events-none" />

  <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-28 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-200 font-medium text-lg mb-4 text-white"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-xl"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={ctaLink}>
              <Button variant="primary" size="lg" className="transform hover:-translate-y-1 drop-shadow-xl">
                {ctaText}
              </Button>
            </Link>
            {showLearnMore && (
              <Link href="/about">
                <Button variant="outline" size="lg" className="drop-shadow-xl text-white">
                  Learn More
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary-focus rounded-full opacity-20 hidden lg:block z-10"
        />
        
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent-focus rounded-full opacity-20 hidden lg:block z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;