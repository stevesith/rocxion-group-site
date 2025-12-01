'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import DeliveryPhaseCard from '@/components/DeliveryPhaseCard';
import { motion } from 'framer-motion';
import { ChartBarIcon, WrenchScrewdriverIcon, CheckCircleIcon, BuildingOfficeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';

export default function Projects() {
  const featuredProject = {
    title: "50kW Commercial Solar Installation",
    description: "Complete solar energy system installation including comprehensive design, professional installation, and full commissioning for a commercial facility in Windsor, Vanderbijlpark.",
    location: "Windsor, Vanderbijlpark",
    capacity: "50kW",
    imageUrl: "/placeholder-project.jpg",
    projectType: "Commercial",
    completionDate: "2024",
    link: "#"
  };

  const additionalProjects = [
    {
      title: "25kW Residential Complex",
      description: "Solar installation for residential complex with battery backup system.",
      location: "Pretoria, Gauteng",
      capacity: "25kW",
      imageUrl: "/placeholder-project2.jpg",
      projectType: "Residential",
      completionDate: "2024",
      link: "#"
    },
    {
      title: "75kW Industrial Installation",
      description: "Large-scale industrial solar system with grid-tie configuration.",
      location: "Johannesburg, Gauteng",
      capacity: "75kW",
      imageUrl: "/placeholder-project3.jpg",
      projectType: "Industrial",
      completionDate: "2023",
      link: "#"
    },
    {
      title: "15kW Office Building",
      description: "Office building solar installation with monitoring system.",
      location: "Centurion, Gauteng",
      capacity: "15kW",
      imageUrl: "/placeholder-project4.jpg",
      projectType: "Commercial",
      completionDate: "2023",
      link: "#"
    },
    {
      title: "100kW Manufacturing Plant",
      description: "High-capacity solar system for manufacturing facility.",
      location: "Vanderbijlpark, Gauteng",
      capacity: "100kW",
      imageUrl: "/placeholder-project5.jpg",
      projectType: "Industrial",
      completionDate: "2023",
      link: "#"
    },
    {
      title: "30kW Retail Complex",
      description: "Solar installation for shopping complex with backup power.",
      location: "Midrand, Gauteng",
      capacity: "30kW",
      imageUrl: "/placeholder-project6.jpg",
      projectType: "Commercial",
      completionDate: "2022",
      link: "#"
    }
  ];

  const projectStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "2MW+", label: "Total Capacity Installed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div>
      <HeroSection
        title="Our Projects"
        subtitle="Proven Excellence"
        description="Discover our portfolio of successful solar energy installations across South Africa, showcasing our commitment to quality and innovation."
        ctaText="Start Your Project"
        ctaLink="/#contact"
      />

      {/* Project Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Impact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Numbers that showcase our commitment to delivering exceptional solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - New Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Featured Project
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Showcasing our flagship commercial and residential solar installation and electrical maintenance projects.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-secondary-50 to-neutral-50 rounded-2xl shadow-lg overflow-hidden border border-neutral-200"
          >
            {/* Top Badge and Header */}
            <div className="bg-white px-8 lg:px-12 py-6 border-b border-neutral-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    Commercial Installation
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 font-heading">
                    50kW Commercial Solar Installation
                  </h3>
                </div>
                <BuildingOfficeIcon className="w-16 h-16 text-primary-200 flex-shrink-0 hidden md:block" />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left Column - Location & Key Info */}
              <div className="lg:col-span-2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-2">Location</h4>
                    <p className="text-lg font-medium text-secondary-900 flex items-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-primary-600" />
                      Windsor, Vanderbijlpark
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-2">Project Type</h4>
                      <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium text-sm">
                        Commercial
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-2">Completion</h4>
                      <span className="inline-block bg-neutral-100 text-secondary-700 px-4 py-2 rounded-lg font-medium text-sm">
                        2024
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-3">System Details</h4>
                    <ul className="space-y-3 text-sm text-secondary-700">
                      <li className="font-medium">Commercial/Farm System, 50kW 3 Phase, (60kW Battery Storage)</li>
                      <li>Windsor, Vanderbijlpark</li>
                      <li className="font-medium mt-3">Residential System, 32kW Single Phase, (60kW Battery Storage)</li>
                      <li>Arbour Park, Tzaneen</li>
                      <li className="font-medium mt-3">Residential System, 32kW Single Phase, (60kW Battery Storage)</li>
                      <li>Bendo, Polokwane</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Middle Column - Description */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-neutral-50/50 to-white">
                <div>
                  <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-4">About This Project</h4>
                  <p className="text-base text-secondary-700 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-4">Featured Components</h4>
                  <ul className="grid grid-cols-1 gap-4 mb-6">
                    <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                      <span className="text-primary-600 font-bold text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="text-sm font-medium text-secondary-600">Commercial/Farm System, 50kW 3 Phase, (60kW Battery Storage)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                      <span className="text-primary-600 font-bold text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="text-sm font-medium text-secondary-600">Residential System, 32kW Single Phase, (60kW Battery Storage)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                      <span className="text-primary-600 font-bold text-lg flex-shrink-0">•</span>
                      <div>
                        <p className="text-sm font-medium text-secondary-600">Residential System, 32kW Single Phase, (60kW Battery Storage)</p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                    <p className="text-sm text-green-900">
                      We have successfully completed numerous solar energy system projects nationwide, including comprehensive system design, professional installation, and full commissioning for both commercial and residential facilities.
                    </p>
                  </div>
                </div>

                <Link href="/gallery">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              More Projects
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Additional solar installations showcasing our diverse project portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <div
                key={project.title}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
          >
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Project Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              The Solar Energy Difference
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See how our solar solutions transform energy challenges into opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Solar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="aspect-video bg-red-100 overflow-hidden relative">
                <Image 
                  src="/images/gallery/01-loadshedding.jpg" 
                  alt="Before Solar - Power Outage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-heading">Before Solar</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-secondary-600">High monthly electricity bills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-secondary-600">Dependence on grid electricity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-secondary-600">No control over energy costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-secondary-600">Environmental concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg flex-shrink-0">×</span>
                    <span className="text-secondary-600">Vulnerable to load shedding</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* After Solar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="aspect-video bg-green-100 overflow-hidden relative">
                <Image 
                  src="/images/gallery/front-view-kids-spending-time-home_23-2150639968.jpg" 
                  alt="After Solar - Energy Independence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-heading">After Solar</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-secondary-600">Significant cost savings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-secondary-600">Energy independence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-secondary-600">Predictable energy costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-secondary-600">Reduced carbon footprint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-secondary-600">Load shedding protection</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Project Delivery Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful project completion from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning",
                steps: ["Initial consultation", "Site assessment", "Energy audit", "Custom design"],
                icon: <ChartBarIcon className="w-12 h-12" />
              },
              {
                phase: "Implementation", 
                steps: ["Equipment procurement", "Installation team deployment", "System installation", "Quality testing"],
                icon: <WrenchScrewdriverIcon className="w-12 h-12" />
              },
              {
                phase: "Completion",
                steps: ["System commissioning", "Performance verification", "Client training", "Ongoing support"],
                icon: <CheckCircleIcon className="w-12 h-12" />
              }
            ].map((phase) => (
              <DeliveryPhaseCard
                key={phase.phase}
                phase={phase.phase}
                steps={phase.steps}
                icon={phase.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Let us design and install a custom solar energy solution for your business or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="transform hover:-translate-y-1">
                  Start Your Project
                </Button>
              </Link>
              <Link href="tel:0833138754">
                <Button variant="outline" size="lg">
                  Call 083 313 8754
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}