'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Animation';
import { IconStar } from '@/components/ui/Icons';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const items: { name: string; text: string; rating: number }[] = t.raw('items');

  return (
    <section className="section-py bg-dark-surface">
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight">{t('title')}</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card relative">
                <span className="absolute top-5 right-6 text-[48px] font-black opacity-[0.06] leading-none">&ldquo;</span>
                <div className="flex gap-0.5 mb-3.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <IconStar key={s} size={14} className="text-amber-400" />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed text-slate-400 mb-5 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-[10px] bg-brand-blue/10 flex items-center justify-center font-heading font-bold text-brand-blue text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="font-heading font-semibold text-[13px]">{item.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
