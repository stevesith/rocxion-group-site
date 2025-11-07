'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Building, GeoAlt } from 'react-bootstrap-icons';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  capacity: string;
  imageUrl: string;
  projectType: string;
  completionDate: string;
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  location, 
  capacity, 
  imageUrl, 
  projectType, 
  completionDate,
  link = "/projects"
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 border border-neutral-100"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Building className="w-16 h-16 text-primary-400 opacity-30" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
            {projectType}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-surface text-primary px-3 py-1 rounded-full text-sm font-medium">
            {capacity}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-2 font-heading">{title}</h3>
        <p className="text-primary text-sm mb-3 flex items-center">
          <GeoAlt className="w-4 h-4 mr-1" />
          {location}
        </p>
        <p className="text-text-muted mb-4 leading-relaxed">{description}</p>
        
        <div className="flex justify-between items-center mb-4 text-sm text-secondary-500">
          <span>Completed: {completionDate}</span>
        </div>
        
        <Link href={link}>
          <Button variant="primary" fullWidth>
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;