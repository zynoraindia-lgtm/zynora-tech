'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

/**
 * Opening section of a service detail page (e.g. /services/web-development).
 * `service` is the entry from `services` in lib/site.js; `hero` is the page's hero copy.
 */
export default function ServiceHero({ service, hero, contactHref = '/contact' }) {

  return (
    <section className="section overflow-hidden bg-ink-950 pb-20 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-30 edge-fade-y"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[560px] w-[760px] bg-[radial-gradient(50%_55%_at_70%_30%,rgba(34,211,238,0.12),transparent_70%)]"
      />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal direction="fade">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500">
                <li>
                  <Link href="/services" className="transition-colors hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3" strokeWidth={1.8} />
                </li>
                <li aria-current="page" className="text-zinc-300">
                  {service.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <Reveal direction="fade" delay={0.04}>
            <div className="mt-8">
              <span className="eyebrow">
                {service.number} — {hero.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.06] text-white sm:text-[3.3rem] lg:text-[3.8rem]">
              {hero.title}
              <span className="accent-text block pb-1">{hero.accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="lead mt-6 max-w-xl">{hero.body}</p>
          </Reveal>

          {hero.highlights?.length ? (
            <Reveal delay={0.18}>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {hero.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-cyan/30 bg-cyan/10">
                      <Check className="h-3 w-3 text-cyan" strokeWidth={2.2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={contactHref} variant="accent" size="lg">
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                {hero.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>

        {service.image ? (
          <Reveal direction="left" delay={0.15} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(34,211,238,0.16),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900 shadow-lift">
              <Image
                src={service.image}
                alt={service.imageAlt || `${service.title} showcase`}
                width={1920}
                height={1080}
                priority
                sizes="(min-width: 1360px) 620px, (min-width: 1024px) 46vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
