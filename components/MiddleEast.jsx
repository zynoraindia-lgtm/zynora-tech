'use client';

import { motion } from 'framer-motion';
import { middleEast } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function MiddleEast() {
  return (
    <section
      id="middle-east"
      className="section relative overflow-hidden border-t border-white/[0.06] bg-ink-900"
    >
      {/* Elegant regional motif: interlacing geometric arcs, no clichés */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.55]"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="me-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx={260}
              cy={200}
              r={60 + i * 34}
              fill="none"
              stroke="url(#me-stroke)"
              strokeWidth="0.8"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              style={{ transformOrigin: '260px 200px' }}
            />
          ))}
          {[0, 45, 90, 135].map((deg) => (
            <line
              key={deg}
              x1={260 - 200 * Math.cos((deg * Math.PI) / 180)}
              y1={200 - 200 * Math.sin((deg * Math.PI) / 180)}
              x2={260 + 200 * Math.cos((deg * Math.PI) / 180)}
              y2={200 + 200 * Math.sin((deg * Math.PI) / 180)}
              stroke="rgba(255,255,255,0.045)"
              strokeWidth="0.8"
            />
          ))}
        </svg>
      </div>

      <div className="container relative">
        <SectionHeader
          eyebrow="Regional Focus"
          title="Technology for the Middle East."
          accent="Engineering for the World."
          description="A delivery base in India and an active focus on Gulf markets — structured for the working hours, expectations and pace those businesses operate on."
          className="max-w-3xl"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:max-w-4xl">
          {middleEast.map((region, i) => (
            <Reveal key={region.region} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan/25">
                <span className="font-display text-[11px] tracking-[0.25em] text-zinc-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-7 font-display text-2xl font-semibold text-white">
                  {region.region}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                  {region.body}
                </p>
                <span className="mt-7 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan/60 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Zynora operates from its registered office in Madurai, India, and serves
            clients in the UAE through remote delivery and on-site engagement
            as a project requires.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
