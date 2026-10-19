'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  Boxes,
  CircleDollarSign,
  CreditCard,
  Factory,
  LineChart,
  Package,
  Users,
  Wallet,
} from 'lucide-react';

/**
 * Abstract interface visuals for each service. Built from layout primitives
 * rather than stock imagery so they stay on-brand and weigh almost nothing.
 */

const shell =
  'relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-ink-850 to-ink-950 shadow-lift';

function Glow({ tone = 'cyan' }) {
  const map = {
    cyan: 'rgba(34,211,238,0.16)',
    azure: 'rgba(59,130,246,0.16)',
    violet: 'rgba(139,92,246,0.16)',
  };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(70% 60% at 50% 0%, ${map[tone] || map.cyan}, transparent 70%)`,
      }}
    />
  );
}

function Bar({ w, delay = 0, tone = 'rgba(255,255,255,0.12)' }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: w }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="h-1.5 rounded-full"
      style={{ background: tone }}
    />
  );
}

function BrowserVisual() {
  return (
    <div className={shell}>
      <Glow tone="cyan" />
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-ink-900/80 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <div className="ml-2 h-4 flex-1 rounded bg-white/[0.05]" />
        </div>

        <div className="mt-4 flex flex-1 gap-3">
          <div className="hidden w-16 shrink-0 space-y-2 sm:block">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-6 rounded-md bg-white/[0.04]" />
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-cyan/20 bg-gradient-to-br from-cyan/[0.10] to-transparent p-3"
            >
              <div className="h-2 w-20 rounded-full bg-cyan/50" />
              <div className="mt-2.5 space-y-1.5">
                <Bar w="82%" delay={0.1} />
                <Bar w="64%" delay={0.18} />
              </div>
            </motion.div>

            <div className="grid flex-1 grid-cols-3 gap-2.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5"
                >
                  <div className="h-1.5 w-8 rounded-full bg-white/20" />
                  <div className="mt-2 h-1 w-full rounded-full bg-white/[0.08]" />
                  <div className="mt-1.5 h-1 w-2/3 rounded-full bg-white/[0.08]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className={shell}>
      <Glow tone="azure" />
      <div className="relative flex h-full items-center justify-center gap-4 p-6">
        {[
          { delay: 0, y: 10, scale: 0.86, opacity: 0.55 },
          { delay: 0.12, y: -6, scale: 1, opacity: 1 },
          { delay: 0.24, y: 14, scale: 0.8, opacity: 0.4 },
        ].map((cfg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: cfg.opacity, y: cfg.y }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: cfg.delay }}
            style={{ scale: cfg.scale }}
            className="w-[86px] shrink-0 rounded-[18px] border border-white/10 bg-ink-900 p-2 shadow-lift sm:w-[104px]"
          >
            <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-white/15" />
            <div className="space-y-1.5 rounded-[12px] bg-gradient-to-b from-azure/[0.14] to-transparent p-2">
              <div className="h-1.5 w-10 rounded-full bg-azure-soft/60" />
              <div className="h-1 w-full rounded-full bg-white/10" />
              <div className="h-1 w-3/4 rounded-full bg-white/10" />
              <div className="mt-2 grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((k) => (
                  <div key={k} className="h-5 rounded bg-white/[0.05]" />
                ))}
              </div>
              <div className="mt-2 h-4 rounded-md bg-azure/40" />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 backdrop-blur"
        >
          <Bell className="h-3 w-3 text-azure-soft" strokeWidth={1.8} />
          <span className="text-[10px] text-zinc-400">Push enabled</span>
        </motion.div>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className={shell}>
      <Glow tone="violet" />
      <div className="relative grid h-full grid-cols-2 gap-3 p-5 sm:gap-4">
        <div className="space-y-3">
          {[Package, Boxes].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet/15">
                <Icon className="h-4 w-4 text-violet-soft" strokeWidth={1.6} />
              </span>
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/[0.08]" />
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-violet/25 bg-gradient-to-br from-violet/[0.12] to-transparent p-3"
          >
            <div className="flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5 text-violet-soft" strokeWidth={1.6} />
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                Checkout
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-violet/40" />
          </motion.div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-white/[0.07] bg-ink-900/60 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">
              Orders
            </span>
            <LineChart className="h-3.5 w-3.5 text-zinc-600" strokeWidth={1.6} />
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {[38, 56, 44, 72, 60, 88, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                className="flex-1 rounded-t bg-gradient-to-t from-violet/25 to-violet-soft/70"
              />
            ))}
          </div>
          <div className="space-y-1.5">
            <Bar w="70%" delay={0.5} tone="rgba(255,255,255,0.10)" />
            <Bar w="45%" delay={0.58} tone="rgba(255,255,255,0.10)" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ErpVisual() {
  const modules = [
    { label: 'Inventory', Icon: Boxes },
    { label: 'Finance', Icon: Wallet },
    { label: 'HR', Icon: Users },
    { label: 'Sales', Icon: LineChart },
    { label: 'Purchase', Icon: Package },
    { label: 'Operations', Icon: Factory },
  ];
  return (
    <div className={shell}>
      <Glow tone="cyan" />
      <div className="relative flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-1.5 w-16 rounded-full bg-white/20" />
            <div className="mt-2 h-1 w-24 rounded-full bg-white/[0.08]" />
          </div>
          <span className="rounded-full border border-cyan/25 bg-cyan/[0.08] px-2.5 py-1 text-[9px] uppercase tracking-wider text-cyan-soft">
            Live
          </span>
        </div>

        <div className="mt-4 grid flex-1 grid-cols-3 gap-2 sm:gap-2.5">
          {modules.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group/mod flex flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 transition-colors hover:border-cyan/30"
            >
              <m.Icon className="h-3.5 w-3.5 text-cyan/70" strokeWidth={1.6} />
              <span className="mt-2 text-[9px] uppercase tracking-wider text-zinc-500">
                {m.label}
              </span>
              <div className="mt-1.5 h-1 w-full rounded-full bg-white/[0.07]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${40 + i * 9}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
                  className="h-full rounded-full bg-cyan/60"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrmVisual() {
  const stages = [
    { label: 'Leads', count: 5 },
    { label: 'Qualified', count: 3 },
    { label: 'Proposal', count: 2 },
    { label: 'Won', count: 2 },
  ];
  return (
    <div className={shell}>
      <Glow tone="azure" />
      <div className="relative flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Sales Pipeline
          </span>
          <CircleDollarSign className="h-3.5 w-3.5 text-azure-soft" strokeWidth={1.6} />
        </div>

        <div className="mt-4 grid flex-1 grid-cols-4 gap-2">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-lg border border-white/[0.06] bg-white/[0.02] p-2"
            >
              <span className="text-[8.5px] uppercase tracking-wider text-zinc-500">
                {stage.label}
              </span>
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: stage.count }).map((_, k) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1 + k * 0.06 }}
                    className={`rounded p-1.5 ${
                      i === 3
                        ? 'border border-azure/30 bg-azure/[0.10]'
                        : 'bg-white/[0.04]'
                    }`}
                  >
                    <div className="h-1 w-full rounded-full bg-white/20" />
                    <div className="mt-1 h-1 w-2/3 rounded-full bg-white/[0.08]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-ink-900/60 px-3 py-2">
          <BarChart3 className="h-3 w-3 text-zinc-600" strokeWidth={1.6} />
          <div className="h-1 flex-1 rounded-full bg-white/[0.07]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '68%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-full rounded-full bg-gradient-to-r from-azure to-cyan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomVisual() {
  return (
    <div className={shell}>
      <Glow tone="violet" />
      <svg viewBox="0 0 320 240" className="relative h-full w-full">
        <defs>
          <linearGradient id="cs-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {[
          [160, 120, 60, 60],
          [160, 120, 100, 100],
        ].map(([cx, cy, rx, ry], i) => (
          <motion.ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            style={{ transformOrigin: '160px 120px' }}
          />
        ))}

        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 160 + Math.cos(rad) * 82;
          const y = 120 + Math.sin(rad) * 82;
          return (
            <g key={deg}>
              <motion.line
                x1="160"
                y1="120"
                x2={x}
                y2={y}
                stroke="url(#cs-line)"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
              />
              <motion.rect
                x={x - 13}
                y={y - 9}
                width="26"
                height="18"
                rx="4"
                fill="#0f0f11"
                stroke="rgba(139,92,246,0.45)"
                strokeWidth="0.8"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
              <rect x={x - 7} y={y - 2.5} width="14" height="1.6" rx="0.8" fill="rgba(255,255,255,0.25)" />
              <rect x={x - 7} y={y + 1} width="8" height="1.6" rx="0.8" fill="rgba(255,255,255,0.14)" />
            </g>
          );
        })}

        <circle cx="160" cy="120" r="26" fill="#08080a" stroke="rgba(139,92,246,0.6)" strokeWidth="1" />
        <text
          x="160"
          y="123"
          textAnchor="middle"
          className="fill-white/75"
          style={{ fontSize: '8px', letterSpacing: '1.4px' }}
        >
          CUSTOM
        </text>
      </svg>
    </div>
  );
}

const VISUALS = {
  browser: BrowserVisual,
  mobile: MobileVisual,
  commerce: CommerceVisual,
  erp: ErpVisual,
  crm: CrmVisual,
  custom: CustomVisual,
};

export default function ServiceVisual({ type }) {
  const Component = VISUALS[type] || BrowserVisual;
  return <Component />;
}
