export function Badge({ label }: { label: string }) {
  return (
    <span className="flex h-min shrink-0 items-center justify-center rounded-[7px] border border-black/10 bg-white px-2 text-xs leading-[24px] tracking-wider text-neutral-700">
      {label}
    </span>
  );
}
