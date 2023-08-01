import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export function SiteHeader() {
  return (
    <header
      className="fixed top-0 z-20 h-header w-full max-w-full bg-white/[0.85] shadow-[inset_0_-1px_0_0_rgba(0,0,0,.1)] transition-shadow duration-200 dark:bg-black/80 dark:shadow-[inset_0_-1px_0_0_rgba(235,235,255,.175)]"
      style={{
        backdropFilter: "saturate(180%) blur(5px)",
        WebkitBackdropFilter: "saturate(180%) blur(5px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl grid-cols-2 items-center justify-between gap-x-7 px-6 sm:grid md:grid-cols-3">
        <div className="hidden items-center md:flex">main nav</div>
        <div className="flex items-center justify-start md:justify-center">
          <Link href="/">
            <Icons.logo className="h-4 lg:h-[17px] w-auto" />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden items-center justify-center gap-x-6 md:flex">
            <Link href={`mailto:${siteConfig.email}`}>
              <p className="text-sm font-medium leading-5 tracking-normal text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                Let&apos;s chat{" "}
                <Icons.arrowUpRight className="ml-1 inline h-3.5 w-3.5 align-text-top" />
              </p>
            </Link>
          </div>
          <div className="md:hidden">mobile nav</div>
        </div>
      </div>
    </header>
  );
}
