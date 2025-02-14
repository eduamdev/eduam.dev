import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: ReactNode;
  logo: ReactNode;
  features: string[];
  repoUrl?: string;
  siteUrl: string;
  alignment: 'left' | 'right';
}

const TechTagList = ({ techStack }: Pick<ProjectCardProps, 'techStack'>) => (
  <div className="flex flex-nowrap items-center justify-start gap-2 px-5 py-4 md:px-9 lg:h-12 lg:px-6 lg:py-0">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[var(--grid-border-color)] bg-gradient-to-t from-sky-100 px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]"
      >
        {tech}
      </div>
    ))}
  </div>
);

const ProjectImageSection = ({
  image,
  alignment,
  techStack,
}: Pick<ProjectCardProps, 'image' | 'techStack' | 'alignment'>) => (
  <div className="border-b border-[var(--grid-border-color)] [grid-area:image] lg:border-none">
    <div
      aria-hidden="true"
      className="hidden h-0 border-b border-[var(--grid-border-color)] lg:block lg:h-12"
    ></div>
    <div className="relative flex border-b border-[var(--grid-border-color)]">
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-[-5px] z-[2] flex size-2.5 items-center justify-center border border-neutral-300 bg-white',
          alignment === 'left' ? 'left-[-5px]' : 'right-[-5px]',
        )}
      ></div>
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-[-5px] z-[2] flex size-2.5 items-center justify-center border border-neutral-300 bg-white',
          alignment === 'left' ? 'left-[-5px]' : 'right-[-5px]',
        )}
      ></div>
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
      'border-[var(--grid-border-color)] [grid-area:content]',
      alignment === 'left' ? 'border-r' : 'border-l',
    )}
  >
    <div aria-hidden="true" className="hidden h-12 lg:block"></div>
    <div aria-hidden="true" className="hidden h-12 lg:block"></div>
    <div className="flex flex-col justify-start px-5 py-8 md:p-9 lg:h-[550px]">
      <div className="hidden size-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(55,93,251,0.1)_0px_0px_0px_1px,rgba(37,62,167,0.2)_0px_1px_3px_0px] lg:flex xl:size-9">
        {logo}
      </div>
      <h3 className="text-[15px] font-semibold text-black lg:pt-7 xl:pt-8">
        {title}
      </h3>
      <p className="pt-2 text-sm leading-6 text-neutral-600 sm:text-[15px]">
        {description}
      </p>

      <div className="hidden pt-6 lg:block">
        <ul className="flex flex-col gap-3.5 pl-3 text-neutral-600">
          {features.map((feature, index) => (
            <li
              key={index}
              className="pl-3 text-sm before:absolute before:-mt-px before:ml-[-22px] before:text-[#888] before:content-['-'] sm:text-[15px]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 lg:pt-10">
        <div className="grid grid-cols-2 items-center justify-start gap-x-4 lg:flex">
          <Button className="[&_svg]:size-4" asChild>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} website`}
            >
              Visit website
              <IconArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          {repoUrl && (
            <Button variant={'outline'} className="[&_svg]:size-4" asChild>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} code`}
              >
                View code
                <IconArrowUpRight aria-hidden="true" />
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
    <div className="grid grid-cols-1 items-center justify-center xl:grid-cols-[minmax(var(--content-min-width),calc(var(--content-width)_+_250px))]">
      <article className="relative overflow-hidden after:absolute after:inset-0 after:border after:border-[var(--grid-border-color)] after:content-[''] lg:rounded-[32px] after:lg:rounded-[32px]">
        <div
          className={cn(
            'grid bg-white',
            alignment === 'left'
              ? "grid-cols-1 [grid-template-areas:'image''content'] lg:grid-cols-[0.65fr_1fr] lg:[grid-template-areas:'content_image'] xl:grid-cols-[125px_0.5fr_1fr] xl:[grid-template-areas:'spacer_content_image']"
              : "grid-cols-1 [grid-template-areas:'image''content'] lg:grid-cols-[1fr_0.65fr] lg:[grid-template-areas:'image_content'] xl:grid-cols-[1fr_0.5fr_125px] xl:[grid-template-areas:'image_content_spacer']",
          )}
        >
          <div
            className={cn(
              'hidden border-[var(--grid-border-color)] [grid-area:spacer] xl:block',
              alignment === 'left' ? 'border-r' : 'border-l',
            )}
          >
            <div className="h-12"></div>
            <div className="h-12"></div>
            <div></div>
          </div>
          <ProjectContentSection
            logo={logo}
            title={title}
            description={description}
            features={features}
            repoUrl={repoUrl}
            siteUrl={siteUrl}
            alignment={alignment}
          />
          <ProjectImageSection
            image={image}
            alignment={alignment}
            techStack={techStack}
          />
        </div>
      </article>
    </div>
  );
}
