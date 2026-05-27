import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center mb-6 justify-center sm:justify-start">
              <img
                src="/next_logo_1_2 copy copy.svg"
                alt="NextLayer Labs"
                className="h-[50px] sm:h-[50px] w-auto"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base max-w-sm mx-auto sm:mx-0">
              Your trusted technology partner providing comprehensive solutions from e-waste reduction to career building and expert advisory services.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              {/* <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-200">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a> */}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/services/it-infrastructure-security" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block">IT Infrastructure & Security</Link></li>
              <li><Link href="/services/software-web-development" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block">Software & Web Development</Link></li>
              <li><Link href="/services/managed-it-support" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base block">Managed IT & Support</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              {/* <div className="flex items-start space-x-3 justify-center sm:justify-start text-center sm:text-left">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm sm:text-base">
                  <p>Tech Hub, Bangalore</p>
                  <p>Karnataka, India 560001</p>
                </div>
              </div> */}
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base">+91 6363934148</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base break-all">info@nextlayerlabs.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm">
              © {currentYear} NextLayer Labs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
