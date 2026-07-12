'use client';

import { useState, useEffect } from 'react';

/**
 * Dark/Light tema almashtirgich.
 * Standart — dark. Sayt HAR DOIM dark rejimda ochiladi;
 * light tanlovi faqat joriy sessiya davomida saqlanadi (sessionStorage).
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { sessionStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Yorqin rejimga o\'tish' : 'Tungi rejimga o\'tish'}
      className="w-11 h-11 rounded-[10px] bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/30 transition-all"
    >
      {/* Hydration mos kelishi uchun mount'gacha neytral ikon */}
      {!mounted || isDark ? (
        /* Quyosh — light rejimga o'tish */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Oy — dark rejimga o'tish */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
