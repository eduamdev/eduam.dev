import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Summary() {
  const { email } = siteConfig;

  return (
    <section className="relative">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border-x border-t border-[var(--grid-border-color)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"
      ></div>

      {/* Content */}
      <div className="p-6 pb-10 sm:p-8 sm:pb-12">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg font-semibold tracking-[-1.4%] text-black dark:text-white md:text-[22px] md:tracking-[-1.8%]">
            Software Engineer based in Mexico.
          </h1>
          <p className="max-w-prose pt-6 tracking-[-1.1%] dark:text-neutral-300">
            I specialize in creating visually engaging websites and intuitive
            user interfaces. Committed to excellence, I deliver
            high-performance, fast-loading experiences while prioritizing
            accessibility through inclusive design.
          </p>
          <p className="max-w-prose pt-6 tracking-[-1.1%] dark:text-neutral-300">
            I’m particularly interested in collaborating with early-stage
            startups and founders, using my expertise to help shape and define
            their unique online presence.
          </p>

          <div className="pt-8">
            <Button asChild>
              <a
                href={`mailto:${email}?subject=Project inquiry`}
                aria-label="Send an email for project inquiries"
                rel="noopener noreferrer"
                target="_blank"
              >
                Send an email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 inline size-4 shrink-0 text-neutral-400"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
