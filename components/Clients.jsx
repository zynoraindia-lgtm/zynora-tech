'use client';

import Image from 'next/image';
import { clients } from '@/lib/site';
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const TONES = { 950: 'bg-ink-950', 900: 'bg-ink-900' };

/** Client logo grid. Defaults are the Industries page copy; service pages can pass their own heading. */
export default function Clients({
  eyebrow = 'Our Valuable Clients',
  title = "Businesses We've Built",
  accent = 'Technology For.',
  description = 'A sample of the businesses across Tamil Nadu who have trusted Zynora with their websites, applications and digital platforms.',
  tone = '900',
}) {
  return (
    <section
      id="clients"
      className={`section overflow-hidden border-t border-white/[0.06] ${TONES[tone] || TONES[900]}`}
    >
      <div className="container relative">
        <SectionHeader
          eyebrow={eyebrow}
          align="center"
          title={title}
          accent={accent}
          description={description}
        />

        <RevealGroup
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.06}
        >
          {clients.map((client) => (
            <RevealItem key={client.name}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.07] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_18px_40px_-16px_rgba(34,211,238,0.35)]"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 45vw"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-snug text-ink-950">
                    {client.name}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                    {client.tagline}
                  </p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-zinc-600">
            Client names shown with permission. Logos remain the property of their
            respective businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
