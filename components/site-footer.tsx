import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Wordmark } from '@/components/wordmark';

export function SiteFooter() {
  return (
    <footer className="mx-auto mb-16 mt-12 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4">
        <Link href="/">
          <Wordmark />
        </Link>
        <p className="flex flex-row items-center justify-center gap-x-1 text-center text-sm text-neutral-600 dark:text-neutral-400 lg:text-[15px]">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>
            Built by{' '}
            <strong>
              <a
                href={siteConfig.links.github.url}
                rel="noreferrer"
                className=" hover:text-black dark:hover:text-neutral-100"
              >
                {siteConfig.name}
              </a>
            </strong>
            .
          </span>
        </p>
      </div>
    </footer>
  );
}
