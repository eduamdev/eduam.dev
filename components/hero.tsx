import { Avatar } from '@/components/avatar';
import Balancer from 'react-wrap-balancer';

export function Hero() {
  return (
    <section className="mx-auto mt-14 flex w-full max-w-none flex-col items-center justify-center space-y-6 px-5 sm:max-w-[90%] sm:px-0 xl:max-w-7xl">
      <Avatar />
      <h1 className="w-full max-w-4xl text-center text-lg font-normal text-neutral-700 dark:text-neutral-400 md:text-xl md:leading-9">
        <Balancer>
          I&apos;m Eduardo, a <strong>frontend developer</strong> based in{' '}
          <strong>Mexico</strong>. I specialize in meticulously designing and
          developing stunning, high-performance websites that seamlessly blend
          aesthetics and functionality.
        </Balancer>
      </h1>
      <WorkStatusIndicator available />
    </section>
  );
}

function WorkStatusIndicator({ available = false }: { available?: boolean }) {
  if (!available) {
    return null;
  }

  return (
    <div className="flex h-8 flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/[0.1] p-3 dark:border-white/[0.15]  ">
      <span className="relative flex h-[7px] w-[7px] items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
        <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-500"></span>
      </span>
      <p className="text-center font-mono text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Open to Remote Work
      </p>
    </div>
  );
}
