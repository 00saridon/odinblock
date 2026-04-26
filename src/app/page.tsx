import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Tokenomics from '@/components/sections/Tokenomics';
import Roadmap from '@/components/sections/Roadmap';
import Trust from '@/components/sections/Trust';
import Team from '@/components/sections/Team';
import Partners from '@/components/sections/Partners';
import Blog from '@/components/sections/Blog';
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
      <Team />
      <Partners />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}
