import { Metadata } from 'next';

const siteUrl = 'https://sun-parlour-boat-club.vercel.app';
const siteName = 'Sun Parlour Boat Club';
const siteDescription = 'The friendliest club on the lake. A premier power boating organization serving Southwest Ontario since the 1960s.';

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url,
      siteName,
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const defaultMetadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    'boat club',
    'yacht club',
    'boating',
    'Lake Erie',
    'Lake St. Clair',
    'Detroit River',
    'Ontario',
    'LaSalle',
    'I-LYA',
    'AYC',
    'IOBG',
    'power boating',
    'cruising',
    'reciprocal docking',
  ],
  authors: [{ name: 'Sun Parlour Boat Club' }],
  creator: 'Sun Parlour Boat Club',
  publisher: 'Sun Parlour Boat Club',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};
