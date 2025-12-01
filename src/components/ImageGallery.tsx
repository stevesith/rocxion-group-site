'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { galleryImages } from '@/data/images';
import { GalleryGridSkeleton } from './Skeleton';

const IMAGES_PER_LOAD = 8;

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedCount, setLoadedCount] = useState(IMAGES_PER_LOAD);
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<number, boolean>>({});
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const currentImages = galleryImages.slice(0, loadedCount);
  const hasMoreImages = loadedCount < galleryImages.length;

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  // Simulate initial load time (remove after images start loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Minimal delay for UX feedback, then load immediately
    setTimeout(() => {
      setLoadedCount((prev) => Math.min(prev + IMAGES_PER_LOAD, galleryImages.length));
      setIsLoadingMore(false);
    }, 100);
  };

  // Preload images on hover for faster modal loading
  const handleThumbnailHover = (currentIndex: number) => {
    setHoveredImageId(currentIndex);
  };

  const handleImageLoad = (imageId: number) => {
    setImageLoadStatus((prev) => ({ ...prev, [imageId]: true }));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') handleCloseModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, selectedIndex]);

  return (
    <>
      {/* Gallery Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-secondary-900 mb-4">
          Installation Gallery
        </h2>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Explore our comprehensive collection of solar installations and renewable energy projects. Each image showcases our commitment to quality craftsmanship and professional technician expertise.
        </p>
      </div>

      {/* Show skeleton while loading initially */}
      {isInitialLoading ? (
        <GalleryGridSkeleton count={IMAGES_PER_LOAD} />
      ) : (
        <>
          {/* Gallery Grid - 8 Columns (4 per row) */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {currentImages.map((image, index) => (
              <div
                key={image.id}
                onMouseEnter={() => handleThumbnailHover(index)}
                onMouseLeave={() => setHoveredImageId(null)}
                onClick={() => handleOpenModal(index)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-soft transition-all duration-300 bg-white border border-neutral-200"
              >
                {/* Image Container with Blur Effect */}
                <div className="aspect-square relative overflow-hidden bg-neutral-200">
                  {/* Blurred Placeholder - Always visible */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover blur-lg scale-110 absolute inset-0"
                    style={{ filter: 'blur(12px)', transform: 'scale(1.1)' }}
                  />
                  
                  {/* Full Quality Image - Lazy loaded */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      imageLoadStatus[image.id] ? 'opacity-100 blur-none' : 'opacity-0'
                    } ${hoveredImageId === image.id ? 'scale-110' : 'scale-100'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white text-left">{image.title}</h3>
                    <p className="text-sm text-neutral-200">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Load More Button */}
      {hasMoreImages && !isLoadingMore && (
        <div className="flex flex-col items-center gap-4 mb-12">
          <motion.button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-3 bg-[#28beef] text-white font-medium rounded-2xl shadow-md hover:bg-[#1fa5d9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            Load More
          </motion.button>
          <p className="text-sm text-secondary-600">
            {loadedCount} of {galleryImages.length} images
          </p>
        </div>
      )}

      {/* Lazy Loader - Shows only when loading more */}
      {isLoadingMore && (
        <div className="flex flex-col items-center gap-4 mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 border-3 border-[#28beef] border-t-transparent rounded-full"
            style={{ willChange: 'transform' }}
          />
          <p className="text-sm text-secondary-600">
            Loading more images...
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseModal}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30"
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>

              {/* Image Container */}
              <div className="relative w-full h-[60vh] md:h-[80vh] bg-black flex items-center justify-center overflow-hidden">
                <motion.img
                  key={currentImage.id}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 shadow-lg"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 shadow-lg"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </motion.button>

              {/* Image Info */}
              <div className="p-6 bg-black border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading text-left">
                  {currentImage.title}
                </h3>
                <p className="text-neutral-300 mb-4 text-left">{currentImage.caption}</p>
                
                {/* Image Counter */}
                <div className="text-sm text-neutral-400">
                  {selectedIndex !== null && `${selectedIndex + 1} / ${galleryImages.length}`}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
