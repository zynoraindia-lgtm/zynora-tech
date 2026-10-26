import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/custom-software — opened from "Explore Custom Software" on /services.
// Copy lives in `custom` in lib/service-pages.js.
export const metadata = serviceMetadata('custom');

export default function CustomSoftwarePage() {
  return <ServiceDetailPage id="custom" />;
}
