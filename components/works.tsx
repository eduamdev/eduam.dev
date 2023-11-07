import spotify from '../public/projects/spotify-ui-clone.png';
import carhive from '../public/projects/carhive.png';
import { ResponsiveImage } from './responsive-image';
import { Text } from '@/components/text';

const works = [
  {
    name: 'CarHive',
    url: 'https://carhive.eduam.dev',
    image: {
      url: carhive,
      alt: '',
    },
    description: 'Car Rental Website built with React',
  },
  {
    name: 'Spotify UI (clone)',
    url: 'https://spotify-web-ui-clone.vercel.app',
    image: {
      url: spotify,
      alt: 'Spotify Web Player that displays lists of recently listened music and personalized recommendations containing puns with song names and tech personalities',
    },
    description:
      'Web Player UI Clone built with Next.js, TailwindCSS and Shadcn/ui components',
  },
];

export function Works() {
  if (!works.length) return null;

  return (
    <section className="mx-auto mt-16 flex w-full max-w-none flex-col items-center justify-center px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
      <Text
        as="h2"
        align="center"
        className="text-lg font-semibold lg:text-xl"
        balanced
      >
        Highlighted Works
      </Text>
      <div className="mx-auto mt-8 grid w-full grid-cols-1 items-stretch gap-y-10 lg:gap-y-6 ">
        {works.map(({ name, url, image, description }, index) => (
          <article key={name}>
            <a
              href={url}
              rel="noreferrer"
              className="group block overflow-hidden rounded-lg border border-black/[0.1] shadow-xl outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:border-white/[0.15] dark:focus-visible:ring-[#3291ff] sm:rounded-xl"
            >
              <div className="relative">
                <ResponsiveImage
                  src={image.url}
                  alt={image.alt}
                  priority={index < 1}
                  className="bg-gray-200 dark:bg-neutral-900"
                  bordered={false}
                  rounded={false}
                  placeholder="blur"
                />
                <div className="absolute bottom-6 left-6 z-10 hidden items-center justify-center md:flex">
                  <span className="rounded-lg border border-black/[0.08] bg-white px-4 py-2.5 text-[13px] text-black shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-black group-hover:text-white group-hover:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] md:text-sm">
                    <span className="font-medium">{name} </span>
                    <span className="text-neutral-600 group-hover:text-neutral-400">
                      – {description}
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
                {name}
              </Text>
              <Text
                as="p"
                balanced
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                {description}
              </Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
