export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <p className="text-[15px] tracking-[-0.9%] text-neutral-500 dark:text-neutral-400">
        <span aria-hidden="true">©</span> {currentYear} eduam.dev.
      </p>
    </footer>
  );
}
