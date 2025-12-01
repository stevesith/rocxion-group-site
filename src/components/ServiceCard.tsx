'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ y: isHovered ? -5 : 0 }}
      className="bg-white rounded-2xl p-8 shadow-soft transition-all duration-300 border border-neutral-200"
    >
      {/* <div className="mb-4 flex justify-center">{icon}</div> */}
      <h3 
        className={`text-2xl font-bold mb-4 font-heading transition-colors duration-300 ${
          isHovered ? 'text-accent-500' : 'text-text'
        }`}
      >
        {title}
      </h3>
      <p className="text-text-muted mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="text-green-500 mr-2 mt-1 w-4 h-4" />
            <span className="text-text">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;