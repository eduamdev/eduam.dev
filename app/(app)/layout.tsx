import { Header } from '../header';

export default function LayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="before:z-70 relative ml-px mt-px flex w-screen min-w-[var(--content-min-width)] max-w-[var(--content-width)] flex-col before:pointer-events-none before:absolute before:inset-0 before:left-[calc(-1_*_1px)] before:top-[calc(-1_*_1px)] before:border-neutral-200 before:content-[''] before:min-[960px]:border before:min-[980px]:border-t-0">
          <Header />
          {children}
        </div>
      </div>
      <div className="flex items-center justify-center pb-14 pt-6">
        <footer>
          <p className="max-w-[var(--content-width)] px-5 text-center text-[13px] text-neutral-500 md:px-9 lg:text-sm">
            Copyright <span aria-hidden="true">©</span>{' '}
            {new Date().getFullYear()} eduam.dev. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
