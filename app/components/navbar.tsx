'use client';

import { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import { siteConfig } from '@/app/config/site';
import { Icons } from '@/app/components/icons';
import { getCssVariableValue } from '@/app/lib/utils';
import { Avatar } from '@/app/components/avatar';

export function Navbar() {
  const {
    links: { xcom, github },
  } = siteConfig;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const minY = getCssVariableValue('--navbar-animation-start-y');
  const maxY = getCssVariableValue('--navbar-animation-end-y');
  let maxNavbarBgRGB = getCssVariableValue('--navbar-bg-max-rgb');
  const maxNavbarBgAlpha = getCssVariableValue('--navbar-bg-max-alpha');

  function calculateNavbarBgColor(
    latest: number,
    maxY: number,
    maxRGB: number,
    maxAlpha: number,
  ) {
    const intensity = Math.round((latest / maxY) * maxRGB);
    const alpha = ((latest / maxY) * maxAlpha).toFixed(1);
    return `rgba(${intensity},${intensity},${intensity},${alpha})`;
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    maxNavbarBgRGB = getCssVariableValue('--navbar-bg-max-rgb');

    if (
      !ref ||
      !ref.current ||
      isNaN(Number(minY)) ||
      isNaN(Number(maxY)) ||
      isNaN(Number(maxNavbarBgRGB)) ||
      isNaN(Number(maxNavbarBgAlpha))
    ) {
      return;
    }

    const minYValue = Number(minY);
    const maxYValue = Number(maxY);
    const maxRgbValue = Number(maxNavbarBgRGB);
    const maxAlphaValue = Number(maxNavbarBgAlpha);

    if (latest < minYValue) {
      ref.current.style.backgroundColor = 'var(--navbar-bg-initial)';
      return;
    }

    if (latest > maxYValue) {
      ref.current.style.backgroundColor = 'var(--navbar-bg-end)';
      return;
    }

    ref.current.style.backgroundColor = calculateNavbarBgColor(
      latest,
      maxYValue,
      maxRgbValue,
      maxAlphaValue,
    );
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-4 bottom-auto top-0 z-20 mx-auto mt-[var(--navbar-offset)] flex h-[var(--navbar-height)] w-[90%] min-w-[var(--content-min-width)] flex-row items-center justify-between gap-x-4 rounded-xl border-[length:0.5px] border-black/[0.08] bg-white px-2 py-1 backdrop-blur-[10px] transition-colors duration-200 [transition-timing-function:ease] dark:border-[hsla(0,0%,18%,1)] dark:bg-black sm:w-[var(--navbar-width)]"
      style={{ willChange: 'background' }}
    >
      <div className="flex shrink-0 items-center gap-x-2.5 pl-1">
        <Avatar />
        <div className="flex flex-col items-stretch">
          <span className="text-[15px] font-medium">eduamdev</span>
          <span className="text-[13px] text-neutral-600 dark:text-neutral-400">
            Software Engineer
          </span>
        </div>
      </div>
      {/* Allow horizontal scrolling to avoid overlapping items on very small devices (<360px) */}
      <nav className="overflow-hidden">
        <ul className="flex items-center gap-x-2 overflow-x-hidden text-sm">
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto inline-block p-3 text-left align-top leading-none text-neutral-600 ring-inset ring-[#0060df] ring-offset-1 ring-offset-white transition-all hover:text-black focus:outline-none focus-visible:ring-2 dark:text-neutral-300 dark:hover:text-white"
          >
            <li>{github.name}</li>
            <Icons.navbarExternalArrow
              aria-hidden="true"
              className="absolute right-1 top-2.5 h-[7px] w-[7px] text-neutral-400 transition-transform group-focus-visible:-translate-y-1 dark:text-neutral-600"
            />
          </a>
          <a
            href={xcom.url}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto inline-block p-3 text-left align-top leading-none text-neutral-600 ring-inset ring-[#0060df] ring-offset-1 ring-offset-white transition-all hover:text-black focus:outline-none focus-visible:ring-2 dark:text-neutral-300 dark:hover:text-white"
          >
            <li>{xcom.name}</li>
            <Icons.navbarExternalArrow
              aria-hidden="true"
              className="absolute right-1 top-2.5 h-[7px] w-[7px] text-neutral-400 transition-transform group-focus-visible:-translate-y-1 dark:text-neutral-600"
            />
          </a>
        </ul>
      </nav>
    </div>
  );
}
