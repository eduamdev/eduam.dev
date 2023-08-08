import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/text";
import { allProjects } from "@/.contentlayer/generated";
import { ResponsiveImage } from "@/components/responsive-image";

export default function IndexPage() {
  const projects = allProjects;

  return (
    <main className="flex min-h-screen max-w-5xl mx-auto flex-col items-center px-6 py-24">
      <section className="flex flex-col justify-center items-center mt-10 md:mt-12 w-full">
        <Avatar>
          <AvatarImage src="https://github.com/edroamz.png" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="max-w-5xl text-[34px] leading-[46px] font-semibold tracking-tight md:text-[38px] md:leading-[56px] mt-6"
          balanced
        >
          Front-End Web Developer
        </Text>
        <Text
          as="h2"
          align="center"
          className="max-w-5xl text-lg md:text-xl md:leading-9 tracking-[-0.01em] leading-8 text-neutral-600 dark:text-neutral-300 mt-3"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
        <Button
          variant="pill"
          size="sm"
          className="group flex items-center justify-between gap-x-3 mt-6 transition-colors"
        >
          <span className="relative flex h-[10.5px] w-[10.5px] shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-[7px] w-[7px] shrink-0 rounded-full bg-green-600 dark:bg-green-400"></span>
          </span>
          <span className="text-sm text-neutral-600 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-100 font-normal transition-colors">
            Open to Remote Work
          </span>
        </Button>
      </section>
      {projects.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-5xl flex-col items-center justify-center md:mt-20">
          <Text
            as="h3"
            align="center"
            className="px-8 text-[22px] font-[575] leading-10 tracking-[-0.01em] md:text-2xl md:leading-[54px]"
            balanced
          >
            Selected Works
          </Text>
          <div className="mx-auto mt-6 grid w-full grid-cols-1 items-stretch gap-3 md:mt-8">
            {projects.map((project, index) => (
              <article key={project._id}>
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-md outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:focus-visible:ring-[#3291ff] shadow-sm"
                >
                  <div className="h-full w-full bg-neutral-100/90 dark:bg-neutral-900 p-6 border border-black/[0.1] dark:border-white/[0.12] rounded-md">
                    <div className="relative">
                      <ResponsiveImage
                        src={project.image.src}
                        alt={project.image.alt}
                        priority={index <= 1 && true}
                        className="rounded-lg"
                        bordered={false}
                        rounded={false}
                      />
                      <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-neutral-700 pt-20 pb-8 pointer-events-none dark:from-neutral-800 absolute"></div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-y-2.5 mb-2 mt-9 md:mt-10">
                      <Text
                        as="h4"
                        className="text-sm md:text-[15px] font-semibold dark:text-neutral-200"
                        balanced
                      >
                        {project.name}
                      </Text>
                      <Text
                        align="left"
                        className="max-w-3xl text-sm text-neutral-600 dark:text-neutral-400 leading-[1.6rem] md:leading-loose"
                      >
                        {project.description}.
                      </Text>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
