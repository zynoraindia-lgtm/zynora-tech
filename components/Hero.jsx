'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { company } from '@/lib/site';
import Button from './ui/Button';
import { useIntroReady } from '@/lib/intro';

const HeroVisual = dynamic(() => import('./HeroVisual'), { ssr: false });

const words = "Technology That Builds What's Next.".split(' ');

export default function Hero() {
  // Hold the entrance until the opening intro starts revealing the page.
  const ready = useIntroReady();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Ambient layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid-fine opacity-[0.55] edge-fade-y"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_65%)] blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.13),transparent_65%)]"
      />

      {/* Canvas ecosystem — full bleed behind the copy on desktop */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <HeroVisual />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">
              Digital Engineering &amp; Business Technology
            </span>
          </motion.div>

          <h1 className="h1 mt-8 text-balance">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
                transition={{
                  duration: 0.75,
                  delay: 0.12 + i * 0.075,
                  ease: [0.21, 0.6, 0.35, 1],
                }}
                className={`mr-[0.28em] inline-block ${
                  i >= words.length - 2 ? 'accent-text' : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="lead mt-7 max-w-xl"
          >
            {company.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" variant="accent" size="lg">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-12"
          >
            <a
              href="#presence"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <span className="h-px w-10 bg-gradient-to-r from-cyan/70 to-transparent" />
              Serving India • UAE • Global Businesses
            </a>
          </motion.div>
        </div>

        {/* Canvas on tablet / mobile sits below the copy */}
        <div className="pointer-events-none relative mt-14 h-[300px] w-full sm:h-[380px] lg:hidden">
          <HeroVisual />
        </div>
      </div>

      <motion.a
        href="#why"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-300 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
