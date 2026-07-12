'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal, Parallax } from '@/components/ui/Animation';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { IconYoutube, IconGlobe, IconSmartphone, IconVideo, IconSearch, IconBarChart, IconUsers, IconArrowRight, IconChevronDown } from '@/components/ui/Icons';

const serviceKeys = ['youtube', 'web', 'smm', 'video', 'seo', 'ads', 'sales', 'international'] as const;
const serviceIcons = [IconYoutube, IconGlobe, IconSmartphone, IconVideo, IconSearch, IconBarChart, IconUsers, IconGlobe];

export default function ServicesSection() {
  const t = useTranslations('services');
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="xizmatlar" className="relative overflow-hidden pt-12 pb-16 md:pb-24 bg-dark-surface">
      {/* Parallax fon effekti */}
      <Parallax speed={0.2} className="absolute -top-32 -left-40 w-[480px] h-[480px] pointer-events-none" >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.08), transparent 70%)' }} />
      </Parallax>
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400 max-w-[540px] mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            const features: string[] = t.raw(`items.${key}.features`);
            const isExpanded = expanded === key;

            // Try to get bullets, fallback to empty array
            let bullets: string[] = [];
            try { bullets = t.raw(`items.${key}.bullets`) || []; } catch {}

            return (
              <Reveal key={key} delay={i * 0.06}>
                <SpotlightCard
                  className="card cursor-pointer h-full group"
                  onClick={() => setExpanded(isExpanded ? null : key)}
                >
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white text-brand-blue transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-[17px] mb-2">{t(`items.${key}.title`)}</h3>
                  <p className="font-body text-[13px] leading-relaxed text-slate-400 mb-3.5">
                    {t(`items.${key}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {features.map((f: string) => (
                      <span key={f} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.06]">{f}</span>
                    ))}
                  </div>

                  {/* Expandable bullets */}
                  {bullets.length > 0 && (
                    <>
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{ maxHeight: isExpanded ? '400px' : '0' }}
                      >
                        <div className="pt-3 pb-1 border-t border-dark-border mt-1">
                          <div className="text-[12px] font-bold text-slate-300 mb-2.5">Nima kiradi?</div>
                          <div className="flex flex-col gap-2">
                            {bullets.map((b: string, j: number) => (
                              <div key={j} className="flex items-start gap-2">
                                <span className="text-brand-blue mt-1 shrink-0 text-[10px]">✓</span>
                                <span className="font-body text-[12px] leading-relaxed text-slate-400">{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-1 text-[13px] font-bold text-brand-blue group-hover:gap-2 transition-all mt-1">
                        {isExpanded ? 'Yopish' : t('learnMore')}
                        <IconChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </>
                  )}

                  {bullets.length === 0 && (
                    <span className="inline-flex items-center gap-1 text-[13px] font-bold text-brand-blue group-hover:gap-2 transition-all">
                      {t('learnMore')} <IconArrowRight size={14} />
                    </span>
                  )}
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
