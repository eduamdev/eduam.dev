import { Header } from './header';
import { Intro } from './intro';
import { Work } from './work';
import { Social } from './social';
import { Footer } from './footer';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Intro />
      <Work />
      <Social />
      <Footer />
    </div>
  );
}
