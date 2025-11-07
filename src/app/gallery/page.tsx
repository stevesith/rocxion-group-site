'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import GalleryGrid from '@/components/GalleryGrid';
import { FileEarmarkText, Wrench, BoxSeam, Clipboard, BarChart, StarFill } from 'react-bootstrap-icons';
import type { GalleryItem } from '@/components/GalleryGrid';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Gallery() {
  // Sample gallery data - replace with actual project images
  const galleryImages = [
    {
      id: 13,
      src: "/images/gallery/20230520_183344.jpg",
      alt: "Solar installation 2023-05-20",
      title: "Project Photo 2023-05-20",
      category: "gallery"
    },
    {
      id: 14,
      src: "/images/gallery/20230528_151535.jpg",
      alt: "Solar installation 2023-05-28",
      title: "Project Photo 2023-05-28",
      category: "gallery"
    },
    {
      id: 15,
      src: "/images/gallery/20240213_150039.jpg",
      alt: "Solar installation 2024-02-13",
      title: "Project Photo 2024-02-13",
      category: "gallery"
    },
    {
      id: 16,
      src: "/images/gallery/20240820_120407.jpg",
      alt: "Solar installation 2024-08-20",
      title: "Project Photo 2024-08-20",
      category: "gallery"
    },
    {
      id: 17,
      src: "/images/gallery/whatsapp-2025-06-12-194955-1.jpg",
      alt: "WhatsApp image 1",
      title: "WhatsApp Image 1",
      category: "gallery"
    },
    {
      id: 18,
      src: "/images/gallery/whatsapp-2025-06-12-194955-2.jpg",
      alt: "WhatsApp image 2",
      title: "WhatsApp Image 2",
      category: "gallery"
    }
  ];

  const projectHighlights = [
    {
      title: "50kW Commercial Installation",
      description: "Our flagship commercial project in Windsor, Vanderbijlpark, showcasing complete system design, installation, and commissioning.",
      stats: [
        { label: "Capacity", value: "50kW" },
        { label: "Annual Output", value: "85,000 kWh" },
        { label: "CO2 Savings", value: "68 tons/year" }
      ]
    },
    {
      title: "75kW Industrial System",
      description: "Large-scale industrial installation providing significant energy cost savings for manufacturing operations.",
      stats: [
        { label: "Capacity", value: "75kW" },
        { label: "Annual Output", value: "127,500 kWh" },
        { label: "Cost Savings", value: "R180,000/year" }
      ]
    },
    {
      title: "Multiple Residential Projects",
      description: "Various residential installations providing clean energy solutions for homes and residential complexes.",
      stats: [
        { label: "Projects", value: "15+" },
        { label: "Total Capacity", value: "300kW" },
        { label: "Families Served", value: "45+" }
      ]
    }
  ];

  const weddingImages: GalleryItem[] = [];

  return (
    <div>
      <HeroSection
        title="Project Gallery"
        subtitle="Visual Portfolio"
        description="Explore our comprehensive collection of solar energy installations, showcasing the quality and diversity of our work across South Africa."
        ctaText="Start Your Project"
        ctaLink="/#contact"
      />

      {/* Gallery Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Work in Pictures
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Browse through our collection of completed solar installations, from initial site assessment 
              to final commissioning, demonstrating our commitment to quality and excellence.
            </p>
          </motion.div>

          
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-4 font-heading">Wedding Photography</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Capturing the special moments — intimate portraits, joyful ceremonies, and candid celebrations.
            </p>
          </motion.div>

          <div>
            <GalleryGrid images={weddingImages} />
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Project Highlights
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Key statistics and achievements from our major solar installations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-secondary-800 mb-4 font-heading">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-secondary-600">{stat.label}:</span>
                      <span className="text-primary-600 font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Concept */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Transformation Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how we transform energy consumption for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 text-primary-500 flex justify-center">
                  <BarChart size={48} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 font-heading">Before Solar</h3>
              </div>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  High monthly electricity bills
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  Dependence on grid electricity
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  No control over energy costs
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  Environmental concerns
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">•</span>
                  Vulnerable to load shedding
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 text-primary-500 flex justify-center">
                  <StarFill size={48} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 font-heading">After Solar</h3>
              </div>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  Significant cost savings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  Energy independence
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  Predictable energy costs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  Reduced carbon footprint
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  Load shedding protection
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6 font-heading">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join our growing portfolio of satisfied clients and start your journey to energy independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="transform hover:-translate-y-1">
                  Get Your Quote
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}