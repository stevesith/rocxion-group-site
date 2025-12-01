'use client';

import { useState, ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-center rounded-2xl p-8 transition-all duration-300 border"
      style={{
        backgroundColor: isHovered ? '#ec1c24' : 'none',
        backgroundImage: isHovered ? 'none' : 'linear-gradient(to bottom right, #f0fbff, #e0f8ff)',
        borderColor: isHovered ? '#ec1c24' : '#cbd5e1',
        boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
      }}
    >
      <div className="mb-4 flex justify-center">
        <div
          style={{
            color: isHovered ? '#ffffff' : '#28beef',
            transition: 'color 300ms',
          }}
        >
          {icon}
        </div>
      </div>
      <h3
        className="text-xl font-bold mb-4 font-heading transition-colors duration-300"
        style={{
          color: isHovered ? '#ffffff' : '#1e293b',
        }}
      >
        {title}
      </h3>
      <p 
        className="transition-colors duration-300"
        style={{
          color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#6b7280',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
