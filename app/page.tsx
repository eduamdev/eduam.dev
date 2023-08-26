import { StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ResponsiveImage } from '@/components/responsive-image';
import { Text } from '@/components/text';
import { siteConfig } from '@/config/site';

import spotify from '../public/spotify.png';
import rides from '../public/rides.png';

const workImages: { [key: string]: StaticImageData } = {
  spotify,
  rides,
};

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="mx-auto mt-16 flex w-full max-w-none flex-col items-center justify-center px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <Avatar className="border border-black/[0.1] dark:border-white/[0.12]">
          <AvatarImage src={`https://github.com/${siteConfig.username}.png`} />
          <AvatarFallback className="bg-[#f8f8f8]" />
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="mt-5 max-w-5xl text-3xl font-semibold md:text-4xl"
          balanced
        >
          Frontend Developer
        </Text>
        <Text
          as="p"
          align="center"
          className="mt-3 max-w-3xl text-base font-normal text-neutral-600 dark:text-neutral-400 md:text-lg"
          balanced
        >
          Hi, I&apos;m <strong>Eduardo</strong>, a <strong>Mexico</strong>-based{' '}
          <strong>Software Engineer</strong> specializing in crafting
          high-performance, intuitive websites with excellent user experiences.
        </Text>
        <div className="mt-6 flex h-7 flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/[0.1] p-2 dark:border-white/[0.15]  lg:h-[30px]">
          <span className="relative flex h-[7px] w-[7px] items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500"></span>
          </span>
          <p className="text-center text-xs font-medium text-neutral-700 dark:text-neutral-300 lg:text-[13px] lg:tracking-[-0.003em]">
            Open to Remote Work
          </p>
        </div>
      </section>
      {siteConfig.work.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-none flex-col items-center justify-center px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
          <Text
            as="h2"
            align="center"
            className="text-xl font-semibold md:text-2xl"
            balanced
          >
            Selected Works
          </Text>
          <div className="mx-auto mt-8 grid w-full grid-cols-1 items-stretch gap-y-10 lg:gap-y-6 ">
            {siteConfig.work.map((w, index) => (
              <article key={w._id}>
                <a
                  href={w.url}
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-lg border border-black/[0.1] shadow-xl outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:border-white/[0.15] dark:focus-visible:ring-[#3291ff] sm:rounded-xl"
                >
                  <div className="relative">
                    <ResponsiveImage
                      src={workImages[w.image.name]}
                      alt={w.image.altText}
                      priority={index < 1 && true}
                      className="bg-gray-200 dark:bg-neutral-900"
                      bordered={false}
                      rounded={false}
                    />
                    <div className="absolute bottom-6 left-6 z-10 hidden items-center justify-center md:flex">
                      <span className="rounded-lg border border-black/[0.08] bg-white px-4 py-2.5 text-[13px] text-black shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-black group-hover:text-white group-hover:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] md:text-sm">
                        <span className="font-medium">{w.name} </span>
                        <span className="text-neutral-600 group-hover:text-neutral-400">
                          – {w.description}
                        </span>
                      </span>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/10 pt-32 dark:from-white/[0.08]"></div>
                  </div>
                </a>
                <div className="mt-6 flex flex-col items-center justify-start gap-y-1 md:hidden">
                  <Text
                    as="p"
                    balanced
                    className="text-base font-semibold text-black dark:text-white"
                  >
                    {w.name}
                  </Text>
                  <Text
                    as="p"
                    balanced
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {w.description}
                  </Text>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
