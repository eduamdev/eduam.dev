import type { Metadata } from 'next';
import '@/styles/globals.css';
import { fontSans } from '@/lib/fonts';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: '1200',
        height: '630',
        alt: siteConfig.ogImage.altText,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.username}`,
    images: {
      url: siteConfig.ogImage.url,
      alt: siteConfig.ogImage.altText,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen font-sans', fontSans.variable)}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <WrapBalancerProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </WrapBalancerProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
