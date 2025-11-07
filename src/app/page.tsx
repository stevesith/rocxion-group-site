'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import Link from 'next/link';
import { BarChart, Lightning, Tools, Wrench, Trophy, ShieldCheck, Award, Telephone, EnvelopePaper, GeoAlt } from 'react-bootstrap-icons';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const services = [
    {
      title: "Energy Audit",
      description: "Comprehensive assessment of your current energy usage to identify optimization opportunities.",
      icon: <BarChart className="w-8 h-8 text-primary-500" />,
      features: [
        "Detailed energy consumption analysis",
        "Cost-saving recommendations",
        "ROI calculations",
        "Compliance assessment"
      ]
    },
    {
      title: "System Design",
      description: "Custom solar energy system design tailored to your specific needs and requirements.",
      icon: <Lightning className="w-8 h-8 text-primary-500" />,
      features: [
        "Site assessment and analysis",
        "Custom system configuration",
        "3D modeling and simulations",
        "Performance predictions"
      ]
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation services ensuring optimal performance and safety compliance.",
      icon: <Tools className="w-8 h-8 text-primary-500" />,
      features: [
        "Certified installation team",
        "Quality assurance testing",
        "Safety compliance verification",
        "System commissioning"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services to ensure maximum system performance.",
      icon: <Wrench className="w-8 h-8 text-primary-500" />,
      features: [
        "Regular system inspections",
        "Performance monitoring",
        "Preventive maintenance",
        "24/7 technical support"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Empowering South Africa through Smart Energy Solutions"
        description="Leading provider of comprehensive solar energy services including energy audits, system design, professional installation, and ongoing maintenance support."
        ctaText="Request a Quote"
        ctaLink="#contact"
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              About Rocxion Group
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to transform South Africa's energy landscape, Rocxion Group combines 
              technical expertise with innovative solutions to deliver exceptional solar energy services. 
              Our ECB-accredited team ensures every project meets the highest standards of quality and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Trophy className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">ECB Accredited</h3>
              <p className="text-secondary-600">Certified by the Engineering Council of South Africa</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <ShieldCheck className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">CIDB Registered</h3>
              <p className="text-secondary-600">Construction Industry Development Board certified</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Award className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">DoL Compliant</h3>
              <p className="text-secondary-600">Department of Labour and OHS Act compliant</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive solar energy solutions from initial assessment to ongoing maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="primary" size="lg" className="shadow-sm hover:shadow-md transform hover:-translate-y-1">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ready to make the switch to solar? Contact us today for a personalized consultation and free quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Telephone className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Phone</h4>
                      <p className="text-secondary-600">083 313 8754</p>
                      <p className="text-sm text-secondary-500">Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <EnvelopePaper className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Email</h4>
                      <p className="text-secondary-600">info@rocxiongroup.co.za</p>
                      <p className="text-sm text-secondary-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <GeoAlt className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Service Area</h4>
                      <p className="text-secondary-600">We're available nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h4 className="font-semibold text-secondary-800 mb-4">Why Choose Rocxion Group?</h4>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>ECB Accredited & CIDB Registered</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>DoL Compliant & Safety Certified</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>Professional Installation & Support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
