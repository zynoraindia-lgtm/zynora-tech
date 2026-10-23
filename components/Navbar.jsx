'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { company, nav } from '@/lib/site';
import Button from './ui/Button';

const MotionLink = motion.create(Link);

/** Home is active only on "/"; other items stay active on their sub-paths too. */
function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.07] bg-ink-950/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link
            href="/"
            className="group flex w-fit flex-col items-stretch"
            aria-label={`${company.shortName} home`}
          >
            <Image
              src="/zynora-mark.png"
              alt=""
              width={720}
              height={151}
              priority
              className="h-7 w-auto md:h-8"
            />
            {/* Justified so the caption starts and ends flush with the mark. */}
            <span
              className="mt-[3px] block w-full text-[7.5px] font-medium uppercase leading-none text-zinc-500 transition-colors group-hover:text-zinc-300 md:text-[8.5px]"
              style={{ textAlign: 'justify', textAlignLast: 'justify' }}
            >
              Technology Private Limited
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.05]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/contact"
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-cyan/40 lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-ink-950 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container flex h-16 items-center justify-between md:h-[72px]">
              <Image
                src="/zynora-mark.png"
                alt={company.shortName}
                width={720}
                height={151}
                className="h-6 w-auto"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.6} />
              </button>
            </div>

            <nav className="container mt-6 flex flex-col" aria-label="Mobile">
              {nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <MotionLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                    className={`flex items-center justify-between border-b border-white/[0.07] py-5 font-display text-[1.6rem] font-medium ${
                      active ? 'text-cyan' : 'text-white'
                    }`}
                  >
                    {item.label}
                    <ArrowRight
                      className={`h-4 w-4 ${active ? 'text-cyan' : 'text-zinc-600'}`}
                      strokeWidth={1.6}
                    />
                  </MotionLink>
                );
              })}
            </nav>

            <div className="container mb-10 mt-8 space-y-4">
              <Button href="/contact" variant="accent" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="space-y-1 text-sm text-zinc-500">
                {company.phones.map((p) => (
                  <p key={p.intl}>
                    <a href={`tel:${p.intl}`} className="hover:text-white">
                      {p.display}
                    </a>
                  </p>
                ))}
                <p>
                  <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                    {company.email}
                  </a>
                </p>
                <p className="pt-2 text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                  India • UAE
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
