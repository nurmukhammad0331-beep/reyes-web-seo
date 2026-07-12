'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Reveal, Parallax, Tilt } from '@/components/ui/Animation';
import { IconBuilding, IconGlobe, IconSmartphone, IconBook, IconShoppingBag, IconActivity, IconYoutube, IconArrowRight } from '@/components/ui/Icons';

const portfolioKeys = ['construction', 'export', 'social', 'education', 'snack', 'medical'] as const;
const portfolioIcons = [IconBuilding, IconGlobe, IconSmartphone, IconBook, IconShoppingBag, IconActivity];
const portfolioColors = ['#009fe3', '#22c55e', '#a855f7', '#f59e0b', '#ef4444', '#06b6d4'];

export default function PortfolioSection() {
  const t = useTranslations('portfolio');
  const locale = useLocale();

  const featuredStats = [
    { value: t('featured.stat1.value'), label: t('featured.stat1.label') },
    { value: t('featured.stat2.value'), label: t('featured.stat2.label') },
    { value: t('featured.stat3.value'), label: t('featured.stat3.label') },
    { value: t('featured.stat4.value'), label: t('featured.stat4.label') },
  ];

  return (
    <section id="portfolio" className="section-py relative overflow-hidden">
      <Parallax speed={-0.12} className="absolute top-24 -right-48 w-[460px] h-[460px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)' }} />
      </Parallax>
      <div className="container-main relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400 max-w-[500px] mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        {/* Featured: YouTube 2.5M natija — real analitika skrinshoti bilan */}
        <Reveal>
          <Tilt max={2.5}>
          <div className="card-glow overflow-hidden mb-12 group">
            <div className="grid lg:grid-cols-2 items-stretch">
              {/* Analitika skrinshoti */}
              <a
                href={`/${locale}/portfolio?tab=youtube`}
                className="relative block overflow-hidden bg-black/40 no-underline"
                aria-label={t('featured.title')}
              >
                <Image
                  src="/images/portfolio/youtube/yt-analytics.png"
                  alt={t('featured.title')}
                  width={825}
                  height={594}
                  className="w-full h-full object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark-surface/60" />
              </a>

              {/* Kontent */}
              <div className="p-8 lg:p-11 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 w-fit font-bold text-[11px] px-4 py-1.5 rounded-full uppercase tracking-[0.14em] mb-5"
                  style={{ background: 'rgba(255,0,0,0.1)', color: '#ff6b6b', border: '1px solid rgba(255,0,0,0.2)' }}>
                  <IconYoutube size={14} /> {t('featured.badge')}
                </span>
                <h3 className="font-heading font-bold text-[clamp(24px,3vw,34px)] tracking-tight leading-tight mb-3">
                  {t('featured.title')}
                </h3>
                <p className="font-body text-[15px] leading-[1.75] text-slate-400 mb-7">
                  {t('featured.desc')}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {featuredStats.map((s, i) => (
                    <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.07] px-3 py-3 text-center">
                      <div className="font-heading font-bold text-[18px] text-brand-blue-light">{s.value}</div>
                      <div className="font-body text-[11px] text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a href={`/${locale}/portfolio?tab=youtube`} className="btn-brand w-fit !py-3 !px-6 !text-[14px]">
                  {t('featured.cta')} <IconArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
          </Tilt>
        </Reveal>

        {/* Soha bo'yicha natijalar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioKeys.map((key, i) => {
            const Icon = portfolioIcons[i];
            const color = portfolioColors[i];
            const results: string[] = t.raw(`items.${key}.results`);
            return (
              <Reveal key={key} delay={i * 0.08}>
                <div
                  className="rounded-[20px] p-8 h-full transition-all duration-400 cursor-pointer hover:-translate-y-2"
                  style={{
                    background: `linear-gradient(160deg, ${color}12, ${color}05)`,
                    border: `1px solid ${color}20`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 48px ${color}20`; e.currentTarget.style.transform = 'translateY(-8px) perspective(600px) rotateX(2deg)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: `${color}15` }}>
                      <Icon size={24} style={{ color }} />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{t(`items.${key}.sector`)}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {results.map((r: string, j: number) => (
                      <li key={j} className="flex items-center gap-2.5 font-body text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
