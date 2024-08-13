import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
import { CheckCircleIcon } from '@/app/components/icons/check-circle';
import { GithubIcon } from '@/app/components/icons/github';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string | StaticImageData;
  logo: React.ReactNode;
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
          'pointer-events-none absolute top-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[#d6e0ff] bg-white',
          imageAlignment === 'left' ? 'left-[-5px]' : 'right-[-5px]',
        )}
      ></div>
      <div
        className={cn(
          'pointer-events-none absolute bottom-[-5px] z-[2] flex size-2.5 items-center justify-center border border-[#d6e0ff] bg-white',
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
      <span className="ml-2 whitespace-nowrap text-sm text-[#253ea7]">
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
  projectTitle: string,
  projectDescription: string,
  projectFeatures: string[],
  repositoryUrl: string,
  liveUrl: string,
) => (
  <div className="relative after:absolute after:inset-0 after:border-x after:border-[#d6e0ff] after:content-['']">
    <div className="relative hidden h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] lg:block"></div>
    <div className="relative hidden h-12 after:absolute after:inset-0 after:border-b after:border-[#d6e0ff] after:content-[''] lg:block"></div>
    <div className="flex flex-col justify-start px-5 py-8 md:p-9 lg:h-[550px]">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(55,93,251,0.1)_0px_0px_0px_1px,rgba(37,62,167,0.2)_0px_1px_3px_0px]">
        {projectLogo}
      </div>
      <div className="pt-9">
        <h3 className="font-semibold text-black md:text-[17px]">
          {projectTitle}
        </h3>
      </div>
      <div className="pt-2">
        <p className="text-sm leading-6 text-neutral-700 sm:text-[15px]">
          <Balancer>{projectDescription}</Balancer>
        </p>
      </div>
      <div className="hidden pt-8 lg:block">
        <ul className="flex flex-col gap-5 text-[15px] text-neutral-800">
          {projectFeatures.map((feature, index) => (
            <li key={index} className="flex gap-2.5">
              <CheckCircleIcon className="inline-flex size-5 shrink-0 text-[#375dfb]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-6 lg:pt-8">
        <div className="grid grid-cols-2 items-center justify-start gap-x-4 lg:flex">
          <a
            href={repositoryUrl}
            rel="noreferrer"
            target="_blank"
            className="flex h-9 items-center justify-center rounded-lg bg-white px-[10px] text-sm font-medium shadow-[rgba(55,93,251,0.12)_0px_-2.4px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] transition-shadow hover:shadow-[rgba(55,93,251,0.12)_0px_0px_0px_0px_inset,rgba(37,62,167,0.2)_0px_1px_3px_0px,rgba(55,93,251,0.1)_0px_0px_0px_1px] dark:text-[#171717] lg:min-w-[126px] lg:max-w-[126px]"
          >
            <GithubIcon className="mr-[2px] flex size-[14px] min-w-5 shrink-0 items-center justify-center" />
            <span className="inline-block truncate px-[6px]">Repository</span>
          </a>
          <a
            href={liveUrl}
            rel="noreferrer"
            target="_blank"
            className="flex h-9 items-center justify-center rounded-lg bg-[#383838] px-[10px] text-sm font-medium text-white shadow-[rgb(73,73,73)_0px_-2.4px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] transition-all hover:bg-[#5c5c5c] hover:shadow-[rgb(73,73,73)_0px_0px_0px_0px_inset,rgba(40,40,40,0.2)_0px_1px_3px_0px,rgb(45,45,45)_0px_0px_0px_1px] focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(211,100%,42%,1)] focus-visible:outline-none dark:focus-visible:shadow-[0_0_0_2px_#fff,_0_0_0_4px_hsla(212,100%,48%,1)] lg:min-w-[70px] lg:max-w-[70px]"
          >
            <span className="inline-block truncate px-[6x]">Visit</span>
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