'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import Link from 'next/link';
import { ChartBarIcon, BoltIcon, Cog6ToothIcon, WrenchIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const services = [
    {
      title: "Energy Audit",
      description: "Comprehensive assessment of your current energy usage to identify optimization opportunities.",
      icon: <ChartBarIcon className="w-8 h-8 text-primary-500" />,
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
      icon: <BoltIcon className="w-8 h-8 text-primary-500" />,
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
      icon: <Cog6ToothIcon className="w-8 h-8 text-primary-500" />,
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
      icon: <WrenchIcon className="w-8 h-8 text-primary-500" />,
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
        description="Leading provider of comprehensive renewable solar energy and electrical services including energy audits, system design, professional installation, and ongoing maintenance support."
        ctaText="Request a Quote"
        ctaLink="#contact"
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              About Rocxion Group
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to transform South Africa's renewable energy landscape, Rocxion Group combines technical expertise with innovative solutions to deliver exceptional renewable solar energy and electrical services. Our accredited team ensures every project meets the highest standards of quality and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_ECB_logo.svg" alt="ECB Logo" width={80} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">ECB Accredited</h3>
              <p className="text-secondary-600">Registered with the Electrical Conformance Board</p>
            </div>

            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_CIBD_logo.svg" alt="CIBD Logo" width={180} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">CIDB Registered</h3>
              <p className="text-secondary-600">Registered with the Construction Industry Development Board</p>
            </div>

            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_DoL_logo.svg" alt="DoL Logo" width={180} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">DoL Compliant</h3>
              <p className="text-secondary-600">Registered with the Department of Labour and OHS Act compliant</p>
            </div>

            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_Sunsynk_logo.svg" alt="Sunsynk Logo" width={200} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Sunsynk Accreditation</h3>
              <p className="text-secondary-600">An Approved Sunsynk Installer</p>
            </div>

            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_Deye_logo.svg" alt="Deye Logo" width={120} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Deye Accreditation</h3>
              <p className="text-secondary-600">An Approved Deye Installer</p>
            </div>

            <div className="text-center border border-neutral-200 rounded-lg p-6">
              <div className="mb-4 flex justify-center h-16 items-center">
                <Image src="/images/about/00_AREP_logo.svg" alt="AREP Logo" width={200} height={80} className="grayscale" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">AREP Accreditation</h3>
              <p className="text-secondary-600">Registered with the Association for Renewable Energy Practitioners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
              Comprehensive renewable solar energy solutions from initial assessment to ongoing maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg" className="transform hover:-translate-y-1">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ready to make the switch to solar? Contact us today for a personalized consultation and free quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-heading">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Address</h4>
                      <p className="text-secondary-600">22 Dende Street<br />Nellmapius, Pretoria</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Phone</h4>
                      <p className="text-secondary-600">083 313 8754</p>
                      <p className="text-sm text-secondary-500">Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Email</h4>
                      <p className="text-secondary-600">info@rocxion.co.za</p>
                      <p className="text-sm text-secondary-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-primary-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Personal Email</h4>
                      <p className="text-secondary-600">rramokolo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl pt-6 pb-6 ps-6 pe-0 shadow-soft">
                <h4 className="font-semibold text-secondary-800 mb-4">Why Choose Rocxion Group?</h4>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>ECB Accredited</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>DoL Compliant & Safety Certified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>AREP Accreditation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>Sunsynk & Deye Approved Installer</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>CIDB Registered</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-500 flex-shrink-0">•</span>
                    <span>Professional Installation & Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
