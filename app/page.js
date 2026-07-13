import Hero from '../components/Hero';
import BrandsGlider from '../components/BrandsGlider';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ConnectSection from '../components/ConnectSection';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesSection from '../components/IndustriesSection';

export const metadata = {
  title: 'NextLayer Labs - Complete IT Services Provider | Infrastructure, Development & Managed Support',
  description: 'NextLayer Labs delivers secure IT infrastructure, full-stack software development, and managed IT support for growing businesses. From network security and server management to custom web applications and 24/7 technical support, we help you build technology that scales.',
  keywords: 'IT services Bangalore, IT infrastructure security, network security, cybersecurity, full-stack development, web development, managed IT support, IT consulting Bangalore, NextLayer Labs',
  openGraph: {
    title: 'NextLayer Labs - Complete IT Services Provider',
    description: 'Secure IT infrastructure, full-stack development, and managed IT support for growing businesses.',
    type: 'website',
    url: '/',
    siteName: 'NextLayer Labs',
    locale: 'en_IN',
    images: [
      {
        url: '/it-infrastructure-servers.jpg',
        width: 1200,
        height: 420,
        alt: 'NextLayer Labs - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextLayer Labs - Complete IT Services Provider',
    description: 'Secure IT infrastructure, full-stack development, and managed IT support for growing businesses.',
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NextLayer Labs",
      "description": "IT consulting and technology solutions provider offering infrastructure & security, software & web development, and managed IT support services",
      "url": "https://nextlayerlabs.in",
      "logo": "https://nextlayerlabs.in/logo_secondary.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6363934148",
        "contactType": "customer service",
        "email": "info@nextlayerlabs.in"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/nextlayer-labs"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Infrastructure & Security",
              "url": "https://nextlayerlabs.in/services/it-infrastructure-security"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software & Web Development",
              "url": "https://nextlayerlabs.in/services/software-web-development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Managed IT & Support",
              "url": "https://nextlayerlabs.in/services/managed-it-support"
            }
          }
        ]
      }
    }),
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsGlider />
      <Services />
      <AboutSection />
      <WhyChooseUs />
      <IndustriesSection />
      <HowWeWork />
      <Testimonials />
      <ConnectSection />
    </>
  );
}
