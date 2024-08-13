export function GridCornerDecorators() {
  return (
    <>
      <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
      <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden"></div>
    </>
  );
}
