import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | South Glass',
  description: 'Download South Glass brochures and resources for our premium glass products, services, and capabilities. Access corporate brochures and product catalogs.',
  openGraph: {
    title: 'Resources | South Glass',
    description: 'Download South Glass brochures and resources for our premium glass products, services, and capabilities.',
    url: 'https://southglass.com/resources',
    siteName: 'South Glass',
    images: [
      {
        url: '/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'South Glass Resources',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | South Glass',
    description: 'Download South Glass brochures and resources for our premium glass products, services, and capabilities.',
    images: ['/og-resources.jpg'],
  },
  alternates: {
    canonical: 'https://southglass.com/resources',
  },
};

export default metadata; 