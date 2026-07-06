import CaseStudies from '../../components/CaseStudies';

export const metadata = {
  title: 'Case Studies - NextLayer Labs Success Stories | Technology Solutions Portfolio',
  description: "Explore NextLayer Labs case studies and success stories. See how we've helped businesses achieve digital transformation through our technology solutions and services.",
  keywords: 'case studies, success stories, technology solutions, digital transformation, client projects, NextLayer Labs portfolio, business results',
  openGraph: {
    title: 'Case Studies - NextLayer Labs Success Stories',
    description: 'Explore our case studies and success stories showcasing digital transformation and technology solutions.',
    type: 'website',
    url: 'https://nextlayerlabs.in/case-studies',
  },
  alternates: {
    canonical: 'https://nextlayerlabs.in/case-studies',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "NextLayer Labs Case Studies",
      "description": "Collection of case studies and success stories from NextLayer Labs technology solutions",
      "url": "https://nextlayerlabs.in/case-studies"
    })
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-12 sm:pt-12 lg:pt-14">
      <CaseStudies />
    </main>
  );
}
