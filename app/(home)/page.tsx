import { Header } from './header';
import { Summary } from './summary';
import { Availability } from './availability';
import { Projects } from './projects';
import { Social } from './social';
import { Footer } from './footer';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Summary />
      <Availability />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}
