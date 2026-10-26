import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/crm-solutions — opened from "Explore CRM" on /services.
// Copy lives in `crm` in lib/service-pages.js.
export const metadata = serviceMetadata('crm');

export default function CrmSolutionsPage() {
  return <ServiceDetailPage id="crm" />;
}
