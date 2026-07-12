'use client';

import { useTranslations } from 'next-intl';
import { Reveal, Parallax } from '@/components/ui/Animation';

export default function WhyUsSection() {
  const t = useTranslations('whyus');
  const comparison: { them: string; us: string }[] = t.raw('comparison');

  return (
    <section className="section-py relative overflow-hidden">
      <Parallax speed={-0.14} className="absolute top-10 -left-40 w-[440px] h-[440px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)' }} />
      </Parallax>
      <div className="container-main relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400 max-w-[500px] mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[24px] border border-dark-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-dark-border">
              <div className="py-5 px-6 md:px-8 bg-dark-surface">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-red-500/15 flex items-center justify-center">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <span className="font-heading font-bold text-[14px] text-slate-400">{t('others')}</span>
                </div>
              </div>
              <div className="py-5 px-6 md:px-8 bg-brand-blue/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-brand-blue/20 flex items-center justify-center">
                    <span className="text-brand-blue text-xs font-bold">✓</span>
                  </div>
                  <span className="font-heading font-bold text-[14px] text-brand-blue">{t('us')}</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i < comparison.length - 1 ? 'border-b border-dark-border' : ''}`}>
                <div className="py-5 px-6 md:px-8 bg-dark-surface flex items-start gap-3">
                  <span className="text-red-400/60 mt-0.5 shrink-0 text-sm">✕</span>
                  <span className="font-body text-[14px] leading-relaxed text-slate-500">{row.them}</span>
                </div>
                <div className="py-5 px-6 md:px-8 bg-brand-blue/[0.03] flex items-start gap-3">
                  <span className="text-brand-blue mt-0.5 shrink-0 text-sm">✓</span>
                  <span className="font-body text-[14px] leading-relaxed text-slate-300">{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
