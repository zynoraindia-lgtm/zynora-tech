'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { industries } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function Industries() {
  const [active, setActive] = useState(0);
  const scroller = useRef(null);

  function scrollBy(dir) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' });
  }

  const current = industries[active];

  return (
    <section
      id="industries"
      className="section overflow-hidden border-t border-white/[0.06] bg-ink-950"
    >
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Industries"
            title="Technology"
            accent="Across Industries."
            description="Select an industry to see the pattern we most often solve for it."
            className="max-w-2xl"
          />

          <Reveal direction="fade" className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous industries"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-cyan/40 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next industries"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-cyan/40 hover:text-white"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Horizontal industry rail */}
      <div className="relative mt-14">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:px-8 xl:px-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]"
          role="tablist"
          aria-label="Industries"
        >
          {industries.map((industry, i) => (
            <button
              key={industry.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`group relative w-[190px] shrink-0 snap-start overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 sm:w-[220px] ${
                active === i
                  ? 'border-cyan/35 bg-gradient-to-b from-cyan/[0.09] to-transparent'
                  : 'border-white/[0.07] bg-ink-900/60 hover:border-white/15'
              }`}
            >
              <span
                className={`font-display text-[11px] tracking-widest transition-colors ${
                  active === i ? 'text-cyan' : 'text-zinc-700'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className={`mt-8 font-display text-[17px] font-semibold leading-tight transition-colors ${
                  active === i ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                }`}
              >
                {industry.name}
              </h3>
              <span
                className={`mt-4 block h-px w-full origin-left transition-transform duration-500 ${
                  active === i
                    ? 'scale-x-100 bg-gradient-to-r from-cyan to-transparent'
                    : 'scale-x-0 bg-white/20'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Challenge → Solution → Outcome detail */}
      <div className="container mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/70 p-7 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(34,211,238,0.07),transparent_70%)]"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative grid gap-8 md:grid-cols-3 md:gap-10"
            >
              {[
                { label: 'Business Challenge', value: current.challenge, tone: 'text-zinc-500' },
                { label: 'Technology Solution', value: current.solution, tone: 'text-white' },
                { label: 'Business Outcome', value: current.outcome, tone: 'text-cyan-soft' },
              ].map((block, i) => (
                <div key={block.label} className="relative">
                  {i > 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -left-5 top-1 hidden h-full w-px bg-gradient-to-b from-white/10 to-transparent md:block"
                    />
                  ) : null}
                  <h4 className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    {block.label}
                  </h4>
                  <p className={`mt-4 text-[15px] leading-relaxed ${block.tone}`}>
                    {block.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
