'use client';

import { useTranslations } from 'next-intl';
import { Reveal, Parallax } from '@/components/ui/Animation';
import { IconTarget, IconGlobe, IconBarChart, IconUsers } from '@/components/ui/Icons';

const valueKeys = ['results', 'international', 'data', 'partnership'] as const;
const valueIcons = [IconTarget, IconGlobe, IconBarChart, IconUsers];

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="haqimizda" className="relative overflow-hidden section-py bg-dark-surface">
      <Parallax speed={0.22} className="absolute -top-24 -right-32 w-[400px] h-[400px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.07), transparent 70%)' }} />
      </Parallax>
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400 max-w-[600px] mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Year */}
          <Reveal>
            <div className="card flex flex-col items-center justify-center text-center py-12">
              <div className="font-heading font-black text-[64px] text-brand-blue tracking-tight leading-none">{t('year')}</div>
              <div className="font-body text-lg text-slate-400 mt-2">{t('yearLabel')}</div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.1}>
            <div className="card py-12 px-8">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
                <IconTarget size={28} className="text-brand-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{t('mission')}</h3>
              <p className="font-body text-[15px] leading-relaxed text-slate-400">{t('missionText')}</p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {valueKeys.map((key, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={key} delay={i * 0.08}>
                <div className="card text-center py-7 px-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-2.5">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <div className="font-heading font-bold text-sm mb-1">{t(`values.${key}.label`)}</div>
                  <div className="font-body text-[12px] text-slate-400 leading-relaxed">{t(`values.${key}.description`)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
