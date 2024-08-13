import { ReactNode } from 'react';
import { GridCornerDecorators } from './grid-corner-decorators';

export function GridSection({ children }: { children?: ReactNode }) {
  return (
    <section className="relative after:absolute after:inset-0 after:border-x after:border-b after:border-[var(--grid-border-color)] after:content-['']">
      <GridCornerDecorators />
      {children}
    </section>
  );
}
