'use client';

import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { company } from '@/lib/site';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import ContactForm from './ContactForm';

export default function Contact() {
  const whatsapp = `https://wa.me/${company.phoneIntl.replace(/\D/g, '')}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900 pb-16 pt-24 md:pb-20 md:pt-32"
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
              <Button href={whatsapp} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#enquiry" variant="outline" size="lg">
                Request a Consultation
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.85fr_1.4fr] lg:gap-8">
          <Reveal direction="right">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-ink-850/60 p-8 backdrop-blur-sm">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Talk to us directly
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  Straight to the team that builds — no call centre in between.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
                      <Phone className="h-4 w-4 text-cyan" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-zinc-600">
                        Phone
                      </span>
                      {company.phones.map((p) => (
                        <a
                          key={p.intl}
                          href={`tel:${p.intl}`}
                          className="mt-1 block text-[15px] text-white transition-colors hover:text-cyan"
                        >
                          {p.display}
                        </a>
                      ))}
                    </span>
                  </li>

                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="group flex items-start gap-3.5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition-colors group-hover:border-cyan/30 group-hover:bg-cyan/[0.07]">
                        <Mail className="h-4 w-4 text-cyan" strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10.5px] uppercase tracking-[0.18em] text-zinc-600">
                          Email
                        </span>
                        <span className="mt-1 block break-all text-[15px] text-white transition-colors group-hover:text-cyan">
                          {company.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
                      <MapPin className="h-4 w-4 text-cyan" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[10.5px] uppercase tracking-[0.18em] text-zinc-600">
                        India Office
                      </span>
                      <span className="mt-1 block text-[14.5px] leading-relaxed text-zinc-400">
                        {company.address.line1},
                        <br />
                        {company.address.line2},
                        <br />
                        {company.address.line3}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 border-t border-white/[0.07] pt-6">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-600">
                  Serving
                </span>
                <p className="mt-2 font-display text-[15px] text-white">
                  India • UAE
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} id="enquiry">
            <div id="enquiry" className="scroll-mt-28">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
