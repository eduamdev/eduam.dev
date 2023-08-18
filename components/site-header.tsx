import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  return (
    <header
      className="fixed inset-x-0 top-8 z-20 mx-auto grid h-[46px] w-[342px] grid-cols-2 items-center justify-between gap-x-7 rounded-full border border-black/[0.08] bg-white/[0.85] px-[10px] shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] dark:border-white/[0.18] dark:bg-black/80 dark:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] sm:grid md:w-full md:max-w-2xl md:grid-cols-3 lg:max-w-3xl"
      style={{
        backdropFilter: 'saturate(180%) blur(5px)',
        WebkitBackdropFilter: 'saturate(180%) blur(5px)',
      }}
    >
      <div className="flex h-full items-center justify-start">
        <Link href="/">
          <Icons.logo className="ml-2.5 h-[17px] w-auto lg:h-[17.5px]" />
        </Link>
      </div>
      <div className="hidden h-full items-center justify-start md:flex md:justify-center">
        <MainNav />
      </div>
      <div className="flex h-full items-center justify-end">
        <div className="hidden h-full items-center justify-center gap-x-6 md:flex">
          <a
            href={`mailto:${siteConfig.email}`}
            rel="noopener noreferrer"
            className="flex h-8 items-center justify-center rounded-full bg-black px-3 text-sm font-medium leading-5 tracking-normal text-neutral-50 transition-colors hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
          >
            Let&apos;s chat
          </a>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
