'use client';

import { useState } from 'react';

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
}

const ProcessCard = ({ step, title, description }: ProcessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-8 shadow-soft transition-all duration-300 border border-neutral-200"
    >
      <div className="flex items-center mb-6">
        <div
          className={`rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 transition-colors duration-300 ${
            isHovered
              ? 'bg-accent-500 text-white'
              : 'bg-primary-500 text-white'
          }`}
        >
          {step}
        </div>
        <h3
          className={`text-xl font-bold font-heading transition-colors duration-300 ${
            isHovered ? 'text-accent-500' : 'text-secondary-800'
          }`}
        >
          {title}
        </h3>
      </div>
      <p className="text-secondary-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessCard;
