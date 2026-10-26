'use client';

import {
  Accessibility,
  Activity,
  AppWindow,
  ArrowRightLeft,
  BadgeCheck,
  BellRing,
  Blocks,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  Calculator,
  CalendarClock,
  ChartColumn,
  CircleUserRound,
  ClipboardList,
  Cloud,
  CodeXml,
  CreditCard,
  Database,
  FilePenLine,
  FileText,
  Gauge,
  Handshake,
  History,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  ListChecks,
  Magnet,
  MessagesSquare,
  MousePointerClick,
  Package,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  SquareKanban,
  Store,
  TabletSmartphone,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Wifi,
  Workflow,
  Zap,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { RevealGroup, RevealItem } from './ui/Reveal';

// Icons are referenced by name from lib/service-pages.js — add new ones here when the data needs them.
const ICONS = {
  Accessibility,
  Activity,
  AppWindow,
  ArrowRightLeft,
  BadgeCheck,
  BellRing,
  Blocks,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  Calculator,
  CalendarClock,
  ChartColumn,
  CircleUserRound,
  ClipboardList,
  Cloud,
  CodeXml,
  CreditCard,
  Database,
  FilePenLine,
  FileText,
  Gauge,
  Handshake,
  History,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  ListChecks,
  Magnet,
  MessagesSquare,
  MousePointerClick,
  Package,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  SquareKanban,
  Store,
  TabletSmartphone,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Wifi,
  Workflow,
  Zap,
};

const TONES = { 950: 'bg-ink-950', 900: 'bg-ink-900' };
const COLUMNS = {
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/**
 * Icon-and-text grid used on service detail pages.
 * variant="cards"  — separate cards with a hover glow (What We Build)
 * variant="panel"  — one panel split by hairlines (Included in Every Build)
 * Anything passed as children renders under the grid.
 */
export default function ServiceFeatureGrid({
  id,
  eyebrow,
  title,
  accent,
  description,
  items = [],
  variant = 'cards',
  columns = 4,
  tone = '950',
  children,
}) {
  const cols = COLUMNS[columns] || COLUMNS[4];

  return (
    <section
      id={id}
      className={`section border-t border-white/[0.06] ${TONES[tone] || TONES[950]}`}
    >
      <div className="container">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          description={description}
        />

        {variant === 'panel' ? (
          <RevealGroup
            className={`mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] ${cols}`}
            stagger={0.06}
          >
            {items.map((item) => {
              const Icon = ICONS[item.icon] || Zap;
              return (
                <RevealItem key={item.title} className="group bg-ink-950 p-7 md:p-8">
                  <Icon
                    className="h-5 w-5 text-cyan transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-5 font-display text-[17px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{item.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        ) : (
          <RevealGroup className={`mt-14 grid gap-5 ${cols}`} stagger={0.06}>
            {items.map((item, i) => {
              const Icon = ICONS[item.icon] || Zap;
              return (
                <RevealItem key={item.title} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-800/50 p-6 transition-colors duration-500 hover:border-cyan/30 md:p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(80% 60% at 0% 0%, rgba(34,211,238,0.10), transparent 70%)',
                      }}
                    />
                    <div className="relative flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-500 group-hover:border-cyan/30 group-hover:bg-cyan/[0.07]">
                        <Icon className="h-[18px] w-[18px] text-cyan" strokeWidth={1.6} />
                      </span>
                      <span className="font-display text-[11px] tracking-widest text-zinc-700">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="relative mt-6 font-display text-[17px] font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="relative mt-2.5 text-[14px] leading-relaxed text-muted">
                      {item.body}
                    </p>
                    <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        )}

        {children}
      </div>
    </section>
  );
}
