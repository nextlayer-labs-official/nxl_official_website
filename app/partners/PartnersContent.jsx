'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  Globe,
  Users,
  CheckCircle,
  Filter,
  Cloud,
  Lock,
  BarChart3,
  Brain,
  GraduationCap,
  BookOpen,
  Headphones,
  Wrench
} from 'lucide-react';

export default function PartnersContent() {
  const [activeFilter, setActiveFilter] = useState('All');

  const partners = [
    {
      name: "Razorpay",
      logo: "https://ps.w.org/woo-razorpay/assets/icon-256x256.png?rev=2257034",
      description: "Secure payment solutions for businesses, enabling online payments, subscriptions, and e-commerce transactions.",
      specialization: "Payment Gateway Integration",
      partnership: "Technology Partner",
      category: "FinTech"
    },
    {
      name: "Mailchimp",
      logo: "https://img.jsdelivr.com/github.com/mailchimp.png",
      description: "Email marketing and customer engagement platform for campaigns, automation, and audience management.",
      specialization: "Email Campaign Automation",
      partnership: "Mailchimp & Co Member",
      category: "Marketing"
    },
    {
      name: "BD Software Distribution",
      logo: "https://bdsoft.in/wp-content/uploads/2025/11/cropped-Screenshot-2025-11-24-202443.png",
      description: "India's leading IT security distributor and official Bitdefender Country Partner, delivering cybersecurity solutions for SMBs and enterprises.",
      specialization: "IT Security Distribution & Endpoint Protection",
      partnership: "Reseller Partner",
      category: "Security"
    },
    {
      name: "Trend Micro",
      logo: "/trend-micro.svg",
      description: "Global leader in cybersecurity solutions providing endpoint protection, threat detection, and network security for businesses of all sizes.",
      specialization: "Endpoint Security & Threat Protection",
      partnership: "Security Technology Partner",
      category: "Security"
    }
  ];

  const partnerBenefits = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "All our partners undergo rigorous vetting to ensure they meet our quality standards"
    },
    {
      icon: Zap,
      title: "Integrated Solutions",
      description: "Seamless integration between services for comprehensive technology coverage"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Partnerships with award-winning companies in their respective domains"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international resources and cutting-edge technologies"
    }
  ];

  const categoryIcons = {
    'FinTech': Shield,
    'Marketing': Zap,
    'Cloud': Cloud,
    'Security': Lock,
    'Analytics': BarChart3,
    'AI & ML': Brain,
    'Education': GraduationCap,
    'Training': BookOpen,
    'Support': Headphones
  };

  const categoryColors = {
    'FinTech': 'bg-sky-100 text-sky-700',
    'Marketing': 'bg-pink-100 text-pink-700',
    'Cloud': 'bg-sky-100 text-sky-700',
    'Security': 'bg-red-100 text-red-700',
    'Analytics': 'bg-emerald-100 text-emerald-700',
    'AI & ML': 'bg-amber-100 text-amber-700',
    'Education': 'bg-blue-100 text-blue-700',
    'Training': 'bg-teal-100 text-teal-700',
    'Support': 'bg-slate-100 text-slate-700'
  };

  const categories = ['All', ...new Set(partners.map(partner => partner.category))];

  const filteredPartners = activeFilter === 'All'
    ? partners
    : partners.filter(partner => partner.category === activeFilter);

  const PartnerCard = ({ partner, index }) => {
    const CategoryIcon = categoryIcons[partner.category] || Wrench;

    return (
      <div
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fadeIn"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg items-center justify-center text-white font-bold text-lg hidden"
              >
                {partner.name.charAt(0)}
              </div>
            </div>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[partner.category]}`}>
              <CategoryIcon className="w-3 h-3 mr-1" />
              {partner.category}
            </span>
          </div>

          <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-3">
            {partner.partnership}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors duration-200">
            {partner.name}
          </h3>

          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
            {partner.description}
          </p>

          <div className="flex items-center text-brand-600 text-sm font-medium pt-3 border-t border-slate-100">
            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{partner.specialization}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="pt-16 sm:pt-12 lg:pt-14">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brand-600/20 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4 mr-2" />
              Strategic Partnerships
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">Partners</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              We collaborate with industry-leading organizations to deliver comprehensive technology solutions. Our partnerships ensure you receive the best expertise, tools, and support for your business needs.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our partnerships are built on trust, expertise, and a shared commitment to excellence
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-brand-50 transition-colors duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-100 rounded-full mb-4">
                      <Icon className="w-7 h-7 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Our Partner <span className="text-brand-600">Network</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
                Industry-leading organizations powering our comprehensive solutions
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
                {categories.map((category) => {
                  const CategoryIcon = category === 'All' ? Filter : (categoryIcons[category] || Filter);
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                        activeFilter === category
                          ? 'bg-brand-600 text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-600 border border-slate-200'
                      }`}
                    >
                      <CategoryIcon className="w-3.5 h-3.5" />
                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-slate-500 text-sm">
                Showing {filteredPartners.length} of {partners.length} partners
                {activeFilter !== 'All' && (
                  <span className="ml-2 px-2 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium">
                    {activeFilter}
                  </span>
                )}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" key={activeFilter}>
              {filteredPartners.map((partner, index) => (
                <PartnerCard key={partner.name} partner={partner} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-brand-900 to-brand-800">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Leverage Our Partner Network</h2>
            <p className="text-lg text-brand-100 mb-8">
              Our network of industry-leading partners ensures you get access to the best technologies and expertise for your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-brand-900 px-8 py-4 rounded-lg font-semibold hover:bg-brand-50 transition-all duration-200 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>

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
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
