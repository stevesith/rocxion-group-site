'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Gallery() {
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

  return (
    <div>
      <HeroSection
        title="Project Gallery"
        subtitle="Visual Portfolio"
        description="Explore our comprehensive collection of solar energy installations, showcasing the quality and diversity of our work across South Africa."
        ctaText="Start Your Project"
        ctaLink="/#contact"
      />

      {/* Main Gallery */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery />
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Project Highlights
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Key statistics and achievements from our major solar installations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-neutral-200 shadow-soft transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Concept */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Transformation Stories
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how we transform energy consumption for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-neutral-100"
            >
              <div className="w-full h-48 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/gallery/01-loadshedding.jpg"
                  alt="Before Solar - Power Outage"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-800 font-heading text-center mb-6">Before Solar</h3>
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
              </div>
            </div>

            <div
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-neutral-100"
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/gallery/front-view-kids-spending-time-home_23-2150639968.jpg"
                  alt="After Solar - Energy Independence"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-800 font-heading text-center mb-6">After Solar</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
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
          </div>
        </div>
      </section>
    </div>
  );
}