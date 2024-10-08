import { Header } from './sections/header';
import { Summary } from './sections/summary';
import { Availability } from './sections/availability';
import { Projects } from './sections/projects';
import { Social } from './sections/social';
import { Footer } from './sections/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Summary />
      <Availability />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}
