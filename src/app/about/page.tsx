'use client';

import HeroSection from '@/components/HeroSection';
import { SunIcon, CheckBadgeIcon, HandThumbUpIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <HeroSection
        title="About Rocxion Group"
        subtitle="Our Story"
        description="Founded with a vision to transform South Africa's renewable energy landscape, Rocxion Group combines technical expertise with innovative solutions to deliver exceptional renewable solar energy and electrical services. Our accredited team ensures every project meets the highest standards of quality and compliance."
        ctaText="Get in Touch"
        ctaLink="/#contact"
        showLearnMore={false}
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>
            
            <div
              className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 flex items-center justify-center overflow-hidden relative h-96 lg:h-[500px]"
            >
              <Image
                src="/images/hero/d43e05127412991.61416e174dba4.jpg"
                alt="Solar Energy Installation"
                fill
                className="object-cover rounded-2xl"
              />
              {/* Fallback gradient overlay in case image doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-primary-200/50 rounded-2xl" />
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <SunIcon className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Clean Energy</h3>
                <p className="text-white drop-shadow-lg">Sustainable solutions for a better tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Leadership
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Meet the expert behind Rocxion Group's success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Gradient Header with Profile */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-t-3xl p-8 md:p-12 border border-neutral-200">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Profile Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-white order-1">
                  <Image
                    src="https://rocxion.co.za//images/about/rocky_director.jpg"
                    alt="Rocky Ramokolo"
                    width={300}
                    height={300}
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex flex-col items-center md:items-start order-2 w-full">
                  <h3 className="text-2xl md:text-4xl font-bold text-secondary-900 mb-2 order-2">
                    Rocky Ramokolo
                  </h3>
                  <p className="text-base md:text-lg text-secondary-700 font-medium order-3">
                    Director & Lead Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Content Card Below */}
            <div className="bg-white rounded-b-3xl p-8 md:p-10 relative z-10 border border-neutral-200 border-t-0">
              <p className="text-secondary-600 mb-10 leading-relaxed text-center text-lg">
                With extensive experience in electrical engineering and renewable energy systems, 
                Rocky leads Rocxion Group with a commitment to excellence and innovation. His technical 
                expertise and vision have positioned the company as a leader in South Africa's solar energy sector.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-secondary-800 mb-3 text-sm uppercase tracking-wide">Qualifications</h4>
                  <ul className="text-secondary-600 text-sm space-y-2">
                    <li>• Electrical Engineering Diploma</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-secondary-800 mb-3 text-sm uppercase tracking-wide">Experience</h4>
                  <ul className="text-secondary-600 text-sm space-y-2">
                    <li>• 10+ Years in Solar Industry</li>
                    <li>• 50+ Successful Projects</li>
                    <li>• ECB Accredited Professional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Accreditations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-6 font-heading">
              Compliance & Accreditations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Certified and compliant with relevant South African regulations and standards
            </p>
          </div>

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
              paragraph: 'Construction Industry Development Board certified',
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
              <div
                key={section.heading}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6 font-heading">
              Our Values
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckBadgeIcon className="w-10 h-10" />, title: "Excellence", description: "Delivering superior quality in every project" },
              { icon: <HandThumbUpIcon className="w-10 h-10" />, title: "Integrity", description: "Building trust through transparent practices" },
              { icon: <RocketLaunchIcon className="w-10 h-10" />, title: "Innovation", description: "Embracing cutting-edge technology solutions" },
              { icon: <SparklesIcon className="w-10 h-10" />, title: "Sustainability", description: "Creating a greener future for generations" }
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center text-dark"
              >
                <div className="mb-4 flex justify-center text-dark">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-primary-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}