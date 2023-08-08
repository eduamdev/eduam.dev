import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="px-6 mx-auto mb-20 w-full max-w-5xl">
      <div className="pt-10 border-t border-black/[0.1] dark:border-white/[0.12]">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between">
          <Link href="/">
            <Icons.logo className="h-[17px] lg:h-[18px] w-auto" />
          </Link>
          <p className="text-center text-sm leading-5 text-neutral-500 dark:text-neutral-400 md:text-left">
            Design and developed by{" "}
            <Link
              href={siteConfig.links.github}
              className="text-neutral-700 font-medium hover:text-black dark:text-neutral-200"
            >
              edroamz
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
