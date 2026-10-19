'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Check, Lock, Mail, MessageCircle } from 'lucide-react';
import {
  company,
  countryOptions,
  scopeOptions,
  serviceOptions,
} from '@/lib/site';
import Button from './ui/Button';

const INITIAL = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  country: '',
  service: '',
  scope: '',
  message: '',
};

/**
 * Frontend-only enquiry form.
 *
 * There is no backend in this build, so a validated submission is handed off to
 * WhatsApp (primary) or email (fallback) with the enquiry pre-composed. To wire a
 * real endpoint later, post `values` from handleSubmit to your API, Formspree or
 * EmailJS before the handoff.
 */
export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter a work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = 'That email address does not look right.';
    }
    if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!values.service) next.service = 'Select what you need.';
    if (!values.message.trim() || values.message.trim().length < 12) {
      next.message = 'Tell us a little about the project (min. 12 characters).';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function composeMessage() {
    return [
      'New project enquiry — Zynora Technology',
      '',
      `Name: ${values.name}`,
      values.organisation ? `Company: ${values.organisation}` : null,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      values.country ? `Country: ${values.country}` : null,
      `Service required: ${values.service}`,
      values.scope ? `Estimated scope: ${values.scope}` : null,
      '',
      'Project description:',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const body = composeMessage();
    const waUrl = `https://wa.me/${company.phoneIntl.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  function mailtoHref() {
    return `mailto:${company.email}?subject=${encodeURIComponent(
      `Project enquiry — ${values.name || 'New enquiry'}`
    )}&body=${encodeURIComponent(composeMessage())}`;
  }

  const fieldError = (key) =>
    errors[key] ? (
      <p
        className="mt-2 flex items-center gap-1.5 text-[12px] text-red-400"
        role="alert"
      >
        <AlertCircle className="h-3 w-3 shrink-0" strokeWidth={1.8} />
        {errors[key]}
      </p>
    ) : null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/70 p-7 backdrop-blur-xl md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_80%_0%,rgba(139,92,246,0.10),transparent_70%)]"
      />

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative flex min-h-[380px] flex-col items-center justify-center text-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-cyan/30 bg-cyan/10">
              <Check className="h-6 w-6 text-cyan" strokeWidth={1.8} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">
              Your enquiry is ready to send.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              We opened WhatsApp with your project details pre-filled — press send there
              and we&apos;ll come back to you. Prefer email? Use the link below.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={mailtoHref()} variant="outline" size="md">
                <Mail className="h-4 w-4" strokeWidth={1.7} />
                Send by email instead
              </Button>
              <Button
                variant="ghost"
                size="md"
                type="button"
                magnetic={false}
                onClick={() => {
                  setSent(false);
                  setValues(INITIAL);
                }}
              >
                Start another enquiry
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="relative"
          >
            <h3 className="font-display text-xl font-semibold text-white">
              Project Enquiry
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              The more context you give us, the more useful our first reply will be.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div data-error={Boolean(errors.name)}>
                <label htmlFor="name" className="field-label">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="field"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {fieldError('name')}
              </div>

              <div>
                <label htmlFor="organisation" className="field-label">
                  Company Name
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  className="field"
                  placeholder="Your organisation"
                  value={values.organisation}
                  onChange={(e) => update('organisation', e.target.value)}
                />
              </div>

              <div data-error={Boolean(errors.email)}>
                <label htmlFor="email" className="field-label">
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="field"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {fieldError('email')}
              </div>

              <div data-error={Boolean(errors.phone)}>
                <label htmlFor="phone" className="field-label">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="field"
                  placeholder="+971 00 000 0000"
                  value={values.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
                {fieldError('phone')}
              </div>

              <div>
                <label htmlFor="country" className="field-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="field"
                  value={values.country}
                  onChange={(e) => update('country', e.target.value)}
                >
                  <option value="">Select country</option>
                  {countryOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div data-error={Boolean(errors.service)}>
                <label htmlFor="service" className="field-label">
                  What do you need? *
                </label>
                <select
                  id="service"
                  name="service"
                  className="field"
                  value={values.service}
                  onChange={(e) => update('service', e.target.value)}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {fieldError('service')}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="scope" className="field-label">
                  Estimated Project Scope
                </label>
                <select
                  id="scope"
                  name="scope"
                  className="field"
                  value={values.scope}
                  onChange={(e) => update('scope', e.target.value)}
                >
                  <option value="">Select scope</option>
                  {scopeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2" data-error={Boolean(errors.message)}>
                <label htmlFor="message" className="field-label">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="field resize-y"
                  placeholder="What are you trying to build, fix or improve?"
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {fieldError('message')}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="accent" size="lg">
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                Send via WhatsApp
              </Button>

              <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-zinc-600 sm:max-w-xs">
                <Lock className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={1.7} />
                Your details are used only to respond to this enquiry. This form has no
                server — it opens WhatsApp or your email client with the message ready to
                send.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
