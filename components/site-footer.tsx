export function SiteFooter() {
  return (
    <footer className="mx-auto mb-16 w-full max-w-none px-5  sm:max-w-[90%] sm:px-0 2xl:max-w-7xl">
      <p className="flex flex-row items-center justify-start gap-x-1  text-center text-sm text-neutral-600 dark:text-neutral-400 lg:text-[15px]">
        Copyright ©{new Date().getFullYear()} eduam.dev. All rights reserved.
      </p>
    </footer>
  );
}
