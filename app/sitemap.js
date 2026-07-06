const baseUrl = 'https://nextlayerlabs.in';

const routes = [
  '',
  '/about',
  '/contact',
  '/partners',
  '/case-studies',
  '/services/it-infrastructure-security',
  '/services/software-web-development',
  '/services/managed-it-support',
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
  }));
}
