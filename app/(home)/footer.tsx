export function Footer() {
  return (
    <section className="relative">
      <div className="before:absolute before:inset-0 before:border-t before:border-[var(--grid-border-color)] before:content-['']"></div>
      <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>
      <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>
      <div className="flex flex-col">
        <div className="py-10 sm:py-16 md:py-20">
          <p className="text-balance text-sm text-neutral-500 dark:text-neutral-400">
            <span aria-hidden="true">©</span> {new Date().getFullYear()}{' '}
            eduam.dev.
          </p>
        </div>
      </div>
    </section>
  );
}
