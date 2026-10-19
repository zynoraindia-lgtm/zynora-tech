'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const marquee = techStack.flatMap((g) => g.items);

export default function TechStack() {
  return (
    <section
      id="technology"
      className="section overflow-hidden border-t border-white/[0.06] bg-ink-900"
    >
      <div className="container relative">
        <SectionHeader
          eyebrow="Technology Ecosystem"
          align="center"
          title="Engineered With"
          accent="Modern Technology."
          description="The platforms and languages we build on. This list stays deliberately honest — it reflects working capability, not a logo wall."
        />
      </div>

      {/* Drifting technology marquee above the engineering core */}
      <div className="relative mt-16">
        <div className="relative overflow-hidden py-3">
          <div className="flex w-max animate-drift gap-3">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 text-[13px] text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent sm:w-44"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 via-ink-900/80 to-transparent sm:w-44"
          />
        </div>

        <div className="container relative">
          <Reveal direction="scale" className="mx-auto mt-24 w-fit pb-16">
            <div className="relative grid place-items-center">
              <div
                aria-hidden="true"
                className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)]"
              />
              {[0, 1].map((i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="absolute rounded-full border border-white/[0.07]"
                  style={{ height: 150 + i * 70, width: 150 + i * 70 }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 60 + i * 20, repeat: Infinity, ease: 'linear' }}
                />
              ))}
              <div className="relative rounded-full border border-cyan/25 bg-ink-950/90 px-7 py-4 backdrop-blur">
                <span className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-white">
                  Zynora
                </span>
                <span className="mt-1 block text-center text-[9px] uppercase tracking-[0.3em] text-cyan/80">
                  Engineering
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container mt-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((group, gi) => (
            <Reveal
              key={group.category}
              delay={gi * 0.07}
              className="bg-ink-950 p-6"
            >
              <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan/80">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-xs text-zinc-600">
            Technology selection is made per project against the requirement, team and
            long-term maintenance cost.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
