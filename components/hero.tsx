import { Avatar } from '@/components/avatar';
import Balancer from 'react-wrap-balancer';
import { WorkStatus } from '@/components/work-status';

export function Hero() {
  return (
    <section className="mx-auto mt-16 flex w-full max-w-none flex-col items-center justify-center space-y-6 px-5 sm:max-w-[90%] sm:px-0 xl:max-w-5xl">
      <Avatar />
      <h1 className="w-full max-w-4xl text-center text-base font-normal leading-[1.8] tracking-[-0.2px] text-neutral-600 dark:text-neutral-400 md:text-[20px]">
        <Balancer>
          I&apos;m Eduardo, a <strong>frontend developer</strong> based in{' '}
          <strong>Mexico</strong>. I specialize in meticulously designing and
          developing stunning, high-performance websites that seamlessly blend
          aesthetics and functionality.
        </Balancer>
      </h1>
      <WorkStatus available />
    </section>
  );
}
