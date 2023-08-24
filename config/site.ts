export const siteConfig = {
  name: 'Eduardo Ambriz',
  username: 'eduamdev',
  email: 'eduamdev@gmail.com',
  url: 'https://eduardoambriz.com',
  description: '',
  links: {
    github: { name: 'GitHub', url: 'https://github.com/eduamdev' },
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eduamdev' },
    x: { name: 'X', url: 'https://twitter.com/eduamdev' },
  },
  ogImage: {
    url: '',
    alt: '',
  },
  work: [
    {
      _id: 'w-02',
      url: 'https://eduamdev.github.io/car-rental-react',
      name: 'Rides',
      description: 'Car Rental Website',
      image: {
        src: 'w2',
        alt: "Rides' homepage featuring the headline 'Your One-Stop Destination for Car Rentals', a tagline, and a call-to-action button to browse vehicles",
      },
    },
    {
      _id: 'w-01',
      url: 'https://spotify-web-ui-clone.vercel.app',
      name: 'Spotify',
      description: 'Website UI Clone',
      image: {
        src: 'w1',
        alt: '',
      },
    },
  ],
};

export type SiteConfig = typeof siteConfig;
