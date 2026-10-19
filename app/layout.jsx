import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { company } from '@/lib/site';
import IntroSplash from '@/components/IntroSplash';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: 'Zynora Technology Private Limited — Digital Engineering & Business Technology',
    template: '%s | Zynora Technology',
  },
  description:
    'Zynora Technology Private Limited engineers websites, mobile applications, e-commerce, ERP, CRM and custom software for businesses across the UAE, India and global markets.',
  keywords: [
    'IT company UAE',
    'software development UAE',
    'ERP development India',
    'CRM development',
    'e-commerce development',
    'mobile app development',
    'custom software Madurai',
    'Zynora Technology',
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    siteName: company.name,
    title: "Zynora Technology — Technology That Builds What's Next.",
    description: company.heroSub,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zynora Technology — Technology That Builds What's Next.",
    description: company.heroSub,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  alternateName: 'Zynora Technology',
  url: company.url,
  slogan: company.tagline,
  description:
    'Digital engineering and business technology partner delivering websites, mobile applications, e-commerce, ERP, CRM and custom software.',
  email: company.email,
  telephone: company.phoneIntl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: 'Madurai',
    postalCode: '625010',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: ['AE', 'IN'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <IntroSplash />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
