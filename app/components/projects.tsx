import Image from 'next/image';
import carhive from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';
import Balancer from 'react-wrap-balancer';

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  const carhiveUrl = 'https://carhive.eduam.dev';

  return (
    <section>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div></div>
        <div className="border-x border-[var(--grid-border-color)]">
          <div className="px-5 py-7 md:p-[38px]">
            <h2 className="text-left text-lg font-semibold md:text-xl">
              Projects
            </h2>
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 flex-row xl:grid-cols-[1fr_minmax(var(--content-min-width),calc(var(--content-width)_+_220px))_1fr]">
        <div className="hidden xl:block"></div>
        <article className="grid grid-cols-1 overflow-hidden border border-[#d6e0ff] bg-gradient-to-b from-[#e5eeff] to-[#f9fbff] lg:grid-cols-[0.65fr_1fr] lg:rounded-[32px] xl:grid-cols-[110px_0.55fr_1fr]">
          <div className="hidden border-r border-[#d6e0ff] xl:block">
            <div className="h-12 border-b border-[#d6e0ff]"></div>
            <div className="h-12 border-b border-[#d6e0ff]"></div>
          </div>
          <div className="border-r border-[#d6e0ff]">
            <div className="hidden h-12 lg:block"></div>
            <div className="hidden h-12 border-y border-[#d6e0ff] lg:block"></div>
            <div className="space-y-6 px-5 py-7 md:p-[38px] lg:space-y-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(55,93,251,0.1)_0px_0px_0px_1px,rgba(37,62,167,0.2)_0px_1px_3px_0px]">
                <Icons.carhiveLogo className="h-6 w-6 shrink-0 text-black" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-700">
                  web application
                </span>
                <h3 className="text-base font-semibold text-black md:text-lg">
                  CarHive
                </h3>
                <p className="text-sm text-neutral-600 sm:text-base">
                  <Balancer>Open-source car rental application</Balancer>
                </p>
              </div>
              <ul className="hidden flex-col gap-5 text-sm text-neutral-600 lg:flex">
                <li className="flex  gap-2.5">
                  <Icons.checkCircle className="inline-flex h-5 w-5 shrink-0 text-[#375dfb]" />{' '}
                  Interactive Map
                </li>
                <li className="flex gap-2.5">
                  <Icons.checkCircle className="inline-flex h-5 w-5 shrink-0 text-[#375dfb]" />{' '}
                  Multi-Filter Search
                </li>

                <li className="flex  gap-2.5">
                  <Icons.checkCircle className="inline-flex h-5 w-5 shrink-0 text-[#375dfb]" />{' '}
                  Server Actions and Server Components
                </li>
                <li className="flex  gap-2.5">
                  <Icons.checkCircle className="inline-flex h-5 w-5 shrink-0 text-[#375dfb]" />{' '}
                  Form Validation
                </li>
              </ul>
              <div className="grid grid-cols-2 items-center justify-start gap-x-4 lg:flex">
                <a
                  href={`${github.url}/carhive`}
                  rel="noreferrer"
                  target="_blank"
                  className="flex h-auto w-auto flex-nowrap items-center justify-center gap-1 overflow-visible rounded-lg bg-white p-2 text-sm font-medium shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] transition-shadow hover:shadow-[rgba(55,93,251,0.12)_0px_0px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] dark:text-[#171717]"
                >
                  <Icons.github className="mx-1 h-4 w-4 shrink-0" />
                  <span className="shrink-0 px-1">Repository</span>
                </a>
                <a
                  href={carhiveUrl}
                  rel="noreferrer"
                  target="_blank"
                  className="flex h-auto w-auto flex-row flex-nowrap items-center justify-center gap-1 rounded-lg bg-[#383838] px-3 py-2 text-sm font-medium text-white shadow-[rgb(73,73,73)_0px_-2.4px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] transition-all hover:bg-[#5c5c5c] hover:shadow-[rgb(73,73,73)_0px_0px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(212,100%,48%,1)]"
                >
                  <span className="shrink-0 px-1">Visit</span>
                  <Icons.arrowUpRight className="inline-block h-3.5 w-3.5 shrink-0 text-neutral-300" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden h-12 lg:block"></div>
            <div className="relative flex h-auto flex-wrap items-center justify-start gap-2 border-y border-[#d6e0ff] px-5 py-4 md:px-[38px] lg:h-12 lg:px-6 lg:py-0">
              <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[#d6e0ff] bg-white  "></div>
              <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[#d6e0ff] bg-white  "></div>
              <div className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[rgba(37,62,167,0.2)] bg-neutral-50 px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]">
                Next.js
              </div>
              <div className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[rgba(37,62,167,0.2)] bg-neutral-50 px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]">
                TypeScript
              </div>
              <div className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[rgba(37,62,167,0.2)] bg-neutral-50 px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]">
                Tailwind CSS
              </div>
              <div className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[rgba(37,62,167,0.2)] bg-neutral-50 px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]">
                Vercel Postgres
              </div>
              <span className="whitespace-nowrap text-sm text-[#253ea7] opacity-60">
                and more...
              </span>
            </div>
            <Image
              src={carhive}
              alt=""
              priority
              width={924}
              height={550}
              className="hidden h-[550px] w-[924px] object-cover object-left lg:block"
              sizes="100vw"
            />
            <Image
              src={carhive}
              alt=""
              priority
              className="ml-2 mt-2 object-cover object-left sm:m-0 lg:hidden"
              sizes="100vw"
            />
          </div>
        </article>
        <div></div>
      </div>
    </section>
  );
}
