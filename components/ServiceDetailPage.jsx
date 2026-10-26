import { company, services } from '@/lib/site';
import { serviceDetails } from '@/lib/service-pages';
import ServiceHero from './ServiceHero';
import ServiceFeatureGrid from './ServiceFeatureGrid';
import ServiceTechStrip from './ServiceTechStrip';
import Process from './Process';
import Clients from './Clients';
import FAQ from './FAQ';
import RelatedServices from './RelatedServices';
import CtaBand from './CtaBand';

/** Page metadata for a service detail route: `export const metadata = serviceMetadata('web');` */
export function serviceMetadata(id) {
  const page = serviceDetails[id];
  return { title: page.metaTitle, description: page.metaDescription };
}

/**
 * Shared template for every /services/<slug> page. `id` is the service id from
 * `services` (lib/site.js); the copy comes from `serviceDetails[id]` (lib/service-pages.js).
 */
export default function ServiceDetailPage({ id }) {
  const page = serviceDetails[id];
  const service = services.find((s) => s.id === id);
  const contactHref = `/contact?service=${encodeURIComponent(page.contactService || service.title)}`;

  // Rows of three when the cards divide evenly that way (e.g. 9), otherwise rows of four.
  const count = page.offerings.items.length;
  const columns = count % 4 !== 0 && count % 3 === 0 ? 3 : 4;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: `${service.title} — ${company.name}`,
    description: page.metaDescription,
    url: `${company.url}/services/${page.slug}`,
    provider: { '@type': 'Organization', name: company.name, url: company.url },
    areaServed: ['AE', 'IN'],
  };

  // `page-top` (app/globals.css) sets the gap between the navbar and the first section.
  return (
    <div className="page-top">
      <ServiceHero service={service} hero={page.hero} contactHref={contactHref} />

      <ServiceFeatureGrid id="what-we-build" {...page.offerings} tone="900" columns={columns} />

      <ServiceFeatureGrid
        id="included"
        {...page.standards}
        variant="panel"
        tone="950"
        columns={3}
      >
        <ServiceTechStrip categories={page.standards.techCategories} />
      </ServiceFeatureGrid>

      <Process id="service-process" {...page.process} />

      {/* Without its own `clients` copy, a page uses the Industries page heading. */}
      <Clients {...page.clients} tone="950" />

      <FAQ items={page.faqs} description={page.faqDescription} tone="900" />

      <RelatedServices currentId={service.id} {...page.related} />

      <CtaBand
        {...page.cta}
        primaryHref={contactHref}
        primaryLabel={page.hero.primaryCta}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
