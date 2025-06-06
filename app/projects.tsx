import Image from 'next/image';
import carhive from '@/assets/images/carhive.jpg';
import libroSugerido from '@/assets/images/librosugerido.jpg';
import { siteConfig } from '@/config/site';

const CarhiveLogo = () => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    className="size-4 shrink-0 text-black xl:size-[18px]"
    aria-label="Carhive logomark"
  >
    <path
      d="m22.718 6.718-8.938-4.89a1.613 1.613 0 0 0-1.56 0L3.282 6.72a1.625 1.625 0 0 0-.845 1.422v9.714a1.625 1.625 0 0 0 .846 1.422l8.937 4.892a1.612 1.612 0 0 0 1.56 0l8.938-4.892a1.625 1.625 0 0 0 .845-1.422V8.143a1.625 1.625 0 0 0-.845-1.425ZM13 17.063a4.063 4.063 0 1 1 0-8.126 4.063 4.063 0 0 1 0 8.126Z"
      fill="currentColor"
    />
  </svg>
);

const LibroSugeridoLogo = () => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 shrink-0 text-black xl:size-[18px]"
    aria-label="Libro Sugerido logomark"
  >
    <g clipPath="url(#clip0_2402_219)">
      <path
        d="M2.5 14.8329C3.64014 14.1747 4.93347 13.8281 6.25 13.8281C7.56652 13.8281 8.85986 14.1747 10 14.8329"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.0009C3.64014 3.34264 4.93347 2.99609 6.25 2.99609C7.56652 2.99609 8.85986 3.34264 10 4.0009C11.1401 3.34264 12.4335 2.99609 13.75 2.99609C15.0665 2.99609 16.3599 3.34264 17.5 4.0009"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4V14.8333"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4V14.8333"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 4V8.16667"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.334 13.5833L14.584 14.8333L17.9173 11.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2402_219">
        <rect width="20" height="20" fill="white" transform="translate(0 -1)" />
      </clipPath>
    </defs>
  </svg>
);

export const projects = [
  {
    _id: 'p01',
    title: 'Carhive',
    description:
      'A modern car rental platform featuring real-time availability, comprehensive vehicle details, and a seamless booking experience.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Cloudinary',
      'Clerk',
      'Leaflet',
    ],
    image: (
      <Image
        src={carhive}
        alt="Carhive project screenshot showcasing the car rental interface"
        priority
        placeholder="blur"
        className="w-full object-cover object-left lg:block lg:h-[550px]"
      />
    ),
    logo: <CarhiveLogo />,
    features: [
      'Interactive map-based vehicle discovery',
      'Advanced search with multiple filters',
      'Secure user authentication and profile management',
    ],
    repoUrl: `${siteConfig.links.github.url}/carhive`,
    siteUrl: 'https://carhive.eduam.dev',
    alignment: 'left',
  },
  {
    _id: 'p02',
    title: 'Libro Sugerido',
    description:
      'A literary platform for Spanish-speaking readers, offering curated book recommendations, in-depth reviews, and engaging content. Built with a focus on user experience and content discoverability.',
    techStack: ['Next.js', 'TypeScript', 'Sanity', 'Tailwind CSS'],
    image: (
      <Image
        src={libroSugerido}
        alt="Libro Sugerido website screenshot featuring book reviews and recommendations"
        placeholder="blur"
        className="w-full object-cover object-center lg:h-[550px]"
      />
    ),
    logo: <LibroSugeridoLogo />,
    features: [
      'Dynamic content management system',
      'Optimized for search engines',
      'Responsive design for all devices',
    ],
    alignment: 'right',
  },
];
