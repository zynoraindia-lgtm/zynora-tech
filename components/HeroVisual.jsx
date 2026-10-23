'use client';

import { useEffect, useRef } from 'react';

/**
 * Canvas visualisation of a connected digital ecosystem:
 * Website → Mobile → Commerce → ERP → CRM, all orbiting the Zynora logo
 * (public/zynora-mark.png) with data pulses travelling along the links.
 * Labels use the site's display font (Sora, via the --font-display variable).
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

// Centre of the animation: the Zynora wordmark.
const LOGO_SRC = '/zynora-mark.png';

/** Rounded-rectangle path (ctx.roundRect isn't in every browser yet). */
function roundedRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/** Downscale an image in halving steps so the logo stays crisp at small sizes. */
function scaleImage(img, targetW) {
  let src = img;
  let sw = img.naturalWidth;
  let sh = img.naturalHeight;
  const tw = Math.max(1, Math.round(targetW));
  const th = Math.max(1, Math.round((tw * sh) / sw));
  while (sw / 2 >= tw) {
    const step = document.createElement('canvas');
    step.width = Math.round(sw / 2);
    step.height = Math.round(sh / 2);
    const g = step.getContext('2d');
    g.imageSmoothingQuality = 'high';
    g.drawImage(src, 0, 0, step.width, step.height);
    src = step;
    sw = step.width;
    sh = step.height;
  }
  const out = document.createElement('canvas');
  out.width = tw;
  out.height = th;
  const g = out.getContext('2d');
  g.imageSmoothingQuality = 'high';
  g.drawImage(src, 0, 0, tw, th);
  return out;
}

/**
 * Size and shape of the ecosystem for a given canvas. Desktop uses a wide, flat
 * orbit; phone and tablet canvases have spare height, so the orbit is taller there
 * and the logo smaller, which keeps the labels clear of the centre badge.
 */
