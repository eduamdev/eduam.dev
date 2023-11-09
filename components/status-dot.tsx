export function StatusDot() {
  return (
    <span className="relative flex h-2 w-2 items-center justify-center">
      <span className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-lime-500 opacity-75"></span>
      <span className="h-2 w-2 shrink-0 grow-0 rounded-full bg-green-500"></span>
    </span>
  );
}
