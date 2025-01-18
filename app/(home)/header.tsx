import Image from 'next/image';
import { GridWrapper } from '@/components/grid-wrapper';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import eduamdev from '@/assets/images/eduamdev.png';
import { siteConfig } from '@/config/site';
import { SocialLink } from '@/components/social-link';

export function Header() {
  return (
    <GridWrapper className="sticky top-0 z-20 bg-neutral-50">
      <header
        className="relative flex h-[var(--header-height)] items-center justify-between px-5 md:px-9"
        style={
          {
            '--header-height': '70px',
          } as React.CSSProperties
        }
      >
        <Avatar />
        <nav
          aria-label="Social Links"
          className="flex items-center justify-center gap-x-2"
        >
          <SocialLink
            href={`https://github.com/eduamdev`}
            ariaLabel="Visit GitHub profile"
          >
            <IconBrandGithub />
          </SocialLink>
          <SocialLink
            href={`https://x.com/eduamdev`}
            ariaLabel="Visit Twitter profile"
          >
            <IconBrandX />
          </SocialLink>
        </nav>
      </header>
    </GridWrapper>
  );
}

const Avatar = () => {
  const { name, username } = siteConfig;

  return (
    <div className="flex h-full shrink-0 items-center gap-x-3">
      <Image
        src={eduamdev}
        alt={`${name} Avatar`}
        width={32}
        height={32}
        priority
        className="aspect-square size-8 rounded-full"
      />
      <div className="flex flex-col items-stretch gap-y-1.5">
        <span className="text-sm font-medium leading-none text-black">
          {name}
        </span>
        <span className="text-[13px] leading-none tracking-wide text-neutral-600">
          @{username}
        </span>
      </div>
    </div>
  );
};
