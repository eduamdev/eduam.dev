import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GridWrapperProps {
  children: ReactNode;
  className?: string;
}

export function GridWrapper({ children, className }: GridWrapperProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] border-b border-[var(--grid-border-color)]',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none relative border-r border-[var(--grid-border-color)]"
      >
        <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
      </div>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none relative border-l border-[var(--grid-border-color)]"
      >
        <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
      </div>
    </div>
  );
}
