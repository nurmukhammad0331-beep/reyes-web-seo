'use client';

import { useState, useEffect, useRef, type MouseEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Reveal, WordsReveal } from '@/components/ui/Animation';
import {
  IconMegaphone, IconTarget, IconVideo, IconMessage, IconGlobe, IconSearch, IconBarChart,
  IconYoutube, IconUsers, IconMapPin, IconArrowRight,
} from '@/components/ui/Icons';

/**
 * Orbit kartalar — mockupdagi 3D glossy ikonkalar.
 * Butun halqa sekin aylanadi (40s), har karta teskari aylanib doim tik turadi.
 * Sichqoncha kelganda: kattalashadi + kursor tomonga 3D buriladi (rotateX/Y),
 * ketganda prujina bilan qaytadi. Halqa hover paytida to'xtaydi.
 */
const orbitConfig = [
  { Icon: IconMegaphone, color: '#3b82f6' },
  { Icon: IconTarget,    color: '#a855f7' },
  { Icon: IconVideo,     color: '#ec4899' },
  { Icon: IconMessage,   color: '#2AABEE' },
  { Icon: IconGlobe,     color: '#22d3ee' },
  { Icon: IconSearch,    color: '#f59e0b' },
  { Icon: IconBarChart,  color: '#22c55e' },
];

function OrbitCard({ Icon, color, label, desc }: { Icon: any; color: string; label: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, hover: false });

  const onMove = (e: MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 22, ry: px * 22, hover: true });
  };

  return (
    <div className="flex flex-col items-center w-[150px] text-center select-none">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0, hover: false })}
        className="w-[76px] h-[76px] rounded-[20px] flex items-center justify-center cursor-pointer"
        style={{
          background: `linear-gradient(145deg, ${color}30, ${color}0d 60%), rgba(255,255,255,0.03)`,
          border: `1px solid ${color}45`,
          boxShadow: tilt.hover
            ? `0 22px 48px -10px ${color}70, inset 0 1px 2px rgba(255,255,255,0.3)`
            : `0 14px 34px -12px ${color}50, inset 0 1px 1px rgba(255,255,255,0.15)`,
          backdropFilter: 'blur(6px)',
          transform: `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.hover ? 1.22 : 1})`,
          transition: tilt.hover
            ? 'transform 0.1s ease-out, box-shadow 0.25s ease'
            : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
          willChange: 'transform',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glossy yorug'lik qatlami */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.25), transparent 60%)' }} />
        <Icon size={34} style={{ color, filter: `drop-shadow(0 3px 10px ${color}90)` }} />
      </div>
      <div className="font-heading font-bold text-[14px] text-white mt-3 leading-tight">{label}</div>
      <div className="font-body text-[11px] text-slate-500 mt-1 leading-snug">{desc}</div>
    </div>
  );
}

