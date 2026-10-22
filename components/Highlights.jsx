'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Factory, Layers, Workflow } from 'lucide-react';
import { differentiators, highlights, industries, services, transformation } from '@/lib/site';
import SectionHeader from './ui/SectionHeader';
import { RevealGroup, RevealItem } from './ui/Reveal';

/**
 * Home page preview cards — one per page (About, Services, Solutions, Industries).
 * Copy lives in `highlights` (lib/site.js); the tags are pulled from each page's data
 * so the cards stay in sync when that content changes.
 */

const icons = {
  about: Building2,
  services: Layers,
  solutions: Workflow,
  industries: Factory,
};

const tones = {
  about: { icon: 'text-cyan', ring: 'hover:border-cyan/40', glow: 'rgba(34,211,238,0.12)' },
  services: { icon: 'text-azure-soft', ring: 'hover:border-azure/40', glow: 'rgba(59,130,246,0.12)' },
  solutions: { icon: 'text-violet-soft', ring: 'hover:border-violet/40', glow: 'rgba(139,92,246,0.12)' },
  industries: { icon: 'text-cyan', ring: 'hover:border-cyan/40', glow: 'rgba(34,211,238,0.12)' },
};

function tagsFor(key) {
  switch (key) {
    case 'about':
      return differentiators.slice(0, 3).map((d) => d.title);
    case 'services':
      return services.map((s) => s.title);
    case 'solutions':
      return transformation.outcome.items;
    case 'industries': {
      const names = industries.map((i) => i.name);
      return names.length > 5 ? [...names.slice(0, 5), `+${names.length - 5} more`] : names;
    }
    default:
      return [];
  }
}

export default function Highlights() {
  return (
    <section id="explore" className="section border-t border-white/[0.06] bg-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-30 edge-fade-y"
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Explore Zynora"
          title="Everything We Do,"
          accent="One Page Each."
          description="Who we are, what we build, how we solve problems and the industries we serve — pick a page to go deeper."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.08}>
          {highlights.map((item, i) => {
            const Icon = icons[item.key] || Layers;
            const tone = tones[item.key] || tones.about;
            return (
              <RevealItem key={item.key} className="h-full">
                <Link
                  href={item.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-800/60 p-8 transition-colors duration-500 sm:p-10 ${tone.ring}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(70% 60% at 0% 0%, ${tone.glow}, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Icon className={`h-5 w-5 ${tone.icon}`} strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-xs tracking-[0.25em] text-zinc-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative mt-8 font-display text-2xl font-semibold text-white sm:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {tagsFor(item.key).map((tag) => (
                      <li key={tag}>
                        <span className="pill">{tag}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="relative mt-auto inline-flex items-center gap-2 pt-9 text-sm font-medium text-white">
                    {item.cta}
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-1 ${tone.icon}`}
                      strokeWidth={1.8}
                    />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
