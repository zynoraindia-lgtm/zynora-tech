import Transformation from '@/components/Transformation';
import Architecture from '@/components/Architecture';
import Process from '@/components/Process';

export const metadata = {
  title: 'Solutions',
  description:
    'From business challenges to digital solutions — how Zynora connects systems, automates manual work and delivers on an architecture built to scale.',
};

// /solutions — `page-top` (app/globals.css) sets the gap between the navbar and the first section;
// `page-top-roomy` adds a little extra space above the centred heading on this page.
export default function SolutionsPage() {
  return (
    <div className="page-top page-top-roomy">
      <h1 className="sr-only">Zynora Technology Solutions</h1>
      <Transformation />
      <Architecture />
      <Process />
    </div>
  );
}
