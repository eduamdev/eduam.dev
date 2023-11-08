import Balancer from 'react-wrap-balancer';
import { socialLinks } from '@/components/site-header';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function Links() {
  return (
    <div className="mx-auto mt-16 w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
      <div className="w-full rounded-lg border border-black/[0.1]  p-4 dark:border-white/[0.15] sm:rounded-xl md:p-6">
        <div className="grid grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <h2 className="w-full text-left text-xl font-semibold md:text-[26px] md:leading-10">
            <Balancer>
              Ready to bring your project to life? <br />
              Let&apos;s work together.
            </Balancer>
          </h2>
          <ul className="flex flex-row flex-wrap items-start justify-start gap-5 md:justify-end">
            {socialLinks.map(({ name, url, icon: Icon }) => {
              return (
                <a key={name} href={url} rel="noreferrer">
                  <li className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl border border-black/[0.1] transition-colors hover:border-black/[0.8]  dark:border-white/[0.12]  dark:hover:border-white/[0.8]  lg:h-8 lg:w-8">
                    {Icon ? (
                      <Icon
                        className={cn(
                          name === siteConfig.links.x.name &&
                            'h-[13px] w-full align-middle lg:h-[14.5px]',
                          name === siteConfig.links.github.name &&
                            'h-[0.9rem] w-full align-middle lg:h-4',
                          name === siteConfig.links.linkedin.name &&
                            'h-5 w-full align-middle lg:h-[21.5px]',
                        )}
                      />
                    ) : null}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
