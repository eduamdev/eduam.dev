import { ReactNode } from 'react';
import { Button } from './ui/button';

export function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className="hover:bg-transparent"
      asChild
    >
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="text-neutral-700 hover:text-black"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </Button>
  );
}
