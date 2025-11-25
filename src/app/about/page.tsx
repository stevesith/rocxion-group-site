'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { Sun, Trophy, ShieldCheck, Award, Bullseye, HandThumbsUp, Rocket, Tree, PersonBadge } from 'react-bootstrap-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <HeroSection
        title="About Rocxion Group"
        subtitle="Our Story"
        description="Leading South Africa towards a sustainable energy future with innovative solar solutions and expert technical services."
        ctaText="Get in Touch"
        ctaLink="/#contact"
        showLearnMore={false}
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-800 mb-6 font-heading">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded with a vision to transform South Africa's energy landscape, Rocxion Group has established itself 
                as a trusted partner in renewable energy solutions. We combine cutting-edge technology with deep industry 
                expertise to deliver solar energy systems that exceed expectations.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Our comprehensive approach covers every aspect of solar energy implementation, from initial energy audits 
                and custom system design to professional installation and ongoing maintenance support.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We're committed to helping businesses and organizations reduce their carbon footprint while achieving 
                significant cost savings through intelligent energy solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Sun className="w-20 h-20 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-2">Clean Energy</h3>
                <p className="text-secondary-600">Sustainable solutions for a better tomorrow</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Leadership
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Meet the expert behind Rocxion Group's success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 flex justify-start">
                  <Image
                    src="/images/about/rocky_director.jpg"
                    alt="Rocky Ramokolo"
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-secondary-800 mb-4 font-heading">
                  Rocky Ramokolo
                </h3>
                <p className="text-xl text-primary-600 mb-6 font-medium">
                  Director & Lead Engineer
                </p>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  With extensive experience in electrical engineering and renewable energy systems, 
                  Rocky leads Rocxion Group with a commitment to excellence and innovation. His technical 
                  expertise and vision have positioned the company as a leader in South Africa's solar energy sector.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-secondary-800 mb-2">Qualifications</h4>
                    <ul className="text-secondary-600 text-sm space-y-1">
                      <li>• Electrical Engineering Diploma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-secondary-800 mb-2">Experience</h4>
                    <ul className="text-secondary-600 text-sm space-y-1">
                      <li>• 10+ Years in Solar Industry</li>
                      <li>• 50+ Successful Projects</li>
                      <li>• ECB Accredited Professional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Accreditations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Compliance & Accreditations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Certified and compliant with relevant South African regulations and standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              logo: '/images/about/00_ECB_logo.svg',
              alt: 'ECB Logo',
              heading: 'ECB Accredited',
              paragraph: 'Registered with the Electrical Conformance Board',
              items: [
                'Continuous professional development',
                'Industry best practices',
                'Quality assurance standards'
              ],
              gradient: 'from-primary-50 to-primary-100',
              logoWidth: 120,
              logoHeight: 120
            }, {
              logo: '/images/about/00_CIBD_logo.svg',
              alt: 'CIBD Logo',
              heading: 'CIDB Registered',
              paragraph: 'Registered with the Construction Industry Development Board',
              items: [
                'Construction industry compliance',
                'Contractor registration',
                'Project management standards',
                'Construction safety protocols'
              ],
              gradient: 'from-secondary-50 to-secondary-100'
            }, {
              logo: '/images/about/00_DoL_logo.svg',
              alt: 'DoL Logo',
              heading: 'DoL Compliant',
              paragraph: 'Registered with the Department of Labour and OHS Act compliant',
              items: [
                'Workplace safety compliance',
                'Employee health protection',
                'Safety training programs',
                'Risk assessment protocols'
              ],
              gradient: 'from-accent-50 to-accent-100'
            }, {
              logo: '/images/about/00_Sunsynk_logo.svg',
              alt: 'Sunsynk Logo',
              heading: 'Sunsynk Accreditation',
              paragraph: 'An Approved Sunsynk Installer',
              items: [],
              gradient: 'from-blue-50 to-blue-100',
              logoWidth: 240,
              logoHeight: 240
            }, {
              logo: '/images/about/00_Deye_logo.svg',
              alt: 'Deye Logo',
              heading: 'Deye Accreditation',
              paragraph: 'An Approved Deye Installer',
              items: [],
              gradient: 'from-blue-50 to-blue-100',
              logoWidth: 140,
              logoHeight: 140
            }, {
              logo: '/images/about/00_AREP_logo.svg',
              alt: 'AREP Logo',
              heading: 'AREP Accreditation',
              paragraph: 'Registered with the Association for Renewable Energy Practitioners',
              items: [],
              gradient: 'from-blue-50 to-blue-100',
              logoWidth: 240,
              logoHeight: 240
            }].map((section, idx) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className={`bg-gradient-to-br ${section.gradient} rounded-2xl p-8 text-center flex flex-col items-center h-full`}
              >
                <div className="mb-6 flex justify-center w-full h-32 items-center">
                  <Image src={section.logo} alt={section.alt} width={section.logoWidth || 198} height={section.logoHeight || 256} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-heading text-center">{section.heading}</h3>
                <p className="text-secondary-600 mb-4 text-center min-h-12">
                  {section.paragraph}
                </p>
                <ul className="text-left text-secondary-700 space-y-2 mx-auto max-w-xs flex-grow">
                  {section.items.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark mb-6 font-heading">
              Our Values
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Bullseye className="w-10 h-10" />, title: "Excellence", description: "Delivering superior quality in every project" },
              { icon: <HandThumbsUp className="w-10 h-10" />, title: "Integrity", description: "Building trust through transparent practices" },
              { icon: <Rocket className="w-10 h-10" />, title: "Innovation", description: "Embracing cutting-edge technology solutions" },
              { icon: <Tree className="w-10 h-10" />, title: "Sustainability", description: "Creating a greener future for generations" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-dark"
              >
                <div className="mb-4 flex justify-center text-dark">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-primary-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}