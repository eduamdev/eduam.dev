import { siteConfig } from '@/config/site';
import { ContentWrapper } from '../components/content-wrapper';
import { GridSection } from '../components/grid-section';
import { ChevronRightIcon } from '@/app/components/icons/chevron-right';

export function Summary() {
  const { email } = siteConfig;

  return (
    <ContentWrapper>
      <GridSection>
        <div className="px-5 py-7 md:p-9">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-balance text-lg font-semibold md:text-[19px]">
              I&apos;m a Software Engineer based in Mexico.
            </h1>
            <div className="pt-6">
              <p className="text-balance">
                I&apos;ve focused on crafting visually engaging websites and
                intuitive user interfaces. Driven by a passion for excellence, I
                ensure high performance for smooth, fast experiences. I&apos;m
                also committed to inclusive design, making sure my work is
                accessible to everyone.
              </p>
            </div>
            <CallToAction email={email} />
          </div>
        </div>
      </GridSection>
    </ContentWrapper>
  );
}

const CallToAction = ({ email }: { email: string }) => (
  <div className="pt-7">
    <a
      href={`mailto:${email}?subject=Project inquiry`}
      rel="noopener"
      target="_blank"
      className="inline-flex h-8 items-center justify-center gap-1 rounded-[50px] bg-neutral-950 py-1 pl-[14px] pr-[6px] text-sm font-medium text-white shadow-[rgba(0,0,0,0.14)_0_0.8px_0.8px_-0.6875px,rgb(0,0,0)_0_2.4px_2.4px_-1.375px,rgba(0,0,0,0.13)_0_6.38px_6.38px_-2.0625px,rgba(0,0,0,0.11)_0_20px_20px_-2.75px] transition-colors hover:bg-neutral-700 dark:bg-[#555] dark:text-[rgb(237,237,237)] dark:hover:bg-neutral-700"
    >
      Open for projects
      <span className="flex size-6 items-center justify-center">
        <ChevronRightIcon className="size-4 shrink-0 text-neutral-400" />
      </span>
    </a>
  </div>
);
