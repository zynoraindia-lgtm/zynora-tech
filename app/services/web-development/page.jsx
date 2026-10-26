import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/web-development — opened from "Explore Web Development" on /services.
// Copy lives in `web` in lib/service-pages.js.
export const metadata = serviceMetadata('web');

export default function WebDevelopmentPage() {
  return <ServiceDetailPage id="web" />;
}
