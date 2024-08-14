import Image from 'next/image';
import carhiveImage from '../../../public/images/projects/carhive.png';
import notespaceImage from '../../../public/images/projects/notespace.png';
import { siteConfig } from '@/config/site';
import { CarhiveLogo } from '@/app/components/icons/carhive';
import { NotespaceLogo } from '@/app/components/icons/notespace';
import { ProjectCard } from '@/app/(home)/components/project-card';
import { cn } from '@/lib/utils';

const GridWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] flex-row">
    {children}
  </div>
);

const Separator = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative h-14 after:absolute after:inset-0 after:border-x after:border-[var(--grid-border-color)] after:content-['']",
      className,
    )}
  ></div>
);

const SectionHeader = () => (
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
      image: (
        <>
          <Image
            src={carhiveImage}
            alt=""
            priority
            width={924}
            height={550}
            className="hidden h-[550px] w-[924px] object-cover object-left lg:block"
          />
          <Image
            src={carhiveImage}
            alt=""
            priority
            className="ml-2 mt-2 object-cover object-left sm:m-0 lg:hidden"
            sizes="100vw"
          />
        </>
      ),
      logo: <CarhiveLogo className="size-5 shrink-0 text-black xl:size-6" />,
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
      image: (
        <>
          <Image
            src={notespaceImage}
            alt=""
            priority
            width={924}
            height={550}
            className="hidden h-[550px] w-[924px] object-cover object-right lg:block"
          />
        </>
      ),
      logo: <NotespaceLogo className="size-5 shrink-0 text-black xl:size-6" />,
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
