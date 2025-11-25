'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { ClipboardData, Tools, CheckCircle, Building, GeoAlt, House } from 'react-bootstrap-icons';
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Impact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Numbers that showcase our commitment to delivering exceptional solar energy solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
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

      {/* Featured Project */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Featured Project
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Showcasing our flagship commercial and residential solar installation and electrical maintenance projects.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <Building className="w-20 h-20 text-primary-600" />
                    </div>
                    <div className="text-primary-600 font-medium">Commercial/Farm System</div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredProject.projectType}
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredProject.capacity}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-heading">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-primary-600 text-sm mb-4 flex items-center">
                    <GeoAlt className="w-4 h-4 mr-2 text-primary-500" />
                    {featuredProject.location}
                  </p>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Project Scope:</span>
                      <span className="text-secondary-800 font-medium">Full System Installation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">System Type:</span>
                      <span className="text-secondary-800 font-medium">Grid-Tied Solar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Completion:</span>
                      <span className="text-secondary-800 font-medium">{featuredProject.completionDate}</span>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-secondary-800 mb-2">Featured Projects</h4>
                    <ul className="text-secondary-600 text-sm space-y-2">
                      <li>• <strong>Commercial/Farm System, 50kW 3 Phase, (60kW Battery Storage)</strong><br/>Windsor, Vanderbijlpark</li>
                      <li>• <strong>Residential System, 32kW Single Phase, (60kW Battery Storage)</strong><br/>Arbour Park, Tzaneen</li>
                      <li>• <strong>Residential System, 32kW Single Phase, (60kW Battery Storage)</strong><br/>Bendo, Polokwane</li>
                    </ul>
                  </div>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    We have successfully completed numerous solar energy system projects nationwide, including comprehensive system design, professional installation, and full commissioning for both commercial and residential facilities.
                  </p>
                  
                  <Link href="/gallery">
                    <Button variant="primary">
                      View Gallery
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              More Projects
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Additional solar installations showcasing our diverse project portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Project Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Project Delivery Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful project completion from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning",
                steps: ["Initial consultation", "Site assessment", "Energy audit", "Custom design"],
                icon: <ClipboardData className="w-12 h-12 text-primary-500" />
              },
              {
                phase: "Implementation", 
                steps: ["Equipment procurement", "Installation team deployment", "System installation", "Quality testing"],
                icon: <Tools className="w-12 h-12 text-primary-500" />
              },
              {
                phase: "Completion",
                steps: ["System commissioning", "Performance verification", "Client training", "Ongoing support"],
                icon: <CheckCircle className="w-12 h-12 text-primary-500" />
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-soft text-center"
              >
                <div className="mb-6 flex justify-center">{phase.icon}</div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-heading">{phase.phase}</h3>
                <ul className="space-y-3 text-secondary-600">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}