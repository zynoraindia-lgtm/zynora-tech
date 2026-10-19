'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { transformation } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const columns = [
  {
    key: 'challenge',
    data: transformation.challenge,
    tone: 'zinc',
    border: 'border-white/[0.07]',
    dot: 'bg-zinc-600',
    heading: 'text-zinc-400',
  },
  {
    key: 'zynora',
    data: transformation.zynora,
    tone: 'cyan',
    border: 'border-cyan/25',
    dot: 'bg-cyan',
    heading: 'accent-text',
  },
  {
    key: 'outcome',
    data: transformation.outcome,
    tone: 'violet',
    border: 'border-violet/25',
    dot: 'bg-violet-soft',
    heading: 'text-violet-soft',
  },
];

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="section overflow-hidden border-t border-white/[0.06] bg-ink-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent_70%)]"
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Digital Transformation"
          align="center"
          title="From Business Challenges"
          accent="to Digital Solutions."
          description="Most businesses do not need more software. They need the systems they already run to talk to each other, and the work in between to stop being manual."
        />

        <div className="relative mt-20">
          {/* Flow arrows sitting in the gaps between the three columns */}
          <div aria-hidden="true" className="pointer-events-none hidden lg:block">
            {['left-[33.333%]', 'left-[66.666%]'].map((pos, i) => (
              <motion.span
                key={pos}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className={`absolute ${pos} top-[54px] z-10 -translate-x-1/2`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-ink-900">
                  <ArrowRight
                    className={`h-3 w-3 ${i === 0 ? 'text-cyan' : 'text-violet-soft'}`}
                    strokeWidth={1.8}
                  />
                </span>
              </motion.span>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {columns.map((col, ci) => (
              <Reveal key={col.key} delay={ci * 0.12}>
                <div
                  className={`relative h-full rounded-2xl border ${col.border} bg-ink-850/70 p-7 backdrop-blur-sm transition-colors duration-500 md:p-8`}
                >
                  {col.key === 'zynora' ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(70%_60%_at_50%_0%,rgba(34,211,238,0.08),transparent_70%)]"
                    />
                  ) : null}

                  <div className="relative flex items-center justify-between">
                    <h3
                      className={`font-display text-xs font-medium uppercase tracking-[0.2em] ${col.heading}`}
                    >
                      {col.data.label}
                    </h3>
                    <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                  </div>

                  <ul className="relative mt-7 space-y-0">
                    {col.data.items.map((item, i) => (
                      <li key={item}>
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                          className="flex items-center gap-3 py-2.5"
                        >
                          <span
                            className={`h-1 w-1 shrink-0 rounded-full ${col.dot} opacity-70`}
                          />
                          <span
                            className={`text-[15px] ${
                              col.key === 'challenge'
                                ? 'text-zinc-500'
                                : 'text-white'
                            }`}
                          >
                            {item}
                          </span>
                        </motion.div>
                        {i < col.data.items.length - 1 ? (
                          <ChevronDown
                            aria-hidden="true"
                            className="ml-[-1px] h-3 w-3 text-zinc-700"
                            strokeWidth={1.6}
                          />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile flow arrows between the stacked columns */}
          <div aria-hidden="true" className="pointer-events-none lg:hidden">
            <div className="mt-8 flex items-center justify-center gap-2 text-zinc-700">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-zinc-700" />
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-zinc-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
