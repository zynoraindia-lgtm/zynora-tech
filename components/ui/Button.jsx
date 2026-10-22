'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

/** Site routes like /contact go through Next.js Link; #anchors, tel:, mailto: and external URLs stay plain links. */
function isRoute(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

/**
 * Magnetic button — the element leans toward the cursor on hover.
 * Falls back to a plain button on touch devices and reduced motion.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  magnetic = true,
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 will-change-transform';

  const sizes = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-[15px]',
  };

  const variants = {
    primary:
      'bg-white text-ink-950 hover:bg-cyan-soft shadow-[0_10px_40px_-14px_rgba(34,211,238,0.6)]',
    accent:
      'bg-gradient-to-r from-cyan to-azure text-ink-950 hover:from-cyan-soft hover:to-azure-soft shadow-[0_10px_40px_-12px_rgba(34,211,238,0.65)]',
    outline:
      'border border-white/15 bg-white/[0.02] text-white hover:border-cyan/50 hover:bg-white/[0.05]',
    ghost: 'text-white/80 hover:text-white',
  };

  function handleMove(e) {
    if (!magnetic || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.22, y: y * 0.32 });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const Tag = href ? (isRoute(href) ? MotionLink : motion.a) : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.4 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
