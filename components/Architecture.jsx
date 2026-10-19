'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { architecture, architectureQualities } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="section relative overflow-hidden border-t border-white/[0.06] bg-ink-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-[0.4] edge-fade-y"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.09),transparent_65%)]"
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Enterprise Engineering"
          align="center"
          title="Built for Scale."
          accent="Designed for Reality."
          description="Every Zynora platform is layered so that interfaces, logic and data can change independently — which is what makes a system survive its third year."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {architecture.map((layer, i) => (
              <div key={layer.layer}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-ink-900/70 p-5 backdrop-blur-sm transition-all duration-500 hover:border-cyan/30 hover:bg-ink-850/80 md:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(34,211,238,0.07), transparent 60%)',
                    }}
                  />
                  <div className="relative flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base font-semibold text-white md:text-lg">
                      {layer.layer}
                    </h3>
                    <span className="font-display text-[10px] tracking-[0.2em] text-zinc-700">
                      L{i + 1}
                    </span>
                  </div>
                  <p className="relative mt-2 text-[13.5px] leading-relaxed text-zinc-500">
                    {layer.note}
                  </p>

                  {/* Signal travelling through the layer */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-transparent via-cyan to-transparent"
                    animate={{ x: ['-4rem', '100%'] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: i * 0.55,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {i < architecture.length - 1 ? (
                  <div className="flex justify-center py-2.5" aria-hidden="true">
                    <ChevronDown className="h-3.5 w-3.5 text-zinc-700" strokeWidth={1.5} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <Reveal direction="left" delay={0.15}>
            <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06]">
              {architectureQualities.map((quality, i) => (
                <div
                  key={quality}
                  className="group flex items-center justify-between bg-ink-900 px-6 py-5 transition-colors hover:bg-ink-850"
                >
                  <span className="font-display text-[15px] font-medium text-white">
                    {quality}
                  </span>
                  <span className="flex items-center gap-1.5" aria-hidden="true">
                    {[0, 1, 2, 3].map((k) => (
                      <motion.span
                        key={k}
                        className="h-1 w-1 rounded-full bg-zinc-700"
                        animate={{
                          backgroundColor: [
                            'rgb(63,63,70)',
                            'rgb(34,211,238)',
                            'rgb(63,63,70)',
                          ],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: i * 0.3 + k * 0.15,
                        }}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13.5px] leading-relaxed text-zinc-600">
              These are engineering commitments, not marketing claims — each one maps to
              specific decisions in how a system is designed, tested and deployed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
