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
      <section className="flex flex-col justify-center items-center mt-12">
        <Avatar>
          <AvatarImage src="https://github.com/edroamz.png" />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <Text
          as="h1"
          align="center"
          className="text-[50px] font-[575] leading-[56px] tracking-tight md:text-[72px] md:leading-[80px] mt-6"
          balanced
        >
          Front-End Web Developer.
        </Text>
        <Text
          as="h2"
          align="center"
          className="max-w-4xl font-sans text-lg leading-8 tracking-[-0.017em] text-neutral-600 dark:text-neutral-300 mt-6"
          balanced
        >
          Hello, I&apos;m Eduardo, a Mexico-based Software Engineer specializing
          in crafting high-performance, intuitive websites with excellent user
          experiences.
        </Text>
        <Button
          variant="outline"
          className="flex items-center justify-between gap-x-2.5 mt-6"
        >
          <span className="relative flex h-[11px] w-[11px] shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-[7px] w-[7px] shrink-0 rounded-full bg-green-600 dark:bg-green-400"></span>
          </span>
          <span className="text-[15px] tracking-wide text-neutral-700 dark:text-neutral-200">
            Open to Remote Work
          </span>
        </Button>
      </section>
      {projects.length > 0 && (
        <section className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center justify-center md:mt-20">
          <Text
            as="h3"
            align="center"
            className="px-8 text-[32px] font-[575] leading-[46px] tracking-[-0.01em] md:mt-3 md:text-[42px] md:leading-[56px]"
            balanced
          >
            Curated Work
          </Text>
          <div className="mx-auto mt-9 grid w-full grid-cols-1 items-center gap-x-5 gap-y-14 md:mt-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project._id}>
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl outline-none ring-offset-2 transition-shadow focus-visible:ring-2 focus-visible:ring-[#0072FF] dark:focus-visible:ring-[#3291ff]"
                >
                  <div className="h-full w-full bg-slate-200 dark:bg-neutral-600">
                    <ResponsiveImage
                      src={project.image.src}
                      alt={project.image.alt}
                      priority={index <= 1 && true}
                      className="rounded-lg"
                      style={{ top: "40px", left: "40px" }}
                      bordered={false}
                      rounded={false}
                    />
                  </div>
                </a>
                <div className="flex flex-col items-start justify-center">
                  <Text
                    as="h4"
                    className="mt-6 text-[17px] font-[580] leading-7 md:mt-7 md:text-lg"
                    balanced
                  >
                    {project.name}
                  </Text>
                  <Text
                    align="left"
                    className="mt-2 max-w-3xl text-sm leading-7 tracking-[-0.006em] text-neutral-800 dark:text-neutral-300 md:text-base md:leading-8"
                  >
                    {project.description}.
                  </Text>
                  <a
                    href={project.url}
                    rel="noopener noreferrer"
                    className="mt-2.5 md:mt-3"
                  >
                    <Text as="span" className="text-sm font-medium">
                      Live demo
                    </Text>
                    <Icons.arrowUpRight className="ml-0.5 inline h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
