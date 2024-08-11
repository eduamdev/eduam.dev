import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';
import { Avatar } from '@/app/components/avatar';
import { Projects } from '@/app/components/projects';
import { MailIcon } from '@/app/components/icons/mail';
import { ChevronRightIcon } from '@/app/components/icons/chevron-right';
import { SocialIcons } from '@/app/components/social-icons';
import { siteConfig } from '@/config/site';

const GridSection: React.FC<{ children?: ReactNode }> = ({
  children = <></>,
}) => (
  <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
    <GridCornerDecorators />
    {children}
  </section>
);

const GridCornerDecorators = () => (
  <>
    <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
    <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
  </>
);

const BorderWrapper: React.FC<{ children?: ReactNode }> = ({
  children = <></>,
}) => (
  <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']">
    {children}
  </div>
);

const ContentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    <BorderWrapper />
    {children}
    <BorderWrapper />
  </div>
);

const Header: React.FC = () => {
  const { name, username, email } = siteConfig;

  return (
    <ContentWrapper>
      <GridSection>
        <div className="absolute inset-0 border-b border-[var(--grid-border-color)]"></div>
        <header className="relative z-10 flex h-[var(--header-height)] items-center justify-between">
          <div className="flex h-full shrink-0 items-center gap-x-3 px-5 md:px-9">
            <Avatar />
            <div className="flex flex-col items-stretch gap-y-2">
              <span className="text-sm font-medium leading-none">{name}</span>
              <span className="text-sm leading-none text-neutral-600 dark:text-[#bbb]">
                @{username}
              </span>
            </div>
          </div>
          <div className="px-5 md:px-9">
            <MailIcon className="mr-2 inline-block size-[18px] shrink-0 text-[#666] dark:text-[#aaa]" />
            <span className="text-[15px]">{email}</span>
          </div>
        </header>
      </GridSection>
    </ContentWrapper>
  );
};

const Summary: React.FC<{}> = () => {
  const { email } = siteConfig;

  return (
    <ContentWrapper>
      <GridSection>
        <div className="px-5 py-7 md:p-9">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-lg font-semibold md:text-[19px]">
              <Balancer>I&apos;m a Software Engineer based in Mexico.</Balancer>
            </h1>
            <div className="pt-6">
              <p>
                <Balancer>
                  I&apos;ve focused on crafting visually engaging websites and
                  intuitive user interfaces. Driven by a passion for excellence,
                  I ensure high performance for smooth, fast experiences.
                  I&apos;m also committed to inclusive design, making sure my
                  work is accessible to everyone.
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
                <span className="flex size-6 items-center justify-center">
                  <ChevronRightIcon className="size-4 shrink-0 text-neutral-400" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </GridSection>
    </ContentWrapper>
  );
};

const Availability = () => (
  <ContentWrapper>
    <GridSection>
      <div className="px-5 py-7 md:p-9">
        <div className="flex items-center gap-2.5">
          <p className="font-semibold">Availability</p>
          <span className="flex h-min shrink-0 items-center justify-center rounded-[7px] border border-black/10 bg-white px-2 text-xs leading-[24px] tracking-wider text-neutral-700 dark:border-white/[0.08] dark:bg-neutral-800 dark:text-neutral-200">
            Remote
          </span>
        </div>
        <div className="pt-6">
          <p>
            <Balancer>
              I&apos;m especially interested in working with early-stage
              startups and founders, using my expertise to help shape and define
              their unique online presence.
            </Balancer>
          </p>
        </div>
      </div>
    </GridSection>
  </ContentWrapper>
);

const Socials = () => (
  <>
    <ContentWrapper>
      <GridSection />
    </ContentWrapper>

    <ContentWrapper>
      <GridSection>
        <div className="px-5 py-7 md:p-9">
          <div className="flex h-full items-center justify-between gap-10 sm:justify-start">
            <h2 className="text-left text-[22px] font-semibold md:text-2xl">
              Let&apos;s connect
            </h2>
            <SocialIcons />
          </div>
        </div>
      </GridSection>
    </ContentWrapper>
  </>
);

const Footer: React.FC = () => (
  <ContentWrapper>
    <footer className="mx-auto w-full pb-12 pt-6">
      <p className="select-none px-5 text-left text-sm text-[#666] dark:text-[#888] md:px-9">
        Copyright <span aria-hidden="true">©</span> {new Date().getFullYear()}{' '}
        eduam.dev. All rights reserved.
      </p>
    </footer>
  </ContentWrapper>
);

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Summary />
      <Availability />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}
