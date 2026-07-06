import PartnersContent from './PartnersContent';

export const metadata = {
  title: 'Our Partners - NextLayer Labs | Technology & Security Partnerships',
  description:
    'NextLayer Labs partners with Razorpay, Mailchimp, BD Software Distribution, and Trend Micro to deliver integrated payment, marketing, and cybersecurity solutions for businesses in Bangalore.',
  keywords:
    'NextLayer Labs partners, Razorpay partner, Trend Micro partner, Mailchimp partner, technology partnerships, cybersecurity partner Bangalore',
  openGraph: {
    title: 'Our Partners - NextLayer Labs',
    description:
      'We partner with industry-leading organizations in payments, marketing, and cybersecurity to deliver comprehensive technology solutions.',
    type: 'website',
    url: '/partners',
    images: [
      {
        url: '/it-security-management.jpg',
        width: 800,
        height: 534,
        alt: 'NextLayer Labs technology and security partnerships',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners - NextLayer Labs',
    description:
      'We partner with industry-leading organizations in payments, marketing, and cybersecurity to deliver comprehensive technology solutions.',
  },
  alternates: {
    canonical: '/partners',
  },
};

export default function PartnersPage() {
  return <PartnersContent />;
}
