export function Footer() {
  return (
    <div className="grid grid-cols-[minmax(var(--content-min-width),var(--content-width))] items-center justify-center">
      <footer className="mx-auto w-full pb-12 pt-6">
        <p className="px-5 text-left text-sm text-[#666] dark:text-[#888] md:px-9">
          Copyright <span aria-hidden="true">©</span>{' '}
          {new Date().getFullYear()} eduam.dev. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
