import About from '../../components/About';

export const metadata = {
  title: 'About NextLayer Labs - Technology Solutions Provider | Our Story & Team',
  description: 'Learn about NextLayer Labs - our mission, vision, and team dedicated to secure, scalable technology solutions. Discover how we help businesses build reliable IT infrastructure and software.',
  keywords: 'about NextLayer Labs, technology company, team, mission, vision, Bangalore tech company, IT consulting',
  openGraph: {
    title: 'About NextLayer Labs - Technology Solutions Provider',
    description: 'Learn about our mission to help businesses build secure, scalable technology through infrastructure, development, and managed IT support.',
    type: 'website',
    url: '/about',
    images: [
      {
        url: '/about-workspace.jpg',
        width: 800,
        height: 533,
        alt: 'NextLayer Labs team in a modern technology workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NextLayer Labs - Technology Solutions Provider',
    description: 'Learn about our mission to help businesses build secure, scalable technology through infrastructure, development, and managed IT support.',
  },
  alternates: {
    canonical: '/about',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NextLayer Labs",
      "description": "Learn about NextLayer Labs - our mission, vision, and team dedicated to secure, scalable technology solutions",
      "url": "https://nextlayerlabs.in/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "NextLayer Labs",
        "foundingDate": "2019",
        "description": "Technology solutions provider focused on IT infrastructure, software development, and managed IT support"
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
