import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Text } from '@/components/text';

const socialIcons: { [key: string]: JSX.Element } = {
  github: <Icons.github className="h-[0.9rem] w-full align-middle lg:h-4" />,
  linkedin: (
    <Icons.linkedin className="h-5 w-full align-middle lg:h-[21.5px]" />
  ),
  x: <Icons.x className="h-[13px] w-full align-middle lg:h-[14.5px]" />,
};

export function SiteFooter() {
  return (
    <footer className="mx-auto my-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
      <div className="w-full rounded-lg border border-black/[0.1] p-4 dark:border-white/[0.15] sm:rounded-xl md:p-6">
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:items-center">
          <Text
            balanced
            align="left"
            className="text-lg font-semibold lg:text-2xl lg:leading-[38px]"
          >
            Ready to bring your project to life?
            <br />
            Let&apos;s work together.
          </Text>
          <ul className="flex flex-row flex-wrap items-start justify-start gap-5 md:justify-end">
            {Object.entries(siteConfig.links).map(([key, value]) => (
              <a key={key} href={value.url} rel="noreferrer">
                <li className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl border border-black/[0.1] bg-accent/40 text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100 lg:h-8 lg:w-8">
                  {socialIcons[key]}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Icons.logo className="h-4 w-auto align-middle sm:h-[17.5px]" />
        </Link>
        <p className="text-center text-[13px] text-neutral-600 dark:text-neutral-400 lg:text-sm">
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
