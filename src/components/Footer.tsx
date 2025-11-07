import Link from 'next/link';
import { GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
  return (
  <footer className="bg-black text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gradient font-heading mb-4">
              ROCXION GROUP
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Empowering South Africa through Smart Energy Solutions. Leading provider of comprehensive solar energy services including design, installation, and maintenance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-gradient font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-neutral-300 hover:text-primary-400 transition-colors">Projects</Link></li>
              <li><Link href="/gallery" className="text-neutral-300 hover:text-primary-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-gradient font-semibold mb-4 font-heading">Contact Info</h3>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start">
                <GeoAlt className="w-4 h-4 mr-2 mt-1 text-primary-400" />
                <span>22 Dende Street<br />Nellmapius, Pretoria</span>
              </div>
              <div className="flex items-center">
                <Telephone className="w-4 h-4 mr-2 text-primary-400" />
                <Link href="tel:0833138754" className="hover:text-primary-400 transition-colors">
                  083 313 8754
                </Link>
              </div>
              <div className="flex items-center">
                <Envelope className="w-4 h-4 mr-2 text-primary-400" />
                <Link href="mailto:rramokolo@gmail.com" className="hover:text-primary-400 transition-colors">
                  rramokolo@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Rocxion Group. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-neutral-400 text-sm">ECB Accredited</span>
              <span className="text-neutral-400 text-sm">•</span>
              <span className="text-neutral-400 text-sm">CIDB Registered</span>
              <span className="text-neutral-400 text-sm">•</span>
              <span className="text-neutral-400 text-sm">DoL Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;