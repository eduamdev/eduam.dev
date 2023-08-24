import Link from 'next/link';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  return (
    <header className="static inset-x-0 bottom-auto top-0 mx-auto block min-h-[3.5rem] w-full max-w-7xl sm:min-h-[5rem] sm:px-0">
      <div className="fixed inset-x-0 bottom-auto top-0 z-20 mx-auto mt-[15px] hidden h-auto w-[600px] max-w-[700px] flex-row items-center justify-between rounded-xl border-[length:0.5px] border-black/[0.05] bg-white px-2 py-1 backdrop-blur-[10px] transition-colors duration-200 dark:border-white/[0.1] dark:bg-black sm:flex">
        <Link href="/" className="-m-1 ml-1 flex p-1">
          <Icons.logo className="h-[17.5px] w-auto align-middle" />
        </Link>
        <MainNav />
      </div>
      <MobileNav />
    </header>
  );
}
