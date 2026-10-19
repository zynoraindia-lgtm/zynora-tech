'use client';

import { useEffect, useRef, useState } from 'react';
import { Oswald, Poppins } from 'next/font/google';
import { markIntroExited } from '@/lib/intro';
import './IntroSplash.css';

/**
 * Opening intro: an A→Z flicker lands on "Z", ZYNORA settles in letter by letter,
 * the tagline rises, then the logo zooms out and the page is revealed underneath.
 *
 * Ported from zynora-intro.html. Plays once per page load, is skipped entirely for
 * `prefers-reduced-motion` users and when JavaScript is off, and unmounts itself
 * when finished.
 */

// Oswald SemiBold (logo) + Poppins SemiBold (tagline), self-hosted by next/font.
const logoFont = Oswald({
  subsets: ['latin'],
  weight: '600',
  display: 'block',
  variable: '--font-zy-logo',
});
const tagFont = Poppins({
  subsets: ['latin'],
  weight: '600',
  display: 'block',
  variable: '--font-zy-tag',
});

/* ================= CONFIG ================= */
const CFG = {
  word: 'ZYNORA',
  tagline: 'TECHNOLOGY PRIVATE LIMITED',
  accent: [0], // letters drawn in the brand gradient (0 = Z)

  cycleStart: 0.27, // s – A→Z flicker begins
  cycleStep: 0.0523, // s – average time per letter in the flicker
  firstIn: 1.885, // s – first letter (Z) starts settling
  letterGap: 0.2222, // s – time between letters
  letterDur: 0.4, // s – each letter's rise / fade
  tagDur: 0.5, // s – tagline rise / fade
  hold: 0.91, // s – from last letter to exit
  exitScale: 0.43, // s – zoom (scale 1 → 2)
  exitFade: 0.5, // s – logo fade out
  bgFade: 0.7, // s – background reveal
  fontWait: 2.5, // s – longest we wait for the fonts before playing anyway
};
/* ========================================== */

const LETTERS = CFG.word.split('');

/* ---------- helpers ---------- */
function rnd(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
function clamp(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
function easeOutQuart(p) {
  return 1 - Math.pow(1 - p, 4);
}
function easeOutCubic(p) {
  return 1 - Math.pow(1 - p, 3);
}

// background reveal curve
const BG = [
  [0, 0], [0.05, 0.03], [0.1, 0.13], [0.15, 0.29], [0.2, 0.44], [0.25, 0.56], [0.3, 0.65],
  [0.35, 0.71], [0.4, 0.78], [0.45, 0.86], [0.5, 0.92], [0.6, 0.97], [0.7, 1],
];
function bgCurve(dt) {
  const x = (dt / CFG.bgFade) * 0.7;
  if (x <= 0) return 0;
  if (x >= 0.7) return 1;
  for (let i = 1; i < BG.length; i++) {
    if (x <= BG[i][0]) {
      const a = BG[i - 1];
      const b = BG[i];
      return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]);
    }
  }
  return 1;
}

