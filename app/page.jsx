import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import CtaBand from '@/components/CtaBand';

// Canonical URL — resolved against `metadataBase` (company.url) in app/layout.jsx.
export const metadata = {
  alternates: { canonical: '/' },
};

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
