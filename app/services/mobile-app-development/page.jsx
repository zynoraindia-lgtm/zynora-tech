import ServiceDetailPage, { serviceMetadata } from '@/components/ServiceDetailPage';

// /services/mobile-app-development — opened from "Explore Mobile Development" on /services.
// Copy lives in `mobile` in lib/service-pages.js.
export const metadata = serviceMetadata('mobile');

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailPage id="mobile" />;
}
