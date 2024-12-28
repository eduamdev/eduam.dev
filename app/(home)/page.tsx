import { Header } from './header';
import { Summary } from './summary';
import { Projects } from './projects';
import { Footer } from './footer';

export default function HomePage() {
  return (
    <div className="flex h-dvh w-dvw flex-col overflow-x-hidden">
      <div className="px-4 sm:px-8">
        <div className="mx-auto w-full min-w-[var(--content-min-width)] max-w-[var(--content-width)]">
          <Header />
          <div className="pt-[10px] md:pt-4">
            <Summary />
          </div>
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
