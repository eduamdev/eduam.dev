import { Hero } from '@/components/hero';
import { Works } from '@/components/works';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Works />
    </main>
  );
}
