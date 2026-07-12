import { unstable_setRequestLocale } from 'next-intl/server';
import { generatePageMetadata, serviceSchema, breadcrumbSchema } from '@/lib/seo';
import type { Locale } from '@/lib/i18n-config';

const services: Record<string, Record<string, { title: string; desc: string; kw: string[] }>> = {
  'youtube-orqali-sotuv': {
    uz: { title: "YouTube orqali sotuv xizmati Toshkentda", desc: "Reyes agentlik YouTube orqali organik sotuv strategiyasi. Qurilish sohasida 500M+ so'm sotuv natijalari. Toshkent va Namangandagi kompaniyalar uchun YouTube marketing.", kw: ["YouTube orqali sotuv", "YouTube marketing Toshkent", "organik sotuv"] },
    ru: { title: "Продажи через YouTube в Ташкенте", desc: "Органическая контент-стратегия продаж через YouTube. 500M+ сум в строительной сфере.", kw: ["продажи через YouTube", "YouTube маркетинг Ташкент"] },
    en: { title: "YouTube Sales Service Tashkent", desc: "Organic YouTube sales strategy. 500M+ UZS results.", kw: ["YouTube sales Tashkent", "YouTube marketing Uzbekistan"] },
  },
  'web-sayt-orqali-sotuv': {
    uz: { title: "Web-sayt orqali sotuv — sayt yaratish Toshkent", desc: "Konversiyaga yo'naltirilgan web-saytlar. $1.5M eksport. Toshkentda web sayt yaratish narxi.", kw: ["web sayt yaratish Toshkent", "sayt narxi", "landing page"] },
    ru: { title: "Создание сайтов для продаж в Ташкенте", desc: "Сайты для конверсии. $1.5M экспорта. Создание сайтов под ключ Ташкент.", kw: ["создание сайтов Ташкент", "разработка сайтов цены"] },
    en: { title: "Website Development Tashkent", desc: "Conversion-focused websites. $1.5M export results.", kw: ["website development Tashkent", "web design Uzbekistan"] },
  },
  'smm-marketing': {
    uz: { title: "SMM Marketing xizmati Toshkent va Namangan", desc: "Instagram, Telegram, Facebook marketing. 400M+ so'm sotuv. SMM narxi Toshkent.", kw: ["SMM xizmati Toshkent", "Instagram reklama", "SMM Namangan"] },
    ru: { title: "SMM продвижение Ташкент и Наманган", desc: "Управление брендом в соцсетях. 400M+ сум продаж. SMM цены.", kw: ["SMM продвижение Ташкент", "SMM цены", "SMM Наманган"] },
    en: { title: "SMM Marketing Tashkent & Namangan", desc: "Social media marketing. 400M+ UZS sales.", kw: ["SMM Tashkent", "social media Uzbekistan"] },
  },
  'video-production': {
    uz: { title: "Video Production Toshkentda", desc: "Reklama videolar, YouTube kontent, motion graphics. Professional video production.", kw: ["video production Toshkent", "reklama video", "motion graphics"] },
    ru: { title: "Видеопродакшн в Ташкенте", desc: "Рекламные ролики, YouTube-контент, моушн-графика.", kw: ["видеопродакшн Ташкент", "рекламное видео"] },
    en: { title: "Video Production Tashkent", desc: "Ad videos, YouTube content, motion graphics.", kw: ["video production Tashkent", "ad video Uzbekistan"] },
  },
  'seo-optimizatsiya': {
    uz: { title: "SEO Optimizatsiya Toshkent — sayt optimizatsiya", desc: "Google va Yandex birinchi sahifa. Texnik SEO, kontent, link building. SEO narxi O'zbekiston.", kw: ["SEO optimizatsiya Toshkent", "SEO narxi", "sayt optimizatsiya"] },
    ru: { title: "SEO продвижение сайтов Ташкент", desc: "Первая страница Google и Яндекс. SEO услуги Узбекистан.", kw: ["SEO продвижение Ташкент", "SEO цены Узбекистан"] },
    en: { title: "SEO Services Tashkent", desc: "First page of Google and Yandex. SEO in Uzbekistan.", kw: ["SEO Tashkent", "SEO services Uzbekistan"] },
  },
  'google-ads': {
    uz: { title: "Google Ads reklama Toshkentda", desc: "Google Ads, Yandex Direct. Maksimal ROI. Kontekst reklama narxi.", kw: ["Google Ads Toshkent", "kontekst reklama", "reklama narxi"] },
    ru: { title: "Google Ads реклама Ташкент", desc: "Контекстная реклама Google Ads и Яндекс Директ. Максимальный ROI.", kw: ["Google Ads Ташкент", "контекстная реклама цены"] },
    en: { title: "Google Ads Tashkent", desc: "Google Ads and Yandex Direct campaigns. Maximum ROI.", kw: ["Google Ads Tashkent", "PPC Uzbekistan"] },
  },
  'sotuv-bolimi-tashkil-etish': {
    uz: { title: "Sotuv bo'limini tashkil etish xizmati", desc: "CRM, skriptlar, trening, monitoring — noldan quramiz. Toshkentda sotuv tizimi.", kw: ["sotuv bo'limi tashkil etish", "CRM Toshkent", "sotuv treningi"] },
    ru: { title: "Организация отдела продаж Ташкент", desc: "CRM, скрипты, обучение, мониторинг с нуля.", kw: ["отдел продаж Ташкент", "CRM внедрение"] },
    en: { title: "Sales Department Setup Tashkent", desc: "CRM, scripts, training, monitoring from scratch.", kw: ["sales setup Tashkent", "CRM implementation"] },
  },
  'xalqaro-bozorga-chiqish': {
    uz: { title: "Xalqaro bozorga chiqish marketing", desc: "O'zbekiston kompaniyalarini xalqaro bozorga chiqaramiz. 3 davlatga eksport tajribasi.", kw: ["xalqaro bozorga chiqish", "eksport marketing", "lokalizatsiya"] },
    ru: { title: "Выход на международный рынок", desc: "Помогаем узбекским компаниям выйти на мировой рынок.", kw: ["международный рынок Узбекистан", "экспорт маркетинг"] },
    en: { title: "International Market Entry", desc: "Help Uzbek companies enter global markets.", kw: ["international market entry", "export marketing Uzbekistan"] },
  },
};

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }));
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: Locale; slug: string } }) {
  const s = services[slug]?.[locale];
  if (!s) return {};
  return generatePageMetadata({ locale, title: s.title, description: s.desc, path: `/xizmatlar/${slug}`, keywords: s.kw });
}

export default function ServicePage({ params: { locale, slug } }: { params: { locale: Locale; slug: string } }) {
  unstable_setRequestLocale(locale);
  const s = services[slug]?.[locale];
  if (!s) return <div>Not found</div>;

  const jsonLd = serviceSchema({ name: s.title, description: s.desc, url: `/${locale}/xizmatlar/${slug}` });
  const bc = breadcrumbSchema([
    { name: locale === 'uz' ? 'Bosh sahifa' : locale === 'ru' ? 'Главная' : 'Home', url: `/${locale}` },
    { name: locale === 'uz' ? 'Xizmatlar' : locale === 'ru' ? 'Услуги' : 'Services', url: `/${locale}/xizmatlar` },
    { name: s.title, url: `/${locale}/xizmatlar/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <section className="section-py">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{s.title}</h1>
          <p className="text-lg text-slate-500 max-w-2xl">{s.desc}</p>
        </div>
      </section>
    </>
  );
}
