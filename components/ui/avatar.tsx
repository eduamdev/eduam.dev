import Image from 'next/image';
import { siteConfig } from '@/config/site';

export function Avatar() {
  return (
    <Image
      src={`https://avatars.githubusercontent.com/${siteConfig.username}?size=64`}
      alt=""
      width={32}
      height={32}
      priority
      className="aspect-square size-8 rounded-full"
    />
  );
}
