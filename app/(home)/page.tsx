import Balancer from 'react-wrap-balancer';
import { Avatar } from '@/app/components/avatar';
import { Projects } from '@/app/components/projects';
import { Icons } from '@/app/components/icons';
import { SocialIcons } from '@/app/components/social-icons';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  const { name, username, email } = siteConfig;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
        <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
          <div className="absolute inset-0 border-b border-[var(--grid-border-color)]"></div>
          <header className="h-[var(--header-height)]">
            <div className="flex h-full shrink-0 items-center gap-x-3 px-5 md:px-9">
              <Avatar />
              <div className="flex flex-col items-stretch gap-y-2">
                <span className="text-sm font-medium leading-none">{name}</span>
                <span className="text-sm leading-none text-neutral-600 dark:text-[#bbb]">
                  @{username}
                </span>
              </div>
            </div>
          </header>
        </section>
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
        <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-9">
            <div className="flex flex-col items-start justify-center">
              <h1>
                <Balancer>
                  I&apos;m Eduardo, a software engineer and web developer based
                  in Mexico.
                </Balancer>
              </h1>
              <div className="pt-6">
                <p>
                  <Balancer>
                    In my six-year journey in web development, I&apos;ve
                    specialized in creating visually stunning websites and
                    dynamic user interfaces. Fueled by an unwavering passion, I
                    prioritize top-notch performance to ensure seamless and
                    lightning-fast user experiences. My commitment extends to an
                    inclusive design approach, emphasizing accessibility for all
                    users.
                  </Balancer>
                </p>
              </div>
              <div className="pt-7">
                <a
                  href={`mailto:${email}?subject=Project inquiry`}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex h-8 items-center justify-center gap-1 rounded-[50px] bg-neutral-950 py-1 pl-[14px] pr-[6px] text-sm font-medium text-white shadow-[rgba(0,0,0,0.14)_0_0.8px_0.8px_-0.6875px,rgb(0,0,0)_0_2.4px_2.4px_-1.375px,rgba(0,0,0,0.13)_0_6.38px_6.38px_-2.0625px,rgba(0,0,0,0.11)_0_20px_20px_-2.75px] transition-colors hover:bg-neutral-700 dark:bg-[#555] dark:text-[rgb(237,237,237)] dark:hover:bg-neutral-700"
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
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
        <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-9">
            <div className="select-within w-full">
              <div className="flex items-center gap-1.5">
                <p className="font-medium">Availability</p>
                <span className="flex h-min shrink-0 items-center justify-center rounded-[7px] border border-black/5 bg-neutral-100/50  px-1.5 text-xs leading-[24px] tracking-wide text-neutral-500 dark:border-white/5 dark:bg-neutral-900 dark:text-neutral-400">
                  Remote
                </span>
              </div>
              <div className="pt-6">
                <p>
                  <Balancer>
                    I am particularly interested in collaborating with
                    early-stage startups and founders, providing my expertise to
                    help define their unique online presence.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
      </div>
      <Projects />
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
        <div className="relative h-14 after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-[''] md:h-16"></div>
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
        <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
          <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
          <div className="px-5 py-7 md:p-9">
            <div className="flex h-full items-center justify-between gap-10 sm:justify-start">
              <h2 className="text-left text-[22px] font-semibold md:text-2xl">
                Let&apos;s connect
              </h2>
              <SocialIcons />
            </div>
          </div>
        </section>
        <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']"></div>
      </div>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
        <div></div>
        <footer className="mx-auto w-full pb-12 pt-6">
          <p className="select-none px-5 text-left text-sm text-[#666] dark:text-[#888] md:px-9">
            Copyright <span aria-hidden="true">©</span>{' '}
            {new Date().getFullYear()} eduam.dev. All rights reserved.
          </p>
        </footer>
        <div></div>
      </div>
    </div>
  );
}
