'use client';

import { useTranslations } from 'next-intl';

/**
 * Natijalar tickeri — hero ostida cheksiz aylanuvchi lenta.
 * Hoverda to'xtaydi, prefers-reduced-motion rejimida statik ko'rinadi.
 */
export default function ResultsTicker() {
  const t = useTranslations('ticker');
  const items: string[] = t.raw('items');
  // Cheksiz aylanish uchun ro'yxat ikki marta takrorlanadi
  const doubled = [...items, ...items];

  return (
    <div
      className="relative border-y border-dark-border bg-dark-surface/60 py-4 overflow-hidden"
      aria-label={items.join(', ')}
    >
      {/* Chekkalardagi so'nish effekti */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-dark-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-dark-bg to-transparent" />

      <div className="ticker-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-heading font-semibold text-[14px] text-slate-300 whitespace-nowrap px-6">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/70 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
