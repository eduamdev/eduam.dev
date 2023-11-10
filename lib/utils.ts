import { siteConfig } from '@/config/site';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return `${siteConfig.url}${path}`;

    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}${path}`;

    default:
      // development
      return `http://localhost:${process.env.PORT ?? 3000}${path}`;
  }
}
