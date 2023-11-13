import { Navbar } from '@/app/components/navbar';
import { Projects } from '@/app/components/projects';
import '@/app/styles/prose.css';
import { SocialLinks } from '@/app/components/social-links';
import Balancer from 'react-wrap-balancer';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col px-6">
      <header className="h-[var(--header-height)]">
        <Navbar />
      </header>
      <main>
        <article className="flex flex-col items-center justify-center">
          <div className="prose select-within w-full">
            <h1 className="mt-16 pb-2 text-2xl font-bold lg:text-[28px] lg:leading-9">
              <Balancer>
                Frontend development specialist and software engineer based in
                Mexico{' '}
                <span
                  className="text-lg"
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
                design, performance, and user experience collide. I thrive on
                making websites not just functional but beautifully performant
                and accessible.
              </Balancer>
            </p>
            <p>
              <Balancer>
                I am interested in collaborating with early-stage
                startups/founders looking to define their online presence. Lets
                work together
              </Balancer>
            </p>
            <div className="mt-6 flex h-9 w-fit flex-row items-center gap-2.5 rounded-full border-[0.8px] border-black/[0.08] bg-[#fafafa] px-3 dark:border-white/[0.15] dark:bg-neutral-950">
              <div className="flex">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-lime-500 opacity-75"></span>
                  <span className="h-2 w-2 shrink-0 grow-0 rounded-full bg-green-500"></span>
                </span>
              </div>
              <div className="flex items-center">
                <p className="truncate text-[13px] leading-[18px] text-neutral-800 dark:text-neutral-300">
                  Open to Remote Work
                </p>
              </div>
            </div>
          </div>
        </article>
        <Projects />
        <div className="pb-8 pt-12">
          <div className="h-24 w-full min-w-[var(--content-min-width)] rounded-lg border border-black/[0.1] dark:border-[hsla(0,0%,18%,1)] sm:rounded-xl">
            <div className="flex h-full items-center justify-center gap-10 p-4">
              <h2 className="text-left text-xl font-semibold md:text-2xl">
                Let&apos;s connect.
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
      <footer className="mb-16">
        <p className="select-none text-sm text-[#666] dark:text-[#888]">
          Copyright ©{new Date().getFullYear()} eduam.dev. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
