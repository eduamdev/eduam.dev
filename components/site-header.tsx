import { Navbar } from '@/components/navbar';

export function SiteHeader() {
  return (
    <header className="static inset-x-0 bottom-auto top-0 mx-auto block min-h-[3.5rem] w-full max-w-6xl sm:min-h-[5rem] sm:px-0">
      <Navbar />
    </header>
  );
}
