import { socialLinks } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function Links() {
  return (
    <div className="mx-auto w-full max-w-none px-5 pb-8 pt-16 sm:max-w-[90%] sm:px-0 2xl:max-w-7xl">
      <div className="h-28 w-full rounded-lg border border-black/[0.1] dark:border-white/[0.15] sm:rounded-xl">
        <div className="flex h-full items-center justify-center gap-10 p-4">
          <h2 className="text-left text-2xl font-semibold md:text-3xl md:leading-10">
            Let&apos;s connect.
          </h2>
          <ul className="flex flex-row flex-nowrap items-start justify-start gap-5 md:justify-end">
            {socialLinks.map(({ name, url, icon: Icon }) => {
              return (
                <Button
                  size={'icon'}
                  key={name}
                  className="h-6 w-6 rounded-full shadow-none transition-colors hover:bg-neutral-50"
                  asChild
                >
                  <a href={url} rel="noreferrer" target="_blank">
                    <li>
                      {Icon ? (
                        <Icon
                          className={cn(
                            'shrink-0',
                            name === siteConfig.links.github.name &&
                              ' h-[18px] w-auto align-middle',
                            name === siteConfig.links.linkedin.name &&
                              ' h-[22px] w-auto align-middle',
                            name === siteConfig.links.x.name &&
                              ' h-[15px] w-auto align-middle',
                          )}
                        />
                      ) : null}
                    </li>
                  </a>
                </Button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
