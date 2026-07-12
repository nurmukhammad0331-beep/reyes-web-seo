'use client';

import { type ReactNode, type MouseEvent, useRef } from 'react';

/**
 * SpotlightCard — kursor kartaning ustida yurganda uning ortidan
 * ergashuvchi yumshoq yorug'lik dog'i paydo bo'ladi.
 * CSS: globals.css'dagi .spotlight-card klassi bilan ishlaydi.
 */
export default function SpotlightCard({
  children,
  className = '',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
