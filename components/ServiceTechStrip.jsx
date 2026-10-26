'use client';

import { techStack } from '@/lib/site';
import Reveal from './ui/Reveal';

/** "Built With" strip on service detail pages — reads the chosen categories from `techStack`. */
export default function ServiceTechStrip({ categories = [], label = 'Built With' }) {
  const groups = techStack.filter((g) => categories.includes(g.category));
  if (!groups.length) return null;

  return (
    <Reveal delay={0.1}>
      <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/[0.07] bg-ink-850/60 p-6 md:p-8 lg:flex-row lg:gap-12">
        <span className="eyebrow shrink-0 self-start">{label}</span>
        <dl className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.category}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan/80">
                {group.category}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="pill px-3 py-1 text-[12px]">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
