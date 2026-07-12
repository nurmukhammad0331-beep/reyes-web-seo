'use client';

import { useTranslations } from 'next-intl';
import { Reveal, Parallax } from '@/components/ui/Animation';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function ProcessSection() {
  const t = useTranslations('process');
  const steps: { num: string; title: string; desc: string }[] = t.raw('steps');

  const colors = ['#009fe3', '#22c55e', '#a855f7', '#f59e0b'];

  return (
    <section className="section-py bg-dark-surface relative overflow-hidden">
      <Parallax speed={0.16} className="absolute -top-24 left-1/3 w-[420px] h-[420px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.06), transparent 70%)' }} />
      </Parallax>
      <div className="container-main relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <SpotlightCard className="relative card !p-7 h-full group/step">
                {/* Step number */}
                <div
                  className="font-heading font-black text-[48px] leading-none mb-4 transition-all duration-300 group-hover/step:opacity-40 group-hover/step:-translate-y-1"
                  style={{ color: colors[i], opacity: 0.15 }}
                >
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-[18px] mb-2" style={{ color: colors[i] }}>
                  {step.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed text-slate-400">
                  {step.desc}
                </p>

                {/* Connector line (not on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px]" style={{ background: `linear-gradient(90deg, ${colors[i]}40, ${colors[i+1]}40)` }} />
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
