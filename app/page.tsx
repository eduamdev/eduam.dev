import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/text";
import { allProjects } from "@/.contentlayer/generated";
import { ResponsiveImage } from "@/components/responsive-image";
import w1 from "../public/images/w-01.png";
import w2 from "../public/images/w-02.png";
import { StaticImageData } from "next/image";

const projectImages: { [any: string]: StaticImageData } = {
  w1,
  w2,
};

export default function IndexPage() {
  const projects = allProjects;

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pb-12 pt-24">
      <section className="mt-10 flex w-full flex-col items-center justify-center sm:px-7 md:mt-14">
        <Avatar>
          <AvatarImage src="https://github.com/edroamz.png" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="mt-5 max-w-5xl text-[32px] font-semibold leading-[46px] tracking-tight md:text-[38px] md:leading-[54px]"
          balanced
        >
          Front-End Web Developer
        </Text>
        <Text
          as="h2"
          align="center"
          className="mt-2 max-w-5xl text-lg leading-8 tracking-[-0.01em] text-neutral-600 dark:text-neutral-300 md:text-xl md:leading-9"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
        <a
          href="#"
          rel="noopener noreferrer"
          className="group mt-5 flex h-9 items-center justify-center gap-x-2.5 rounded-full border border-black/[0.1] bg-accent/40 px-3 transition-colors hover:border-black/[0.8] dark:border-white/[0.12] dark:bg-accent/30 dark:hover:border-white/[0.2]"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
          </span>
          <span className="text-sm font-normal text-neutral-600 transition-colors group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-100">
            Open to Remote Work
          </span>
        </a>
      </section>
      {projects.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-center">
          <Text
            as="h3"
            align="center"
            className="px-8 text-[22px] font-[575] leading-10 tracking-[-0.01em] md:text-2xl md:leading-[54px]"
            balanced
          >
            Selected Works
          </Text>
          <div className="mx-auto mt-5 grid w-full grid-cols-1 items-stretch gap-6 ">
            {projects.map((project, index) => (
              <article key={project._id}>
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-black/[0.1] shadow-sm outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:border-white/[0.15] dark:focus-visible:ring-[#3291ff]"
                >
                  <div className="relative">
                    <ResponsiveImage
                      src={projectImages[project.image.src]}
                      alt={project.image.alt}
                      priority={index < 1 && true}
                      className="bg-gray-200 dark:bg-neutral-900"
                      bordered={false}
                      rounded={false}
                    />
                    <div className="absolute bottom-6 left-6 z-10 flex items-center justify-center">
                      <span className="rounded-lg border border-black/[0.08] bg-white px-4 py-2.5 text-[13px] text-black shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-black group-hover:text-white group-hover:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] md:text-sm">
                        <span className="font-medium">{project.name} </span>
                        <span className="text-neutral-600 group-hover:text-neutral-400">
                          - {project.description}
                        </span>
                      </span>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/10 pt-32 dark:from-white/[0.08]"></div>
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
