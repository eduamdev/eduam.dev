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
    <main className="flex min-h-screen max-w-6xl mx-auto flex-col items-center px-6 pt-24 pb-12">
      <section className="flex flex-col justify-center items-center mt-10 md:mt-14 w-full sm:px-7">
        <Avatar>
          <AvatarImage src="https://github.com/edroamz.png" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="max-w-5xl text-[32px] leading-[46px] font-semibold tracking-tight md:text-[38px] md:leading-[54px] mt-5"
          balanced
        >
          Front-End Web Developer
        </Text>
        <Text
          as="h2"
          align="center"
          className="max-w-5xl text-lg md:text-xl md:leading-9 tracking-[-0.01em] leading-8 text-neutral-600 dark:text-neutral-300 mt-2"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
        <a
          href="#"
          rel="noopener noreferrer"
          className="rounded-full border border-black/[0.1] bg-accent/40 dark:bg-accent/30 hover:border-black/[0.6] dark:border-white/[0.12] dark:hover:border-white/[0.2] group flex items-center justify-center gap-x-2.5 mt-5 transition-colors h-9 px-3"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
          </span>
          <span className="text-sm text-neutral-600 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-100 font-normal transition-colors">
            Open to Remote Work
          </span>
        </a>
      </section>
      {projects.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center justify-center md:mt-18">
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
                  className="block overflow-hidden rounded-lg outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:focus-visible:ring-[#3291ff] shadow-sm group border border-black/[0.1] dark:border-white/[0.15]"
                >
                  <div className="relative">
                    <ResponsiveImage
                      src={projectImages[project.image.src]}
                      alt={project.image.alt}
                      priority={index <= 1 && true}
                      className="bg-gray-200 dark:bg-neutral-900"
                      bordered={false}
                      rounded={false}
                    />
                    <div className="absolute left-6 bottom-6 z-10 flex items-center justify-center">
                      <span className="px-4 py-2.5 rounded-lg text-[13px] md:text-sm bg-white group-hover:bg-black border border-black/[0.08] group-hover:border-white/[0.2] shadow-[inset_0_0_1px_0_rgba(0,0,0,.05)] group-hover:shadow-[inset_0_0_1px_0_rgba(235,235,255,.1)] text-black group-hover:text-white transition-all duration-300">
                        <span className="font-medium">{project.name} </span>
                        <span className="text-neutral-600 group-hover:text-neutral-400">
                          - {project.description}
                        </span>
                      </span>
                    </div>
                    <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/10 pt-32 pointer-events-none dark:from-white/[0.08] absolute"></div>
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
