import type { Metadata, Viewport } from 'next';
import '@/app/styles/globals.css';
import { fontSans } from '@/lib/fonts';
import { ThemeProvider } from '@/app/components/theme-provider';
import { Analytics } from '@/app/components/analytics';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl('/')),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.name}`,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
  manifest: siteConfig.manifest,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <WrapBalancerProvider>{children}</WrapBalancerProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
