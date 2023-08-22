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
import { cn } from '@/lib/utils';

const loadFeatures = () =>
  import('./framer-motion/feature-bundle.js').then((mod) => mod.default);

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const container = {
    hidden: { opacity: 0, height: 'var(--radix-collapsible-content-height)' },
    show: {
      opacity: 1,
      height: '241.60000610351562px',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
        staggerChildren: 0.075,
      },
    },
    exit: {
      opacity: 0,
      height: '52px',
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <header className="fixed inset-x-0 top-8 z-20 mx-auto grid h-[52px] w-[342px] grid-cols-2 items-center justify-between gap-x-7 rounded-full border border-black/[0.08] bg-white px-3 shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] dark:border-white/[0.18] dark:bg-black dark:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] sm:hidden">
        <div className="z-30 ml-1.5 flex h-full items-center justify-start">
          <Link href="/">
            <Icons.logo
              className={cn(
                'h-[17.5px] w-auto',
                isOpen && 'text-white dark:text-black',
              )}
            />
          </Link>
        </div>
        <div className="z-30 flex h-full items-center justify-end">
          <div className="sm:hidden">
            <CollapsibleTrigger asChild>
              <button
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-black',
                  isOpen &&
                    'bg-white text-black hover:bg-white dark:bg-black dark:text-white dark:hover:bg-black',
                )}
              >
                {isOpen ? (
                  <Icons.close className="h-4 w-4" />
                ) : (
                  <Icons.menu className="h-4 w-4" />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
        </div>
        <LazyMotion features={loadFeatures}>
          <AnimatePresence>
            {isOpen && (
              <CollapsibleContent forceMount asChild>
                <m.nav
                  layout
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="fixed inset-x-0 top-8 mx-auto w-[342px] rounded-3xl border border-white bg-black px-3 dark:border-black dark:bg-white"
                >
                  <ul className="mx-auto flex h-full w-full flex-col items-center justify-center gap-y-2.5 pb-5 pl-1.5 pt-[62px] text-sm text-neutral-400 dark:text-neutral-600">
                    {Object.entries(siteConfig.links).map(([key, value]) => (
                      <m.li
                        key={key}
                        variants={item}
                        className="flex h-8 w-full items-center justify-start"
                      >
                        <a
                          href={value.url}
                          rel="noopener noreferrer"
                          className="w-full p-2 pl-0 hover:text-white dark:hover:text-black"
                        >
                          {value.name}
                        </a>
                      </m.li>
                    ))}
                    <m.li
                      variants={item}
                      className="flex h-8 w-full items-center justify-start"
                    >
                      <a
                        href={`mailto:${siteConfig.email}`}
                        rel="noopener noreferrer"
                        className="w-full p-2 pl-0 hover:text-white dark:hover:text-black "
                      >
                        Let&apos;s chat
                      </a>
                    </m.li>
                  </ul>
                </m.nav>
              </CollapsibleContent>
            )}
          </AnimatePresence>
        </LazyMotion>
      </header>
    </Collapsible>
  );
}
