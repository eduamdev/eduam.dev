import { Navbar } from '@/components/navbar';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export const socialLinks = [
  {
    name: siteConfig.links.github.name,
    url: siteConfig.links.github.url,
    icon: Icons.github,
  },
  {
    name: siteConfig.links.linkedin.name,
    url: siteConfig.links.linkedin.url,
    icon: Icons.linkedin,
  },
  {
    name: siteConfig.links.x.name,
    url: siteConfig.links.x.url,
    icon: Icons.x,
  },
];

export function SiteHeader() {
  return (
    <header className="static inset-x-0 bottom-auto top-0 mx-auto block min-h-[3.5rem] w-full max-w-6xl sm:min-h-[5rem] sm:px-0">
      <Navbar />
    </header>
  );
}
