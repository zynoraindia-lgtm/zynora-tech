'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { LAND_ROWS, MAP_COLS, MAP_ROWS } from '@/lib/worldmap';

const CELL = 4;
const DOT = 1.05;
const W = MAP_COLS * CELL;
const H = MAP_ROWS * CELL;

// Marker positions as a percentage of the grid (derived from lon/lat).
// Labels are pulled away from their pin with a short leader line so they stay
// readable against the dot grid.
const MARKERS = [
  { label: 'UAE', x: 65.11, y: 41.56, lx: -32, ly: -16, anchor: 'end' },
  { label: 'India', x: 71.69, y: 51.84, lx: 0, ly: 20, anchor: 'middle' },
];

export default function WorldMap() {
  const [hovered, setHovered] = useState(null);

  const path = useMemo(() => {
    let d = '';
    for (let r = 0; r < LAND_ROWS.length; r += 1) {
      const row = LAND_ROWS[r];
      for (let c = 0; c < row.length; c += 1) {
        if (row[c] !== '1') continue;
        const x = c * CELL + CELL / 2;
        const y = r * CELL + CELL / 2;
        d += `M${x - DOT} ${y}a${DOT} ${DOT} 0 1 0 ${DOT * 2} 0a${DOT} ${DOT} 0 1 0 ${-DOT * 2} 0`;
      }
    }
    return d;
  }, []);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="World map highlighting Zynora's presence in India and the UAE"
      >
        <defs>
          <linearGradient id="map-dots" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.20" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.18" />
          </linearGradient>
          <radialGradient id="map-focus" cx="65%" cy="45%" r="26%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path d={path} fill="url(#map-dots)" />
        <rect width={W} height={H} fill="url(#map-focus)" opacity="0.35" />

        {/* Connection arc between the Gulf and the India delivery base */}
        {[[MARKERS[0], MARKERS[1]]].map(([a, b], i) => {
          const x1 = (a.x / 100) * W;
          const y1 = (a.y / 100) * H;
          const x2 = (b.x / 100) * W;
          const y2 = (b.y / 100) * H;
          const mx = (x1 + x2) / 2;
          const my = Math.min(y1, y2) - 12;
          return (
            <motion.path
              key={i}
              d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="0.6"
              strokeOpacity="0.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 + i * 0.25, ease: 'easeInOut' }}
            />
          );
        })}

        {MARKERS.map((m, i) => {
          const x = (m.x / 100) * W;
          const y = (m.y / 100) * H;
          return (
            <g
              key={m.label}
              onMouseEnter={() => setHovered(m.label)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-default"
            >
              <motion.circle
                cx={x}
                cy={y}
                r="7"
                fill="#22d3ee"
                fillOpacity="0.12"
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: [0.7, 1.35, 0.7], opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
              <circle cx={x} cy={y} r="2.6" fill="#050505" stroke="#22d3ee" strokeWidth="0.9" />
              <circle cx={x} cy={y} r="1.1" fill="#67e8f9" />

              {/* Leader line from the pin to its label */}
              <line
                x1={x}
                y1={y}
                x2={x + m.lx * 0.82}
                y2={y + m.ly * 0.82}
                stroke="rgba(34,211,238,0.45)"
                strokeWidth="0.45"
              />
              <text
                x={x + m.lx}
                y={y + m.ly + (m.ly < 0 ? 0 : 1.6)}
                textAnchor={m.anchor}
                className="fill-white/85 font-sans"
                style={{
                  fontSize: '5.6px',
                  letterSpacing: '0.9px',
                  opacity: hovered && hovered !== m.label ? 0.35 : 1,
                  transition: 'opacity 200ms',
                }}
              >
                {m.label.toUpperCase()}
              </text>
              <circle cx={x} cy={y} r="10" fill="transparent" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
