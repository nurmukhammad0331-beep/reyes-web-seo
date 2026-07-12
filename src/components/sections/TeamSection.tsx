'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Animation';

const colors = ['#009fe3', '#22c55e', '#a855f7', '#f59e0b', '#ef4444', '#06b6d4'];

// Xodimlar rasmlari — /public/images/team/ papkasiga qo'ying
// va photos massivda fayl nomini ko'rsating
const photos: (string | null)[] = [null, null, null, null, null, null];

export default function TeamSection() {
  const t = useTranslations('team');
  const members: { name: string; role: string }[] = t.raw('members');

  return (
    <section id="jamoa" className="section-py">
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-14">
            <span className="badge mb-3.5">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] tracking-tight mb-2.5">{t('title')}</h2>
            <p className="font-body text-base text-slate-400">{t('description')}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card text-center py-8 px-5 group">
                {/* Rasm joyi — katta */}
                <div className="relative w-[120px] h-[120px] mx-auto mb-5 rounded-[28px] overflow-hidden"
                  style={{ background: photos[i] ? undefined : `linear-gradient(135deg, ${colors[i]}cc, ${colors[i]})`, boxShadow: `0 8px 24px ${colors[i]}25` }}
                >
                  {photos[i] ? (
                    <img
                      src={photos[i]!}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Placeholder — rasm yuklanmaguncha ko'rinadi */
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading font-extrabold text-[40px] text-white/90">{m.name.charAt(0)}</span>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300 rounded-[28px]" />
                </div>
                <div className="font-heading font-bold text-[15px] leading-tight mb-1">{m.name}</div>
                <div className="font-body text-[13px] text-slate-400">{m.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Qo'llanma: Rasm qo'shish uchun
          1. /public/images/team/ papkasi yarating
          2. Har bir xodim rasmini qo'shing (masalan: nurmuhammad.jpg, marketolog.jpg...)
          3. Yuqoridagi photos massivda: ['/images/team/nurmuhammad.jpg', '/images/team/marketolog.jpg', ...]
          4. Rasmlar kvadrat (1:1) formatda bo'lsa eng yaxshi
          5. git push — avtomatik deploy
        */}
      </div>
    </section>
  );
}