export default function IntroSplash() {
  const rootRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    // Respect users who turn off animations
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      markIntroExited();
      setDone(true);
      return undefined;
    }

    const bg = root.querySelector('.zy-bg');
    const logo = root.querySelector('.zy-logo');
    const cyc = root.querySelector('.zy-cycle');
    const cycS = cyc.firstElementChild;
    const word = root.querySelector('.zy-word');
    const spans = Array.from(word.children);
    const tag = root.querySelector('.zy-tag');
    const tagS = tag.firstElementChild;
    const probes = root.querySelectorAll('.zy-probe');

    const lastIn = CFG.firstIn + (spans.length - 1) * CFG.letterGap;
    const exitAt = lastIn + CFG.hold;
    const DONE_AT = exitAt + Math.max(CFG.bgFade, CFG.exitFade) + 0.05;

    /* ---------- layout (scales with the screen) ---------- */
    let L = {};
    function layout() {
      const W = root.clientWidth;
      const H = root.clientHeight;
      const fs = Math.min(H * 0.285, W * 0.21); // logo font size
      const capH = 0.808 * fs;
      const groupC = H * 0.5137;
      const capTop = groupC - 0.527 * fs;
      const base = capTop + capH;
      const tfs = fs * 0.1125; // tagline font size
      const tagCapTop = base + 0.171 * fs;

      probes[0].style.fontSize = `${fs}px`;
      probes[1].style.fontSize = `${tfs}px`;
      const pb0 = probes[0].querySelector('i').offsetTop;
      const pb1 = probes[1].querySelector('i').offsetTop;

      [cyc, word].forEach((el) => {
        el.style.fontSize = `${fs}px`;
        el.style.top = `${base - pb0}px`;
      });
      const originY = `${pb0 - capH / 2}px`;
      spans.concat([cycS]).forEach((s) => {
        s.style.transformOrigin = `50% ${originY}`;
      });

      tag.style.fontSize = `${tfs}px`;
      tag.style.top = `${tagCapTop + 0.7 * tfs - pb1}px`;
      logo.style.transformOrigin = `50% ${groupC}px`;
      L = { fs, rise: 0.131 * fs, tagRise: 0.042 * fs };
    }

    /* ---------- draw one moment in time (seconds) ---------- */
    function renderAt(t) {
      // 1) A → Z flicker
      const cp = (t - CFG.cycleStart) / (CFG.cycleStep * 26);
      const cf = cp > 0 ? 26 * Math.pow(cp, 0.8) : -1;
      const ci = Math.floor(cf);
      if (t >= CFG.cycleStart && ci < 26) {
        const ph = cf - ci;
        const peak = 0.9 + 0.08 * rnd(ci + 1);
        cycS.textContent = String.fromCharCode(65 + ci);
        cycS.style.opacity = clamp(peak * Math.pow(ph, 0.8));
        cycS.style.transform = `translateY(${L.rise}px) scale(${0.8 + 0.3 * ph})`;
        cyc.style.display = 'flex';
      } else {
        cyc.style.display = 'none';
      }

      // 2) Z Y N O R A settle in one by one
      spans.forEach((s, i) => {
        const st = CFG.firstIn + i * CFG.letterGap;
        if (t < st) {
          s.style.display = 'none';
          return;
        }
        s.style.display = 'inline-block';
        const e = easeOutQuart(clamp((t - st) / CFG.letterDur));
        s.style.opacity = e;
        s.style.transform = `translateY(${L.rise * (1 - e)}px) scale(${0.8 + 0.2 * e})`;
      });

      // 3) tagline
      const te = easeOutCubic(clamp((t - lastIn) / CFG.tagDur));
      tagS.style.opacity = te;
      tagS.style.transform = `translateY(${L.tagRise * (1 - te)}px)`;

      // 4) exit – zoom + fade logo, reveal the page
      const dt = t - exitAt;
      if (dt > 0) {
        const ps = dt / CFG.exitScale;
        logo.style.transform = `scale(${1 + ps * ps})`;
        logo.style.opacity = 1 - clamp(dt / CFG.exitFade);
        bg.style.opacity = 1 - bgCurve(dt);
        markIntroExited(); // lets the hero start its own entrance
      } else {
        logo.style.transform = 'none';
        logo.style.opacity = 1;
        bg.style.opacity = 1;
      }
    }

    /* ---------- playback ---------- */
    let raf = 0;
    let started = false;
    let cancelled = false;

    function play() {
      layout();
      renderAt(0);
      let t0 = null;
      const tick = (now) => {
        if (t0 === null) t0 = now;
        const t = (now - t0) / 1000;
        renderAt(t);
        if (t < DONE_AT) {
          raf = requestAnimationFrame(tick);
        } else {
          markIntroExited();
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
    }

    function start() {
      if (started || cancelled) return;
      started = true;
      play();
    }

    window.addEventListener('resize', layout);
    window.ZynoraIntro = { renderAt, layout, duration: DONE_AT, config: CFG };

    // wait for the fonts (max CFG.fontWait), then play
    layout();
    renderAt(0);
    const fontsReady =
      document.fonts && document.fonts.load
        ? Promise.all([
            document.fonts.load(`600 100px ${logoFont.style.fontFamily}`),
            document.fonts.load(`600 20px ${tagFont.style.fontFamily}`),
          ])
        : Promise.resolve();
    fontsReady.then(start, start);
    const fallback = setTimeout(start, CFG.fontWait * 1000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      window.removeEventListener('resize', layout);
      delete window.ZynoraIntro;
    };
  }, []);

  if (done) return null;

  return (
    <div
      id="zy-intro"
      ref={rootRef}
      aria-hidden="true"
      className={`${logoFont.variable} ${tagFont.variable}`}
    >
      {/* No JavaScript → no animation, so never cover the page. */}
      <noscript
        dangerouslySetInnerHTML={{ __html: '<style>#zy-intro{display:none!important}</style>' }}
      />
      <div className="zy-bg" />
      <div className="zy-logo">
        <div className="zy-line zy-cycle">
          <span className="zy-grad" />
        </div>
        <div className="zy-line zy-word">
          {LETTERS.map((ch, i) => (
            <span key={i} className={CFG.accent.includes(i) ? 'zy-grad' : undefined}>
              {ch}
            </span>
          ))}
        </div>
        <div className="zy-tag">
          <span className="zy-grad">{CFG.tagline}</span>
        </div>
      </div>
      <div className="zy-probe zy-probe-logo">
        Z<i />
      </div>
      <div className="zy-probe zy-probe-tag">
        T<i />
      </div>
    </div>
  );
}
