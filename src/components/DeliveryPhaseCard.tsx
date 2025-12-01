'use client';

import { useState, ReactNode } from 'react';

interface DeliveryPhaseCardProps {
  phase: string;
  steps: string[];
  icon: ReactNode;
}

const DeliveryPhaseCard = ({ phase, steps, icon }: DeliveryPhaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-2xl p-8 shadow-soft text-center border transition-all duration-300"
      style={{
        backgroundColor: isHovered ? '#ec1c24' : '#ffffff',
        borderColor: isHovered ? '#ec1c24' : '#e5e7eb',
        boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
      }}
    >
      <div className="mb-6 flex justify-center">
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
        className="text-2xl font-bold mb-6 font-heading transition-colors duration-300"
        style={{
          color: isHovered ? '#ffffff' : '#1e293b',
        }}
      >
        {phase}
      </h3>
      <ul className="space-y-3">
        {steps.map((step, stepIndex) => (
          <li 
            key={stepIndex} 
            className="flex items-center transition-colors duration-300"
            style={{
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#6b7280',
            }}
          >
            <span 
              className="mr-2"
              style={{
                color: isHovered ? 'rgba(255, 255, 255, 0.7)' : '#28beef',
              }}
            >
              •
            </span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryPhaseCard;
