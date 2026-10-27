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

/**
 * Page metadata for a service detail route: `export const metadata = serviceMetadata('web');`
 * Title, description and keywords are the SEO fields on each page in lib/service-pages.js.
 */
export function serviceMetadata(id) {
  const page = serviceDetails[id];
  const path = `/services/${page.slug}`;
  return {
    // `absolute` skips the layout's "%s | Zynora Technology" template — the SEO title already ends with it.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: company.name,
      locale: 'en_IN',
      url: path,
      title: page.metaTitle,
      description: page.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
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
    name: `${page.hero.title} ${page.hero.accent}`,
    description: page.metaDescription,
    url: `${company.url}/services/${page.slug}`,
    provider: { '@type': 'Organization', name: company.name, url: company.url },
    areaServed: ['AE', 'IN'],
  };

  // FAQ answers only render when opened, so the full Q&A is also given to search engines here.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
