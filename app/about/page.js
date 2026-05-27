import About from '../../components/About';

export const metadata = {
  title: 'About NextLayer Labs - Technology Solutions Provider | Our Story & Team',
  description: 'Learn about NextLayer Labs - from reducing e-waste to building careers. Meet our expert team and discover our mission to create positive change through technology solutions.',
  keywords: 'about NextLayer Labs, technology company, e-waste reduction, team, mission, vision, Bangalore tech company, sustainable technology',
  openGraph: {
    title: 'About NextLayer Labs - Technology Solutions Provider',
    description: 'Learn about our mission to reduce e-waste and build careers through comprehensive technology solutions.',
    type: 'website',
    url: 'https://nextlayerlabs.com/about',
  },
  alternates: {
    canonical: 'https://nextlayerlabs.com/about',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NextLayer Labs",
      "description": "Learn about NextLayer Labs - our mission, vision, and team dedicated to sustainable technology solutions",
      "url": "https://nextlayerlabs.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "foundingDate": "2019",
        "description": "Technology solutions provider focused on e-waste reduction and career development"
      }
    })
  }
};

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-12 lg:pt-14">
      <About />
    </main>
  );
}
