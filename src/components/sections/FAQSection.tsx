'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Animation';
import { IconChevronDown } from '@/components/ui/Icons';

export default function FAQSection() {
  const t = useTranslations('faq');
  const items: { question: string; answer: string }[] = t.raw('items');
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-py">
      <div className="container-main max-w-3xl">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight">{t('title')}</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card !p-0 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-heading font-bold text-[15px] hover:text-brand-blue transition-colors"
                >
                  {item.question}
                  <IconChevronDown
                    size={18}
                    className={`shrink-0 ml-4 transition-transform duration-300 text-slate-400 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: open === i ? '300px' : '0' }}
                >
                  <p className="px-6 pb-6 font-body text-sm leading-relaxed text-slate-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
