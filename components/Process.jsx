'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { process } from '@/lib/site';
import SectionHeader from './ui/SectionHeader';

const TONES = { 950: 'bg-ink-950', 900: 'bg-ink-900' };
const COLUMNS = {
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
};

/** Delivery timeline. Defaults are the company-wide process (Solutions page); service pages pass their own steps. */
export default function Process({
  id = 'process',
  steps = process,
  eyebrow = 'Process',
  title = 'From Idea',
  accent = 'to Impact.',
  description = 'A delivery sequence that keeps scope, architecture and expectations visible from the first conversation to long after launch.',
  tone = '900',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 35%'],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id={id}
      className={`section overflow-hidden border-t border-white/[0.06] ${TONES[tone] || TONES[900]}`}
    >
      <div className="container">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
        />

        <div ref={ref} className="relative mt-20">
          {/* Progress rail */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-white/[0.07] lg:left-0 lg:top-[38px] lg:h-px lg:w-full"
          >
            <motion.div
              style={{ scaleY: railScale, scaleX: railScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-cyan via-azure to-violet lg:origin-left lg:bg-gradient-to-r"
            />
          </div>

          <ol className={`relative grid gap-9 lg:gap-4 ${COLUMNS[steps.length] || COLUMNS[7]}`}>
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative pl-11 lg:pl-0 lg:pt-16"
              >
                {/* Node */}
                <span className="absolute left-0 top-0.5 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-950 transition-colors duration-500 group-hover:border-cyan/50 lg:left-0 lg:top-[26px] lg:h-6 lg:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 transition-all duration-500 group-hover:bg-cyan group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
                </span>

                <span className="font-display text-[11px] font-medium tracking-[0.2em] text-zinc-600 transition-colors group-hover:text-cyan">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-zinc-500 lg:pr-3">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
