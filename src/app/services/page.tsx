'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { BarChart, Lightning, Tools, Wrench, Bullseye, Power, ShieldCheck, HandThumbsUp } from 'react-bootstrap-icons';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Energy Audit",
      description: "Comprehensive assessment of your current energy usage patterns and infrastructure to identify optimization opportunities and potential cost savings.",
      icon: <BarChart className="w-8 h-8 text-primary-500" />,
      features: [
        "Detailed energy consumption analysis",
        "Load profiling and demand assessment",
        "Cost-saving recommendations",
        "ROI calculations and projections",
        "Compliance assessment and reporting",
        "Energy efficiency recommendations"
      ]
    },
    {
      title: "System Design",
      description: "Custom solar energy system design tailored to your specific requirements, site conditions, and energy goals using advanced modeling software.",
      icon: <Lightning className="w-8 h-8 text-primary-500" />,
      features: [
        "Comprehensive site assessment",
        "Custom system configuration",
        "3D modeling and simulations",
        "Performance predictions and analysis",
        "Equipment selection and optimization",
        "Hybrid and off-grid solutions"
      ]
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation services by certified technicians ensuring optimal performance, safety compliance, and long-term reliability.",
      icon: <Tools className="w-8 h-8 text-primary-500" />,
      features: [
        "ECB certified installation team",
        "Quality assurance testing",
        "Safety compliance verification",
        "System commissioning and testing",
        "Performance optimization",
        "Documentation and certification"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance programs and technical support services to ensure maximum system performance and longevity throughout the system lifecycle.",
      icon: <Wrench className="w-8 h-8 text-primary-500" />,
      features: [
        "Regular system inspections",
        "Performance monitoring and analysis",
        "Preventive maintenance programs",
        "24/7 technical support hotline",
        "Component replacement services",
        "System upgrades and optimization"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your energy needs, goals, and site requirements."
    },
    {
      step: "02", 
      title: "Site Assessment",
      description: "Our technical team conducts a detailed site survey and energy audit to gather essential data for system design."
    },
    {
      step: "03",
      title: "Custom Design",
      description: "We create a tailored solar energy system design optimized for your specific requirements and site conditions."
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our certified installation team implements the system following all safety protocols and industry best practices."
    },
    {
      step: "05",
      title: "Testing & Commissioning",
      description: "Comprehensive testing and commissioning ensures optimal performance before system handover."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "We provide continuous monitoring, maintenance, and support to maximize your system's performance and lifespan."
    }
  ];

  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Solutions"
        description="From initial energy audits to ongoing maintenance, we provide end-to-end solar energy solutions tailored to your specific needs."
        ctaText="Request Consultation"
        ctaLink="/#contact"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Complete Solar Energy Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We offer comprehensive services covering every aspect of solar energy implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A systematic approach ensuring successful project delivery from conception to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-dark rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl
                   font-bold text-secondary-800 font-heading">{step.title}</h3>
                </div>
                <p className="text-secondary-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Why Choose Rocxion Group?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience the difference that expertise, quality, and commitment make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bullseye className="w-10 h-10 text-primary-500" />,
                title: "Expert Team",
                description: "ECB-accredited specialists bringing deep experience in solar energy, electrical installations, and cutting-edge technological systems."
              },
              {
                icon: <Power className="w-10 h-10 text-primary-500" />,
                title: "Quality Equipment",
                description: "Premium solar components from internationally recognized manufacturers"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary-500" />,
                title: "Full Compliance",
                description: "Complete adherence to all South African regulations and safety standards"
              },
              {
                icon: <HandThumbsUp className="w-10 h-10 text-primary-500" />,
                title: "Ongoing Support",
                description: "Comprehensive maintenance and technical support throughout system lifecycle"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-800 mb-4 font-heading">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6 font-heading">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our solar energy solutions can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="transform hover:-translate-y-1">
                  Get Free Consultation
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