import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/erp-solutions — opened from "Explore ERP" on /services.
// Copy lives in `erp` in lib/service-pages.js.
export const metadata = serviceMetadata('erp');

export default function ErpSolutionsPage() {
  return <ServiceDetailPage id="erp" />;
}
