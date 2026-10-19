'use client';

import { useEffect, useState } from 'react';

/**
 * A soft accent glow that trails the cursor. Desktop pointers only.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);

    let frame = 0;
    function onMove(e) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] hidden lg:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(34,211,238,0.055), transparent 62%)`,
        transition: 'background 120ms linear',
      }}
    />
  );
}
