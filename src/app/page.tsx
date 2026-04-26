import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Tokenomics from '@/components/sections/Tokenomics';
import Roadmap from '@/components/sections/Roadmap';
import Trust from '@/components/sections/Trust';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Tokenomics />
      <Roadmap />
      <Trust />
      <FAQ />
      <Footer />
    </main>
  );
}
