import { Work } from './work';

import { GridWrapper } from '@/components/grid-wrapper';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import {
  IconBrandGithub,
  IconBrandX,
  IconChevronRight,
} from '@tabler/icons-react';
import { SocialLink } from '@/components/social-link';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Work />
      <Social />
    </>
  );
}

function Intro() {
  const { email } = siteConfig;

  return (
    <GridWrapper>
      <div className="px-5 py-9 md:p-9">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg font-semibold text-black">
            I&apos;m Eduardo, a frontend developer crafting digital experiences in Mexico.
          </h1>
          <div className="space-y-5 pt-5 md:text-[17px]">
            <p>
              I create beautiful, performant web experiences that users love. My focus on clean code and modern best practices ensures your project not only looks great but runs smoothly across all devices.
            </p>
            <p>
              Whether you need a complete website overhaul, a new web application, or just want to enhance your existing digital presence, I&apos;m here to help. Let&apos;s collaborate to bring your ideas to life with cutting-edge technology and thoughtful design.
            </p>
          </div>
          <div className="pt-7">
            <Button
              size={'sm'}
              className="rounded-[50px] pl-[14px] hover:-translate-y-px"
              asChild
            >
              <a
                href={`mailto:${email}?subject=Project inquiry`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Send an email for project inquiries"
              >
                Send an email
                <IconChevronRight
                  className="inline text-neutral-400"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </GridWrapper>
  );
}

function Social() {
  const {
    links: { xcom, github },
  } = siteConfig;

  return (
    <GridWrapper>
      <div className="px-5 py-7 md:p-9">
        <div className="flex h-full items-center justify-between gap-10 sm:justify-start">
          <h2 className="text-left text-[22px] font-semibold">
            Let&apos;s connect
          </h2>

          <ul className="m-0 flex h-[19px] shrink-0 items-center gap-1.5">
            <li>
              <SocialLink href={github.url} ariaLabel="Visit GitHub profile">
                <IconBrandGithub />
              </SocialLink>
            </li>
            <Separator orientation="vertical" decorative />
            <li>
              <SocialLink href={xcom.url} ariaLabel="Visit Twitter profile">
                <IconBrandX />
              </SocialLink>
            </li>
          </ul>
        </div>
      </div>
    </GridWrapper>
  );
}
