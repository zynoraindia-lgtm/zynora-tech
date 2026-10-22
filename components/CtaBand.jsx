'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { company } from '@/lib/site';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

/** Closing call-to-action on the Home page — sends visitors to the Contact page. */
export default function CtaBand() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-30 edge-fade-y"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(34,211,238,0.13),transparent_70%)]"
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="fade">
            <span className="eyebrow">Start a Conversation</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h2 mt-6 text-balance">
              Have a <span className="accent-text">Business Challenge?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lead mx-auto mt-5 max-w-xl">
              Let&apos;s turn your idea, process or challenge into a technology solution.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="accent" size="lg">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href={`tel:${company.phoneIntl}`} variant="outline" size="lg">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                {company.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
