import Transformation from '@/components/Transformation';
import Architecture from '@/components/Architecture';
import Process from '@/components/Process';

export const metadata = {
  title: 'Solutions',
  description:
    'From business challenges to digital solutions — how Zynora connects systems, automates manual work and delivers on an architecture built to scale.',
  alternates: { canonical: '/solutions' },
};

// /solutions — `page-top` (app/globals.css) sets the gap between the navbar and the first section.
export default function SolutionsPage() {
  return (
    <div className="page-top">
      <h1 className="sr-only">Zynora Technology Solutions</h1>
      <Transformation />
      <Architecture />
      <Process />
    </div>
  );
}
