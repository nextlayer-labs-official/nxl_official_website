import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Clock, Shield, Headphones, Server, Wifi, Monitor, Settings, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'Managed IT & Support Services - NextLayer Labs | 24/7 Monitoring & Helpdesk',
  description:
    'Proactive managed IT services in Bangalore: 24/7 infrastructure monitoring, helpdesk support, AMC services, and IT asset management to keep your business running smoothly.',
  keywords:
    'managed IT services Bangalore, AMC services, IT helpdesk support, remote monitoring, IT asset management, 24/7 IT support, NextLayer Labs',
  openGraph: {
    title: 'Managed IT & Support Services - NextLayer Labs',
    description:
      'Proactive managed IT services: 24/7 infrastructure monitoring, helpdesk support, AMC services, and IT asset management.',
    type: 'website',
    url: '/services/managed-it-support',
    images: [
      {
        url: '/support-specialist-server.jpg',
        width: 800,
        height: 534,
        alt: 'NextLayer Labs technical support specialist working on server',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT & Support Services - NextLayer Labs',
    description:
      'Proactive managed IT services: 24/7 infrastructure monitoring, helpdesk support, AMC services, and IT asset management.',
  },
  alternates: {
    canonical: '/services/managed-it-support',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Managed IT & Support",
      "name": "Managed IT & Support Services",
      "description":
        "Proactive IT management and support services including infrastructure monitoring, helpdesk support, AMC services, and IT asset management.",
      "provider": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "url": "https://nextlayerlabs.in"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bangalore"
      },
      "url": "https://nextlayerlabs.in/services/managed-it-support"
    }),
  },
};

export default function TechnicalSupportPage() {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Monitoring & Maintenance",
      description: "Complete server setup, maintenance, and monitoring for optimal performance."
    },
    {
      icon: Wifi,
      title: "Network & Security Management",
      description: "Network configuration, troubleshooting, and security implementation."
    },
    {
      icon: Monitor,
      title: "Endpoint & Patch Management",
      description: "Continuous endpoint monitoring, security patching, and system updates to maintain stability and protection."
    },
    {
      icon: Settings,
      title: "System Performance Optimization",
      description: "Performance tuning and optimization for maximum system efficiency."
    }
  ];

  const supportTypes = [
    {
      title: "24/7 Critical Response Coverage",
      description: "Round-the-clock technical assistance for critical business operations",
      features: ["Immediate response", "Critical issue resolution", "Emergency hotline", "Priority handling"]
    },
    {
      title: "Proactive IT Management",
      description: "Proactive system maintenance to prevent issues before they occur",
      features: ["Regular health checks", "Performance monitoring", "Security updates", "Backup verification"]
    },
    {
      title: "On-Site & Strategic IT Support",
      description: "Professional technicians available for on-location technical assistance",
      features: ["Hardware installation", "Network setup", "Training sessions", "System deployment"]
    }
  ];

  const benefits = [
    "Minimize downtime and business disruption",
    "Expert technicians with industry certifications",
    "Comprehensive documentation and reporting",
    "Scalable support plans for growing businesses",
    "Flexible IT management model aligned with business growth.",
    "Latest tools and diagnostic equipment"
  ];

  return (
    <main style={{ paddingTop: '2rem' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-700/20 rounded-full text-brand-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                24/7 Professional Support
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Managed IT Services <span className="text-brand-600">& Ongoing Support</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Proactive IT management, infrastructure monitoring, and long-term technology support designed to keep your business secure, stable, and continuously optimized.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-brand-700 hover:bg-brand-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Get Support Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/support-specialist-server.jpg"
                alt="Technical support specialist working on server"
                width={800}
                height={534}
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-brand-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm sm:text-base">24/7 Available</div>
                    <div className="text-brand-700 text-xs sm:text-sm">Always Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              What’s Included in <span className="text-brand-700">Our Managed IT Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technical support solutions to keep your business technology running at peak performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Managed <span className="text-brand-700">IT Engagement Models</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right support plan that fits your business needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {supportTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">{type.title}</h3>
                <p className="text-slate-600 mb-6 text-sm sm:text-base">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-700 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full mt-6 bg-brand-700 text-white py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose <span className="text-brand-700">NextLayer Labs for Managed IT?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                Our experienced technical support team provides reliable, efficient, and cost-effective solutions for all your IT needs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5 text-brand-700 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/support-team-monitoring.jpg"
                alt="Technical support team monitoring systems"
                width={800}
                height={534}
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-700 mb-1">99.9%</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Partner With a Reliable Managed IT Provider
          </h2>
          <p className="text-lg sm:text-xl text-brand-100 mb-8">
            Ensure your systems remain secure, monitored, and optimized.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-50 transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Get In Touch With Us
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Discuss Support Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
