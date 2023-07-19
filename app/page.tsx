import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/text";

export default function IndexPage() {
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
          <span className="relative flex h-[10.5px] w-[10.5px] shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full shrink-0 animate-ping-slow rounded-full bg-green-400 opacity-75 dark:bg-green-300"></span>
            <span className="relative inline-flex h-[7px] w-[7px] shrink-0 rounded-full bg-green-600 dark:bg-green-400"></span>
          </span>
          <span className="text-[15px] tracking-wide text-neutral-700 dark:text-neutral-200">
            Open to Remote Work
          </span>
        </Button>
      </section>
    </main>
  );
}
