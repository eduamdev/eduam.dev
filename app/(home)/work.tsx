import Image from 'next/image';
import carhiveImage from '@/assets/images/carhive.png';
import notespaceImage from '@/assets/images/notespace.png';
import { siteConfig } from '@/config/site';
import { CarhiveLogo } from '@/components/carhive-logo';
import { NotespaceLogo } from '@/components/notespace-logo';
import { ProjectCard } from '@/components/project-card';
import { Fragment } from 'react';

export function Work() {
  const { github } = siteConfig.links;

  const projects = [
    {
      _id: 'p01',
      title: 'Carhive',
      description: 'Experience seamless car rentals',
      techStack: [
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
      repoUrl: `${github.url}/carhive`,
      siteUrl: 'https://carhive.eduam.dev',
      alignment: 'left',
    },
    {
      _id: 'p02',
      title: 'Notespace',
      description:
        'Organize and manage your notes, featuring rich text editing, notebook structuring, and tag management',
      techStack: [
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
      repoUrl: `${github.url}/notespace`,
      siteUrl: 'https://notespace.eduam.dev',
      alignment: 'right',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr]">
        <div
          aria-hidden="true"
          className="pointer-events-none  border-r border-[var(--grid-border-color)]"
        ></div>
        <div className="px-5 py-7 md:p-9">
          <h2 className="text-left text-lg font-semibold md:text-xl">Work</h2>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none  border-l border-[var(--grid-border-color)]"
        ></div>
      </div>
      {projects.map((project, index) => (
        <Fragment key={project._id}>
          <ProjectCard {...project} />
          {index < projects.length - 1 && (
            <div className="grid h-20 grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr]">
              <div
                aria-hidden="true"
                className="pointer-events-none border-r border-[var(--grid-border-color)]"
              ></div>
              <div aria-hidden="true"></div>
              <div
                aria-hidden="true"
                className="pointer-events-none border-l border-[var(--grid-border-color)]"
              ></div>
            </div>
          )}
        </Fragment>
      ))}
      <div className="grid h-20 grid-cols-[1fr_minmax(var(--content-min-width),var(--content-width))_1fr] border-b border-[var(--grid-border-color)]">
        <div
          aria-hidden="true"
          className="pointer-events-none relative border-r border-[var(--grid-border-color)]"
        >
          <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm"></div>
        </div>
        <div aria-hidden="true"></div>
        <div
          aria-hidden="true"
          className="pointer-events-none relative border-l border-[var(--grid-border-color)]"
        >
          <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
