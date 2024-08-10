import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Icons } from '@/app/components/icons';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string | StaticImageData;
  logo: React.ReactNode;
  type: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
  alignment?: 'left' | 'right';
}

const renderSpacer = () => (
  <div className="hidden xl:block">
    <div className="relative h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-['']"></div>
    <div className="relative h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-['']"></div>
    <div></div>
  </div>
);

const renderImageSection = (
  imageSrc: string | StaticImageData,
  altText: string,
  imageAlignment: 'left' | 'right',
  technologies: string[],
) => (
  <div>
    <div className="relative h-0 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] lg:h-12"></div>
    <div className="relative flex h-auto flex-nowrap items-center justify-start gap-2 px-5 py-4 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] md:px-9 lg:h-12 lg:px-6 lg:py-0">
      <div
        className={cn(
          'pointer-events-none absolute top-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[#d6e0ff] bg-white',
          imageAlignment === 'left' ? 'left-[-5px]' : 'right-[-5px]',
        )}
      ></div>
      <div
        className={cn(
          'pointer-events-none absolute bottom-[-5px] z-[2] flex h-2.5 w-2.5 items-center justify-center border border-[#d6e0ff] bg-white',
          imageAlignment === 'left' ? 'left-[-5px]' : 'right-[-5px]',
        )}
      ></div>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="inline-flex h-[26px] shrink-0 grow-0 items-center justify-center rounded-[96px] border border-[rgba(37,62,167,0.2)] bg-white px-2 py-1 text-xs font-medium leading-none text-neutral-600 md:text-[13px]"
        >
          {tech}
        </div>
      ))}
      <span className="ml-2 whitespace-nowrap text-sm text-[#253ea7] opacity-60">
        and more...
      </span>
    </div>
    <Image
      src={imageSrc}
      alt={altText}
      priority
      width={924}
      height={550}
      className={`hidden h-[550px] w-[924px] object-cover lg:block ${
        imageAlignment === 'left' ? 'object-left' : 'object-right'
      }`}
    />
    <Image
      src={imageSrc}
      alt={altText}
      priority
      className={`ml-2 mt-2 object-cover sm:m-0 lg:hidden ${
        imageAlignment === 'left' ? 'object-left' : 'object-right'
      }`}
      sizes="100vw"
    />
  </div>
);

const renderContentSection = (
  projectLogo: React.ReactNode,
  projectType: string,
  projectTitle: string,
  projectDescription: string,
  projectFeatures: string[],
  repositoryUrl: string,
  liveUrl: string,
) => (
  <div className="relative after:absolute after:inset-0 after:border-x after:border-[#d6e0ff] after:content-['']">
    <div className="relative hidden h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] lg:block"></div>
    <div className="relative hidden h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] lg:block"></div>
    <div className="flex flex-col justify-center px-5 py-7 md:p-9 lg:h-[550px]">
      <div className="flex size-12 items-center justify-center rounded-xl bg-white shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(55,93,251,0.1)_0px_0px_0px_1px,rgba(37,62,167,0.2)_0px_1px_3px_0px]">
        {projectLogo}
      </div>
      <div className="pt-8">
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-600">
          {projectType}
        </span>
      </div>
      <div className="pt-4">
        <h3 className="font-semibold text-black md:text-lg">{projectTitle}</h3>
      </div>
      <div className="pt-2">
        <p className="text-sm text-neutral-600 sm:text-[15px]">
          <Balancer>{projectDescription}</Balancer>
        </p>
      </div>
      <div className="hidden pt-8 lg:block">
        <ul className="flex flex-col gap-5 text-sm text-neutral-800">
          {projectFeatures.map((feature, index) => (
            <li key={index} className="flex gap-2.5">
              <Icons.checkCircle className="inline-flex size-5 shrink-0 text-[#375dfb]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-8">
        <div className="grid grid-cols-2 items-center justify-start gap-x-4 lg:flex">
          <a
            href={repositoryUrl}
            rel="noreferrer"
            target="_blank"
            className="flex size-auto flex-nowrap items-center justify-center gap-1 overflow-visible rounded-lg bg-white p-2 text-sm font-medium shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] transition-shadow hover:shadow-[rgba(55,93,251,0.12)_0px_0px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] dark:text-[#171717]"
          >
            <Icons.github className="mx-1 size-4 shrink-0" />
            <span className="shrink-0 px-1">Repository</span>
          </a>
          <a
            href={liveUrl}
            rel="noreferrer"
            target="_blank"
            className="flex size-auto flex-row flex-nowrap items-center justify-center gap-1 rounded-lg bg-[#383838] px-3 py-2 text-sm font-medium text-white shadow-[rgb(73,73,73)_0px_-2.4px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] transition-all hover:bg-[#5c5c5c] hover:shadow-[rgb(73,73,73)_0px_0px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(212,100%,48%,1)]"
          >
            <span className="shrink-0 px-1">Visit</span>
            <Icons.arrowUpRight className="inline-block size-3.5 shrink-0 text-neutral-300" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageSrc,
  logo,
  type,
  features,
  githubUrl,
  liveUrl,
  alignment = 'left',
}) => {
  const isLeftAligned = alignment === 'left';
  const gridLayout = isLeftAligned
    ? 'lg:grid-cols-[0.65fr_1fr] xl:grid-cols-[110px_0.6fr_1fr]'
    : 'lg:grid-cols-[1fr_0.65fr] xl:grid-cols-[1fr_0.6fr_110px]';

  return (
    <div className="grid grid-cols-1 flex-row xl:grid-cols-[1fr_minmax(var(--content-min-width),calc(var(--content-width)_+_220px))_1fr]">
      <div className="hidden xl:block"></div>
      <article className="relative overflow-hidden after:absolute after:inset-0 after:border after:border-[#d6e0ff] after:content-[''] lg:rounded-[32px] after:lg:rounded-[32px]">
        {/* Mobile and small screen order */}
        <div
          className={cn(
            'grid grid-cols-1 bg-gradient-to-b from-[#e5eeff] to-[#f9fbff] lg:hidden',
            gridLayout,
          )}
        >
          {renderContentSection(
            logo,
            type,
            title,
            description,
            features,
            githubUrl,
            liveUrl,
          )}
          {renderImageSection(imageSrc, title, alignment, technologies)}
          {renderSpacer()}
        </div>

        {/* Large screens order */}
        <div
          className={cn(
            'hidden grid-cols-1 bg-gradient-to-b from-[#e5eeff] to-[#f9fbff] lg:grid',
            gridLayout,
          )}
        >
          {isLeftAligned ? (
            <>
              {renderSpacer()}
              {renderContentSection(
                logo,
                type,
                title,
                description,
                features,
                githubUrl,
                liveUrl,
              )}
              {renderImageSection(imageSrc, title, alignment, technologies)}
            </>
          ) : (
            <>
              {renderImageSection(imageSrc, title, alignment, technologies)}
              {renderContentSection(
                logo,
                type,
                title,
                description,
                features,
                githubUrl,
                liveUrl,
              )}
              {renderSpacer()}
            </>
          )}
        </div>
      </article>
      <div></div>
    </div>
  );
};
