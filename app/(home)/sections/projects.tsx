import Image from 'next/image';
import { siteConfig } from '@/config/site';

import { CheckIcon } from '@/app/components/icons/check';
import { Button } from '@/app/components/ui/button';
import { GithubIcon } from '@/app/components/icons/github';
import carhive from '../../../public/assets/projects/carhive.png';
import notespace from '../../../public/assets/projects/notespace.png';

export function Projects() {
  const { github } = siteConfig.links;

  return (
    <section className="relative">
      <div className="before:absolute before:inset-0 before:border-x before:border-t before:border-[var(--grid-border-color)] before:content-['']"></div>
      <div className="grid grid-cols-3">
        <div className="relative col-span-3">
          <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-t before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
          <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-t before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
          <div className="p-6 sm:p-10 md:p-12">
            <div className="pt-12">
              <h2 className="text-balance text-center text-[28px] font-semibold">
                Selected projects.
              </h2>
            </div>
            <div className="pt-4">
              <p className="text-balance text-center text-neutral-700 dark:text-neutral-400">
                Here’s a glimpse at what I’ve been working on.
              </p>
            </div>
          </div>
        </div>
      </div>

      <article className="relative grid grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="col-span-3 grid grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <div className="flex h-full flex-col ">
              <div className="p-6 sm:p-10 md:p-12">
                <div className="pt-6">
                  <h3 className="flex items-center justify-start text-lg font-semibold">
                    Carhive
                  </h3>
                </div>
                <div className="pt-2.5">
                  <p className="text-balance text-[16px] text-neutral-600 dark:text-neutral-400">
                    Makes renting a car effortless, with a wide range of
                    vehicles and easy booking.
                  </p>
                </div>
                <div className="pt-8">
                  <ul className="flex flex-col items-start justify-center gap-4 text-sm tracking-wide text-neutral-600 dark:text-neutral-400">
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Interactive Map
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Multi-Filter Search
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Authentication
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Form Validation
                    </li>
                  </ul>
                </div>
                <div className="pt-12">
                  <div className="flex items-center gap-4">
                    <Button asChild>
                      <a
                        href="https://carhive.eduam.dev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Live Site
                      </a>
                    </Button>
                    <Button variant={'outline'} asChild>
                      <a
                        href={`${github.url}/carhive`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <GithubIcon className="mr-1.5 size-[18px] shrink-0" />
                        Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <div className="p-6 pr-0 sm:p-10 sm:pr-0 md:p-12 md:pr-0">
              <div className="relative overflow-hidden rounded-tl-xl border border-b-0 dark:border-transparent">
                <div className="after:absolute after:bottom-0 after:left-0 after:z-10 after:h-4 after:w-full after:bg-gradient-to-t after:from-neutral-50 after:content-[''] dark:after:bg-none"></div>
                <Image
                  src={carhive}
                  alt="carhive"
                  priority
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative grid h-14 w-full grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
      </div>

      <article className="relative grid grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="col-span-3 grid grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <div className="p-6 sm:p-10 md:p-12 ">
              <div className="relative overflow-hidden rounded-t-xl border border-b-0 after:absolute after:bottom-0 after:left-0 after:z-10 after:h-20 after:w-full after:bg-gradient-to-t after:from-neutral-50 after:content-[''] dark:border-transparent dark:after:bg-none">
                <Image
                  src={notespace}
                  alt="Notespace"
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="flex h-full flex-col ">
              <div className="p-6 sm:p-10 md:p-12">
                <div className="pt-6">
                  <h3 className="flex items-center justify-start text-lg font-semibold">
                    Notespace
                  </h3>
                </div>
                <div className="pt-2.5">
                  <p className="text-balance text-[16px] text-neutral-600 dark:text-neutral-400">
                    Organize and manage your notes, featuring rich text editing,
                    notebook structuring, and tag management.
                  </p>
                </div>
                <div className="pt-8">
                  <ul className="flex flex-col items-start justify-center gap-4 text-sm tracking-wide text-neutral-600 dark:text-neutral-400">
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Rich Text Editor
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Autosave
                    </li>
                    <li>
                      <CheckIcon className="mr-2.5 inline size-[14px] shrink-0" />
                      Search
                    </li>
                  </ul>
                </div>
                <div className="pt-12">
                  <div className="flex items-center gap-4">
                    <Button asChild>
                      <a
                        href="https://notespace.eduam.dev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Live Site
                      </a>
                    </Button>
                    <Button variant={'outline'} asChild>
                      <a
                        href={`${github.url}/notespace`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <GithubIcon className="mr-1.5 size-[18px] shrink-0" />
                        Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative grid h-16 w-full grid-cols-3">
        <div className="before:absolute before:inset-0 before:w-1/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
        <div className="before:absolute before:inset-0 before:w-2/3 before:border-r before:border-[var(--grid-border-color)] before:opacity-70 before:content-[''] dark:before:opacity-90"></div>
      </div>
    </section>
  );
}
