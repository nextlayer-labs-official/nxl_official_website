import Hero from '../components/Hero';
import BrandsGlider from '../components/BrandsGlider';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustriesSection from '../components/IndustriesSection';

export const metadata = {
  title: 'NextLayer Labs - Complete Technology Solutions Provider | Technical Support, Development & Training',
  description: 'NextLayer Labs offers comprehensive technology services including computer repair, technical support, full-stack development, corporate training, job placement, and stock market advisory. Transform your business with sustainable tech solutions.',
  keywords: 'technology solutions, computer repair, technical support, web development, corporate training, job placement, stock market advisory, e-waste reduction, IT consulting, NextLayer Labs',
  openGraph: {
    title: 'NextLayer Labs - Complete Technology Solutions Provider',
    description: 'Transform your business with comprehensive technology services. From computer repair to full-stack development and corporate training.',
    type: 'website',
    url: 'https://nextlayerlabs.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextLayer Labs - Complete Technology Solutions Provider',
    description: 'Transform your business with comprehensive technology services. From computer repair to full-stack development and corporate training.',
  },
  alternates: {
    canonical: 'https://nextlayerlabs.com',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NextLayer Labs",
      "description": "Complete Technology Solutions Provider offering computer repair, technical support, development, and training services",
      "url": "https://nextlayerlabs.com",
      "logo": "https://nextlayerlabs.com/Group%2040545.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6363934148",
        "contactType": "customer service",
        "email": "info@nextlayerlabs.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/nextlayerlabs",
        "https://twitter.com/nextlayerlabs"
      ]
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
      <FAQSection />
    </>
  );
}
