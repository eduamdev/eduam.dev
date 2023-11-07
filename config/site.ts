export const siteConfig = {
  name: 'Eduardo Ambriz',
  username: 'eduamdev',
  url: 'https://eduardoambriz.com',
  description: 'Software Engineer, frontend developer.',
  links: {
    github: { name: 'GitHub', url: 'https://github.com/eduamdev' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eduamdev' },
    x: { name: '𝕏', url: 'https://twitter.com/eduamdev' },
  },
  ogImage: {
    url: 'https://eduardoambriz.com/og-image.png',
    altText: 'A black background with the word eduamdev in white.',
  },
};

export type SiteConfig = typeof siteConfig;
