import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Text } from "@/components/text";

export function SiteFooter() {
  return (
    <footer className="mx-auto mb-24 mt-5 w-full max-w-6xl px-6">
      <div className="mb-14 w-full rounded-md border border-black/[0.1] p-5 dark:border-white/[0.15] lg:p-8">
        <div className="grid grid-cols-1 items-start justify-between gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Text
              balanced
              align="left"
              className="text-xl font-medium leading-9 tracking-tight lg:text-2xl lg:leading-10"
            >
              Have a project in mind? Contact me.
            </Text>
            <Text
              balanced
              className="text-xl font-medium leading-9 tracking-tight lg:text-2xl lg:leading-10"
            >
              Available Worldwide.
            </Text>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-3 text-[13px] lg:items-center lg:justify-end lg:text-sm">
            <a href="#" rel="noopener noreferrer">
              <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                <Icons.x className="h-3.5 w-auto lg:h-4" />
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                <Icons.github className="h-[16.5px] w-auto lg:h-[17.5px]" />
                {/* Github */}
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                <Icons.linkedin className="h-[21px] w-auto lg:h-[22.5px]" />
                {/* LinkedIn */}
              </span>
            </a>
            <a href="#" rel="noopener noreferrer">
              <span className="flex h-8 items-center justify-between gap-x-1.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 text-sm font-normal text-neutral-600 transition-colors hover:border-black/[0.8] hover:text-neutral-800 dark:border-white/[0.12] dark:bg-accent/30 dark:text-neutral-400 dark:hover:border-white/[0.2] dark:hover:text-neutral-100">
                <Icons.envelope className="h-5 w-auto" />
                eduambrizdev@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between">
        <div className="flex items-center justify-center gap-x-1.5">
          <span className="text-sm">© {new Date().getFullYear()}</span>
          <Link href="/">
            <Icons.logo className="h-[17px] w-auto lg:h-[17.5px]" />
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