function OrbitField() {
  const t = useTranslations('hero');
  const items: { label: string; desc: string }[] = t.raw('orbit');
  const [paused, setPaused] = useState(false);
  const RADIUS = 230;

  return (
    <div
      className="relative w-[600px] h-[600px] mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes hero-orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes hero-orbit-rev { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        .hero-orbit-ring, .hero-orbit-item { animation-play-state: var(--orbit-state, running); }
        .hero-orbit-ring { animation: hero-orbit 42s linear infinite; }
        .hero-orbit-item { animation: hero-orbit-rev 42s linear infinite; }
        @keyframes ring-dot-pulse {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 4px rgba(0,159,227,0.4); }
          50% { opacity: 1; box-shadow: 0 0 12px rgba(0,159,227,0.9); }
        }
        @keyframes center-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(0,159,227,0.3), 0 0 90px rgba(0,159,227,0.12), inset 0 0 24px rgba(0,159,227,0.15); }
          50% { box-shadow: 0 0 60px rgba(0,159,227,0.5), 0 0 130px rgba(0,159,227,0.2), inset 0 0 32px rgba(0,159,227,0.25); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-orbit-ring, .hero-orbit-item { animation: none; }
        }
      `}</style>

      {/* Punktir orbit halqalari */}
      <div className="absolute inset-[70px] rounded-full border border-dashed border-brand-blue/25" />
      <div className="absolute inset-[150px] rounded-full border border-brand-blue/10" />

      {/* Halqadagi porlab turuvchi nuqtalar */}
      {[20, 100, 175, 250, 320].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r = 230;
        return (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-brand-blue"
            style={{
              left: `calc(50% + ${Math.cos(rad) * r}px - 4px)`,
              top: `calc(50% + ${Math.sin(rad) * r}px - 4px)`,
              animation: `ring-dot-pulse ${2.4 + i * 0.4}s ease-in-out ${i * 0.35}s infinite`,
            }} />
        );
      })}

      {/* Markaziy R logo — stay-dark: light rejimda ham to'q navy bo'lib qoladi */}
      <div className="stay-dark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className="w-[150px] h-[150px] rounded-[36px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(150deg, #0f1e38, #0a1526)',
            border: '1px solid rgba(0,159,227,0.4)',
            animation: 'center-glow 4s ease-in-out infinite',
          }}
        >
          <div className="w-[112px] h-[112px] rounded-[28px] border border-brand-blue/50 flex items-center justify-center"
            style={{ background: 'linear-gradient(150deg, rgba(0,159,227,0.12), rgba(0,159,227,0.02))' }}>
            <span className="font-heading font-black text-[64px] text-white leading-none"
              style={{ textShadow: '0 0 30px rgba(0,159,227,0.6)' }}>R</span>
          </div>
        </div>
      </div>

      {/* Aylanuvchi kartalar halqasi */}
      <div
        className="hero-orbit-ring absolute inset-0 z-10"
        style={{ ['--orbit-state' as string]: paused ? 'paused' : 'running' }}
      >
        {orbitConfig.map((c, i) => {
          const angle = (i * 360) / orbitConfig.length - 90;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * RADIUS;
          const y = Math.sin(rad) * RADIUS;
          return (
            <div
              key={i}
              className="absolute"
              style={{ left: `calc(50% + ${x}px - 75px)`, top: `calc(50% + ${y}px - 60px)` }}
            >
              {/* Teskari aylanish — karta doim tik turadi */}
              <div className="hero-orbit-item" style={{ ['--orbit-state' as string]: paused ? 'paused' : 'running' }}>
                <OrbitCard Icon={c.Icon} color={c.color} label={items[i]?.label || ''} desc={items[i]?.desc || ''} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const stats = [
    { Icon: IconYoutube,  value: t('stats.sales.value'),     label: t('stats.sales.label') },
    { Icon: IconUsers,    value: t('stats.views.value'),     label: t('stats.views.label') },
    { Icon: IconBarChart, value: t('stats.export.value'),    label: t('stats.export.label') },
    { Icon: IconMapPin,   value: t('stats.countries.value'), label: t('stats.countries.label') },
  ];

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-10 relative overflow-hidden">
      {/* Ko'p qatlamli parallax fon */}
      <div className="aurora-blob w-[560px] h-[560px] -top-40 -right-32 opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.16), transparent 65%)' }} />
      <div className="aurora-blob delay w-[440px] h-[440px] bottom-0 -left-32 opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1), transparent 65%)' }} />
      <div className="absolute top-1/4 right-1/3 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.06), transparent 70%)', transform: `translateY(${scrollY * -0.18}px)` }} />
      <div className="absolute inset-0 grid-bg" style={{ transform: `translateY(${scrollY * 0.04}px)` }} />

      <style>{`
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,159,227,0.25); }
          50% { box-shadow: 0 0 0 6px rgba(0,159,227,0); }
        }
        .badge-pulse { animation: badge-glow 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .badge-pulse { animation: none; } }
      `}</style>

      <div className="container-main relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center w-full">
          <div className="max-w-[560px]">
            <Reveal><span className="badge badge-pulse mb-6 inline-flex">{t('sub')}</span></Reveal>

            <h1 className="font-heading font-black text-[clamp(34px,5vw,60px)] leading-[1.06] tracking-[-0.035em] mb-6">
              <WordsReveal text={t('title1')} baseDelay={0.1} />{' '}
              <WordsReveal text={t('highlight')} className="text-gradient" baseDelay={0.3} />
              {t('title2') ? <> <WordsReveal text={t('title2')} baseDelay={0.5} /></> : null}
            </h1>

            <Reveal delay={0.45}>
              <p className="font-body text-[17px] leading-[1.75] text-slate-400 mb-9 max-w-[490px]">{t('description')}</p>
            </Reveal>
            <Reveal delay={0.55}>
              <div className="flex flex-wrap gap-3.5">
                <button className="btn-brand !py-4 !px-8 !text-[15px]" onClick={() => go('boglanish')}>
                  {t('cta')} <IconArrowRight size={16} />
                </button>
                <a href={`/${locale}/portfolio`} className="btn-outline !py-4 !px-8 !text-[15px] !no-underline">
                  {t('cta2')} <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Orbit — mockup dizayni */}
          <Reveal direction="scale" delay={0.3} className="hidden lg:block">
            <div style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              <OrbitField />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Pastki statistika qatori — mockupdagi kabi ikonkalar bilan */}
      <div className="container-main relative z-10 mt-8">
        <Reveal delay={0.7}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-dark-border">
            {stats.map((s, i) => (
              <div key={i}
                className={`flex items-center gap-4 py-6 px-2 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-dark-border' : ''} group cursor-default`}>
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <s.Icon size={20} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-heading font-bold text-[24px] text-gradient tracking-tight leading-none">{s.value}</div>
                  <div className="font-body text-[12px] text-slate-500 mt-1.5 leading-snug">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
