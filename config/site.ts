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
  work: [
    {
      _id: 'w-01',
      url: 'https://eduamdev.github.io/car-rental-react',
      name: 'Rides',
      description: 'Car Rental Website built with React',
      image: {
        name: 'rides',
        altText: 'Homepage of a car rental website with a black background.',
      },
    },
    {
      _id: 'w-02',
      url: 'https://spotify-web-ui-clone.vercel.app',
      name: 'Spotify',
      description:
        'Web Player UI Clone built with Next.js, TailwindCSS and Shadcn/ui components',
      image: {
        name: 'spotify',
        altText:
          'Spotify Web Player that displays lists of recently listened music and personalized recommendations containing puns with song names and tech personalities.',
      },
    },
  ],
};

export type SiteConfig = typeof siteConfig;
