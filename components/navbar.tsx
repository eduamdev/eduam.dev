'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollYMin = 20;
    const scrollYMax = 317;
    const rgbMax = Number(
      getComputedStyle(document.body).getPropertyValue('--rgbMax'),
    );
    const alphaMax = 0.8;

    if (ref && ref.current) {
      if (latest < scrollYMin)
        ref.current.style.backgroundColor = 'var(--background)';

      if (latest > scrollYMin && latest < scrollYMax) {
        const red = Math.round((latest * rgbMax) / scrollYMax);
        const green = Math.round((latest * rgbMax) / scrollYMax);
        const blue = Math.round((latest * rgbMax) / scrollYMax);
        const alpha = ((latest * alphaMax) / scrollYMax).toFixed(1);

        ref.current.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
      }

      if (latest > scrollYMax)
        ref.current.style.backgroundColor = 'var(--background-alpha)';
    }
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 bottom-auto top-0 z-20 mx-auto mt-[15px] flex h-auto w-[90%] min-w-[330px] max-w-[700px] flex-row items-center justify-between gap-x-4 rounded-xl border-[length:0.5px] border-black/[0.05] bg-white px-2 py-1 backdrop-blur-[10px] transition-colors duration-200 [transition-timing-function:ease] dark:border-white/[0.1] dark:bg-black sm:w-[600px]"
      style={{ willChange: 'background' }}
    >
      <Link href="/" className="-m-1 ml-1 flex p-1">
        <Icons.logo className="h-4 w-auto align-middle sm:h-[17.5px]" />
      </Link>
      {/* Allow horizontal scrolling to avoid overlapping items on very small devices (<360px) */}
      <div className="static flex flex-1 items-center justify-end overflow-x-hidden">
        <ul className="shrink-1 flex grow-0 basis-auto items-stretch overflow-x-hidden text-[13px] md:text-sm">
          {Object.entries(siteConfig.links).map(([key, value]) => (
            <a
              key={key}
              href={value.url}
              rel="noreferrer"
              className="relative mx-auto inline-block px-2.5 py-2 text-left align-top font-medium text-neutral-600 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-white sm:px-4 sm:py-3"
            >
              <li>{value.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
