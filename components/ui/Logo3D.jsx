'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * The Zynora wordmark as a slowly turning 3D object.
 *
 * Thickness comes from stacking copies of the logo a little behind each other
 * (translateZ) inside a preserve-3d container; the back copies are darkened so
 * they read as the sides. A glossy shine, clipped to the logo's shape, sweeps
 * across the front (see `.logo3d-shine` in app/globals.css).
 * All copies use the same image URL, so the logo is downloaded once.
 */

const LOGO = { src: '/zynora-mark.png', width: 720, height: 151 };
const LAYERS = 10; // copies stacked front-to-back
const GAP = 1.3; // px between copies → ~12px of depth

export default function Logo3D({ width = 210, className = '' }) {
  const reduced = useReducedMotion();
  const height = Math.round((width * LOGO.height) / LOGO.width);

  return (
    <div className={`relative ${className}`} style={{ width, height, perspective: 900 }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={
          reduced
            ? { rotateY: -14, rotateX: 6 }
            : { rotateY: [-26, 26, -26], rotateX: [10, -6, 10], y: [0, -6, 0] }
        }
        transition={reduced ? { duration: 0 } : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        {Array.from({ length: LAYERS }, (_, i) => LAYERS - 1 - i).map((depth) => (
          <Image
            key={depth}
            src={LOGO.src}
            alt={depth === 0 ? 'Zynora' : ''}
            aria-hidden={depth === 0 ? undefined : true}
            width={LOGO.width}
            height={LOGO.height}
            sizes={`${width}px`}
            // Load right away: browsers may not lazy-load images inside a turning 3D element.
            loading="eager"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none"
            style={{
              transform: `translateZ(${-depth * GAP}px)`,
              filter:
                depth === 0
                  ? 'drop-shadow(0 0 16px rgba(34,211,238,0.28))'
                  : `brightness(${Math.max(0.18, 0.5 - depth * 0.035)}) saturate(1.3)`,
            }}
          />
        ))}
        <span
          aria-hidden="true"
          className="logo3d-shine pointer-events-none absolute inset-0"
          style={{ transform: 'translateZ(0.6px)' }}
        />
      </motion.div>

      {/* Soft reflection on the "floor" below the logo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-7 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-full bg-cyan/25 blur-xl"
      />
    </div>
  );
}
