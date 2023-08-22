import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Text } from '@/components/text';

const socialIcons: any = {
  github: <Icons.github className="h-[16.5px] w-auto lg:h-[17.5px]" />,
  linkedin: <Icons.linkedin className="h-[21px] w-auto lg:h-[22.5px]" />,
  x: <Icons.x className="h-3.5 w-auto lg:h-4" />,
};

export function SiteFooter() {
  return (
    <footer className="mx-auto mb-24 mt-5 w-full max-w-6xl px-6">
      <div className="mb-14 w-full rounded-md border border-black/[0.1] p-5 dark:border-white/[0.15] lg:p-8">
        <div className="grid grid-cols-1 items-start justify-between gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Text
              balanced
              align="left"
              className="text-[22px] font-[575] leading-10 md:text-[26px] md:leading-[48px]"
            >
              Have a project in mind? Contact me.
            </Text>
            <Text
              balanced
              className="text-[22px] font-[575] leading-10 md:text-[26px] md:leading-[48px]"
            >
              Available Worldwide.
            </Text>
          </div>
          <ul className="flex flex-row flex-wrap items-start justify-start gap-3 text-[13px] lg:items-center lg:justify-end lg:text-sm">
            {Object.entries(siteConfig.links).map(([key, value]) => (
              <li key={key}>
                <a href={value.url} rel="noopener noreferrer">
                  <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                    {socialIcons[key]}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} rel="noopener noreferrer">
                <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                  <Icons.envelope className="h-5 w-auto" />
                  {siteConfig.email}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between">
        <Link href="/">
          <Icons.logo className="h-[17px] w-auto lg:h-[17.5px]" />
        </Link>
        <p className="text-center text-sm leading-5 text-neutral-500 dark:text-neutral-400 md:text-left">
          <span className="mr-1.5 text-sm">© {new Date().getFullYear()}</span>
          Design and developed by{' '}
          <a
            href={siteConfig.links.github.url}
            rel="noopener noreferrer"
            className="font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            {siteConfig.username}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
