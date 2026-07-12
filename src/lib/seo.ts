import { Metadata } from 'next';
import { locales, localeHrefLang, type Locale } from './i18n-config';

// ===== SITE CONFIG =====
export const siteConfig = {
  name: 'Reyes Digital Marketing Agency',
  url: 'https://reyesagency.uz',
  ogImage: '/images/og-reyes.jpg',
  phone: '+998770077656',
  email: 'info@reyes.uz',
  address: { street: "Kozitoron ko'chasi 9", city: 'Toshkent', district: 'Yunusobod', postalCode: '100000', country: 'UZ' },
  socials: { instagram: 'https://instagram.com/reyes.agency', telegram: 'https://t.me/reyes_agency', youtube: 'https://youtube.com/@reyes_agency' },
  founded: '2023',
  founder: 'Nurmuhammad Muhammedov',
};

// ===== SEO KEYWORDS =====
// Toshkent bozori uchun 2026 tahlili asosida: Google.uz va Yandex qidiruvlarida
// eng ko'p ishlatiladigan qisqa (short) va uzun dumli (long-tail) so'rovlar.
// Raqobatchilar (Wunder Digital, Optimize, TheLead Media, 101 Digital, Royal Marketing,
// Kyoday, OpenEngine) sahifalari va mahalliy qidiruv xulq-atvori tahlil qilindi.
export const seoKeywords = {
  uz: {
    // Qisqa, yuqori hajmli so'rovlar (short keywords)
    primary: [
      'digital marketing agentlik Toshkent',
      'marketing agentligi Toshkent',
      'reklama agentligi Toshkent',
      'SMM xizmati Toshkent',
      'SMM agentlik Toshkent',
      'target reklama Toshkent',
      'targetolog Toshkent',
      'SEO xizmati Toshkent',
      'SEO optimizatsiya Toshkent',
      'sayt yaratish Toshkent',
      'sayt yasash Toshkent',
      'web sayt yaratish Toshkent',
      'landing page yaratish Toshkent',
      'Google reklama Toshkent',
      'Google Ads Toshkent',
      'Yandex Direct Toshkent',
      'kontekst reklama Toshkent',
      'internet marketing Toshkent',
      'YouTube kanal yuritish',
      'YouTube orqali sotuv',
      'video production Toshkent',
      'mobilograf Toshkent',
      'Instagram reklama Toshkent',
      'Telegram reklama Toshkent',
    ],
    // Uzun dumli, yuqori konversiyali so'rovlar (long-tail keywords)
    longTail: [
      'Toshkentda eng yaxshi digital marketing agentlik',
      'Toshkentda eng yaxshi SMM agentlik',
      'SMM xizmati narxi Toshkent 2026',
      'sayt yaratish narxi Toshkent 2026',
      'sayt yaratish narxi qancha Toshkent',
      'SEO optimizatsiya narxi Toshkent',
      'Google reklama narxi Toshkent',
      'target reklama narxi Toshkent',
      'Instagram reklama narxi Toshkent',
      'saytni Google birinchi sahifasiga chiqarish',
      'saytni Yandex topiga chiqarish',
      'YouTube orqali sotuv qilish xizmati',
      'biznes uchun YouTube kanal ochish va yuritish',
      'YouTube kanalni monetizatsiya qilish xizmati',
      'internet magazin sayt yaratish Toshkent',
      'korporativ sayt yaratish narxi',
      'kichik biznes uchun SMM xizmati',
      'restoran uchun SMM Toshkent',
      "o'quv markazi uchun reklama Toshkent",
      'qurilish kompaniyasi uchun marketing',
      'zavod va ishlab chiqarish uchun marketing',
      'sotuv bo\'limini tashkil etish xizmati',
      'CRM joriy etish va sotuv voronkasi qurish',
      'web sayt orqali eksport qilish',
      'xalqaro bozorga chiqish uchun marketing',
      'Google Maps ga biznesni joylash Toshkent',
      'Telegram kanalga obunachi yig\'ish xizmati',
      'reels va video kontent tayyorlash Toshkent',
      'brending va logotip yaratish Toshkent',
      'marketing strategiya ishlab chiqish xizmati',
    ],
    geo: ['Toshkent', 'Yunusobod', "O'zbekiston", 'Namangan', 'Markaziy Osiyo'],
  },
  ru: {
    primary: [
      'digital агентство Ташкент',
      'маркетинговое агентство Ташкент',
      'рекламное агентство Ташкент',
      'SMM продвижение Ташкент',
      'SMM агентство Ташкент',
      'таргетированная реклама Ташкент',
      'таргетолог Ташкент',
      'SEO продвижение Ташкент',
      'SEO оптимизация Ташкент',
      'продвижение сайтов Ташкент',
      'раскрутка сайта Ташкент',
      'создание сайтов Ташкент',
      'разработка сайтов Ташкент',
      'заказать сайт Ташкент',
      'контекстная реклама Ташкент',
      'Google Ads Ташкент',
      'Яндекс Директ Ташкент',
      'интернет маркетинг Ташкент',
      'продвижение в Instagram Ташкент',
      'реклама в Telegram Ташкент',
      'видеопродакшн Ташкент',
      'продвижение через YouTube',
    ],
    longTail: [
      'лучшее digital агентство в Ташкенте',
      'продвижение сайта в ТОП Google и Яндекс Ташкент',
      'вывод сайта в топ 10 Яндекса Ташкент',
      'создание сайтов под ключ Ташкент цены',
      'сколько стоит создать сайт в Ташкенте',
      'заказать лендинг Ташкент недорого',
      'создание интернет магазина Ташкент',
      'SMM продвижение цены Ташкент 2026',
      'стоимость SEO продвижения Ташкент',
      'настройка Google Ads Ташкент цена',
      'настройка Яндекс Директ Ташкент',
      'таргетированная реклама Instagram Ташкент цена',
      'продвижение бизнеса через YouTube Узбекистан',
      'ведение YouTube канала для бизнеса',
      'реклама для малого бизнеса Ташкент',
      'маркетинг для производственных компаний',
      'маркетинг для строительных компаний Ташкент',
      'построение отдела продаж Ташкент',
      'внедрение CRM и воронки продаж',
      'экспорт через интернет Узбекистан',
      'выход на международный рынок маркетинг',
      'продвижение в Google Maps Ташкент',
      'съёмка рекламных роликов Ташкент',
      'разработка маркетинговой стратегии Ташкент',
    ],
    geo: ['Ташкент', 'Юнусабадский район', 'Узбекистан', 'Наманган', 'Центральная Азия'],
  },
  en: {
    primary: [
      'digital marketing agency Tashkent',
      'marketing agency Uzbekistan',
      'advertising agency Tashkent',
      'SEO services Tashkent',
      'SEO agency Uzbekistan',
      'website development Tashkent',
      'web design Tashkent',
      'social media marketing Tashkent',
      'SMM agency Uzbekistan',
      'Google Ads agency Tashkent',
      'PPC management Uzbekistan',
      'YouTube marketing Uzbekistan',
      'video production Tashkent',
    ],
    longTail: [
      'best digital marketing agency in Tashkent Uzbekistan',
      'website development company Tashkent prices',
      'ecommerce website development Uzbekistan',
      'SEO optimization services Uzbekistan cost',
      'rank website on Google first page Uzbekistan',
      'Google Ads management for business Tashkent',
      'YouTube channel management for business',
      'YouTube sales funnel strategy Uzbekistan',
      'social media marketing for small business Tashkent',
      'Instagram advertising agency Tashkent',
      'export marketing services Central Asia',
      'international market entry marketing Uzbekistan',
      'B2B marketing agency Uzbekistan',
      'sales department setup and CRM implementation',
      'content marketing agency Uzbekistan',
      'brand strategy and design Tashkent',
    ],
    geo: ['Tashkent', 'Yunusabad', 'Uzbekistan', 'Namangan', 'Central Asia'],
  },
};

