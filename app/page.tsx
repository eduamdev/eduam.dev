import Balancer from 'react-wrap-balancer';
import { Separator } from '@/app/components/ui/separator';
import { Wordmark } from '@/app/components/wordmark';
import { fontSerif } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import '@/app/styles/prose.css';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col gap-6 px-6 py-12 sm:py-20 md:py-24">
      <header className="pb-6">
        <Wordmark className="h-[14px] w-auto shrink-0" />
      </header>
      <main>
        <article className="flex flex-col">
          <div className="prose select-within w-full">
            <p className={fontSerif.className}>
              <em>
                I&apos;m <strong>Eduardo</strong>, a{' '}
                <strong>frontend developer</strong> based in{' '}
                <strong>Mexico</strong>.
              </em>
            </p>
            <p>
              <Balancer>
                I specialize in meticulously designing and developing stunning,
                high-performance websites that seamlessly blend aesthetics and
                functionality.
              </Balancer>
            </p>
            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={siteConfig.links.linkedin.url}
                rel="noreferrer"
                target="_blank"
              >
                {siteConfig.links.linkedin.name}
              </a>
              <a
                href={siteConfig.links.github.url}
                rel="noreferrer"
                target="_blank"
              >
                {siteConfig.links.github.name}
              </a>

              <a
                href={siteConfig.links.xcom.url}
                rel="noreferrer"
                target="_blank"
              >
                {siteConfig.links.xcom.name}
              </a>
            </div>
            <h3>Projects</h3>
            <ul>
              <li>
                <a
                  href="https://carhive.eduam.dev/"
                  rel="noreferrer"
                  target="_blank"
                >
                  CarHive.
                </a>{' '}
                An open source app...
              </li>
              <li>
                <a
                  href="https://spotify-web-ui-clone.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Spotify Web UI
                </a>
                .
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-slate-200 dark:bg-slate-700"
        decorative
      />
      <footer className="flex select-none flex-col gap-1 text-[13px] text-slate-500 dark:text-slate-400 sm:flex-row sm:gap-2">
        <span>Copyright ©{new Date().getFullYear()} eduam.dev.</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
}
