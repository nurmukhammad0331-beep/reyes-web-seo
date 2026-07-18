'use client';

import { useTranslations } from 'next-intl';
import { IconInstagram, IconYoutube, IconTelegram, IconPhone, IconMapPin } from '@/components/ui/Icons';
import type { Locale } from '@/lib/i18n-config';
import { siteConfig } from '@/lib/seo';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact.info');

  return (
    <footer className="bg-dark-card border-t border-dark-border pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-dark-border">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-[10px] bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center">
                <span className="text-brand-blue font-heading font-black text-xl">R</span>
              </div>
              <div>
                <div className="font-heading font-black text-lg text-slate-200 leading-none">reyes</div>
                <div className="text-[9px] font-bold text-slate-500 tracking-[0.1em] uppercase">digital marketing</div>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-400 mb-6">{t('description')}</p>
            <div className="flex gap-2.5">
              {[
                { Icon: IconInstagram, href: siteConfig.socials.instagram, label: 'Instagram' },
                { Icon: IconYoutube, href: siteConfig.socials.youtube, label: 'YouTube' },
                { Icon: IconTelegram, href: siteConfig.socials.telegram, label: 'Telegram' },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:bg-brand-blue/15 hover:text-brand-blue hover:border-brand-blue/20 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[15px] font-bold text-slate-200 mb-5 font-heading">{t('services')}</h4>
            <div className="flex flex-col gap-3">
              {['YouTube Sales', 'Web Development', 'SMM Marketing', 'SEO', 'Google Ads', 'Video Production'].map((s) => (
                <span key={s} className="text-[15px] text-slate-400 cursor-pointer hover:text-brand-blue transition-colors">{s}</span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[15px] font-bold text-slate-200 mb-5 font-heading">{t('company')}</h4>
            <div className="flex flex-col gap-3">
              {[tNav('portfolio'), tNav('about'), tNav('team'), tNav('contact')].map((s) => (
                <span key={s} className="text-[15px] text-slate-400 cursor-pointer hover:text-brand-blue transition-colors">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[15px] font-bold text-slate-200 mb-5 font-heading">{tContact('address')}</h4>
            <div className="flex items-start gap-2.5 mb-4">
              <IconMapPin size={16} className="text-brand-blue mt-0.5 shrink-0" />
              <span className="text-[15px] text-slate-400 leading-relaxed">{tContact('addressValue')}</span>
            </div>
            <a href="tel:+998770077656" className="flex items-center gap-2.5 text-brand-blue font-semibold text-[16px] hover:text-brand-blue-light transition-colors">
              <IconPhone size={16} /> {tContact('phoneValue')}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-7 gap-3">
          <p className="text-[14px] text-slate-500">© 2023—2026 Reyes Digital Marketing Agency. {t('rights')}</p>
          <p className="text-[14px] text-slate-500">{t('since')}</p>
        </div>
      </div>
    </footer>
  );
}
