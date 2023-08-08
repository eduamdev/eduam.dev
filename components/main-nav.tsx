import Link from "next/link";

export function MainNav() {
  return (
    <nav>
      <ul className="text-sm flex items-center justify-center gap-7">
        <li className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100">
          <Link href="/about">About</Link>
        </li>
        <li className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100">
          <Link href="/uses">Uses</Link>
        </li>
      </ul>
    </nav>
  );
}
