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
      className={`relative bg-white rounded-2xl p-6 sm:p-8 mx-2 sm:mx-0 shadow-soft transition-all duration-300 border border-neutral-200 overflow-visible ${isHovered ? 'shadow-md' : 'shadow-soft'}`}
    >
      {/* Step number badge - responsive size and position */}
      <div 
        className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-lg sm:text-2xl shadow-lg border-4 border-white z-10 transition-colors duration-300"
        style={{
          backgroundColor: isHovered ? '#28beef' : '#1e293b',
          color: '#ffffff'
        }}
      >
        {step}
      </div>

      <div className="flex items-center mb-6 mt-2 sm:mt-4">
        <h3
          className={`text-lg sm:text-xl font-bold font-heading transition-colors duration-300 ${
            isHovered ? 'text-accent-500' : 'text-secondary-800'
          }`}
        >
          {title}
        </h3>
      </div>
      <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessCard;
