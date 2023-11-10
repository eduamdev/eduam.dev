import Balancer from 'react-wrap-balancer';
import { Separator } from '@/app/components/ui/separator';
import { Wordmark } from '@/app/components/wordmark';
import { siteConfig } from '@/config/site';
import '@/app/styles/prose.css';

export default function HomePage() {
  const { xcom, linkedin, github } = siteConfig.links;

  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col gap-6 px-6 py-12 sm:py-20 md:py-24">
      <header className="pb-6">
        <Wordmark className="h-[14px] w-auto shrink-0" />
      </header>
      <main>
        <article className="flex flex-col">
          <div className="prose select-within w-full">
            <p>
              <Balancer>
                I&apos;m <strong>Eduardo</strong>{' '}
                <a href={xcom.url} rel="noreferrer">
                  ({xcom.name})
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
                <a href={linkedin.url} rel="noopener">
                  Lets work together →
                </a>
              </Balancer>
            </p>
            <h2>Projects</h2>
            <ul>
              <li>
                <a href="https://carhive.eduam.dev/" rel="noreferrer">
                  CarHive
                </a>
                , an{' '}
                <a href={`${github.url}/carhive`} rel="noreferrer">
                  open-source
                </a>{' '}
                car rental application.
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-700"
        decorative
      />
      <footer className="flex select-none flex-col gap-1 text-xs text-neutral-500 dark:text-neutral-400 sm:flex-row sm:gap-2">
        <span>Copyright ©{new Date().getFullYear()} eduam.dev.</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
}
