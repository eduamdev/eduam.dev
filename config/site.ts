export const siteConfig = {
  name: 'eduamdev',
  url: 'https://eduam.dev',
  description: 'Software Engineer, frontend developer.',
  links: {
    github: { name: 'GitHub', url: 'https://github.com/eduamdev' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eduamdev' },
    x: { name: '𝕏', url: 'https://twitter.com/eduamdev' },
  },
  ogImage: '/opengraph-image.png',
  manifest: '/manifest.webmanifest',
};

export type SiteConfig = typeof siteConfig;
