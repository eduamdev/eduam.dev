import { siteConfig } from '@/config/site';

export function MainNav() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2 text-sm">
        {Object.entries(siteConfig.links).map(([key, value]) => (
          <li
            key={key}
            className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            <a href={value.url} rel="noreferrer" className="px-2 py-1">
              {value.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
