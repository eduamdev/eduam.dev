import eduamdev from '../../../public/assets/avatars/eduamdev.png';

import { Button } from '@/app/components/ui/button';
import { AvatarImage } from '@/app/components/ui/avatar-image';
import { XBrandIcon } from '@/app/components/icons/x-brand';
import { GithubIcon } from '@/app/components/icons/github';
import { siteConfig } from '@/config/site';

export function Header() {
  const { name, username } = siteConfig;

  return (
    <section>
      <div className="grid grid-cols-3">
        <header className="col-span-3">
          <div className="px-6 sm:px-10">
            <div className="flex h-[var(--header-height)] items-center justify-between">
              <div className="flex shrink-0 items-center justify-center gap-x-2.5">
                <AvatarImage src={eduamdev} alt={username} priority />
                <span className="font-medium">{name}</span>
              </div>
              <div className="inline-flex items-center gap-x-1">
                <Button variant={'link'} size={'icon'} asChild>
                  <a
                    href={`https://x.com/eduamdev`}
                    rel="noopener"
                    target="_blank"
                  >
                    <XBrandIcon className="size-[18px]" />
                  </a>
                </Button>
                <Button variant={'link'} size={'icon'} asChild>
                  <a
                    href={`https://github.com/eduamdev`}
                    rel="noopener"
                    target="_blank"
                  >
                    <GithubIcon className="size-[18px]" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
