import Services from '@/components/Services';
import TechStack from '@/components/TechStack';

export const metadata = {
  title: 'Services',
  description:
    'Website development, mobile apps, e-commerce, ERP, CRM and custom software — engineered by Zynora Technology around your business.',
};

// /services — `page-top` (app/globals.css) sets the gap between the navbar and the first section.
export default function ServicesPage() {
  return (
    <div className="page-top">
      <h1 className="sr-only">Zynora Technology Services</h1>
      <Services />
      <TechStack />
    </div>
  );
}
