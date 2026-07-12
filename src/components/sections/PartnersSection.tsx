'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Animation';

const partners = [
  { name: 'Megaton', logo: '/images/partners/partner-1.png' },
  { name: 'Gap Gigant', logo: '/images/partners/partner-2.png' },
  { name: 'BRR Sulaymon Trade', logo: '/images/partners/partner-3.png' },
  { name: 'Perfect Formula', logo: '/images/partners/partner-4.png' },
  { name: 'Dr. Rustamov', logo: '/images/partners/partner-5.png' },
  { name: 'Partner 6', logo: '/images/partners/partner-6.png' },
  { name: 'X.A.F Glass', logo: '/images/partners/partner-7.png' },
];

export default function PartnersSection() {
  const t = useTranslations('partners');

  return (
    <section className="py-16 border-y border-dark-border">
      <style>{`
        .partner-card {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .partner-card:hover {
          border-color: rgba(0,159,227,0.3);
          box-shadow: 0 0 24px rgba(0,159,227,0.15), 0 0 48px rgba(0,159,227,0.08);
          transform: translateY(-4px);
        }
        .partner-card:hover img {
          opacity: 1 !important;
          filter: brightness(1.1);
        }
        /* Mobile: logos always bright */
        @media (max-width: 1023px) {
          .partner-logo { opacity: 1 !important; }
        }
        /* Desktop: dimmed, bright on hover */
        @media (min-width: 1024px) {
          .partner-logo { opacity: 0.5; transition: opacity 0.4s, filter 0.4s; }
        }
      `}</style>
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-10">
            <span className="badge mb-3">{t('badge')}</span>
            <h2 className="font-heading font-extrabold text-[clamp(24px,3.5vw,36px)] tracking-tight mb-2">{t('title')}</h2>
            <p className="font-body text-sm text-slate-400 max-w-md mx-auto">{t('description')}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="partner-card flex items-center justify-center h-24 rounded-2xl border border-dark-border bg-dark-card cursor-pointer px-4"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="partner-logo max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
