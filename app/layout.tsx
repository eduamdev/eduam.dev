import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import eduamdev from '@/assets/images/eduamdev.png';
import '@/styles/globals.css';
import { fontSans } from '@/lib/fonts';
import { Analytics } from '@/components/analytics';
import { SpeedInsights } from '@/components/speed-insights';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';
import { SocialLink } from '@/components/social-link';
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandX,
} from '@tabler/icons-react';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.username}`,
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
  verification: {
    google: 'u-DKEQw5lL_POLqhzuyzDWL6WPABLrBoEf3Vyk1JTWA',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <head />
      <body>
        <Header />
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <div className="flex items-center justify-center pb-14 pt-6">
          <footer>
            <p className="max-w-[var(--content-width)] px-5 text-center text-sm text-neutral-500 md:px-9">
              Copyright <span aria-hidden="true">©</span>{' '}
              {new Date().getFullYear()} eduam.dev. All rights reserved.
            </p>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

function Header() {
  const {
    name,
    username,
    links: { xcom, github, bluesky },
  } = siteConfig;

  return (
    <div className="z-60 after:shadow-2xs sticky top-0 flex min-h-[var(--header-height)] w-full max-w-full justify-center bg-neutral-50 after:absolute after:inset-0 after:top-0 after:-z-10 after:h-[var(--header-height)] after:shadow-neutral-900/10 after:content-['']">
      <header className="flex w-[var(--content-width)] items-center justify-between gap-6 px-5 md:px-9">
        <div className="flex items-center gap-x-3">
          <Image
            src={eduamdev}
            alt={`${name} Avatar`}
            width={36}
            height={36}
            priority
            className="aspect-square size-9 rounded-full"
          />
          <div className="flex flex-col items-stretch gap-y-1.5">
            <span className="text-sm font-medium leading-none text-black">
              {name}
            </span>
            <span className="text-xs leading-none tracking-wide text-neutral-600">
              @{username}
            </span>
          </div>
        </div>
        <nav
          aria-label="Social Links"
          className="hidden items-center justify-center gap-x-2 sm:flex"
        >
          <SocialLink href={github.url} ariaLabel="Visit GitHub profile">
            <IconBrandGithub />
          </SocialLink>
          <SocialLink href={xcom.url} ariaLabel="Visit Twitter profile">
            <IconBrandX />
          </SocialLink>
          <SocialLink href={bluesky.url} ariaLabel="Visit Bluesky profile">
            <IconBrandBluesky />
          </SocialLink>
        </nav>
      </header>
    </div>
  );
}
