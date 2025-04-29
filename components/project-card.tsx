import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: ReactNode;
  logo: ReactNode;
  features: string[];
  repoUrl?: string;
  siteUrl?: string;
  alignment: 'left' | 'right';
}

const TechTagList = ({ techStack }: Pick<ProjectCardProps, 'techStack'>) => (
  <div className="flex flex-nowrap items-center justify-start gap-2 px-5 py-3 md:px-9 lg:h-12 lg:px-6 lg:py-0">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className="bg-linear-to-t inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-neutral-200 from-sky-100 px-2 py-1 text-[11px] font-medium leading-none text-neutral-600 sm:text-xs"
      >
        {tech}
      </div>
    ))}
  </div>
);

const ProjectImageSection = ({
  image,
  techStack,
}: Pick<ProjectCardProps, 'image' | 'techStack'>) => (
  <div className="border-b border-neutral-200/60 [grid-area:image] lg:border-none">
    <div
      aria-hidden="true"
      className="hidden h-0 border-b border-neutral-200/60 lg:block lg:h-12"
    ></div>
    <div className="relative flex border-b border-neutral-200/60">
      <TechTagList techStack={techStack} />
    </div>
    {image}
  </div>
);

const ProjectContentSection = ({
  logo,
  title,
  description,
  features,
  repoUrl,
  siteUrl,
  alignment,
}: Omit<ProjectCardProps, 'techStack' | 'image'>) => (
  <div
    className={cn(
      'border-neutral-200/60 [grid-area:content]',
      alignment === 'left' ? 'border-r' : 'border-l',
    )}
  >
    <div aria-hidden="true" className="hidden h-12 lg:block"></div>
    <div aria-hidden="true" className="hidden h-12 lg:block"></div>
    <div className="flex flex-col justify-start px-5 py-8 text-[13px] leading-[20px] md:p-9 lg:h-[550px]">
      {logo}
      <h3 className="pt-3 text-sm font-semibold text-black md:text-[15px] md:leading-[22px] lg:pt-4">
        {title}
      </h3>
      <p className="pt-1 text-neutral-600 md:pt-1.5">{description}</p>
      <div className="hidden pt-6 lg:block">
        <ul className="flex flex-col gap-3.5 pl-3 text-neutral-600">
          {features.map((feature, index) => (
            <li
              key={index}
              className="pl-3 before:absolute before:-mt-px before:ml-[-22px] before:text-neutral-500 before:content-['-']"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 lg:pt-10">
        <div className="grid grid-cols-2 items-center justify-start gap-x-3 lg:flex">
          {siteUrl && (
            <Button className="rounded-[50px]" size={'sm'} asChild>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} website`}
              >
                Visit website
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button
              variant={'outline'}
              size={'sm'}
              className="rounded-[50px]"
              asChild
            >
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} code`}
              >
                View code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  logo,
  features,
  repoUrl,
  siteUrl,
  alignment = 'left',
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 items-center justify-center xl:grid-cols-[minmax(var(--content-min-width),calc(var(--content-width)+250px))]">
      <article className="relative overflow-hidden after:absolute after:inset-0 after:border after:border-neutral-200 after:content-[''] lg:rounded-xl lg:after:rounded-xl">
        <div
          className={cn(
            'grid bg-white',
            alignment === 'left'
              ? "grid-cols-1 [grid-template-areas:'image''content'] lg:grid-cols-[0.5fr_1fr] lg:[grid-template-areas:'content_image']"
              : "grid-cols-1 [grid-template-areas:'image''content'] lg:grid-cols-[1fr_0.5fr] lg:[grid-template-areas:'image_content']",
          )}
        >
          <ProjectContentSection
            logo={logo}
            title={title}
            description={description}
            features={features}
            repoUrl={repoUrl}
            siteUrl={siteUrl}
            alignment={alignment}
          />
          <ProjectImageSection image={image} techStack={techStack} />
        </div>
      </article>
    </div>
  );
}
