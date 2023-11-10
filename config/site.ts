export const siteConfig = {
  name: 'eduamdev',
  url: 'https://eduam.dev',
  description: 'software engineer, frontend developer',
  links: {
    github: { name: 'GitHub', url: 'https://github.com/eduamdev' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eduamdev' },
    xcom: { name: 'x.com', url: 'https://x.com/eduamdev' },
  },
  ogImage: '/opengraph-image.png',
  manifest: '/manifest.webmanifest',
};

export type SiteConfig = typeof siteConfig;
