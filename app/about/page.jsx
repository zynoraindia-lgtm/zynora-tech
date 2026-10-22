import WhyZynora from '@/components/WhyZynora';
import GlobalPresence from '@/components/GlobalPresence';
import Clients from '@/components/Clients';

export const metadata = {
  title: 'About',
  description:
    'Why businesses choose Zynora Technology — the working principles behind every engagement, where we work across India and the UAE, and the businesses we have built technology for.',
};

// /about — `page-top` (app/globals.css) sets the gap between the navbar and the first section.
export default function AboutPage() {
  return (
    <div className="page-top">
      <h1 className="sr-only">About Zynora Technology</h1>
      <WhyZynora />
      <GlobalPresence />
      <Clients />
    </div>
  );
}
