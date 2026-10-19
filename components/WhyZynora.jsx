'use client';

import { useRef, useState } from 'react';
import {
  Cpu,
  Handshake,
  Layers,
  MessagesSquare,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { differentiators } from '@/lib/site';
import { RevealGroup, RevealItem } from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const ICONS = { Target, Layers, Cpu, ShieldCheck, MessagesSquare, Handshake };

function Card({ item, index }) {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, active: false });
  const Icon = ICONS[item.icon] || Target;

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }

  return (
    <RevealItem>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/60 p-7 transition-all duration-500 hover:border-white/15 hover:bg-ink-800/70 md:p-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(240px circle at ${spot.x}px ${spot.y}px, rgba(34,211,238,0.09), transparent 70%)`,
          }}
        />

        <div className="relative flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-500 group-hover:border-cyan/30 group-hover:bg-cyan/[0.07]">
            <Icon
              className="h-[18px] w-[18px] text-zinc-400 transition-colors duration-500 group-hover:text-cyan"
              strokeWidth={1.6}
            />
          </span>
          <span className="font-display text-[11px] tracking-widest text-zinc-700">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="relative mt-6 font-display text-lg font-semibold text-white">
          {item.title}
        </h3>
        <p className="relative mt-3 text-[14.5px] leading-relaxed text-muted">
          {item.body}
        </p>

        <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
      </div>
    </RevealItem>
  );
}

export default function WhyZynora() {
  return (
    <section id="why" className="section border-t border-white/[0.06] bg-ink-950">
      <div className="container">
        <SectionHeader
          eyebrow="Why Zynora"
          title="Why Businesses"
          accent="Choose Zynora."
          description="Not a list of promises — the working principles that shape how every Zynora engagement is scoped, built and supported."
        />

        <RevealGroup
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {differentiators.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
