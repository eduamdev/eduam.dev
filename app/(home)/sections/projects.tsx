import carhiveImage from '../../../public/images/projects/carhive.webp';
import { siteConfig } from '@/config/site';
import { CarhiveIcon } from '@/app/components/icons/carhive';
import { NotespaceIcon } from '@/app/components/icons/notespace';
import { ProjectCard } from '@/app/(home)/components/project-card';
import { cn } from '@/lib/utils';

const GridWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    {children}
  </div>
);

const Separator: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "relative h-10 after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']",
      className,
    )}
  ></div>
);

const SectionHeader: React.FC = () => (
  <div className="relative after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']">
    <div className="px-5 py-7 md:p-9">
      <h2 className="text-left text-lg font-semibold md:text-xl">Projects</h2>
    </div>
  </div>
);

export function Projects() {
  const { github } = siteConfig.links;

  const projects = [
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
      imageSrc: carhiveImage,
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
      imageSrc: carhiveImage,
      logo: <NotespaceIcon className="size-6 shrink-0 text-black" />,
      features: [
        'Rich Text Editor',
        'Note Management',
        'Autosave',
        'Tagging & Search',
      ],
      githubUrl: `${github.url}/notespace`,
      liveUrl: 'https://notespace.eduam.dev',
      alignment: 'right',
    },
  ];

  return (
    <section>
      <GridWrapper>
        <div></div>
        <SectionHeader />
        <div></div>
      </GridWrapper>
      {projects.map((project, index) => (
        <div key={project.title}>
          <ProjectCard {...project} />
          {index < projects.length - 1 && (
            <GridWrapper>
              <div></div>
              <Separator />
              <div></div>
            </GridWrapper>
          )}
        </div>
      ))}
      <GridWrapper>
        <div></div>
        <Separator className="h-20" />
        <div></div>
      </GridWrapper>
    </section>
  );
}
