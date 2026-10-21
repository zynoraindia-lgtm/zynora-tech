'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/site';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import ServiceVisual from './ServiceVisual';

const accentRing = {
  cyan: 'group-hover:border-cyan/40',
  azure: 'group-hover:border-azure/40',
  violet: 'group-hover:border-violet/40',
};

const accentText = {
  cyan: 'text-cyan',
  azure: 'text-azure-soft',
  violet: 'text-violet-soft',
};

export default function Services() {
  return (
    <section
      id="services"
      className="section border-t border-white/[0.06] bg-ink-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-30 edge-fade-y"
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Services"
          title="Technology, Engineered"
          accent="Around Your Business."
          description="Six delivery capabilities that cover the digital surface of a modern organisation — from the first page a customer sees to the system that runs the back office."
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={service.id}
                className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  direction={flip ? 'left' : 'right'}
                  className={flip ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-sm font-medium tracking-widest ${
                        accentText[service.accent]
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                  </div>

                  <h3 className="mt-6 font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-[2.1rem]">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 font-display text-lg font-medium ${
                      accentText[service.accent]
                    }`}
                  >
                    {service.promise}
                  </p>
                  <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap}>
                        <span
                          className={`pill border-white/[0.08] ${
                            accentRing[service.accent]
                          }`}
                        >
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="group/cta mt-9 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan"
                  >
                    {service.cta}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </a>
                </Reveal>

                <Reveal
                  direction={flip ? 'right' : 'left'}
                  delay={0.1}
                  className={flip ? 'lg:order-1' : ''}
                >
                  <div className="transition-transform duration-700 will-change-transform group-hover:-translate-y-1.5">
                    {service.image ? (
                      <div
                        className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900 shadow-lift transition-colors duration-500 ${
                          accentRing[service.accent]
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.imageAlt || `${service.title} showcase`}
                          width={1920}
                          height={1080}
                          sizes="(min-width: 1360px) 608px, (min-width: 1024px) 46vw, 100vw"
                          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <ServiceVisual type={service.visual} />
                    )}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
