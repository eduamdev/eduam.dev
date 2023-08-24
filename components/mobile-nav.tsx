'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

const loadFeatures = () =>
  import('./framer-motion/feature-bundle.js').then((mod) => mod.default);

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="sm:hidden">
      <div className="fixed inset-x-0 top-0 z-20 mx-5 mt-[15px] flex h-auto w-auto max-w-[700px] flex-row items-center justify-between gap-x-7 rounded-lg border border-black/[0.08] bg-white px-2 py-2.5 backdrop-blur-[10px] transition-colors duration-200 dark:border-white/[0.1] dark:bg-black">
        <Link href="/" className="-m-1 ml-0.5 flex p-1">
          <Icons.logo className="h-[17.5px] w-auto align-middle" />
        </Link>
        <CollapsibleTrigger asChild>
          <button className="mr-1">
            {isOpen ? (
              <Icons.close className="h-6 w-6" />
            ) : (
              <Icons.menu className="h-6 w-6" />
            )}
          </button>
        </CollapsibleTrigger>
      </div>
      <LazyMotion features={loadFeatures}>
        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent forceMount asChild>
              <m.nav
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{
                  opacity: 1,
                  transform: 'translateY(0)',
                }}
                exit={{
                  opacity: 0,
                  transform: 'translateY(-10px)',
                }}
                className="fixed inset-x-0 top-[70px] z-20 ml-0 mt-0 block h-auto min-w-[200px] flex-1 overflow-auto rounded-lg border-y border-black/[0.05] bg-[#fafafa] px-5 pb-2 pt-5 dark:border-white/[0.1] dark:bg-[#131313]"
              >
                <ul className="shrink-1 flex grow-0 basis-auto flex-col items-start justify-center text-neutral-700 dark:text-neutral-400">
                  {Object.entries(siteConfig.links).map(([key, value]) => (
                    <a
                      href={value.url}
                      key={key}
                      rel="noreferrer"
                      className="text-medium relative mx-auto block w-full self-start p-3 pl-0 text-sm transition-colors hover:text-black dark:hover:text-white"
                    >
                      <li>{value.name}</li>
                    </a>
                  ))}
                </ul>
              </m.nav>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </LazyMotion>
    </Collapsible>
  );
}
