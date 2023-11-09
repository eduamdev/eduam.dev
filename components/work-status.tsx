import { StatusDot } from '@/components/status-dot';
import { Button } from './ui/button';

export function WorkStatus({ available = false }: { available?: boolean }) {
  if (!available) {
    return null;
  }

  return (
    <Button
      className="gap-2 rounded-full hover:bg-transparent dark:hover:bg-neutral-950"
      asChild
    >
      <div>
        <StatusDot />
        <span className="inline-block truncate text-center text-sm font-medium">
          Open to Remote Work
        </span>
      </div>
    </Button>
  );
}
