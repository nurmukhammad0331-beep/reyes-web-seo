'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal, Parallax } from '@/components/ui/Animation';
import { IconMapPin, IconPhone, IconClock, IconInstagram, IconYoutube, IconTelegram, IconSend } from '@/components/ui/Icons';
import { siteConfig } from '@/lib/seo';

const serviceOptions = [
  'YouTube Sales',
  'Web Development',
  'SMM Marketing',
  'Video Production',
  'SEO',
  'Google Ads',
  'Sotuv bo\'limi',
  'Xalqaro bozor',
];

const budgetOptions = [
  '$1,000 — $3,000',
  '$3,000 — $5,000',
  '$5,000+',
];

export default function ContactSection() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [phone, setPhone] = useState('+998 ');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  // Telefon formatlash: +998 XX XXX XX XX (faqat raqam)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // +998 ni o'chirib bo'lmasin
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }

    // +998 dan keyingi qismni olish
    let digits = val.slice(4).replace(/\D/g, ''); // faqat raqamlar

    // Maksimum 9 ta raqam (998 dan keyin)
    digits = digits.slice(0, 9);

    // Format: XX XXX XX XX
    let formatted = '+998 ';
    if (digits.length > 0) formatted += digits.slice(0, 2);
    if (digits.length > 2) formatted += ' ' + digits.slice(2, 5);
    if (digits.length > 5) formatted += ' ' + digits.slice(5, 7);
    if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);

    setPhone(formatted);
  };

  // Xizmat tanlash (multi-select)
  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Telefon to'liq kiritilganmi tekshirish
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 12) {
      alert('Telefon raqamni to\'liq kiriting');
      return;
    }

    setStatus('sending');

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name') as string,
      phone: phone,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      service: selectedServices.join(', '),
      budget: selectedBudget,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        // Faqat Telegram ga yetib borganda muvaffaqiyatli
        setStatus('success');
        formRef.current.reset();
        setPhone('+998 ');
        setSelectedServices([]);
        setSelectedBudget('');
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        console.error('API error:', result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="boglanish" className="section-py bg-dark-surface relative overflow-hidden">
      <Parallax speed={0.18} className="absolute -bottom-40 -right-40 w-[520px] h-[520px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,159,227,0.09), transparent 70%)' }} />
      </Parallax>
      <div className="container-main relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400 max-w-[460px] mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-7 items-start">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="card !p-9">
              <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-400 mb-1.5">{t('form.name')}</label>
                  <input name="name" className="input-field" required />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-400 mb-1.5">{t('form.phone')}</label>
                  <input
                    type="tel"
                    className="input-field"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={(e) => {
                      // +998 ni backspace bilan o'chirib bo'lmasin
                      if (e.key === 'Backspace' && phone.length <= 5) {
                        e.preventDefault();
                      }
                    }}
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-400 mb-1.5">{t('form.email')}</label>
                  <input name="email" className="input-field" type="email" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-400 mb-1.5">{t('form.company')}</label>
                  <input name="company" className="input-field" />
                </div>
              </div>

              {/* Multi-select xizmatlar */}
              <div className="mb-3.5">
                <label className="block text-[13px] font-bold text-slate-400 mb-2.5">{t('form.service')}</label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all duration-200 ${
                          isSelected
                            ? 'bg-brand-blue/20 border-brand-blue/40 text-brand-blue'
                            : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-brand-blue/20 hover:text-slate-300'
                        }`}
                      >
                        {isSelected && <span className="mr-1.5">✓</span>}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Byudjet tanlash */}
              <div className="mb-3.5">
                <label className="block text-[13px] font-bold text-slate-400 mb-2.5">{t('form.budget')}</label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(isSelected ? '' : budget)}
                        className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all duration-200 ${
                          isSelected
                            ? 'bg-brand-blue/20 border-brand-blue/40 text-brand-blue'
                            : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:border-brand-blue/20 hover:text-slate-300'
                        }`}
                      >
                        {isSelected && <span className="mr-1.5">✓</span>}
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[13px] font-bold text-slate-400 mb-1.5">{t('form.message')}</label>
                <textarea name="message" className="input-field resize-none" rows={4} />
              </div>
              <button
                type="submit"
                className={`btn-lg w-full justify-center font-heading font-bold text-[15px] border-none cursor-pointer rounded-xl transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500/80 text-white'
                    : 'btn-brand'
                }`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Yuborilmoqda...
                  </span>
                ) : status === 'success' ? (
                  '✓ Muvaffaqiyatli yuborildi!'
                ) : status === 'error' ? (
                  '✕ Xatolik yuz berdi — qayta urinib ko\'ring'
                ) : (
                  <><IconSend size={16} /> {t('form.submit')}</>
                )}
              </button>
            </form>
          </Reveal>

          {/* Contact Info */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex flex-col gap-3.5">
              <div className="card">
                {[
                  { Icon: IconMapPin, label: t('info.address'), value: t('info.addressValue'), href: null },
                  { Icon: IconPhone, label: t('info.phone'), value: t('info.phoneValue'), href: 'tel:+998770077656' },
                  { Icon: IconClock, label: t('info.workHours'), value: t('info.workHoursValue'), href: null },
                ].map((c, i) => (
                  <div key={i} className={`flex items-start gap-3 py-3.5 ${i < 2 ? 'border-b border-dark-border' : ''}`}>
                    <div className="w-[38px] h-[38px] rounded-[10px] bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <c.Icon size={18} className="text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-400">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="font-body text-[15px] text-brand-blue hover:underline mt-0.5 block">{c.value}</a>
                      ) : (
                        <div className="font-body text-[15px] text-slate-400 mt-0.5">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {[
                { Icon: IconInstagram, name: 'Instagram', handle: '@reyes.agency', bg: 'bg-brand-blue/10', color: 'text-brand-blue', href: siteConfig.socials.instagram },
                { Icon: IconYoutube, name: 'YouTube', handle: 'Reyes Agency', bg: 'bg-brand-blue/10', color: 'text-brand-blue', href: siteConfig.socials.youtube },
                { Icon: IconTelegram, name: 'Telegram', handle: '@reyes_agency', bg: 'bg-brand-blue/10', color: 'text-brand-blue', href: siteConfig.socials.telegram },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3.5 !py-5 !px-6 no-underline">
                  <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center`}>
                    <s.Icon size={22} className={s.color} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[15px]">{s.name}</div>
                    <div className="font-body text-[13px] text-slate-500">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
