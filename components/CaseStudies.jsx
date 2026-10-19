'use client';

import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const accentBar = {
  cyan: 'from-cyan to-transparent',
  azure: 'from-azure to-transparent',
  violet: 'from-violet to-transparent',
};

const accentText = {
  cyan: 'text-cyan',
  azure: 'text-azure-soft',
  violet: 'text-violet-soft',
};

export default function CaseStudies() {
  return (
    <section id="work" className="section border-t border-white/[0.06] bg-ink-950">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Ideas Engineered"
          accent="Into Digital Products."
          description="Case study slots prepared for Zynora's delivered projects. Each entry is published only once the client, scope and outcome are confirmed."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, i) => {
            const feature = i === 0;
            return (
              <Reveal
                key={study.name}
                delay={i * 0.06}
                className={feature ? 'lg:col-span-2' : ''}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 transition-all duration-500 hover:border-white/15 hover:bg-ink-850/70">
                  <span
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${
                      accentBar[study.accent]
                    } opacity-60`}
                  />

                  <div
                    className={`relative p-7 md:p-9 ${
                      feature ? 'lg:grid lg:grid-cols-[1.1fr_1.4fr] lg:gap-12' : ''
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`text-[10.5px] font-medium uppercase tracking-[0.2em] ${
                            accentText[study.accent]
                          }`}
                        >
                          {study.category}
                        </span>
                        <span className="h-3 w-px bg-white/15" />
                        <span className="text-[10.5px] uppercase tracking-[0.18em] text-zinc-600">
                          {study.discipline}
                        </span>
                      </div>

                      <h3
                        className={`mt-5 font-display font-semibold leading-tight text-white ${
                          feature ? 'text-2xl md:text-[1.9rem]' : 'text-xl'
                        }`}
                      >
                        {study.name}
                      </h3>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="pill">{study.industry}</span>
                        <span className="pill">{study.technology}</span>
                      </div>
                    </div>

                    <dl
                      className={`mt-8 space-y-5 ${
                        feature ? 'lg:mt-0 lg:space-y-6' : ''
                      }`}
                    >
                      {[
                        ['Challenge', study.challenge],
                        ['Solution', study.solution],
                        ['Result', study.result],
                      ].map(([label, value]) => (
                        <div key={label} className="border-l border-white/[0.09] pl-4">
                          <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-[14.5px] leading-relaxed text-zinc-500">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <span className="pointer-events-none absolute right-6 top-6 opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" strokeWidth={1.6} />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-zinc-600">
            Placeholder entries. Replace the copy in{' '}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[11px] text-zinc-400">
              lib/site.js
            </code>{' '}
            with confirmed project details before publishing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
