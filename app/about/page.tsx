import { Text } from "@/components/text";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen max-w-6xl mx-auto flex-col items-center px-6 py-24">
      <section className="flex flex-col justify-center items-center mt-6 w-full">
        <Text
          as="h1"
          align="center"
          className="px-8 text-xl font-[575] leading-9 tracking-[-0.01em] md:mt-3 md:text-2xl md:leading-[44px]"
          balanced
        >
          About
        </Text>
        <Text
          align="center"
          className="max-w-4xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 mt-5"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
      </section>
      <section className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-center md:mt-20">
        <Text
          as="h2"
          align="center"
          className="px-8 text-xl font-[575] leading-9 tracking-[-0.01em] md:mt-3 md:text-2xl md:leading-[44px]"
          balanced
        >
          Experience
        </Text>
        <div className="mt-7 md:mt-12 max-w-6xl w-full py-2 px-5 md:px-8 flex flex-col divide-y shadow-sm border border-black/[0.1] dark:border-white/[0.1] divide-black/[0.1] dark:divide-white/[0.1] rounded-3xl">
          <div className="grid grid-cols-4 items-baseline justify-between gap-x-12 gap-y-6 py-6">
            <div className="col-span-4 md:col-span-1">
              <Text className="font-medium">Freelance</Text>
              <Text className="text-neutral-500 dark:text-neutral-400 text-[13px] mt-2 md:mt-3 leading-loose lg:text-sm lg:leading-loose">
                May 2022 - Present
              </Text>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Text className="font-medium">Developer</Text>
              <Text className="text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 mt-2 md:mt-3 leading-loose">
                Software Engineer specializing in crafting high-performance,
                intuitive websites with excellent user experiences
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-4 items-baseline justify-between gap-x-12 gap-y-6 py-6">
            <div className="col-span-4 md:col-span-1">
              <Text className="font-medium">Results CX</Text>
              <Text className="text-neutral-500 dark:text-neutral-400 text-[13px] mt-2 md:mt-3 leading-loose lg:text-sm lg:leading-loose">
                July 2021 - March 2022
              </Text>
            </div>
            <div className="col-span-4 md:col-span-3">
              <Text className="font-medium">Software Engineer</Text>
              <Text className="text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 mt-2 md:mt-3 leading-loose">
                Software Engineer specializing in crafting high-performance,
                intuitive websites with excellent user experiences. Software
                Engineer specializing in crafting high-performance, intuitive
                websites with excellent user experiences
              </Text>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
