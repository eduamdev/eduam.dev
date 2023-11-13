import Image from 'next/image';
import carhive from '../../public/projects/carhive.webp';
import { siteConfig } from '@/app/config/site';
import { Icons } from '@/app/components/icons';

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  return (
    <div className="mt-12 ">
      <section>
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-6 min-w-[var(--content-min-width)]">
          <article>
            <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[6px] rounded-b-none bg-neutral-50 transition-colors hover:bg-neutral-100 dark:bg-[#0a0a0a] dark:hover:bg-neutral-900">
              <div className="absolute right-3 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-transparent text-neutral-500 transition-all group-hover:border-black/[0.08] group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-[rgba(0,0,0,0.04)_0px_2px_2px_0px] dark:group-hover:border-black/[0.2] dark:group-hover:shadow-[rgba(0,0,0,0.1)_0px_2px_2px_0px]">
                <Icons.arrowUpRight className="h-4 w-4" />
              </div>
              <a
                href="https://carhive.eduam.dev"
                rel="noreferrer"
                target="_blank"
                className="absolute inset-0 z-10 h-full w-full rounded-[inherit] border border-black/10 focus-visible:border-2 focus-visible:border-[hsla(211,100%,42%,1)] dark:border-[hsla(0,0%,18%,1)] dark:focus-visible:border-[hsla(212,100%,48%,1)]"
              >
                <span className="sr-only">CarHive</span>
              </a>
              <div className="relative aspect-video max-w-full">
                <Image
                  src={carhive}
                  alt="CarHive"
                  priority
                  fill
                  className="object-contain transition-all group-hover:scale-105"
                  placeholder="blur"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="flex h-[68px] items-center gap-x-4 rounded-b-[6px] border border-t-0 border-black/10 bg-white px-4 dark:border-[hsla(0,0%,18%,1)] dark:bg-black md:px-6">
              <div className="inline-flex overflow-hidden">
                <div className="flex max-w-full flex-col">
                  <span className="inline-block max-w-full truncate text-sm font-medium leading-none">
                    CarHive
                  </span>
                  <span className="mt-2 inline-block max-w-full truncate text-sm leading-none text-neutral-600 dark:text-neutral-400">
                    Open-source car rental application
                  </span>
                </div>
              </div>
              <div className="ml-auto shrink-0">
                <a
                  href={`${github.url}/carhive`}
                  rel="noreferrer"
                  target="_blank"
                  className="group text-[15px] font-medium underline"
                >
                  GitHub
                  <span className="inline-flex group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
