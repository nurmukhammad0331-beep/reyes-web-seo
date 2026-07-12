'use client';

import { useTranslations } from 'next-intl';
import { Reveal, Counter } from '@/components/ui/Animation';
import { IconYoutube, IconGlobe, IconBarChart } from '@/components/ui/Icons';

export default function AchievementsSection() {
  const t = useTranslations('hero.stats');

  const stats = [
    { Icon: IconYoutube, value: '500', suffix: 'M+', label: t('sales.label'), useCounter: true, color: '#ff6b6b' },
    { Icon: IconBarChart, value: '2.5M+', suffix: '', label: t('views.label'), useCounter: false, color: '#22d3ee' },
    { Icon: IconGlobe, value: '$1.5M', suffix: '', label: t('export.label'), useCounter: false, color: '#4ade80' },
  ];

  return (
    <section className="stay-dark py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #112950, #0d1f3c)' }}>
      <div className="absolute inset-0 dot-bg opacity-40" />
      {/* Yorug'lik effekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,159,227,0.14), transparent 70%)' }} />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group text-center py-8 px-4 rounded-[20px] bg-white/[0.05] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:border-white/[0.15]">
                <div className="w-11 h-11 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}18` }}>
                  <s.Icon size={22} style={{ color: s.color }} />
                </div>
                <div className="font-heading font-bold text-[clamp(30px,3.6vw,44px)] text-white tracking-tight">
                  {s.useCounter ? <Counter end={s.value} suffix={s.suffix} /> : s.value}
                </div>
                <div className="font-body text-[13px] text-brand-blue-light/90 mt-1.5">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
