import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import '@/styles/globals.css';

import cn from '@/lib/helper';

import { Navbar } from '@/components/nav';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: 'Dian Ananda',
    template: '%s | Dian Ananda',
  },
  description: 'Developer from indonesian.',
  openGraph: {
    title: 'Dian Ananda',
    description: 'Developer from indonesian.',
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: 'Dian Ananda',
    locale: 'id-ID',
    type: 'website',
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
  twitter: {
    title: 'Dian Ananda',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <GoogleAnalytics gaId='G-TDZGFZ0P0X' />
          <GoogleTagManager gtmId='GTM-KVTSTZ8S' />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
