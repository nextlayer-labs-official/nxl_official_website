import React from 'react';
import Link from 'next/link';
import { Server, Code, Wrench, GraduationCap, ArrowRight, Palette, Share2, FileText, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Security",
      description: "Secure, scalable, and future-ready IT infrastructure designed for business continuity and operational efficiency.",
      features: ["Network Design & VLAN Segmentation", "Firewall & Endpoint Security", "Hybrid Email Setup", "Server Deployment & Maintenance", "Backup & DR Planning"],
      color: "green",
      link: "/services/it-infrastructure-security"
    },
    {
      icon: Code,
      title: "Software & Web Development",
      description: "Custom-built web applications and business systems designed for performance, scalability, and seamless user experience.",
      features: ["Custom Web Applications", "SaaS Platforms", "E-commerce Solutions", "API Integrations", "UI/UX Design", "Full-Stack Development"],
      color: "orange",
      link: "/services/software-web-development"
    },
    {
      icon: Wrench,
      title: "Managed IT & Support",
      description: "Proactive IT management and support services to ensure uptime, performance, and operational reliability.",
      features: ["AMC Services", "Remote Monitoring", "Helpdesk Support", "IT Asset Management"],
      color: "green",
      link: "/services/managed-it-support"
    }
  ];

  const colorClasses = {
    green: "from-brand-500 to-brand-600",
    orange: "from-brand-600 to-brand-700"
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-brand-600">Technology Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Secure infrastructure, custom software, and reliable managed support - comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors duration-200 group text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Transform Your Technology Future?</h3>
            <p className="text-brand-50 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              From strengthening your infrastructure to building custom software and providing ongoing support - let's create the technology foundation your business needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-brand-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors duration-200 text-sm sm:text-base inline-block"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;