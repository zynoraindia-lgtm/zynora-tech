'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site';
import SectionHeader from './ui/SectionHeader';
import { RevealGroup, RevealItem } from './ui/Reveal';

/**
 * Links to the other services from a service detail page. A service with its own
 * page (`href` in lib/site.js) links there; the rest jump to their block on /services.
 */
export default function RelatedServices({ currentId, eyebrow, title, accent, description }) {
  const others = services.filter((s) => s.id !== currentId);

  return (
    <section id="other-services" className="section border-t border-white/[0.06] bg-ink-950">
      <div className="container">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
          {others.map((s) => (
            <RevealItem key={s.id} className="h-full">
              <Link
                href={s.href || `/services#${s.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/60 transition-colors duration-500 hover:border-cyan/30"
              >
                {s.image ? (
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-ink-900">
                    <Image
                      src={s.image}
                      alt={s.imageAlt || s.title}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-display text-[11px] tracking-widest text-zinc-600">
                    {s.number}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.promise}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-medium text-white transition-colors group-hover:text-cyan">
                    View service
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.8}
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
