import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.1] dark:border-white/[0.12]">
      <div className=" mx-auto mb-12 w-full max-w-7xl px-6 pt-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between">
          <Link href="/">
            <Icons.logo className="h-4 w-auto" />
          </Link>
          <p className="text-center text-sm leading-5 tracking-[-0.006em] text-neutral-600 dark:text-neutral-400 md:text-left">
            Built by{" "}
            <Link
              href={siteConfig.links.github}
              className="text-neutral-800 dark:text-neutral-200"
            >
              edroamz
            </Link>
            . The source code is available on{" "}
            <Link
              href={`${siteConfig.links.github}/eduardoambriz.com`}
              className="text-neutral-800 dark:text-neutral-200"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
