import Industries from '@/components/Industries';
import Clients from '@/components/Clients';
import MiddleEast from '@/components/MiddleEast';

export const metadata = {
  title: 'Industries',
  description:
    'Technology across industries — the patterns Zynora most often solves in healthcare, education, retail, logistics and more, the businesses we have built technology for, and our focus on Gulf markets.',
  alternates: { canonical: '/industries' },
};

// /industries — `page-top` (app/globals.css) sets the gap between the navbar and the first section.
export default function IndustriesPage() {
  return (
    <div className="page-top">
      <h1 className="sr-only">Industries Zynora Technology Serves</h1>
      <Industries />
      <Clients />
      <MiddleEast />
    </div>
  );
}
