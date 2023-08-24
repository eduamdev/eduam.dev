import { siteConfig } from '@/config/site';

export function MainNav() {
  return (
    <nav className="static flex flex-1 items-center justify-end">
      <ul className="shrink-1 grow-0 basis-auto items-stretch text-sm">
        {Object.entries(siteConfig.links).map(([key, value]) => (
          <a
            key={key}
            href={value.url}
            rel="noreferrer"
            className="relative mx-auto inline-block px-4 py-3 text-left align-top font-medium text-neutral-700 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <li>{value.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
