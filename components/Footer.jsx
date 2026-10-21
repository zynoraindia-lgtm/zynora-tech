'use client';

import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { company, services } from '@/lib/site';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#why' },
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#transformation' },
      { label: 'Industries', href: '#industries' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: services.map((s) => ({ label: s.title, href: '#services' })),
  },
  {
    title: 'Global',
    links: [
      { label: 'India', href: '#middle-east' },
      { label: 'UAE', href: '#middle-east' },
    ],
  },
];

function ColumnHeading({ children }) {
  return (
    <h3 className="h-4 text-[11px] font-medium uppercase leading-4 tracking-[0.2em] text-zinc-500">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(55%_100%_at_50%_100%,rgba(34,211,238,0.10),transparent_70%)]"
      />

      <div className="container relative pb-16 pt-32 md:pb-20 md:pt-48">
        {/* One grid for all five columns so every heading shares a baseline. */}
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.85fr_1.25fr_0.65fr_1.15fr]">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1 lg:pr-6">
            <div className="h-4" aria-hidden="true" />

            <Image
              src="/zynora-mark.png"
              alt={company.name}
              width={720}
              height={151}
              className="mt-5 h-8 w-auto md:h-9"
            />
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Technology Private Limited
            </p>

            <p className="mt-7 max-w-xs font-display text-[17px] font-semibold leading-snug text-white">
              Technology That Builds What&apos;s Next.
            </p>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-zinc-500">
              {company.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {company.regions.map((r) => (
                <span key={r} className="pill">
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <ColumnHeading>{col.title}</ColumnHeading>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link, i) => (
                  <li key={`${col.title}-${link.label}-${i}`}>
                    <a
                      href={link.href}
                      className="group inline-flex items-start gap-1.5 text-[13.5px] leading-snug text-zinc-400 transition-colors hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="mt-6 space-y-4 text-[13.5px] text-zinc-400">
              <li>
                <a
                  href={`tel:${company.phoneIntl}`}
                  className="group flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={1.6} />
                  <span className="leading-snug">{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={1.6} />
                  <span className="break-words leading-snug">{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={1.6} />
                <span>
                  <span className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    India Office
                  </span>
                  <span className="block leading-relaxed">
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
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col gap-4 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-zinc-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-zinc-300">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
