import { ReactNode } from 'react';

export function BorderWrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="relative after:absolute after:inset-0 after:border-b after:border-[var(--grid-border-color)] after:content-['']">
      {children}
    </div>
  );
}
