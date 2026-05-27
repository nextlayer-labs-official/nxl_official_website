import Contact from '../../components/Contact';

export const metadata = {
  title: 'Contact NextLayer Labs - Get Technology Solutions | Free Consultation',
  description: 'Contact NextLayer Labs for technology solutions. Get free consultation for computer repair, development, training, and technical support services in Bangalore.',
  keywords: 'contact NextLayer Labs, technology consultation, computer repair contact, development services, technical support, Bangalore contact',
  openGraph: {
    title: 'Contact NextLayer Labs - Get Technology Solutions',
    description: 'Contact us for comprehensive technology solutions. Free consultation available for all services.',
    type: 'website',
    url: 'https://nextlayerlabs.com/contact',
  },
  alternates: {
    canonical: 'https://nextlayerlabs.com/contact',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact NextLayer Labs",
      "description": "Contact page for NextLayer Labs technology solutions and services",
      "url": "https://nextlayerlabs.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-6363934148",
          "contactType": "customer service",
          "email": "info@nextlayerlabs.com"
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
