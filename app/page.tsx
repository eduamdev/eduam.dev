import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Links } from '@/components/links';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Projects />
      <Links />
    </main>
  );
}
