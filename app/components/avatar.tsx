import Image from 'next/image';
import { siteConfig } from '@/app/config/site';

export function Avatar() {
  return (
    <Image
      src={`https://avatars.githubusercontent.com/${siteConfig.name}?size=120`}
      alt={siteConfig.name}
      width={32}
      height={32}
      priority
      className="aspect-square h-8 w-8 rounded-full border border-black/[0.25] dark:border-white/[0.12]"
    />
  );
}
