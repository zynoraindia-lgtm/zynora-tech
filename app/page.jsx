import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import GlobalPresence from '@/components/GlobalPresence';
import Services from '@/components/Services';
import Transformation from '@/components/Transformation';
import WhyZynora from '@/components/WhyZynora';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Architecture from '@/components/Architecture';
import MiddleEast from '@/components/MiddleEast';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/ui/CursorGlow';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main id="main">
        <Hero />
        <Clients />
        <GlobalPresence />
        <Services />
        <Transformation />
        <WhyZynora />
        <TechStack />
        <Industries />
        <Process />
        <CaseStudies />
        <Architecture />
        <MiddleEast />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
