'use client';

import Image from 'next/image';
import { Mail, Phone, CheckCircle, ArrowRight, Shield, Server, Network } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 6363934148",
      secondary: "Mon-Sat 9:00AM-5:30PM IST",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@nextlayerlabs.in",
      secondary: "We'll respond within 24 hours",
      color: "blue"
    },
  ];

  const benefits = [
    "Free technical consultation",
    "Customized solutions for your needs",
    "24/7 technical support available",
    "Certified professionals and trainers"
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Secure IT Solutions",
      description: "Protect your business with modern infrastructure and security-first implementation."
    },
    {
      icon: Server,
      title: "Reliable Infrastructure",
      description: "Scalable systems, servers, and business-ready IT environments built for growth."
    },
    {
      icon: Network,
      title: "End-to-End Support",
      description: "From consulting to deployment and support, we help you at every stage."
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Let's Build Your <span className="text-brand-600">Technology Future</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Get in touch with our experts for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h3>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  green: "bg-brand-100 text-brand-600",
                  blue: "bg-blue-100 text-blue-600",
                  purple: "bg-purple-100 text-purple-600"
                };

                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300 hover:border-brand-300"
                  >
                    <div className={`w-12 h-12 ${colorClasses[method.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 mb-1 text-base">
                        {method.title}
                      </h4>
                      <p className="text-slate-700 font-medium text-base break-words">
                        {method.primary}
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        {method.secondary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-brand-50 via-brand-50 to-brand-50 rounded-xl p-6 border border-brand-100">
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 text-center lg:text-left">
                Why Choose NextLayer Labs?
              </h4>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Image / Info Section */}
          <div>
            <div className="bg-slate-50 rounded-xl overflow-hidden h-full border border-slate-200 shadow-sm">
              <div className="relative">
                <Image
                  src="/it-infrastructure-servers.jpg"
                  alt="IT infrastructure and technology solutions"
                  width={1200}
                  height={420}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                    Technology Solutions That Help You Scale
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base max-w-xl">
                    We deliver practical, reliable, and business-focused IT services for modern organizations.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-5">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-brand-600" />
                        </div>
                        <div>
                          <h4 className="text-slate-800 font-semibold text-base sm:text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5">
                  <h4 className="text-slate-800 font-bold text-lg mb-2">
                    Need a quick consultation?
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base mb-4">
                    Reach out by phone or email and our team will help you identify the right solution for your business.
                  </p>

                  <a
                    href="mailto:info@nextlayerlabs.in"
                    className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors duration-200"
                  >
                    Contact Our Team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;