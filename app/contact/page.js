import Contact from '../../components/Contact';

export const metadata = {
  title: 'Contact NextLayer Labs - Get Technology Solutions | Free Consultation',
  description: 'Contact NextLayer Labs for technology solutions. Get a free consultation for IT infrastructure, software development, and managed IT support services in Bangalore.',
  keywords: 'contact NextLayer Labs, technology consultation, IT infrastructure contact, development services, managed IT support, Bangalore contact',
  openGraph: {
    title: 'Contact NextLayer Labs - Get Technology Solutions',
    description: 'Contact us for comprehensive technology solutions. Free consultation available for all services.',
    type: 'website',
    url: '/contact',
    images: [
      {
        url: '/it-infrastructure-servers.jpg',
        width: 1200,
        height: 420,
        alt: 'NextLayer Labs IT infrastructure and technology solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NextLayer Labs - Get Technology Solutions',
    description: 'Contact us for comprehensive technology solutions. Free consultation available for all services.',
  },
  alternates: {
    canonical: '/contact',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact NextLayer Labs",
      "description": "Contact page for NextLayer Labs technology solutions and services",
      "url": "https://nextlayerlabs.in/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-6363934148",
          "contactType": "customer service",
          "email": "info@nextlayerlabs.in"
        }
      }
    })
  }
};

export default function ContactPage() {
  return (
    <main className="pt-16 sm:pt-12 lg:pt-14">
      <Contact />
    </main>
  );
}
