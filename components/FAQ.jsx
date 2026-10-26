'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const TONES = { 950: 'bg-ink-950', 900: 'bg-ink-900' };

/** Accordion FAQ. Defaults are the general FAQs (Contact page); service pages pass their own. */
export default function FAQ({
  items = faqs,
  eyebrow = 'FAQ',
  title = 'Questions,',
  accent = 'Answered.',
  description = 'If something here is not covered, send the question through the enquiry form — we answer it directly.',
  tone = '950',
}) {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className={`section border-t border-white/[0.06] ${TONES[tone] || TONES[950]}`}
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            accent={accent}
            description={description}
          />

          <Reveal direction="left" delay={0.1}>
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {items.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-[17px] font-medium transition-colors ${
                          isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-cyan/40 bg-cyan/10 text-cyan'
                            : 'border-white/10 text-zinc-500 group-hover:border-white/25'
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 pr-12 text-[15px] leading-relaxed text-muted">
                            {faq.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
