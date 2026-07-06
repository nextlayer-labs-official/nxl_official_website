import SoftwareWebDevelopmentContent from './SoftwareWebDevelopmentContent';

export const metadata = {
  title: 'Software & Web Development Services - NextLayer Labs | Full-Stack Development',
  description:
    'Custom full-stack web development in Bangalore: business web applications, enterprise systems, e-commerce platforms, and API integrations built on React, Node.js, and modern frameworks.',
  keywords:
    'full-stack development Bangalore, web development services, custom software development, e-commerce development, API integration, React development, Node.js development, NextLayer Labs',
  openGraph: {
    title: 'Software & Web Development Services - NextLayer Labs',
    description:
      'Custom full-stack web development: business web applications, enterprise systems, e-commerce platforms, and API integrations.',
    type: 'website',
    url: '/services/software-web-development',
    images: [
      {
        url: '/dev-multiple-screens.jpg',
        width: 800,
        height: 534,
        alt: 'Full-stack developer working on multiple screens at NextLayer Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software & Web Development Services - NextLayer Labs',
    description:
      'Custom full-stack web development: business web applications, enterprise systems, e-commerce platforms, and API integrations.',
  },
  alternates: {
    canonical: '/services/software-web-development',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Software & Web Development",
      "name": "Software & Web Development Services",
      "description":
        "Custom business web applications, enterprise and internal systems, e-commerce platforms, and API and system integrations.",
      "provider": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "url": "https://nextlayerlabs.in"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bangalore"
      },
      "url": "https://nextlayerlabs.in/services/software-web-development"
    }),
  },
};

export default function SoftwareWebDevelopmentPage() {
  return <SoftwareWebDevelopmentContent />;
}