function getLayout(width, height) {
  const small = width < 600;
  if (small) {
    const scale = Math.min(width * 0.4, height * 0.44);
    return {
      small,
      scale,
      stretchX: 0.95,
      stretchY: 0.85,
      logoW: Math.round(Math.max(64, Math.min(84, scale * 0.53))),
    };
  }
  const scale = Math.min(width, height * 1.7) * 0.31;
  // Tablets show a short (300–380px) strip under the hero copy: a slightly
  // taller orbit and smaller logo there keep the labels off the badge.
  const compact = height < 500;
  return {
    small,
    scale,
    stretchX: 1.06,
    stretchY: compact ? 0.7 : 0.62,
    logoW: Math.round(Math.max(92, Math.min(170, scale * (compact ? 0.55 : 0.62)))),
  };
}

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

    // Label font: the site's display font (Sora, loaded by next/font in app/layout.jsx).
    const displayFont =
      getComputedStyle(document.documentElement).getPropertyValue('--font-display').trim() ||
      'Sora';
    const hasLetterSpacing = 'letterSpacing' in ctx;

    // Logo for the centre, pre-scaled to its drawn size whenever the canvas resizes.
    const logo = new Image();
    let logoW = 0;
    let logoCache = null;
    function buildLogo() {
      if (!logo.complete || !logo.naturalWidth || !logoW) return;
      logoCache = scaleImage(logo, logoW * dpr);
    }
    logo.onload = buildLogo;
    logo.src = LOGO_SRC;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Logo width follows the ecosystem size: ~160px on desktop, ~70px on phones.
      logoW = getLayout(width, height).logoW;
      buildLogo();

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

    function nodePositions(cx, cy, { scale, stretchX, stretchY }, tilt) {
      return NODES.map((node, i) => {
        const wobble = reduced ? 0 : Math.sin(t * 0.0009 + i * 1.1) * 8;
        const rad = ((node.angle + (reduced ? 0 : t * 0.006)) * Math.PI) / 180;
        const r = scale * node.radius + wobble;
        return {
          ...node,
          i,
          x: cx + Math.cos(rad) * r * stretchX + tilt.x * (14 + i * 2),
          y: cy + Math.sin(rad) * r * stretchY + tilt.y * (10 + i * 2),
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
      const layout = getLayout(width, height);
      const { scale, stretchX, stretchY } = layout;

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

      const nodes = nodePositions(cx, cy, layout, tilt);

      // Soft glow behind the logo.
      const glowR = Math.max(90, scale * 0.62);
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      coreGlow.addColorStop(0, 'rgba(34,211,238,0.26)');
      coreGlow.addColorStop(0.5, 'rgba(59,130,246,0.09)');
      coreGlow.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Ring behind the ecosystem.
      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * stretchX * 0.9, scale * stretchY * 0.94, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.055)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * stretchX * 1.21, scale * stretchY * 1.26, 0, 0, Math.PI * 2);
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

        // Label: a small pill in the node's colour, text in Sora with a gradient.
        const { small } = layout;
        const size = small ? 9 : 12;
        const spacing = small ? 1.4 : 2.2;
        const text = node.label.toUpperCase();
        ctx.font = `600 ${size}px ${displayFont}, sans-serif`;
        if (hasLetterSpacing) ctx.letterSpacing = `${spacing}px`;
        // measureText includes the spacing after the last letter; drop it so the text is centred.
        const textW = ctx.measureText(text).width - (hasLetterSpacing ? spacing : 0);
        const padX = small ? 8 : 11;
        const pillH = size + (small ? 9 : 12);
        const pillW = textW + padX * 2;
        const lx = node.x - pillW / 2;
        const ly = node.y - (small ? 16 : 20) - pillH;

        roundedRect(ctx, lx, ly, pillW, pillH, pillH / 2);
        ctx.fillStyle = 'rgba(9,10,14,0.8)';
        ctx.fill();
        ctx.strokeStyle = `${accent}${0.3 + pulse * 0.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const textGrad = ctx.createLinearGradient(lx + padX, 0, lx + padX + textW, 0);
        textGrad.addColorStop(0, 'rgba(255,255,255,0.97)');
        textGrad.addColorStop(1, `${accent}1)`);
        ctx.fillStyle = textGrad;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, lx + padX, ly + pillH / 2 + 0.5);
      });

      // Core: the Zynora logo on a glowing glass plate.
      const lw = logoW || 120;
      const lh = logoCache ? (lw * logoCache.height) / logoCache.width : lw * 0.21;
      const plateX = lw * 0.13;
      const plateY = lw * 0.1;
      const pw = lw + plateX * 2;
      const ph = lh + plateY * 2;
      const bob = reduced ? 0 : Math.sin(t * 0.0012) * 2.5;
      const px0 = cx - pw / 2;
      const py0 = cy - ph / 2 + bob;
      const corner = ph * 0.32;

      // Ripple expanding outward from the plate.
      if (!reduced) {
        const k = (t * 0.0005) % 1;
        const grow = k * 30;
        roundedRect(ctx, px0 - grow, py0 - grow, pw + grow * 2, ph + grow * 2, corner + grow);
        ctx.strokeStyle = `rgba(34,211,238,${0.35 * (1 - k)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.save();
      ctx.shadowColor = 'rgba(34,211,238,0.45)';
      ctx.shadowBlur = 28;
      roundedRect(ctx, px0, py0, pw, ph, corner);
      ctx.fillStyle = 'rgba(8,9,12,0.92)';
      ctx.fill();
      ctx.restore();

      const border = ctx.createLinearGradient(px0, py0, px0 + pw, py0 + ph);
      border.addColorStop(0, 'rgba(34,211,238,0.85)');
      border.addColorStop(0.5, 'rgba(59,130,246,0.5)');
      border.addColorStop(1, 'rgba(139,92,246,0.85)');
      roundedRect(ctx, px0, py0, pw, ph, corner);
      ctx.strokeStyle = border;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      if (logoCache) {
        ctx.drawImage(logoCache, px0 + plateX, py0 + plateY, lw, lh);
      } else {
        // Until the logo image has loaded, show the name in the display font.
        ctx.font = `700 ${Math.round(lw * 0.16)}px ${displayFont}, sans-serif`;
        if (hasLetterSpacing) ctx.letterSpacing = '3px';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ZYNORA', cx, py0 + ph / 2);
      }

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
      logo.onload = null;
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
