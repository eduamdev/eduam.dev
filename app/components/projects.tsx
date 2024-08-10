import carhive from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { Icons } from '@/app/components/icons';
import { ProjectCard } from './project-card';
import { cn } from '@/lib/utils';

const GridWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    {children}
  </div>
);

const ProjectCardSeparator: React.FC<{ className?: string }> = ({
  className,
}) => (
  <GridWrapper>
    <div></div>
    <div
      className={cn(
        `relative h-10 after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']`,
        className,
      )}
    ></div>
    <div></div>
  </GridWrapper>
);

const ProjectSectionHeader = () => (
  <GridWrapper>
    <div></div>
    <div className="relative after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']">
      <div className="px-5 py-7 md:p-9">
        <h2 className="text-left text-lg font-semibold md:text-xl">Projects</h2>
      </div>
    </div>
    <div></div>
  </GridWrapper>
);

export function Projects() {
  const {
    links: { github },
  } = siteConfig;

  const projectData = [
    {
      title: 'Carhive',
      description:
        'Embark on a streamlined car rental experience with CarHive.',
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
    },
    {
      title: 'Notespace',
      description:
        'Embark on a streamlined car rental experience with CarHive.',
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
    },
  ];

  return (
    <section>
      <ProjectSectionHeader />
      {projectData.map((project, index) => (
        <div key={project.title}>
          <ProjectCard {...project} />
          {index < projectData.length - 1 && <ProjectCardSeparator />}
        </div>
      ))}
      <ProjectCardSeparator className="h-16" />
    </section>
  );
}
