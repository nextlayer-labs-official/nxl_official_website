'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown, Wrench, Server, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const services = [
    {
      name: 'IT Infrastructure & Security',
      description: 'Hardware & software solutions',
      path: '/services/it-infrastructure-security',
      icon: Server
    },
    {
      name: 'Software & Web Development',
      description: '24/7 expert assistance',
      path: '/services/software-web-development',
      icon: Code
    },
    {
      name: 'Managed IT & Support',
      description: 'Complete web solutions',
      path: '/services/managed-it-support',
      icon: Wrench
    }
  ];

  const isHomePage = pathname === '/';

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center z-50 relative">

          {
            (isScrolled || !isHomePage) ? (
              <img
                src="/logo_secondary.svg"
                alt="NextLayer Labs"
                className="h-[50px] sm:h-[50px] w-auto"
              />
            ) : (
              <img
                src="/next_logo_1_2 copy copy.svg"
                alt="NextLayer Labs"
                className="h-[50px] sm:h-[50px] w-auto"
              />
             )
          }
          </Link>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/10 ${
                (isScrolled || !isHomePage)
                  ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`font-medium transition-colors duration-300 text-sm xl:text-base flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-white/10 ${
                  (isScrolled || !isHomePage)
                    ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden transition-all duration-200 transform origin-top ${
                isServicesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        href={service.path}
                        className="group flex items-center px-4 py-3 hover:bg-slate-50 transition-colors duration-150"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="flex-shrink-0 w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors duration-150">
                          <Icon className="w-full h-full" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors duration-150">
                            {service.name}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`font-medium transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/10 ${
                (isScrolled || !isHomePage)
                  ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/partners"
              className={`font-medium transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/10 ${
                (isScrolled || !isHomePage)
                  ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Partners
            </Link>
            <Link
              href="/case-studies"
              className={`font-medium transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/10 ${
                (isScrolled || !isHomePage)
                  ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 text-sm xl:text-base px-3 py-2 rounded-lg hover:bg-white/10 ${
                (isScrolled || !isHomePage)
                  ? 'text-slate-700 hover:text-brand-500 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 z-50 relative ${
              (isScrolled || !isHomePage)
                ? 'hover:bg-slate-100'
                : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                (isScrolled || !isHomePage) ? 'text-slate-700' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                (isScrolled || !isHomePage) ? 'text-slate-700' : 'text-white'
              }`} />
            )}
          </button>
        </div>
      </div>
    </header>

      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <img
              src="/logo_secondary.svg"
              alt="NextLayer Labs"
              className="h-[45px] w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          <nav className="py-4">
            <Link
              href="/"
              className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-500 transition-colors duration-200 text-base font-medium border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="border-b border-slate-100">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-500 transition-colors duration-200 font-medium text-base"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isMobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-slate-50/30 py-1">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={index}
                        href={service.path}
                        className="flex items-center px-8 py-2.5 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors duration-150"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        <div className="flex-shrink-0 w-4 h-4 text-slate-400">
                          <Icon className="w-full h-full" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="text-sm font-medium">{service.name}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-500 transition-colors duration-200 text-base font-medium border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/partners"
              className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-500 transition-colors duration-200 text-base font-medium border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/case-studies"
              className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-500 transition-colors duration-200 text-base font-medium border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors duration-200 text-base font-medium border-b border-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
