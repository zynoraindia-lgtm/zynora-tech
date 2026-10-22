'use client';

import { useEffect, useRef } from 'react';

/**
 * Canvas visualisation of a connected digital ecosystem:
 * Website → Mobile → Commerce → ERP → CRM, all orbiting a
 * central Zynora core with data pulses travelling along the links.
 *
 * Canvas (not WebGL) keeps the payload small and the frame cost low, which
 * matters more on a corporate hero than a full 3D scene would.
 */

// Five nodes spaced evenly around the core (360° / 5 = 72° apart).
const NODES = [
  { label: 'Website', angle: -90, radius: 0.78 },
  { label: 'Mobile App', angle: -18, radius: 0.92 },
  { label: 'E-Commerce', angle: 54, radius: 0.78 },
  { label: 'ERP', angle: 126, radius: 0.92 },
  { label: 'CRM', angle: 198, radius: 0.78 },
];

const ACCENTS = [
  'rgba(34,211,238,',
  'rgba(59,130,246,',
  'rgba(139,92,246,',
  'rgba(34,211,238,',
  'rgba(96,165,250,',
];

export default function HeroVisual() {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let t = 0;
    let particles = [];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 600 ? 26 : 54;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        a: Math.random() * 0.35 + 0.08,
      }));
    }

    function onPointer(e) {
      const rect = canvas.getBoundingClientRect();
      // This component is mounted twice (desktop + mobile) and one copy is
      // always hidden by CSS, so its rect is 0x0. Dividing by that yields
      // Infinity, which later poisons the gradient coordinates.
      if (!rect.width || !rect.height) return;

      const tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!Number.isFinite(tx) || !Number.isFinite(ty)) return;

      pointer.current.tx = Math.max(-1.5, Math.min(1.5, tx));
      pointer.current.ty = Math.max(-1.5, Math.min(1.5, ty));
    }

    function onLeave() {
      pointer.current.tx = 0;
      pointer.current.ty = 0;
    }

    function nodePositions(cx, cy, scale, tilt) {
      return NODES.map((node, i) => {
        const wobble = reduced ? 0 : Math.sin(t * 0.0009 + i * 1.1) * 8;
        const rad = ((node.angle + (reduced ? 0 : t * 0.006)) * Math.PI) / 180;
        const r = scale * node.radius + wobble;
        return {
          ...node,
          i,
          x: cx + Math.cos(rad) * r * 1.06 + tilt.x * (14 + i * 2),
          y: cy + Math.sin(rad) * r * 0.62 + tilt.y * (10 + i * 2),
        };
      });
    }

    function draw() {
      // Nothing to paint while this copy is hidden or not laid out yet.
      if (!width || !height) {
        raf = requestAnimationFrame(draw);
        return;
      }

      t += 16;
      ctx.clearRect(0, 0, width, height);

      // Ease the parallax tilt toward the pointer.
      pointer.current.x += (pointer.current.tx - pointer.current.x) * 0.045;
      pointer.current.y += (pointer.current.ty - pointer.current.y) * 0.045;
      const tilt = { x: pointer.current.x, y: pointer.current.y };

      const cx = width / 2 + tilt.x * 16;
      const cy = height / 2 + tilt.y * 12;
      const scale = Math.min(width, height * 1.7) * 0.31;

      // Ambient particles.
      particles.forEach((p) => {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a * 0.5})`;
        ctx.fill();
      });

      const nodes = nodePositions(cx, cy, scale, tilt);

      // Ring behind the ecosystem.
      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * 0.95, scale * 0.58, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.055)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * 1.28, scale * 0.78, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.stroke();

      // Spokes from the core, plus the perimeter loop.
      nodes.forEach((node, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        const grad = ctx.createLinearGradient(cx, cy, node.x, node.y);
        grad.addColorStop(0, `${accent}0.32)`);
        grad.addColorStop(1, `${accent}0.05)`);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        const next = nodes[(i + 1) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.055)';
        ctx.stroke();
      });

      // Data pulses travelling outward along each spoke.
      if (!reduced) {
        nodes.forEach((node, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          for (let k = 0; k < 2; k += 1) {
            const phase = ((t * 0.00042 + i * 0.16 + k * 0.5) % 1);
            const px = cx + (node.x - cx) * phase;
            const py = cy + (node.y - cy) * phase;
            const fade = Math.sin(phase * Math.PI);
            ctx.beginPath();
            ctx.arc(px, py, 2.1, 0, Math.PI * 2);
            ctx.fillStyle = `${accent}${0.85 * fade})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fillStyle = `${accent}${0.12 * fade})`;
            ctx.fill();
          }
        });
      }

      // Nodes.
      nodes.forEach((node, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        const pulse = reduced ? 0.6 : 0.55 + Math.sin(t * 0.0016 + i) * 0.25;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}${0.06 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(8,8,10,1)';
        ctx.fill();
        ctx.strokeStyle = `${accent}${0.55 + pulse * 0.4})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}1)`;
        ctx.fill();

        ctx.font =
          '500 10.5px ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.62)';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '1.4px';
        ctx.fillText(node.label.toUpperCase(), node.x, node.y - 17);
      });

      // Core.
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 78);
      coreGlow.addColorStop(0, 'rgba(34,211,238,0.30)');
      coreGlow.addColorStop(0.5, 'rgba(59,130,246,0.10)');
      coreGlow.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 78, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6,6,8,1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(34,211,238,0.75)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const ripple = reduced ? 20 : 15 + ((t * 0.02) % 40);
      ctx.beginPath();
      ctx.arc(cx, cy, ripple, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34,211,238,${Math.max(0, 0.32 - (ripple - 15) / 130)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font =
        '600 9px ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '2px';
      ctx.fillText('ZYNORA', cx, cy + 3);

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('pointermove', onPointer, { passive: true });
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
