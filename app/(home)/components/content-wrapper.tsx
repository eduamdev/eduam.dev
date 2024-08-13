import { ReactNode } from 'react';
import { BorderWrapper } from './border-wrapper';

export function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
      <BorderWrapper />
      {children}
      <BorderWrapper />
    </div>
  );
}
