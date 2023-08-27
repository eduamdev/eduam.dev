import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Text } from '@/components/text';

const socialIcons: { [key: string]: JSX.Element } = {
  github: <Icons.github className="h-[16.5px] w-auto lg:h-[17.5px]" />,
  linkedin: <Icons.linkedin className="h-[21px] w-auto lg:h-[22.5px]" />,
  x: <Icons.x className="h-3.5 w-auto lg:h-4" />,
};

export function SiteFooter() {
  return (
    <footer className="mx-auto mb-16 mt-12 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
      <div className="w-full rounded-lg border border-black/[0.1] p-5 dark:border-white/[0.15] sm:rounded-xl">
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:items-center">
          <div>
            <Text
              balanced
              align="left"
              className="text-xl font-semibold leading-8 md:text-2xl md:leading-10"
            >
              Ready to bring your project to life?
              <br />
              Let&apos;s connect today.
            </Text>
          </div>
          <ul className="flex flex-row flex-wrap items-start justify-start gap-4 md:justify-end">
            {Object.entries(siteConfig.links).map(([key, value]) => (
              <a key={key} href={value.url} rel="noreferrer">
                <li className="flex h-7 items-center justify-between rounded-2xl border border-black/[0.1] bg-accent/40 px-2 text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                  {socialIcons[key]}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row md:justify-between">
        <Link href="/">
          <Icons.logo className="h-4 w-auto align-middle sm:h-[17.5px]" />
        </Link>
        <p className="text-center text-[13px] text-neutral-500 dark:text-neutral-400 md:text-left">
          <span className="mr-1.5">© {new Date().getFullYear()}</span>
          Design and developed by{' '}
          <a
            href={siteConfig.links.github.url}
            rel="noreferrer"
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
