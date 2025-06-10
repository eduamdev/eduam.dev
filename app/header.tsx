import Image from 'next/image';
import eduamdev from '@/assets/images/eduamdev.png';
import { siteConfig } from '@/config/site';
import { SocialLink } from '@/components/social-link';
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandX,
} from '@tabler/icons-react';
import TextFade from '@/components/text-fade';
import { headers } from 'next/headers';
import { MotionConfig } from 'motion/react';

export async function Header() {
  const {
    name,
    username,
    links: { xcom, github, bluesky },
  } = siteConfig;

  const nonce = (await headers()).get('x-nonce');

  return (
    <header className="z-60 sticky top-0 flex min-h-[var(--header-height)] items-center justify-between gap-6 bg-neutral-50/80 px-5 backdrop-blur-sm md:px-9">
      <div className="flex items-center gap-x-3">
        <Image
          src={eduamdev}
          alt={`${name} Avatar`}
          width={36}
          height={36}
          priority
          className="hidden aspect-square size-9 rounded-full md:block"
        />
        <Image
          src={eduamdev}
          alt={`${name} Avatar`}
          width={28}
          height={28}
          priority
          className="aspect-square size-7 rounded-full md:hidden"
        />
        <div className="flex flex-col items-stretch gap-y-1.5">
          {nonce ? (
            <MotionConfig nonce={nonce}>
              <TextFade
                text={name}
                className="text-sm font-medium leading-none text-black"
              />
            </MotionConfig>
          ) : (
            <span className="text-sm font-medium leading-none text-black">
              {name}
            </span>
          )}
          <span className="hidden text-xs leading-none tracking-wide text-neutral-600 md:block">
            @{username}
          </span>
        </div>
      </div>
      <nav
        aria-label="Social Links"
        className="hidden items-center justify-center gap-x-2 sm:flex"
      >
        <SocialLink href={github.url} ariaLabel="Visit GitHub profile">
          <IconBrandGithub />
        </SocialLink>
        <SocialLink href={xcom.url} ariaLabel="Visit Twitter profile">
          <IconBrandX />
        </SocialLink>
        <SocialLink href={bluesky.url} ariaLabel="Visit Bluesky profile">
          <IconBrandBluesky />
        </SocialLink>
      </nav>
    </header>
  );
}
