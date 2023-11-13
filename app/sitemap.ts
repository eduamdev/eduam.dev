import { MetadataRoute } from 'next';
import { siteConfig } from '@/app/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ];
}
