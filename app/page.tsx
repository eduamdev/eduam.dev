import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandX,
  IconChevronRight,
  IconMail,
} from '@tabler/icons-react';
import { SocialLink } from '@/components/social-link';
import { Separator } from '@/components/ui/separator';
import { Fragment } from 'react';
import { ProjectCard } from '@/components/project-card';
import { projects } from './projects';
import { Header } from './header';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="before:z-70 relative ml-px mt-px flex w-screen min-w-[var(--content-min-width)] max-w-[var(--content-width)] flex-col before:pointer-events-none before:absolute before:inset-0 before:left-[calc(-1_*_1px)] before:top-[calc(-1_*_1px)] before:border-neutral-200 before:content-[''] before:min-[960px]:border before:min-[980px]:border-t-0">
          <Header />
          <>
            <main>
              <div className="p-5 py-16 md:px-9">
                <h1 className="pt-2 font-semibold tracking-tight text-black md:text-lg">
                  I&apos;m Eduardo, a frontend developer crafting digital
                  experiences in Mexico.
                </h1>
                <div className="space-y-5 pt-5 text-[15px] leading-[22px] lg:text-base lg:leading-[1.6rem]">
                  <p>
                    I create beautiful, performant web experiences that users
                    love. My focus on clean code and modern best practices
                    ensures your project not only looks great but runs smoothly
                    across all devices.
                  </p>
                  <p>
                    Whether you need a complete website overhaul, a new web
                    application, or just want to enhance your existing digital
                    presence, I&apos;m here to help. Let&apos;s collaborate to
                    bring your ideas to life with cutting-edge technology and
                    thoughtful design.
                  </p>
                </div>
                <div className="pt-6">
                  <Button
                    size={'sm'}
                    className="rounded-[50px] pl-[14px] hover:-translate-y-px"
                    asChild
                  >
                    <a
                      href={`mailto:${siteConfig.email}?subject=Project inquiry`}
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
            </main>
            {/* Work */}
            <section>
              <div className="px-5 py-6 md:px-9">
                <h2 className="pt-4 text-[15px] font-semibold text-black md:text-base">
                  Recent Work
                </h2>
              </div>
              {projects.map((project, index) => (
                <Fragment key={project._id}>
                  <ProjectCard
                    {...project}
                    alignment={index % 2 === 0 ? 'left' : 'right'}
                  />
                  {index < projects.length - 1 && <div className="h-14"></div>}
                </Fragment>
              ))}
              <div className="h-20"></div>
            </section>
            {/* Social */}
            <section>
              <div className="flex flex-wrap items-center justify-center gap-7 p-7 sm:p-9 md:gap-9">
                <h2 className="text-left text-[17px] font-semibold md:text-lg">
                  Contact
                </h2>
                <ul className="m-0 flex h-[19px] shrink-0 items-center gap-1.5">
                  <li>
                    <SocialLink
                      href={`mailto:${siteConfig.email}`}
                      ariaLabel="Visit GitHub profile"
                    >
                      <IconMail />
                    </SocialLink>
                  </li>
                  <Separator orientation="vertical" decorative />
                  <li>
                    <SocialLink
                      href={siteConfig.links.github.url}
                      ariaLabel="Visit GitHub profile"
                    >
                      <IconBrandGithub />
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      href={siteConfig.links.xcom.url}
                      ariaLabel="Visit Twitter profile"
                    >
                      <IconBrandX />
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      href={siteConfig.links.bluesky.url}
                      ariaLabel="Visit Bluesky profile"
                    >
                      <IconBrandBluesky />
                    </SocialLink>
                  </li>
                </ul>
              </div>
            </section>
          </>
        </div>
      </div>
      <div className="flex items-center justify-center pb-14 pt-6">
        <footer>
          <p className="max-w-[var(--content-width)] px-5 text-center text-[13px] text-neutral-500 md:px-9 lg:text-sm">
            Copyright <span aria-hidden="true">©</span>{' '}
            {new Date().getFullYear()} eduam.dev. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
