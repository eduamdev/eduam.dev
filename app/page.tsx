import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/text";
import { allProjects } from "@/.contentlayer/generated";
import { Icons } from "@/components/icons";
import { ResponsiveImage } from "@/components/responsive-image";

export default function IndexPage() {
  const projects = allProjects;

  return (
    <main className="flex min-h-screen max-w-7xl mx-auto flex-col items-center px-6 py-24">
      <section className="flex flex-col justify-center items-center mt-12 w-full">
        <Avatar>
          <AvatarImage src="https://github.com/edroamz.png" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="max-w-5xl text-5xl font-semibold leading-[56px] tracking-tighter md:text-6xl md:tracking-tight md:leading-[72px] mt-6"
          balanced
        >
          Front-End Web Developer.
        </Text>
        <Text
          as="h2"
          align="center"
          className="max-w-4xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 mt-6"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
        <Button
          variant="pill"
          size="sm"
          className="flex items-center justify-between gap-x-3 mt-6 transition-all"
        >
          <span className="relative flex h-[11px] w-[11px] shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-[7px] w-[7px] shrink-0 rounded-full bg-green-600 dark:bg-green-400"></span>
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-200 font-normal">
            Open to Remote Work
          </span>
        </Button>
      </section>
      {projects.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center justify-center md:mt-20">
          <Text
            as="h3"
            align="center"
            className="px-8 text-3xl font-[575] leading-[46px] tracking-[-0.01em] md:mt-3 md:text-4xl md:leading-[56px]"
            balanced
          >
            Curated Work
          </Text>
          <div className="mx-auto mt-9 grid w-full grid-cols-1 items-stretch gap-3 md:mt-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project._id}>
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-md outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:focus-visible:ring-[#3291ff]"
                >
                  <div className="h-full w-full bg-neutral-100 dark:bg-neutral-900 p-6 border border-black/[0.1] dark:border-white/[0.12] rounded-md shadow-sm">
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
                    <div className="flex flex-col items-start justify-center gap-y-3 mb-2 mt-9 md:mt-10">
                      <Text
                        as="h4"
                        className="text-sm font-[580] tracking-wide"
                        balanced
                      >
                        {project.name}{" "}
                        <Icons.arrowUpRight className="ml-1 inline h-3.5 w-3.5 align-text-top" />
                      </Text>
                      <Text
                        align="left"
                        className="max-w-3xl text-sm text-neutral-800 dark:text-neutral-300 leading-loose"
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
