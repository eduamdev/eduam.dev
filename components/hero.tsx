import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text } from '@/components/text';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="mx-auto mt-14 flex w-full max-w-none flex-col items-center justify-center px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
      <Avatar className="border border-black/[0.1] dark:border-white/[0.12]">
        <AvatarImage src={`https://github.com/${siteConfig.username}.png`} />
        <AvatarFallback className="bg-[#f8f8f8]" />
      </Avatar>
      <Text
        as="h1"
        align="center"
        className="mt-6 max-w-4xl text-base font-normal text-neutral-700 dark:text-neutral-400 md:text-lg"
        balanced
      >
        I&apos;m Eduardo, a <strong>frontend developer</strong> based in{' '}
        <strong>Mexico</strong>. I specialize in meticulously designing and
        developing stunning, high-performance websites that seamlessly blend
        aesthetics and functionality.
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
  );
}
