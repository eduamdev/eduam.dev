import { ReactNode } from 'react';
import { GithubIcon } from '@/app/components/icons/github';
import { TwitterIcon } from '@/app/components/icons/twitter';
import { ContentWrapper } from '../components/content-wrapper';
import { GridSection } from '../components/grid-section';
import { siteConfig } from '@/config/site';
import { Separator } from '@/app/components/ui/separator';

export function Social() {
  const {
    links: { xcom, github },
  } = siteConfig;

  return (
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

              <ul className="m-0 inline-flex shrink-0 items-center p-0 pl-[5px]">
                <SocialLink href={github.url} ariaLabel="GitHub">
                  <GithubIcon className="size-4 shrink-0" />
                </SocialLink>
                <Separator
                  orientation="vertical"
                  className="mx-3.5 h-[19px] w-px bg-[hsla(0,0%,92%,1)] dark:bg-[hsla(0,0%,12%,1)]"
                  decorative
                />
                <SocialLink
                  href={xcom.url}
                  ariaLabel="X formerly known as Twitter"
                >
                  <TwitterIcon className="size-4 shrink-0" />
                </SocialLink>
              </ul>
            </div>
          </div>
        </GridSection>
      </ContentWrapper>
    </>
  );
}

const SocialLink = ({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: ReactNode;
}) => (
  <li className="inline-flex leading-[0]">
    <a
      href={href}
      rel="noopener"
      target="_blank"
      className="m-[-3px] rounded-full p-[3px] text-[#666] transition-all duration-200 hover:text-black focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:text-[#aaa] dark:hover:text-white dark:focus-visible:shadow-[0_0_0_2px_#0a0a0a,_0_0_0_4px_hsla(212,100%,48%,1)]"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  </li>
);
