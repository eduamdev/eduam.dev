import carhive from '../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { CarhiveIcon } from '@/app/components/icons/carhive';
import { NotespaceIcon } from '@/app/components/icons/notespace';
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
      description: 'Experience seamless car rentals',
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
      logo: <CarhiveIcon className="size-6 shrink-0 text-black" />,
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
        'Organize and manage your notes, featuring rich text editing, notebook structuring, and tag management',
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
      logo: <NotespaceIcon className="size-6 shrink-0 text-black" />,
      features: [
        'Rich Text Editor',
        'Note Management',
        'Debounced Autosave',
        'Tagging & Search',
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
      <ProjectCardSeparator className="h-20" />
    </section>
  );
}
