'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import Image from 'next/image';
import Button from './Button';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "primary" : "ghost"}
            onClick={() => setFilter(category)}
            className="transition-all duration-300"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-soft hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            {/* Thumbnail */}
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt || image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-sm opacity-80">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </Button>
            
            {/* Enlarged image */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-black/5">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt || selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">{selectedImage.title}</h3>
              <p className="text-primary-600 font-medium">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryGrid;
export type { GalleryItem };