// ===== METADATA GENERATOR =====
interface MetaProps {
  locale: Locale; title: string; description: string; path?: string;
  image?: string; keywords?: string[]; noIndex?: boolean; type?: 'website' | 'article';
}

export function generatePageMetadata({ locale, title, description, path = '', image, keywords, noIndex = false, type = 'website' }: MetaProps): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  const ogImage = image || siteConfig.ogImage;
  const allKeywords = [...(keywords || []), ...seoKeywords[locale].primary, ...seoKeywords[locale].geo];

  const alternates: Record<string, string> = {};
  locales.forEach(loc => { alternates[localeHrefLang[loc]] = `${siteConfig.url}/${loc}${path}`; });

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    robots: noIndex ? { index: false, follow: false } : {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: { canonical: url, languages: alternates },
    openGraph: {
      type, locale: locale === 'uz' ? 'uz_UZ' : locale === 'ru' ? 'ru_RU' : 'en_US',
      url, title: `${title} | ${siteConfig.name}`, description, siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteConfig.name}`, description, images: [ogImage] },
  };
}

// ===== JSON-LD: ORGANIZATION =====
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: siteConfig.name,
    alternateName: 'Reyes Agency',
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: "Toshkent va Namangandagi professional digital marketing agentlik. YouTube orqali sotuv, web-sayt ishlab chiqish, SMM, SEO, Google Ads va video production xizmatlari. Xalqaro bozorga chiqish uchun marketing yechimlari.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.founded,
    founder: { '@type': 'Person', name: siteConfig.founder, jobTitle: 'CEO & Founder' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.district,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: 41.3389, longitude: 69.2856 },
    sameAs: Object.values(siteConfig.socials),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00', closes: '18:00',
    }],
    areaServed: [
      { '@type': 'City', name: 'Tashkent' },
      { '@type': 'City', name: 'Namangan' },
      { '@type': 'Country', name: 'Uzbekistan' },
    ],
    knowsLanguage: ['uz', 'ru', 'en'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'YouTube Marketing & Sales', description: 'YouTube orqali organik sotuv strategiyasi' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development & Sales', description: 'Konversiyaga yo\'naltirilgan web-sayt yaratish' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SMM Marketing', description: 'Instagram, Telegram, Facebook marketing xizmatlari' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Production', description: 'Professional reklama va kontent videolar' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization', description: 'Google va Yandex uchun sayt optimizatsiyasi' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads', description: 'Kontekst reklama kampaniyalari boshqaruvi' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales Department Setup', description: 'CRM, skriptlar va sotuv jarayonini tashkil etish' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Market Entry', description: 'Xalqaro bozorga chiqish uchun digital strategiya' } },
      ],
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
  };
}

// ===== JSON-LD: LOCAL BUSINESS (Geo-SEO uchun) =====
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Kozitoron ko'chasi 9",
      addressLocality: 'Toshkent',
      addressRegion: 'Yunusobod tumani',
      postalCode: '100000',
      addressCountry: 'UZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 41.3389, longitude: 69.2856 },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Toshkent', sameAs: 'https://en.wikipedia.org/wiki/Tashkent' },
      { '@type': 'City', name: 'Namangan', sameAs: 'https://en.wikipedia.org/wiki/Namangan' },
      { '@type': 'Country', name: 'Uzbekistan' },
    ],
  };
}

// ===== JSON-LD: FAQ =====
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

// ===== JSON-LD: BREADCRUMB =====
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem', position: i + 1, name: item.name, item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// ===== JSON-LD: SERVICE =====
export function serviceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name, description,
    url: `${siteConfig.url}${url}`,
    provider: { '@type': 'MarketingAgency', name: siteConfig.name, url: siteConfig.url },
    areaServed: [
      { '@type': 'City', name: 'Tashkent' },
      { '@type': 'City', name: 'Namangan' },
      { '@type': 'Country', name: 'Uzbekistan' },
    ],
  };
}

// ===== JSON-LD: REVIEW/TESTIMONIAL =====
export function reviewSchema(reviews: { author: string; text: string; rating: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    review: reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    })),
  };
}
