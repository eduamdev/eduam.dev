import { Navbar } from '@/app/components/navbar';
import { Projects } from '@/app/components/projects';
import '@/app/styles/prose.css';
import { SocialIcons } from '@/app/components/social-icons';
import Balancer from 'react-wrap-balancer';
import { Icons } from '../components/icons';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="border-b border-r border-[var(--grid-border-color)]"></div>
        <section className="border-b border-[var(--grid-border-color)]">
          <header className="h-[var(--header-height)]">
            <Navbar />
          </header>
        </section>
        <div className="border-b border-l border-[var(--grid-border-color)]"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="border-b border-r border-[var(--grid-border-color)]"></div>
        <section className="relative border-b border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-[38px]">
            <div className="flex flex-col items-center justify-center">
              <div className="prose select-within w-full">
                <h1>
                  <Balancer>
                    Frontend development specialist and software engineer based
                    in Mexico{' '}
                    <span
                      className="select-none align-middle text-xs"
                      role="presentation"
                      aria-hidden="true"
                    >
                      🇲🇽
                    </span>
                  </Balancer>
                </h1>
                <p>
                  <Balancer>
                    What fuels my coding passion? It&apos;s the sweet spot where
                    design, performance, and user experience collide. I thrive
                    on making websites not just functional but beautifully
                    performant and accessible.
                  </Balancer>
                </p>
                <p>
                  <Balancer>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit est error unde aspernatur harum dolore cumque
                    doloribus?
                  </Balancer>
                </p>
                <a
                  href="mailto:hi@example.com?subject=Project inquiry"
                  rel="noopener"
                  target="_blank"
                  className="mt-7 inline-flex h-8 items-center justify-center gap-1 rounded-[50px] bg-neutral-950 py-1 pl-[14px] pr-[6px] text-sm font-medium text-white shadow-[rgba(0,0,0,0.14)_0_0.8px_0.8px_-0.6875px,rgb(0,0,0)_0_2.4px_2.4px_-1.375px,rgba(0,0,0,0.13)_0_6.38px_6.38px_-2.0625px,rgba(0,0,0,0.11)_0_20px_20px_-2.75px] transition-colors hover:bg-neutral-700 dark:bg-[#555] dark:text-[rgb(237,237,237)] dark:hover:bg-neutral-700"
                >
                  Open for projects
                  <span className="flex h-6 w-6 items-center justify-center">
                    <Icons.chevronRight className="h-4 w-4 shrink-0 text-neutral-400" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="border-b border-l border-[var(--grid-border-color)]"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="border-b border-r border-[var(--grid-border-color)]"></div>
        <section className="relative border-b border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-[38px]">
            <div className="prose select-within w-full">
              <div className="flex items-center gap-1.5">
                <p className="font-medium">Availability</p>
                <span className="flex h-min shrink-0 items-center justify-center rounded-[7px] border border-black/5 bg-neutral-100/50  px-2 text-xs leading-[24px] tracking-wide text-neutral-500 dark:border-white/5 dark:bg-neutral-900 dark:text-neutral-400">
                  Remote
                </span>
              </div>
              <p>
                <Balancer>
                  I am interested in collaborating with early-stage
                  startups/founders looking to define their online presence.
                </Balancer>
              </p>
            </div>
          </div>
        </section>
        <div className="border-b border-l border-[var(--grid-border-color)]"></div>
      </div>
      <Projects />
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="hidden md:block"></div>
        <div className="h-14 border-x border-[var(--grid-border-color)] md:h-20"></div>
        <div></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="border-y border-r border-[var(--grid-border-color)]"></div>
        <section className="relative border-y border-[var(--grid-border-color)] bg-neutral-50 dark:bg-black">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-[38px]">
            <div className="flex h-full items-center justify-between gap-10 sm:justify-center">
              <h2 className="text-left text-[22px] font-semibold md:text-2xl">
                Let&apos;s connect
              </h2>
              <SocialIcons />
            </div>
          </div>
        </section>
        <div className="border-y border-l border-[var(--grid-border-color)]"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div></div>
        <div className="border-x border-[var(--grid-border-color)]">
          <footer className="mx-auto pb-12 pt-8">
            <p className="select-none px-5 text-left text-[13px] text-[#666] dark:text-[#888] sm:text-center sm:text-sm md:px-10">
              Copyright <span aria-hidden="true">©</span>{' '}
              {new Date().getFullYear()} eduam.dev. All rights reserved.
            </p>
          </footer>
        </div>
        <div></div>
      </div>
    </div>
  );
}
