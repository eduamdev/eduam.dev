export function Badge({ label }: { label: string }) {
  return (
    <span className="flex h-min shrink-0 items-center justify-center rounded-[7px] border border-black/10 bg-white px-2 text-xs leading-[24px] tracking-wider text-neutral-700 dark:border-white/[0.08] dark:bg-neutral-800 dark:text-neutral-200">
      {label}
    </span>
  );
}
