import carhive from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';
import { ProjectCard } from './project-card';

const ProjectCardSeparator = () => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    <div></div>
    <div className="relative h-10 after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']"></div>
    <div></div>
  </div>
);

const ProjectHeading = () => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    <div></div>
    <div className="relative after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']">
      <div className="px-5 py-7 md:p-9">
        <h2 className="text-left text-lg font-semibold md:text-xl">Projects</h2>
      </div>
    </div>
    <div></div>
  </div>
);

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  const carhiveData = {
    title: 'Carhive',
    description: 'Embark on a streamlined car rental experience with CarHive.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Cloudinary',
      'Clerk',
      'Leaflet',
    ],
    type: 'web application',
    imageSrc: carhive,
    logo: <Icons.carhiveLogo className="size-6 shrink-0 text-black" />,
    features: [
      'Interactive Map',
      'Multi-Filter Search',
      'Authentication',
      'Form Validation',
    ],
    githubUrl: `${github.url}/carhive`,
    liveUrl: 'https://carhive.eduam.dev',
  };

  const notespaceData = {
    title: 'Notespace',
    description: 'Embark on a streamlined car rental experience with CarHive.',
    technologies: [
      'Vite',
      'React',
      'TypeScript',
      'TanStack Query',
      'Wouter',
      'Tiptap',
    ],
    type: 'web application',
    imageSrc: carhive,
    logo: <Icons.carhiveLogo className="size-6 shrink-0 text-black" />,
    features: [
      'Interactive Map',
      'Multi-Filter Search',
      'Authentication',
      'Form Validation',
    ],
    githubUrl: '#',
    liveUrl: '#',
    alignment: 'right',
  };

  return (
    <section>
      <ProjectHeading />
      <ProjectCard {...carhiveData} />
      <ProjectCardSeparator />
      <ProjectCard {...notespaceData} />
    </section>
  );
}
