import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header
      className="fixed left-0 right-0 top-8 mx-auto z-20 w-[342px] md:w-full md:max-w-2xl lg:max-w-3xl px-[10px] h-[46px] border border-black/[0.08] dark:border-white/[0.18] rounded-full grid grid-cols-2 items-center justify-between gap-x-7 sm:grid md:grid-cols-3 bg-white/[0.85] dark:bg-black/80 shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] dark:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)]"
      style={{
        backdropFilter: "saturate(180%) blur(5px)",
        WebkitBackdropFilter: "saturate(180%) blur(5px)",
      }}
    >
      <div className="h-full flex items-center justify-start">
        <Link href="/">
          <Icons.logo className="h-[17px] lg:h-[17.5px] w-auto ml-2.5" />
        </Link>
      </div>
      <div className="hidden h-full md:flex items-center justify-start md:justify-center">
        <MainNav />
      </div>
      <div className="h-full flex items-center justify-end">
        <div className="hidden h-full items-center justify-center gap-x-6 md:flex">
          <span className="transition-colors text-sm font-medium leading-5 tracking-normal text-neutral-50 dark:text-black bg-black dark:bg-white dark:hover:bg-neutral-300 hover:bg-neutral-700 h-8 rounded-full flex items-center justify-center">
            <Link href={`mailto:${siteConfig.email}`} className="px-3">
              Let&apos;s chat
            </Link>
          </span>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
