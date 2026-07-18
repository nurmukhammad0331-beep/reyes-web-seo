'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Animation';
import { IconYoutube, IconInstagram, IconGlobe, IconArrowRight } from '@/components/ui/Icons';

const tabs = [
  { key: 'youtube', label: 'YouTube', Icon: IconYoutube, color: '#ff0000' },
  { key: 'instagram', label: 'Instagram', Icon: IconInstagram, color: '#E1306C' },
  { key: 'website', label: 'Web-sayt', Icon: IconGlobe, color: '#009fe3' },
];

const portfolioData = {
  youtube: {
    title: 'YouTube orqali sotuv',
    desc: 'Organik kontent strategiya bilan real mijozlar va sotuvlarni keltiramiz.',
    stats: [
      { value: '500M+', label: "so'm sotuv" },
      { value: '3.5M+', label: "ko'rishlar (28 kun)" },
      { value: '80K+', label: 'organik auditoriya' },
    ],
    items: [
      {
        src: '/images/portfolio/youtube/yt-steam.png',
        name: "STEAM Plaza — 3.5 mln ko'rish (28 kun)",
        desc: "Ta'lim markazi YouTube kanali: so'nggi 28 kunda 3,494,529 ko'rish, 13,300 soat tomosha vaqti va +1,800 yangi obunachi (>999% o'sish). Video va Shorts kombinatsiyasi bilan organik o'sish.",
      },
      {
        src: '/images/portfolio/youtube/yt-1.png',
        name: 'Megaton Avtoklav Gazoblok',
        desc: 'YouTube kanal yaratish, kontent strategiya, SEO-optimizatsiya. 508+ obunachi, 45 ta video. Qurilish sohasida organik sotuv voronkasi.',
      },
      {
        src: '/images/portfolio/youtube/yt-2.png',
        name: 'Pharm Leader',
        desc: 'Tibbiyot va farmatsevtika YouTube kanali. 2,160+ obunachi, 56 ta video. Soha bo\'yicha ishonch qurish va auditoriya o\'stirish.',
      },
    ],
  },
  instagram: {
    title: 'Instagram SMM',
    desc: 'Instagram\'da brendingizni boshqaramiz — kontent, dizayn, target reklama.',
    stats: [
      { value: '100K+', label: 'jami auditoriya' },
      { value: '5', label: 'faol loyiha' },
    ],
    items: [
      {
        src: '/images/portfolio/instagram/ig-1.jpg',
        name: 'Gap Gigant',
        desc: 'Snack brendi — pista, semechka, yer yong\'oq. 13,200+ obunachi. Kontent yaratish, brending, target reklama.',
      },
      {
        src: '/images/portfolio/instagram/ig-2.jpg',
        name: 'Megaton',
        desc: 'Avtoklav gazoblok zavodi. 1,800+ obunachi. Instagram vizual identifikatsiya, highlights va kontent boshqaruv.',
      },
      {
        src: '/images/portfolio/instagram/ig-3.jpg',
        name: 'Steam Plaza School',
        desc: 'Namangandagi xususiy maktab-bog\'cha. 1,800+ obunachi. STEAM metodikasi asosida ta\'lim brendini yaratish.',
      },
      {
        src: '/images/portfolio/instagram/ig-4.jpg',
        name: 'Steam Plaza Kids',
        desc: 'Innovatsion bog\'cha — 2-7 yosh. 3,200+ obunachi. Franshiza va filiallar tarmoqini kengaytirish uchun SMM.',
      },
      {
        src: '/images/portfolio/instagram/ig-5.jpg',
        name: 'Pharm Leader',
        desc: 'Tibbiyot va farmatsevtika kontenti. 85,000+ obunachi. Shaxsiy brend yaratish va auditoriya ishonchini qurish.',
      },
    ],
  },
  website: {
    title: 'Web-sayt orqali sotuv',
    desc: 'Konversiyaga yo\'naltirilgan web-saytlar yaratamiz.',
    stats: [
      { value: '$1.5M', label: 'eksport' },
      { value: '3', label: 'davlatga' },
    ],
    items: [
      {
        src: '/images/portfolio/website/web-1.png',
        name: 'Megaton',
        desc: 'Avtoklav gazoblok ishlab chiqaruvchi uchun korporativ web-sayt. Katalog, xizmatlar, blog va bog\'lanish sahifalari. Ko\'p tilli (UZ/RU).',
      },
      {
        src: '/images/portfolio/website/web-2.png',
        name: 'BRR Sulaymon Trade',
        desc: '100% ekologik idish-tovoq brendi uchun korporativ sayt. Mahsulotlar katalogi, blog va onlayn buyurtma tizimi. Ko\'p tilli (UZ/RU).',
      },
      {
        src: '/images/portfolio/website/web-3.png',
        name: 'Gap Gigant',
        desc: 'Snack brendi uchun web-sayt. Mahsulotlar, yangiliklar, bog\'lanish. Premium dizayn va mahsulot prezentatsiyasi.',
      },
    ],
  },
};

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<'youtube' | 'instagram' | 'website'>('youtube');
  const [lightbox, setLightbox] = useState<string | null>(null);

  // URL dan tab o'qish (client side)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab && ['youtube', 'instagram', 'website'].includes(tab)) {
      setActiveTab(tab as any);
    }
  }, []);
  const data = portfolioData[activeTab];
  const activeTabInfo = tabs.find(t => t.key === activeTab)!;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-main mb-10">
        <Reveal>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-blue transition-colors mb-6 no-underline">
            ← Bosh sahifa
          </Link>
          <span className="badge mb-4 block w-fit">Portfolio</span>
          <h1 className="font-heading font-extrabold text-[clamp(28px,4.5vw,44px)] tracking-tight mb-2">
            Real natijalar, real loyihalar
          </h1>
          <p className="font-body text-base text-slate-400 max-w-[500px]">
            YouTube, Instagram va Web-sayt bo'yicha ishlarimiz.
          </p>
        </Reveal>
      </div>

      {/* Tabs + Stats */}
      <div className="container-main mb-8">
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-[14px] border transition-all ${
                    isActive ? '' : 'bg-dark-card border-dark-border text-slate-400 hover:text-slate-300'
                  }`}
                  style={isActive ? { background: `${tab.color}12`, borderColor: `${tab.color}35`, color: tab.color } : undefined}
                >
                  <tab.Icon size={18} />
                  {tab.label}
                  <span className="text-[12px] opacity-60">({data.items.length})</span>
                </button>
              );
            })}
            <div className="hidden sm:flex items-center gap-5 ml-auto">
              {data.stats.map((s, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span className="font-heading font-black text-[20px]" style={{ color: activeTabInfo.color }}>{s.value}</span>
                  <span className="font-body text-[12px] text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((item, i) => (
            <Reveal key={`${activeTab}-${i}`} delay={i * 0.08}>
              <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 group">
                <div
                  className="relative w-full cursor-pointer overflow-hidden bg-dark-surface"
                  onClick={() => setLightbox(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 py-4">
                  <h3 className="font-heading font-bold text-[15px] mb-1">{item.name}</h3>
                  <p className="font-body text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="font-body text-slate-500 text-sm mb-4">Sizning loyihangiz uchun ham shu natijalarni beramiz</p>
            <a href="tel:+998770077656" className="btn-brand inline-flex !no-underline !py-3 !px-6 !text-[14px]">
              Bog'lanish <IconArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10" onClick={() => setLightbox(null)}>✕</button>
          <Image src={lightbox} alt="Portfolio" width={1600} height={1000} className="object-contain max-w-[92vw] max-h-[90vh] rounded-xl" />
        </div>
      )}
    </div>
  );
}
