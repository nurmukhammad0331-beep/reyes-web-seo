'use client';

import { useState, useEffect } from 'react';

/** Sahifa tepasida o'qish jarayonini ko'rsatuvchi ingichka gradient chiziq */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    window.addEventListener('resize', fn, { passive: true });
    return () => {
      window.removeEventListener('scroll', fn);
      window.removeEventListener('resize', fn);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[200] pointer-events-none" aria-hidden="true">
      <div
        className="h-full origin-left transition-transform duration-100 ease-out"
        style={{
          transform: `scaleX(${progress / 100})`,
          background: 'linear-gradient(90deg, #009fe3, #22d3ee)',
          boxShadow: '0 0 12px rgba(0,159,227,0.5)',
        }}
      />
    </div>
  );
}
