import Balancer from 'react-wrap-balancer';
import { Separator } from '@/app/components/ui/separator';
import { Icons } from '@/app/components/icons';
import { SocialLinks } from '@/app/components/social-links';
import { siteConfig } from '@/config/site';
import '@/app/styles/prose.css';

export default function HomePage() {
  const {
    links: { linkedin, github },
  } = siteConfig;

  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col gap-6 px-6 py-12 sm:py-20 xl:py-24">
      <header className="pb-10">
        <div className="flex items-center justify-between gap-10">
          <Icons.wordmark className="h-[15px] w-auto shrink-0" />
          <SocialLinks />
        </div>
      </header>
      <main>
        <article className="flex flex-col">
          <div className="prose select-within w-full">
            <p>
              <Balancer>
                I&apos;m{' '}
                <a href={github.url} target="_blank" rel="noreferrer">
                  Eduardo
                  <span className="inline-flex">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>
                , a frontend development specialist and software engineer based
                in Mexico.
              </Balancer>
            </p>
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
                startups/founders looking to define their online presence.{' '}
                <a href={linkedin.url} target="_blank" rel="noopener">
                  Lets work together
                  <span className="inline-flex">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>
              </Balancer>
            </p>
            <h3>Projects</h3>
            <ul>
              <li>
                <strong>
                  <a
                    href="https://carhive.eduam.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CarHive
                    <span className="inline-flex">
                      <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                    </span>
                  </a>
                </strong>
                , an{' '}
                <a
                  href={`${github.url}/carhive`}
                  target="_blank"
                  rel="noreferrer"
                >
                  open-source
                  <span className="inline-flex">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>{' '}
                car rental application.
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-[hsla(0,0%,92%,1)] dark:bg-[hsla(0,0%,12%,1)]"
        decorative
      />
      <footer className="pt-2">
        <span className="select-none text-sm text-[#666] dark:text-[#888]">
          <Balancer>
            Copyright ©{new Date().getFullYear()} eduam.dev. All rights
            reserved.
          </Balancer>
        </span>
      </footer>
    </div>
  );
}
