'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: RevealProps) {
  const [ref, visible] = useInView();
  const transforms: Record<string, string> = {
    up: 'translateY(50px) perspective(800px) rotateX(3deg)',
    down: 'translateY(-50px) perspective(800px) rotateX(-3deg)',
    left: 'translateX(-50px) perspective(800px) rotateY(3deg)',
    right: 'translateX(50px) perspective(800px) rotateY(-3deg)',
    scale: 'scale(0.9) perspective(800px) rotateX(2deg)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'perspective(800px) rotateX(0) rotateY(0) scale(1)' : transforms[direction],
        filter: visible ? 'blur(0)' : 'blur(10px)',
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function Counter({ end, suffix = '' }: { end: string; suffix?: string }) {
  const num = parseInt(end.replace(/[^0-9]/g, '')) || 0;
  // SEO: server render va JS ishlamagan holatda yakuniy qiymat ko'rinadi ("0M+" emas).
  // Animatsiya faqat brauzerda, element ko'ringanda ishga tushadi.
  const [count, setCount] = useState(num);
  const [animated, setAnimated] = useState(false);
  const [ref, visible] = useInView();

  useEffect(() => {
    if (!visible || animated || !num) return;
    setAnimated(true);
    let current = 0;
    setCount(0);
    const step = Math.max(1, Math.floor(num / 50));
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, animated, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/**
 * Parallax — element viewport'dan o'tayotganda scroll tezligidan
 * sekinroq/tezroq harakatlanadi. `speed` musbat bo'lsa pastga qoladi
 * (fon effekti), manfiy bo'lsa oldinga chiqadi.
 * prefers-reduced-motion rejimida o'chadi.
 */
export function Parallax({
  children,
  speed = 0.15,
  className = '',
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * -speed);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}>
      {children}
    </div>
  );
}

/**
 * Tilt — sichqoncha harakatiga qarab 3D og'ish effekti.
 * Kursordan uzoqlashganda asl holatiga silliq qaytadi.
 */
export function Tilt({
  children,
  max = 8,
  className = '',
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rx: 0, ry: 0 });
  const [hovering, setHovering] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rx: -py * max, ry: px * max });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setStyle({ rx: 0, ry: 0 }); }}
      style={{
        transform: `perspective(900px) rotateX(${style.rx}deg) rotateY(${style.ry}deg)`,
        transition: hovering ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

/**
 * WordsReveal — matnni so'zlarga bo'lib, har birini ketma-ket
 * (pastdan yuqoriga + blur) jonlantiradi. Hero sarlavhalar uchun.
 */
export function WordsReveal({
  text,
  className = '',
  baseDelay = 0,
  step = 0.07,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  const [ref, visible] = useInView(0.2);
  const words = text.split(' ').filter(Boolean);

  return (
    <span ref={ref as any} style={{ display: 'inline' }}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          {/* Gradient/rang klassi bg-clip-text to'g'ri ishlashi uchun
              aynan matn turgan ichki spanga beriladi */}
          <span
            className={className}
            style={{
              display: 'inline-block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              filter: visible ? 'blur(0)' : 'blur(6px)',
              transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + i * step}s`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
