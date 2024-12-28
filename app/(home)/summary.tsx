import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Summary() {
  const { email } = siteConfig;

  return (
    <section className="relative">
      <div className="before:absolute before:inset-0 before:border-x before:border-t before:border-[var(--grid-border-color)] before:content-['']"></div>
      <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
      <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
      <div className="py-2 md:py-0">
        <div className="grid grid-cols-3">
          <div className="col-span-3">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-lg font-semibold text-black dark:text-white md:text-[22px]">
                  Software Engineer based in Mexico.
                </h1>
                <div className="pt-6">
                  <p className="max-w-prose text-balance dark:text-neutral-300">
                    I specialize in creating visually engaging websites and
                    intuitive user interfaces. Committed to excellence, I
                    deliver high-performance, fast-loading experiences while
                    prioritizing accessibility through inclusive design.
                  </p>
                </div>
                <div className="pt-6">
                  <p className="text-balance dark:text-neutral-300">
                    I’m particularly interested in collaborating with
                    early-stage startups and founders, using my expertise to
                    help shape and define their unique online presence.
                  </p>
                </div>
                <div className="pt-8">
                  <Button asChild>
                    <a
                      href={`mailto:${email}?subject=Project inquiry`}
                      rel="noopener"
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
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
