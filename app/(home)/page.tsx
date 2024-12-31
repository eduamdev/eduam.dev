import { Header } from './header';
import { Summary } from './summary';
import { Projects } from './projects';
import { Footer } from './footer';

export default function HomePage() {
  return (
    <div
      className="flex h-dvh w-dvw flex-col overflow-x-hidden"
      style={
        {
          '--content-min-width': '330px',
          '--content-max-width': '1020px',
        } as React.CSSProperties
      }
    >
      <div className="px-4 sm:px-8">
        <main className="mx-auto w-full min-w-[var(--content-min-width)] max-w-[var(--content-max-width)]">
          <Header />
          <Summary />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
