import Image from 'next/image';
import { siteConfig } from '@/config/site';

import { Button } from '@/components/ui/button';
import carhive from '../../assets/images/carhive2.png';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

export function Projects() {
  const { github } = siteConfig.links;

  const projects = [
    {
      title: 'Carhive',
      description:
        'Makes renting a car effortless, with a wide range of vehicles and easy booking.',
      features: [
        'Interactive Map',
        'Multi-Filter Search',
        'Authentication',
        'Form Validation',
      ],
      website: 'https://carhive.eduam.dev',
      repo: `${github.url}/carhive`,
      image: carhive,
      alt: 'Carhive',
    },
    {
      title: 'Libro Sugerido',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati.',
      features: [
        'Lorem, ipsum.',
        'Lorem ipsum dolor sit.',
        'Lorem.',
        'Lorem, ipsum dolor.',
      ],
      website: 'https://librosugerido.com',
      image: carhive,
      alt: 'Libro Sugerido',
    },
  ];

  return (
    <section className="relative">
      {/* Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 border border-[var(--grid-border-color)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-1/3 border-r border-[var(--grid-border-color)] opacity-70 dark:opacity-90"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-2/3 border-r border-[var(--grid-border-color)] opacity-70 dark:opacity-90"
      ></div>
      <div className="pointer-events-none absolute bottom-[-5px] left-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>
      <div className="pointer-events-none absolute bottom-[-5px] right-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>

      <div className="p-6 text-center sm:p-8">
        <h2 className="font-semibold text-black dark:text-white md:text-[22px]">
          Work
        </h2>
      </div>

      {/* Projects List */}
      {projects.map((project, index) => (
        <Fragment key={index}>
          <article className="relative grid grid-cols-3">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-1/3 border-r border-[var(--grid-border-color)] opacity-70 dark:opacity-90"
            ></div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 w-2/3 border-r border-[var(--grid-border-color)] opacity-70 dark:opacity-90"
            ></div>

            {/* Project Details */}
            <div className="col-span-3 md:col-span-1">
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold tracking-[-1.1%] text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="mr-2.5 inline size-[13px] shrink-0 text-neutral-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 space-y-3">
                  <Button asChild>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1.5 inline size-3.5 shrink-0 text-neutral-400"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                      </svg>
                    </a>
                  </Button>
                  {project.repo && (
                    <Button variant="ghost" asChild>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View code repository
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1.5 inline size-3.5 shrink-0 text-neutral-400"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div
              className={cn(
                'col-span-3 row-start-1 py-4 sm:py-6 md:col-span-2',
                (index + 1) % 2 === 0 && 'md:row-start-auto',
              )}
            >
              <div className="relative aspect-square">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, 66vw"
                  placeholder="blur"
                  className="object-cover object-left-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 h-full w-12 bg-gradient-to-l from-neutral-50 dark:bg-none"
                ></div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-4 w-full bg-gradient-to-t from-neutral-50 dark:bg-none"
                ></div>
              </div>
            </div>
          </article>

          <div className="relative grid h-16 w-full grid-cols-3">
            <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
            <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
          </div>
        </Fragment>
      ))}

      {/* <article className="relative grid grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="col-span-3 grid grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <div className="flex h-full flex-col ">
              <div className="p-6 sm:p-8">
                <h3 className="flex items-center justify-start font-semibold tracking-[-1.1%] text-black dark:text-white">
                  Carhive
                </h3>
                <div className="pt-2">
                  <p className="text-sm leading-6 tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                    Makes renting a car effortless, with a wide range of
                    vehicles and easy booking.
                  </p>
                </div>
                <div className="pt-8">
                  <ul className="flex flex-col items-start justify-center gap-2 text-sm tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Interactive Map
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Multi-Filter Search
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Authentication
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Form Validation
                    </li>
                  </ul>
                </div>
                <div className="pt-9">
                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a
                        href="https://carhive.eduam.dev"
                        rel="noreferrer"
                        target="_blank"
                        className="z-10 "
                      >
                        View website
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 inline size-4 shrink-0 text-neutral-400"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                      </a>
                    </Button>
                    <Button variant={'ghost'} asChild>
                      <a
                        href={`${github.url}/carhive`}
                        rel="noreferrer"
                        target="_blank"
                        className="text-[13px]"
                      >
                        View code repository
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 inline size-4 shrink-0 text-neutral-400 "
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-start-1 md:col-span-2">
            <div className="h-full py-6 sm:py-8">
              <div className="relative aspect-square h-full overflow-hidden rounded-tl-xl border border-b-0 dark:border-transparent">
                <div className="after:absolute after:bottom-0 after:left-0 after:z-10 after:h-4 after:w-full after:bg-gradient-to-t after:from-neutral-50 after:content-[''] dark:after:bg-none"></div>
                <div className="after:absolute after:right-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-neutral-50 after:content-[''] dark:after:bg-none"></div>
                <Image
                  src={carhive}
                  alt="carhive"
                  priority
                  fill
                  sizes="(max-width: 767px) 100vw, 66vw"
                  placeholder="blur"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative grid h-16 w-full grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
      </div>

      <article className="relative grid grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="col-span-3 grid grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <div className="flex h-full flex-col ">
              <div className="p-6 sm:p-8">
                <h3 className="flex items-center justify-start font-semibold tracking-[-1.1%] text-black dark:text-white">
                  Libro Sugerido
                </h3>
                <div className="pt-2">
                  <p className="text-sm leading-6 tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, obcaecati.
                  </p>
                </div>
                <div className="pt-8">
                  <ul className="flex flex-col items-start justify-center gap-2 text-sm tracking-[-0.6%] text-neutral-600 dark:text-neutral-300">
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Lorem, ipsum.
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Lorem ipsum dolor sit.
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Lorem.
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0 text-neutral-500" />
                      Lorem, ipsum dolor.
                    </li>
                  </ul>
                </div>
                <div className="pt-9">
                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a
                        href="https://librosugerido.com"
                        rel="noreferrer"
                        target="_blank"
                        className="z-10 "
                      >
                        View website
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 inline size-4 shrink-0 text-neutral-400"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 7l-10 10" />
                          <path d="M8 7l9 0l0 9" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 row-start-1 md:col-span-2 md:row-start-auto">
            <div className="py-6 sm:py-8">
              <div className="relative overflow-hidden rounded-tl-xl border border-b-0 dark:border-transparent">
                <div className="after:absolute after:bottom-0 after:left-0 after:z-10 after:h-4 after:w-full after:bg-gradient-to-t after:from-neutral-50 after:content-[''] dark:after:bg-none"></div>
                <Image src={carhive} alt="carhive" className=" object-cover" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative grid h-16 w-full grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>
        <div className="pointer-events-none absolute right-[-5px] top-[-5px] z-10 flex size-2.5 items-center justify-center border border-[var(--grid-border-color)] bg-white shadow-sm dark:hidden "></div>
      </div> */}
    </section>
  );
}

function CheckIcon(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
