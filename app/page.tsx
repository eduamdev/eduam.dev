import Balancer from 'react-wrap-balancer';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-[--content-width] flex-col gap-6 px-6 py-12 sm:py-20 md:py-24">
      <article className="flex flex-col">
        <div className="prose select-within w-full">
          <p>
            <em>
              I&apos;m <strong>Eduardo</strong>, a frontend developer based in{' '}
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
                Spotify Web UI (clone)
              </a>
              .
            </li>
          </ul>
        </div>
      </article>
      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-700"
        decorative
      />
      <footer className="flex select-none flex-col gap-1 text-[13px] text-neutral-500 dark:text-neutral-400 sm:flex-row sm:gap-2">
        <span>Copyright ©{new Date().getFullYear()} eduam.dev.</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
}
