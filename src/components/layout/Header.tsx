'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { IconMenu, IconX, IconPhone, IconYoutube, IconInstagram, IconGlobe } from '@/components/ui/Icons';
import ThemeToggle from '@/components/ui/ThemeToggle';
import type { Locale } from '@/lib/i18n-config';

const navLinks = [
  { id: 'xizmatlar', key: 'services', type: 'scroll' },
  { id: 'portfolio', key: 'portfolio', type: 'dropdown' },
  { id: 'haqimizda', key: 'about', type: 'scroll' },
  { id: 'boglanish', key: 'contact', type: 'scroll' },
];

const portfolioItems = [
  { key: 'youtube', label: 'YouTube', Icon: IconYoutube, color: '#ff0000' },
  { key: 'instagram', label: 'Instagram', Icon: IconInstagram, color: '#E1306C' },
  { key: 'website', label: 'Web-sayt', Icon: IconGlobe, color: '#009fe3' },
];

const langNames: Record<string, string> = { uz: 'UZ', ru: 'RU', en: 'EN' };

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('hero');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const ids = ['hero', 'xizmatlar', 'haqimizda', 'boglanish'];
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menu]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Boshqa sahifada bo'lsa — bosh sahifadagi seksiyaga yo'naltirish
      window.location.href = `/${locale}#${id}`;
    }
    setMenu(false);
  };

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    window.location.href = segments.join('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
      scrolled ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border py-3.5' : 'bg-transparent py-6'
    }`}>
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { window.location.href = `/${locale}`; }}>
          <div className="w-12 h-12 rounded-[12px] bg-brand-navy flex items-center justify-center shadow-lg shadow-brand-navy/30 border border-brand-blue/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-3deg]">
            <span className="text-brand-blue font-heading font-black text-2xl">R</span>
          </div>
          <div>
            <div className="font-heading font-black text-2xl leading-none tracking-tight text-white">reyes</div>
            <div className="text-[9px] font-bold text-slate-500 tracking-[0.14em] uppercase mt-1">digital marketing</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-1 items-center">
          {navLinks.map((l) => (
            l.type === 'dropdown' ? (
              /* Portfolio dropdown */
              <div
                key={l.id}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={`/${locale}/portfolio`}
                  className="nav-underline px-4 py-2.5 rounded-[10px] text-[15px] font-semibold font-heading transition-all text-slate-400 hover:text-white no-underline inline-flex items-center gap-1"
                >
                  {t(l.key)}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                {/* Dropdown */}
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-dark-card border border-dark-border rounded-2xl p-2 min-w-[200px] shadow-xl shadow-black/30">
                    {portfolioItems.map((item) => (
                      <a
                        key={item.key}
                        href={`/${locale}/portfolio?tab=${item.key}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold font-heading text-slate-400 hover:bg-white/[0.04] hover:text-white transition-all no-underline"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <item.Icon size={18} style={{ color: item.color }} />
                        {item.label}
                      </a>
                    ))}
                    <div className="border-t border-dark-border mt-1 pt-1">
                      <a
                        href={`/${locale}/portfolio`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold font-heading text-brand-blue hover:bg-brand-blue/10 transition-all no-underline"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Barcha loyihalar →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-underline px-4 py-2.5 rounded-[10px] text-[15px] font-semibold font-heading transition-all ${
                  active === l.id ? 'is-active text-brand-blue' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t(l.key)}
              </button>
            )
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5 bg-white/5 rounded-lg p-0.5 border border-white/5">
            {Object.entries(langNames).map(([k, v]) => (
              <button key={k} onClick={() => switchLocale(k)}
                className={`px-3 py-2 rounded-md text-[12px] font-extrabold font-heading transition-all ${
                  locale === k ? 'bg-brand-blue text-white' : 'text-slate-500 hover:text-slate-300'
                }`}>{v}</button>
            ))}
          </div>
          <ThemeToggle />
          <button className="btn-brand hidden lg:inline-flex !py-2.5 !px-5 !text-[13.5px] !rounded-[10px]" onClick={() => go('boglanish')}>
            {t('cta')}
          </button>
          <a href="tel:+998770077656" className="hidden lg:flex w-11 h-11 rounded-[10px] bg-white/5 border border-white/5 items-center justify-center text-brand-blue hover:bg-brand-blue hover:!text-white transition-all">
            <IconPhone size={18} />
          </a>
          <button onClick={() => setMenu(!menu)} className="lg:hidden p-2 text-slate-300" aria-label="Menu">
            {menu ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-dark-bg z-[150] pt-24 px-6 pb-8 flex flex-col gap-1 transition-transform duration-400 ${
        menu ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((l) => (
          l.type === 'dropdown' ? (
            <div key={l.id}>
              <a href={`/${locale}/portfolio`} className="block py-4 text-xl font-bold font-heading border-b border-dark-border text-white no-underline">
                {t(l.key)}
              </a>
              <div className="flex gap-2 py-3 border-b border-dark-border">
                {portfolioItems.map((item) => (
                  <a key={item.key} href={`/${locale}/portfolio?tab=${item.key}`}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] text-sm text-slate-400 no-underline"
                    onClick={() => setMenu(false)}>
                    <item.Icon size={14} style={{ color: item.color }} />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <button key={l.id} onClick={() => go(l.id)}
              className="text-left py-4 text-xl font-bold font-heading border-b border-dark-border text-white">
              {t(l.key)}
            </button>
          )
        ))}
        <div className="mt-auto flex flex-col gap-3">
          <a href="tel:+998770077656" className="btn-outline justify-center">
            <IconPhone size={18} /> +998 77 007 76 56
          </a>
          <button className="btn-brand btn-lg justify-center w-full" onClick={() => go('boglanish')}>
            {t('cta')}
          </button>
        </div>
      </div>
    </header>
  );
}
