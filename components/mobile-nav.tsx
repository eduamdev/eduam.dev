import { Icons } from '@/components/icons';

export function MobileNav() {
  return (
    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <Icons.menu className="h-4 w-4 text-white dark:text-black" />
    </button>
  );
}
