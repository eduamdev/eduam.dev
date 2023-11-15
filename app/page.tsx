import { Navbar } from '@/app/components/navbar';
import { Projects } from '@/app/components/projects';
import '@/app/styles/prose.css';
import { SocialLinks } from '@/app/components/social-links';
import { Separator } from '@/app/components/ui/separator';
import Balancer from 'react-wrap-balancer';
import { fontDisplay } from '@/lib/fonts';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col px-4">
      <div className="min-w-[var(--content-min-width)] ">
        <header className="h-[var(--header-height)]">
          <Navbar />
        </header>
        <div className="pt-6">
          <Separator className="relative border-t border-[var(--grid-border-color)] ">
            <div className="pointer-events-none absolute inset-[calc(var(--cross-half-size)_*_-1)] z-[2] col-start-1 row-start-1 grid h-fit w-fit">
              <div className="absolute h-[var(--cross-size)] w-[var(--cross-half-size)] border-r border-[var(--cross-color)]"></div>
              <div className="absolute h-[var(--cross-half-size)] w-[var(--cross-size)] border-b border-[var(--cross-color)]"></div>
            </div>
          </Separator>
          <main className="flex flex-col border border-[var(--grid-border-color)] border-t-transparent">
            <section>
              <div className="px-5 py-10 md:px-10 md:py-12">
                <article className="flex flex-col items-center justify-center">
                  <div className="prose select-within w-full">
                    <h1
                      className={`pb-2 text-2xl font-extrabold lg:text-3xl ${fontDisplay.className}`}
                    >
                      <Balancer>
                        Frontend development specialist and software engineer
                        based in Mexico{' '}
                        <span
                          className="select-none text-sm md:text-base"
                          role="presentation"
                          aria-hidden="true"
                        >
                          🇲🇽
                        </span>
                      </Balancer>
                    </h1>
                    <p>
                      <Balancer>
                        What fuels my coding passion? It&apos;s the sweet spot
                        where design, performance, and user experience collide.
                        I thrive on making websites not just functional but
                        beautifully performant and accessible.
                      </Balancer>
                    </p>
                    <p>
                      <Balancer>
                        I am interested in collaborating with early-stage
                        startups/founders looking to define their online
                        presence. Lets work together
                      </Balancer>
                    </p>
                    <div className="mt-6 flex h-10 w-fit flex-row items-center gap-2.5 rounded-full border-[0.8px] border-black/[0.08] bg-neutral-50 px-3 dark:border-white/[0.15] dark:bg-neutral-950">
                      <div className="flex">
                        <span className="relative flex h-2 w-2 items-center justify-center">
                          <span className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-lime-500 opacity-75"></span>
                          <span className="h-2 w-2 shrink-0 grow-0 rounded-full bg-green-500"></span>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="truncate text-sm text-neutral-800 dark:text-neutral-300">
                          Open to Remote Work
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <Separator
              decorative
              orientation="horizontal"
              className="relative grid h-4 grid-cols-3 border-t border-[var(--grid-border-color)]"
            >
              <div className="pointer-events-none absolute inset-[calc(var(--cross-half-size)_*_-1)] z-[2] col-start-[-1] row-start-1 grid h-fit w-fit">
                <div className="absolute h-[var(--cross-size)] w-[var(--cross-half-size)] border-r border-[var(--cross-color)]"></div>
                <div className="absolute h-[var(--cross-half-size)] w-[var(--cross-size)] border-b border-[var(--cross-color)]"></div>
              </div>
            </Separator>
            <Separator
              decorative
              orientation="horizontal"
              className="border-t border-[var(--grid-border-color)] "
            />
            <Projects />
            <Separator
              decorative
              orientation="horizontal"
              className="h-4 border-t border-[var(--grid-border-color)] "
            />
            <Separator className="relative border-t border-[var(--grid-border-color)] ">
              <div className="pointer-events-none absolute inset-[calc(var(--cross-half-size)_*_-1)] z-[2] col-start-1 row-start-1 grid h-fit w-fit">
                <div className="absolute h-[var(--cross-size)] w-[var(--cross-half-size)] border-r border-[var(--cross-color)]"></div>
                <div className="absolute h-[var(--cross-half-size)] w-[var(--cross-size)] border-b border-[var(--cross-color)]"></div>
              </div>
            </Separator>
            <section className="bg-white dark:bg-black">
              <div className="px-5 py-10 md:px-10 md:py-12">
                <div className="flex h-full items-center justify-between gap-10 sm:justify-center">
                  <h2 className="text-left text-[22px] font-semibold md:text-[28px]">
                    Let&apos;s connect.
                  </h2>
                  <SocialLinks />
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer className="pb-16 pt-8">
          <p className="select-none text-sm text-[#666] dark:text-[#888]">
            Copyright <span aria-hidden="true">©</span>{' '}
            {new Date().getFullYear()} eduam.dev. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
