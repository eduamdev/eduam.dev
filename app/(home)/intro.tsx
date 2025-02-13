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
          <div className="space-y-5 pt-5 md:text-[17px]">
            <p>
              I specialize in building visually engaging websites and intuitive
              user interfaces. With a strong focus on performance, I strive to
              deliver fast, seamless experiences.
            </p>
            <p>
              I&apos;m always excited to collaborate with others and bring
              unique projects to life. Whether you&apos;re looking to enhance
              your website or create something entirely new, I&apos;d love to
              work together to turn your vision into reality.
            </p>
          </div>
          <div className="pt-7">
            <Button
              size={'sm'}
              className="rounded-[50px] pl-[14px] hover:-translate-y-px"
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
