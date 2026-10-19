'use client';

import { Globe } from 'lucide-react';
import { presence } from '@/lib/site';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import WorldMap from './WorldMap';

export default function GlobalPresence() {
  return (
    <section id="presence" className="section border-t border-white/[0.06] bg-ink-950">
      <div className="container">
        <SectionHeader
          eyebrow="Global Presence"
          title="Built for Businesses"
          accent="Without Borders."
          description="Zynora works with organisations across the Middle East and India, and partners remotely with businesses in other markets."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2">
            {presence.map((p) => (
              <RevealItem
                key={p.region}
                className="group relative bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-850"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.region}
                  </h3>
                  {p.region === 'Global' ? (
                    <Globe
                      className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-cyan"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan/70 transition-all duration-500 group-hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{p.detail}</p>
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-cyan/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal direction="left" delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_65%_45%,rgba(34,211,238,0.10),transparent_70%)]"
            />
            <WorldMap />
            <p className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-600">
              India • UAE
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
