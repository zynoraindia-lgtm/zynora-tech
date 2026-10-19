'use client';

import { motion } from 'framer-motion';

const variants = {
  up: { y: 28, opacity: 0 },
  down: { y: -24, opacity: 0 },
  left: { x: 32, opacity: 0 },
  right: { x: -32, opacity: 0 },
  fade: { opacity: 0 },
  scale: { scale: 0.96, opacity: 0 },
};

/**
 * Scroll-triggered reveal. Keeps motion short and subtle by design.
 */
export default function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  amount = 0.25,
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={variants[direction] || variants.up}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.6, 0.35, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container: children animate in sequence. */
export function RevealGroup({ children, className = '', stagger = 0.08, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.21, 0.6, 0.35, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
