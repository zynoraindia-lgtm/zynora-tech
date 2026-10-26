import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/ecommerce-development — opened from "Explore E-Commerce" on /services.
// Copy lives in `ecommerce` in lib/service-pages.js.
export const metadata = serviceMetadata('ecommerce');

export default function EcommerceDevelopmentPage() {
  return <ServiceDetailPage id="ecommerce" />;
}
