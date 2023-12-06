import { Navbar } from '@/app/components/navbar';
import { Projects } from '@/app/components/projects';
import '@/app/styles/prose.css';
import { SocialLinks } from '@/app/components/social-links';
import Balancer from 'react-wrap-balancer';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative border-b border-r border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
        <section className="border-b border-[var(--grid-border-color)]">
          <header className="h-[var(--header-height)]">
            <Navbar />
          </header>
        </section>
        <div className="relative border-b border-l border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative border-b border-r border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
        <section className="border-b border-[var(--grid-border-color)]">
          <div className="px-5 py-8 md:p-10">
            <article className="flex flex-col items-center justify-center">
              <div className="prose select-within w-full">
                <h1
                  className={`pb-2 text-2xl font-semibold tracking-[-0.02rem]`}
                >
                  <Balancer>
                    Frontend development specialist and software engineer based
                    in Mexico{' '}
                    <span
                      className="select-none align-middle text-sm md:text-base"
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
                    I am interested in collaborating with early-stage
                    startups/founders looking to define their online presence.
                    Lets work together
                  </Balancer>
                </p>
                <div className="mt-6 flex h-8 w-fit flex-row items-center gap-2 rounded-lg bg-neutral-50 px-2 py-1.5 shadow-[rgba(143,143,143,0.2)_0px_1px_3px_0px,rgb(235,235,235)_0px_0px_0px_1px] dark:bg-neutral-950 dark:shadow-[rgba(255,255,255,0.12)_0px_0px_0px_1px]">
                  <div className="flex pl-0.5">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                      <span className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-lime-500 opacity-75"></span>
                      <span className="h-2 w-2 shrink-0 grow-0 rounded-full bg-green-500"></span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="truncate px-1 text-sm font-medium text-neutral-800 dark:text-neutral-300">
                      Open to Remote Work
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="relative border-b border-l border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative border-b border-r border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
        <section className="border-b border-[var(--grid-border-color)]">
          <Projects />
        </section>
        <div className="relative border-b border-l border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div></div>
        <div className="h-10 border-x border-[var(--grid-border-color)] md:h-14"></div>
        <div></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative border-y border-r border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
        <section className="border-y border-[var(--grid-border-color)] bg-white dark:bg-black">
          <div className="px-5 py-8 md:p-10">
            <div className="flex h-full items-center justify-between gap-10 sm:justify-center">
              <h2 className="text-left text-[22px] font-semibold md:text-[28px]">
                Let&apos;s connect.
              </h2>
              <SocialLinks />
            </div>
          </div>
        </section>
        <div className="relative border-y border-l border-[var(--grid-border-color)]">
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div></div>
        <div className="border-x border-[var(--grid-border-color)]">
          <footer className="mx-auto pb-12 pt-8">
            <p className="select-none px-5 text-center text-sm text-[#666] dark:text-[#888] md:px-10">
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
