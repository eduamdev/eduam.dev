import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandX,
  IconChevronRight,
} from '@tabler/icons-react';
import { SocialLink } from '@/components/social-link';
import { Separator } from '@/components/ui/separator';
import { Fragment } from 'react';
import { ProjectCard } from '@/components/project-card';
import { projects } from './projects';

export default function HomePage() {
  return (
    <div className="relative ml-px mt-px flex min-w-[var(--content-min-width)] max-w-[var(--content-width)] flex-col before:pointer-events-none before:absolute before:inset-0 before:left-[calc(-1_*_1px)] before:top-[calc(-1_*_1px)] before:border before:border-t-0 before:border-neutral-200 before:content-['']">
      <main>
        <div className="p-5 py-10 md:p-9 md:py-16">
          <h1 className="text-[17px] font-semibold text-black md:text-lg">
            I&apos;m Eduardo, a frontend developer crafting digital experiences
            in Mexico.
          </h1>
          <div className="space-y-4 pt-4 leading-[1.7rem]">
            <p>
              I create beautiful, performant web experiences that users love. My
              focus on clean code and modern best practices ensures your project
              not only looks great but runs smoothly across all devices.
            </p>
            <p>
              Whether you need a complete website overhaul, a new web
              application, or just want to enhance your existing digital
              presence, I&apos;m here to help. Let&apos;s collaborate to bring
              your ideas to life with cutting-edge technology and thoughtful
              design.
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
        <div className="flex items-center justify-center px-5 py-7 md:px-9">
          <h2 className="font-semibold text-black md:text-[17px]">
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
        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-neutral-200 p-7 sm:p-9 md:gap-9">
          <h2 className="text-left text-lg font-semibold md:text-[19px]">
            Let&apos;s connect
          </h2>
          <ul className="m-0 flex h-[19px] shrink-0 items-center gap-1.5">
            <li>
              <SocialLink
                href={siteConfig.links.github.url}
                ariaLabel="Visit GitHub profile"
              >
                <IconBrandGithub />
              </SocialLink>
            </li>
            <Separator orientation="vertical" decorative />
            <li>
              <SocialLink
                href={siteConfig.links.xcom.url}
                ariaLabel="Visit Twitter profile"
              >
                <IconBrandX />
              </SocialLink>
            </li>
            <Separator orientation="vertical" decorative />
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
    </div>
  );
}
