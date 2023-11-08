import Image from 'next/image';
import { siteConfig } from '@/config/site';

export function Avatar() {
  return (
    <Image
      src={`https://avatars.githubusercontent.com/${siteConfig.name}?size=120`}
      alt={siteConfig.name}
      width={40}
      height={40}
      priority
      className="aspect-square h-10 w-10 rounded-full border border-black/[0.1] dark:border-white/[0.12]"
    />
  );
}
