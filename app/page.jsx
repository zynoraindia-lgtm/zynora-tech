import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import CtaBand from '@/components/CtaBand';

// Home ( / ) — the navbar, footer and intro come from app/layout.jsx.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <CtaBand />
    </>
  );
}
