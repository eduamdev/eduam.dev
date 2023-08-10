import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Text } from "@/components/text";

export function SiteFooter() {
  return (
    <footer className="px-6 mx-auto mb-24 mt-5 w-full max-w-6xl">
      <div className="border border-black/[0.1] dark:border-white/[0.15] rounded-md w-full mb-14 p-5 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center justify-between gap-6">
          <div>
            <Text
              balanced
              align="left"
              className="text-xl lg:text-2xl tracking-tight font-medium leading-9 lg:leading-10"
            >
              Have a project in mind? Contact me.
            </Text>
            <Text
              balanced
              className="text-xl lg:text-2xl tracking-tight font-medium leading-9 lg:leading-10"
            >
              Available Worldwide.
            </Text>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-end text-[13px] lg:text-sm">
            <a href="#" rel="noopener noreferrer">
              <span className="rounded-full border border-black/[0.1] bg-accent/40 dark:bg-accent/30 hover:border-black/[0.8] dark:border-white/[0.12] dark:hover:border-white/[0.2] flex items-center justify-between gap-x-3 transition-colors text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 font-normal px-3 h-8">
                <Icons.x className="h-3.5 w-3.5" />
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="rounded-full border border-black/[0.1] bg-accent/40 dark:bg-accent/30 hover:border-black/[0.8] dark:border-white/[0.12] dark:hover:border-white/[0.2] flex items-center justify-between gap-x-3 transition-colors text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 font-normal px-3 h-8">
                Github
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="rounded-full border border-black/[0.1] bg-accent/40 dark:bg-accent/30 hover:border-black/[0.8] dark:border-white/[0.12] dark:hover:border-white/[0.2] flex items-center justify-between gap-x-3 transition-colors text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 font-normal px-3 h-8">
                LinkedIn
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="rounded-full border border-black/[0.1] bg-accent/40 dark:bg-accent/30 hover:border-black/[0.8] dark:border-white/[0.12] dark:hover:border-white/[0.2] flex items-center justify-between gap-x-3 transition-colors text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 font-normal px-3 h-8">
                eduambrizdev@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between">
        <div className="flex items-center justify-center gap-x-2">
          <span className="text-sm">© {new Date().getFullYear()}</span>
          <Link href="/">
            <Icons.logo className="h-[17px] lg:h-[17.5px] w-auto" />
          </Link>
        </div>
        <p className="text-center text-sm leading-5 text-neutral-500 dark:text-neutral-400 md:text-left">
          Design and developed by{" "}
          <Link
            href={siteConfig.links.github}
            className="font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            edroamz
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
