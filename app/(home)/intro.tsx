import { siteConfig } from '@/config/site';
import { GridWrapper } from '@/components/grid-wrapper';
import { IconChevronRight } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export function Intro() {
  const { email } = siteConfig;

  return (
    <GridWrapper>
      <div className="px-5 py-7 md:p-9">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg font-semibold text-black">
            I&apos;m Eduardo, a frontend developer based in Mexico.
          </h1>
          <div className="space-y-5 pt-6">
            <p>
              I&apos;ve focused on crafting visually engaging websites and
              intuitive user interfaces. Driven by a passion for excellence, I
              ensure high performance for smooth, fast experiences. I&apos;m
              also committed to inclusive design, making sure my work is
              accessible to everyone.
            </p>
          </div>
          <div className="pt-7">
            <Button
              size={'sm'}
              className="rounded-[50px] pl-[14px] shadow-[rgba(0,0,0,0.14)_0_0.8px_0.8px_-0.6875px,rgb(0,0,0)_0_2.4px_2.4px_-1.375px,rgba(0,0,0,0.13)_0_6.38px_6.38px_-2.0625px,rgba(0,0,0,0.11)_0_20px_20px_-2.75px]"
              asChild
            >
              <a
                href={`mailto:${email}?subject=Project inquiry`}
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
      </div>
    </GridWrapper>
  );
}
