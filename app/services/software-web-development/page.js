'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Smartphone, Globe, Database, Layers, Zap, CheckCircle, ArrowRight, Phone, Filter } from 'lucide-react';

export default function FullStackDevelopmentPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [pricingTab, setPricingTab] = useState('WordPress');

  const services = [
    {
      icon: Globe,
      title: "Business Web Applications",
      description: "Custom web platforms that improve operational efficiency and support business growth."
    },
    {
      icon: Smartphone,
      title: "Enterprise & Internal Systems",
      description: "ERP modules, asset systems, dashboards, and workflow automation tailored to business needs."
    },
    {
      icon: Database,
      title: "E-commerce Platforms",
      description: "Secure, scalable commerce systems with payment, automation, and integration capabilities."
    },
    {
      icon: Layers,
      title: "API & System Integrations",
      description: "Connecting platforms, payment gateways, and cloud systems into one unified ecosystem."
    }
  ];

  const technologies = [
    {
      name: "React",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Modern JavaScript library for building user interfaces"
    },
    {
      name: "Bootstrap",
      category: "CSS Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      description: "Popular CSS framework for responsive design"
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      name: "Node.js",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "JavaScript runtime for server-side development"
    },
    {
      name: "Express.js",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Fast, unopinionated web framework for Node.js"
    },
    {
      name: "PHP",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      description: "Popular server-side scripting language"
    },
    {
      name: "CodeIgniter",
      category: "PHP Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      description: "Lightweight PHP framework with small footprint"
    },
    {
      name: "WordPress",
      category: "CMS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      description: "Popular content management system"
    },
    {
      name: "MySQL",
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Reliable relational database management system"
    },
    {
      name: "MongoDB",
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "Flexible NoSQL document database"
    }
  ];

  // const wordpressPlans = [
  //   {
  //     title: "Starter Website Plan – Tier 1",
  //     price: "₹9,999 – ₹14,999",
  //     tag: "One-time",
  //     description: "Perfect for individuals, startups, and basic business presence.",
  //     features: [
  //       "Up to 5 pages website",
  //       "Responsive design",
  //       "WordPress setup",
  //       "Basic SEO setup",
  //       "Contact form integration",
  //       "Google Maps Integration",
  //       "1 revision round",
  //       "1 Month Free Support"
  //     ],
  //     buttonText: "Get Started",
  //     highlight: false
  //   },
  //   {
  //     title: "Business Website Plan – Tier 2",
  //     price: "₹25,000 – ₹45,000",
  //     tag: "Most Popular",
  //     description: "Ideal for growing businesses needing a strong and professional online presence.",
  //     features: [
  //       "Everything in Starter Plan, plus:",
  //       "Up to 10–15 pages",
  //       "Custom UI design",
  //       "Intermediate SEO setup",
  //       "Speed optimization",
  //       "Google Analytics Setup",
  //       "Google Search Console Setup",
  //       "Security Setup",
  //       "WhatsApp integration",
  //       "2–3 revision rounds",
  //       "1 Month Free Support"
  //     ],
  //     buttonText: "Choose Plan",
  //     highlight: true
  //   },
  //   {
  //     title: "E-commerce / Advanced Plan – Tier 3",
  //     price: "₹45,000 – ₹90,000",
  //     tag: "One-time",
  //     description: "Best for online stores and advanced feature-rich WordPress platforms.",
  //     features: [
  //       "Everything in Business Plan, plus:",
  //       "WooCommerce setup",
  //       "Payment gateway integration",
  //       "Product management system",
  //       "Product Upload (20–50 products)",
  //       "Order management setup",
  //       "Shipping Integration",
  //       "Performance optimization",
  //       "Coupon / Discount Setup",
  //       "3–5 revision rounds",
  //       "1 Month Free Support"
  //     ],
  //     buttonText: "Get Quote",
  //     highlight: false
  //   }
  // ];

  // const customDevelopmentInfo = {
  //   title: "Custom Development Pricing",
  //   subtitle: "Scope-based pricing for tailored software solutions",
  //   description:
  //     "Custom development pricing depends on project scope, number of modules, integrations, user roles, workflows, admin panels, deployment architecture, and ongoing support requirements.",
  //   includes: [
  //     "Business web applications",
  //     "Admin dashboards & portals",
  //     "ERP / CRM / internal systems",
  //     "React / Next.js / Node.js / PHP development",
  //     "API integrations and automation",
  //     "Database architecture and scalable systems"
  //   ],
  //   note: "Every custom solution is priced after requirement analysis and scope discussion.",
  //   buttonText: "Contact Us for Pricing"
  // };

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a comprehensive development roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating user-centric designs and scalable system architecture."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support."
    }
  ];

  const benefits = [
    "End-to-end development expertise",
    "Modern technology stack",
    "Scalable and maintainable code",
    "Agile development methodology",
    "Comprehensive testing and QA",
    "Post-launch support and maintenance"
  ];

  const categories = ['All', ...new Set(technologies.map(tech => tech.category))];

  const filteredTechnologies = activeFilter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <main style={{ paddingTop: '2rem' }}>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-600/20 rounded-full text-brand-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Modern Development Solutions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Software Development <span className="text-brand-400">& Digital Solutions</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We design and build secure, scalable software systems tailored to business operations — from internal platforms to customer-facing digital applications.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/dev-multiple-screens.jpg"
                alt="Full-stack developer working on multiple screens"
                width={800}
                height={534}
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm sm:text-base">Fast Delivery</div>
                    <div className="text-brand-600 text-xs sm:text-sm">Agile Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Development <span className="text-brand-600">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive development services covering all aspects of modern application development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Our Technology <span className="text-brand-600">Stack</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We use modern, proven technologies to build robust and scalable applications.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === category
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-600 border border-slate-200'
                    }`}
                >
                  <Filter className="w-3 h-3 inline mr-1" />
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-0">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden"
                  >
                    {tech.name.charAt(0)}
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-base sm:text-lg">{tech.name}</h3>
                <div className="text-xs sm:text-sm text-brand-600 font-medium mb-2">{tech.category}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <p className="text-slate-600 text-sm">
              Showing {filteredTechnologies.length} of {technologies.length} technologies
              {activeFilter !== 'All' && (
                <span className="ml-2 px-2 py-1 bg-brand-100 text-brand-700 rounded-full text-xs">
                  {activeFilter}
                </span>
              )}
            </p>
          </div> */}
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Development <span className="text-brand-600">Pricing</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transparent pricing for WordPress websites and flexible pricing for custom software development.
            </p>
          </div>

          {/* Tabs */}
          {/* <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-100 p-1 rounded-xl">
              {['WordPress', 'Custom Development'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setPricingTab(tab)}
                  className={`px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 ${pricingTab === tab
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-brand-600'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div> */}

          {/* WordPress Plans */}
          {/* {pricingTab === 'WordPress' && (
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {wordpressPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative ${plan.highlight
                      ? 'border-brand-600 shadow-xl scale-105 bg-white'
                      : 'border-slate-200 bg-slate-50 hover:shadow-lg'
                    }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs px-4 py-1 rounded-full font-semibold">
                      MOST POPULAR
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{plan.description}</p>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-brand-600">{plan.price}</span>
                    <div className="text-sm text-slate-500">{plan.tag}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded-lg font-semibold transition ${plan.highlight
                        ? 'bg-brand-600 text-white hover:bg-brand-700'
                        : 'border border-brand-600 text-brand-600 hover:bg-brand-50'
                      }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          )} */}

          {/* Custom Development */}
          {/* {pricingTab === 'Custom Development' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                    {customDevelopmentInfo.title}
                  </h3>
                  <p className="text-brand-600 font-semibold mb-3">
                    {customDevelopmentInfo.subtitle}
                  </p>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    {customDevelopmentInfo.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {customDevelopmentInfo.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-5 text-center mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-600 mb-2">
                    Contact Us
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">
                    {customDevelopmentInfo.note}
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={scrollToContact}
                    className="bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
                  >
                    {customDevelopmentInfo.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Our Software <span className="text-brand-600">Development Lifecycle</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven development methodology ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose <span className="text-brand-600">NextLayer Labs for Software Development?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                We deliver business-focused architecture — not just code. Our solutions are built for scalability, security, and long-term maintainability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/dev-team-collaboration.jpg"
                alt="Development team collaborating on project"
                width={800}
                height={534}
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-600 mb-1">10+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Develop a Scalable Business Platform?
          </h2>
          <p className="text-lg sm:text-xl text-brand-100 mb-8">
            Let's discuss your project requirements and create a custom development solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-50 transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Start Your Project
            </Link>
            <a
              href="tel:+916363934148"
              className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Call: +91 6363934148
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
