import { useEffect, useState } from 'react';

/**
 * Tiny bridge between the opening intro (components/IntroSplash.jsx) and anything
 * that should wait for it — e.g. the hero's entrance animation, which would
 * otherwise play out hidden behind the intro.
 */

export const INTRO_EXIT_EVENT = 'zynora:intro-exit';
const FLAG = '__zynoraIntroExited';

/** Called by the intro the moment it starts revealing the page (or is skipped). */
export function markIntroExited() {
  if (typeof window === 'undefined' || window[FLAG]) return;
  window[FLAG] = true;
  window.dispatchEvent(new Event(INTRO_EXIT_EVENT));
}

/** `true` once the intro has begun its exit — immediately if there is no intro. */
export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window[FLAG] || !document.getElementById('zy-intro')) {
      setReady(true);
      return undefined;
    }
    const done = () => setReady(true);
    window.addEventListener(INTRO_EXIT_EVENT, done);
    // Safety net: never leave the hero hidden if the intro fails for any reason.
    const safety = setTimeout(done, 9000);
    return () => {
      window.removeEventListener(INTRO_EXIT_EVENT, done);
      clearTimeout(safety);
    };
  }, []);

  return ready;
}
