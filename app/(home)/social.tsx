import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { GridWrapper } from '@/components/grid-wrapper';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { SocialLink } from '@/components/social-link';

export function Social() {
  const {
    links: { xcom, github },
  } = siteConfig;

  return (
    <GridWrapper>
      <div className="px-5 py-7 md:p-9">
        <div className="flex h-full items-center justify-between gap-10 sm:justify-start">
          <h2 className="text-left text-[22px] font-semibold">
            Let&apos;s connect
          </h2>

          <ul className="m-0 inline-flex shrink-0 items-center">
            <li>
              <SocialLink href={github.url} ariaLabel="Visit GitHub profile">
                <IconBrandGithub />
              </SocialLink>
            </li>
            <Separator
              orientation="vertical"
              className="mx-1.5 h-[19px]"
              decorative
            />
            <li>
              <SocialLink href={xcom.url} ariaLabel="Visit Twitter profile">
                <IconBrandX />
              </SocialLink>
            </li>
          </ul>
        </div>
      </div>
    </GridWrapper>
  );
}
