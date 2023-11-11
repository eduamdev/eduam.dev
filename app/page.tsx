import Balancer from 'react-wrap-balancer';
import { Separator } from '@/app/components/ui/separator';
import { Icons } from '@/app/components/icons';
import { siteConfig } from '@/config/site';
import '@/app/styles/prose.css';

export default function HomePage() {
  const { xcom, linkedin, github } = siteConfig.links;

  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col gap-6 px-6 py-12 sm:py-20 md:py-24">
      <header className="pb-6">
        <Icons.wordmark className="h-[14px] w-auto shrink-0" />
      </header>
      <main>
        <article className="flex flex-col">
          <div className="prose select-within w-full">
            <p>
              <Balancer>
                I&apos;m <strong>Eduardo</strong>{' '}
                <a href={xcom.url} rel="noreferrer">
                  ({xcom.name})
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
                <a href={linkedin.url} rel="noopener">
                  Lets work together
                  <span className="inline-flex">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>
              </Balancer>
            </p>
            <h2>Projects</h2>
            <ul>
              <li>
                <a href="https://carhive.eduam.dev/" rel="noreferrer">
                  CarHive
                  <span className="inline-flex">
                    <Icons.arrowUpRight className="h-[14px] w-[14px]" />
                  </span>
                </a>
                , an{' '}
                <a href={`${github.url}/carhive`} rel="noreferrer">
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
        className="h-[1px] w-full bg-[#eaeaea] dark:bg-[#333]"
        decorative
      />
      <footer>
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
