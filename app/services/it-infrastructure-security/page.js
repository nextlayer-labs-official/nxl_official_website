import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Network,
  Server,
  Lock,
  CheckCircle,
  ArrowRight,
  Phone,
  Wifi,
  HardDrive,
  Eye,
} from 'lucide-react';

export const metadata = {
  title: 'IT Infrastructure & Security Services - NextLayer Labs | Network, Servers & Cybersecurity',
  description:
    'Secure, scalable IT infrastructure for growing businesses in Bangalore: network design, firewall & endpoint security, server management, and backup & disaster recovery planning.',
  keywords:
    'IT infrastructure Bangalore, network security, firewall setup, server management, cybersecurity services, endpoint protection, backup and disaster recovery, NextLayer Labs',
  openGraph: {
    title: 'IT Infrastructure & Security Services - NextLayer Labs',
    description:
      'Secure, scalable IT infrastructure: network design, firewall & endpoint security, server management, and disaster recovery planning.',
    type: 'website',
    url: '/services/it-infrastructure-security',
    images: [
      {
        url: '/it-security-management.jpg',
        width: 800,
        height: 534,
        alt: 'IT infrastructure and security management by NextLayer Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Infrastructure & Security Services - NextLayer Labs',
    description:
      'Secure, scalable IT infrastructure: network design, firewall & endpoint security, server management, and disaster recovery planning.',
  },
  alternates: {
    canonical: '/services/it-infrastructure-security',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "IT Infrastructure & Security",
      "name": "IT Infrastructure & Security Services",
      "description":
        "Network design, firewall and endpoint security, server and infrastructure management, and data backup and disaster recovery services.",
      "provider": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "url": "https://nextlayerlabs.in"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bangalore"
      },
      "url": "https://nextlayerlabs.in/services/it-infrastructure-security"
    }),
  },
};

export default function ITInfrastructureSecurityPage() {
  const services = [
    {
      icon: Network,
      title: "Network Design & Deployment",
      description:
        "Structured network planning, LAN/WAN setup, switching, routing, and wireless infrastructure deployment for reliable business connectivity.",
    },
    {
      icon: Shield,
      title: "Firewall & Endpoint Security",
      description:
        "Implementation of firewalls, endpoint protection, antivirus, and access control policies to secure your organization from cyber threats.",
    },
    {
      icon: Server,
      title: "Server & Infrastructure Management",
      description:
        "Server installation, virtualization, storage management, system maintenance, and infrastructure optimization for business continuity.",
    },
    {
      icon: Lock,
      title: "Data Protection & Backup Solutions",
      description:
        "Secure backup strategies, disaster recovery planning, and data protection solutions to keep critical business information safe.",
    },
  ];

  const solutions = [
    {
      title: "Infrastructure Setup & Modernization",
      description:
        "Build or upgrade your IT environment with scalable, secure, and future-ready infrastructure.",
      features: [
        "Office network setup",
        "Server deployment",
        "Wi-Fi planning",
        "Structured cabling guidance",
      ],
    },
    {
      title: "Cybersecurity Implementation",
      description:
        "Protect systems, users, and data through layered security controls and proactive threat prevention.",
      features: [
        "Firewall configuration",
        "Endpoint protection",
        "Access control policies",
        "Security hardening",
      ],
    },
    {
      title: "Monitoring & Business Continuity",
      description:
        "Keep your infrastructure stable with proactive monitoring, backups, and recovery planning.",
      features: [
        "Infrastructure monitoring",
        "Backup verification",
        "Disaster recovery planning",
        "Performance reporting",
      ],
    },
  ];

  const benefits = [
    "Secure and reliable IT environment",
    "Reduced risk of downtime and cyber threats",
    "Scalable infrastructure for business growth",
    "Improved network performance and stability",
    "Centralized monitoring and management",
    "Business continuity through backup and recovery planning",
  ];

  return (
    <main style={{ paddingTop: '2rem' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-600/20 rounded-full text-brand-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Secure, Scalable & Business-Ready IT
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                IT Infrastructure &{" "}
                <span className="text-brand-400">Security</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Build a strong and secure technology foundation with modern IT
                infrastructure, network solutions, server management, and
                cybersecurity services designed for growing businesses.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Secure Your IT Environment</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/it-security-management.jpg"
                alt="IT infrastructure and security management"
                width={800}
                height={534}
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Our IT Infrastructure &{" "}
              <span className="text-brand-600">Security Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end infrastructure and security solutions to keep your
              business connected, protected, and operational.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              How We Strengthen Your{" "}
              <span className="text-brand-600">IT Foundation</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Practical infrastructure and security solutions tailored to your
              business environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm sm:text-base">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full mt-6 bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors duration-200 text-sm sm:text-base text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Real Infrastructure{" "}
              <span className="text-brand-600">Projects We've Delivered</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              A look at recent infrastructure and security work for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-100">
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">
                Global Laser Solutions
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                Business Email Setup & Website Launch
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                Migrated from managing everything on personal Gmail to a fully
                authenticated business email environment on Zoho Mail (MX, SPF,
                and DKIM records) across 3 mailboxes, alongside a new Next.js
                website.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">3</div>
                  <div className="text-[11px] text-slate-500">Mailboxes</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">SPF + DKIM</div>
                  <div className="text-[11px] text-slate-500">Authenticated</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">Next.js</div>
                  <div className="text-[11px] text-slate-500">Website</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-100">
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">
                SoftPixel Works
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                Production Server Setup for Digital Product Sales
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                Provisioned and configured a production VPS on Ubuntu with
                Nginx/Apache, MariaDB, and PM2, secured with a custom domain
                and Let's Encrypt SSL, to run an automated Telegram-based
                sales channel.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">Ubuntu</div>
                  <div className="text-[11px] text-slate-500">+ Nginx</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">SSL</div>
                  <div className="text-[11px] text-slate-500">Let's Encrypt</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-slate-100">
                  <div className="text-sm font-bold text-slate-800">Telegram</div>
                  <div className="text-[11px] text-slate-500">Bot</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors duration-200"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Backed by{" "}
              <span className="text-brand-600">Trusted Security Vendors</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Our endpoint protection and threat detection recommendations are
              built on official partnerships with leading cybersecurity vendors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                <Image
                  src="/trend-micro.svg"
                  alt="Trend Micro logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Trend Micro</div>
                <div className="text-sm text-slate-600">Security Technology Partner</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                <img
                  src="https://bdsoft.in/wp-content/uploads/2025/11/cropped-Screenshot-2025-11-24-202443.png"
                  alt="BD Software Distribution logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-slate-800">BD Software Distribution</div>
                <div className="text-sm text-slate-600">Official Bitdefender Reseller Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose Our{" "}
                <span className="text-brand-600">
                  Infrastructure & Security Services?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                We help businesses create a strong, secure, and scalable IT
                environment that supports day-to-day operations and future
                growth.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-first lg:order-last px-4 sm:px-0">
              <Image
                src="/it-infrastructure-servers.jpg"
                alt="Secure IT infrastructure servers"
                width={1200}
                height={420}
                className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm sm:text-base">
                      Proactive Protection
                    </div>
                    <div className="text-brand-600 text-xs sm:text-sm">
                      Monitor. Secure. Optimize.
                    </div>
                  </div>
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
            Ready to Strengthen Your IT Infrastructure?
          </h2>
          <p className="text-lg sm:text-xl text-brand-100 mb-8">
            Let’s build a secure, scalable, and reliable technology environment
            for your business.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-50 transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Talk to Our Experts
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base text-center"
            >
              Request a Security Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}