import Image from 'next/image';
import carhive from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  const carhiveUrl = 'https://carhive.eduam.dev';

  return (
    <>
      <div className="px-5 py-8 md:p-10">
        <h2 className="text-xl font-semibold">Projects</h2>
      </div>
      <div className="relative aspect-video max-w-full">
        <Image
          src={carhive}
          alt=""
          priority
          fill
          className="object-cover"
          placeholder="blur"
          sizes="100vw"
        />
      </div>
      <div className="grid grid-rows-2 items-center gap-x-4 gap-y-6 border-t border-[var(--grid-border-color)] bg-white p-5 dark:bg-black md:flex md:px-10 md:py-6">
        <div className="inline-flex overflow-hidden">
          <div className="flex max-w-full flex-col">
            <span className="inline-block max-w-full truncate text-sm font-semibold leading-none">
              CarHive
            </span>
            <span className="mt-2.5 inline-block max-w-full truncate text-sm leading-none text-neutral-600 dark:text-neutral-400">
              Open-source car rental application
            </span>
          </div>
        </div>
        <div className="ml-auto w-full shrink-0 md:w-auto">
          <div className="grid grid-cols-2 items-center justify-center gap-x-4 md:flex">
            <a
              href={`${github.url}/carhive`}
              rel="noreferrer"
              target="_blank"
              className="flex h-auto w-auto flex-nowrap items-center justify-center gap-1 overflow-visible rounded-lg bg-white p-2 text-sm font-medium shadow-[rgba(62,62,62,0.04)_0px_-2.4px_0px_0px_inset,rgba(143,143,143,0.2)_0px_1px_3px_0px,rgb(235,235,235)_0px_0px_0px_1px] transition-shadow hover:shadow-[rgba(62,62,62,0.04)_0px_0px_0px_0px_inset,rgba(143,143,143,0.2)_0px_1px_3px_0px,rgb(235,235,235)_0px_0px_0px_1px] dark:text-[#171717]"
            >
              <Icons.github className="mx-1 h-4 w-4 shrink-0" />
              <span className="shrink-0 px-1">Git repository</span>
            </a>
            <a
              href={carhiveUrl}
              rel="noreferrer"
              target="_blank"
              className="flex h-auto w-auto flex-row flex-nowrap items-center justify-center gap-1 rounded-lg bg-[#383838] px-3 py-2 text-sm font-medium text-white shadow-[rgb(73,73,73)_0px_-2.4px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] transition-all hover:bg-[#5c5c5c] hover:shadow-[rgb(73,73,73)_0px_0px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
            >
              <span className="shrink-0 px-1 ">Visit</span>
              <Icons.arrowUpRight className="inline-block h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
