import { unstable_setRequestLocale } from 'next-intl/server';
import { generatePageMetadata, breadcrumbSchema } from '@/lib/seo';
import type { Locale } from '@/lib/i18n-config';
import PortfolioClient from './PortfolioClient';

const meta: Record<Locale, { title: string; description: string; kw: string[] }> = {
  uz: {
    title: 'Portfolio — YouTube, SMM va Web-sayt natijalari',
    description:
      "Reyes agentlik portfoliosi: YouTube orqali 500M+ so'm sotuv, 28 kunda 2.5 mln ko'rish, web-sayt orqali $1.5M eksport. Real loyihalar, real raqamlar.",
    kw: ['marketing portfolio', 'YouTube natijalar', 'SMM keys', 'web-sayt loyihalar'],
  },
  ru: {
    title: 'Портфолио — результаты YouTube, SMM и веб-сайтов',
    description:
      'Портфолио агентства Reyes: 500M+ сум продаж через YouTube, 2.5 млн просмотров за 28 дней, $1.5M экспорта через сайт. Реальные проекты и цифры.',
    kw: ['портфолио маркетинг', 'кейсы SMM', 'результаты YouTube'],
  },
  en: {
    title: 'Portfolio — YouTube, SMM & Website Results',
    description:
      'Reyes agency portfolio: 500M+ UZS in YouTube-driven sales, 2.5M views in 28 days, $1.5M export via website. Real projects, real numbers.',
    kw: ['marketing portfolio', 'YouTube case studies', 'SMM results'],
  },
};

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const m = meta[locale];
  return generatePageMetadata({
    locale,
    title: m.title,
    description: m.description,
    path: '/portfolio',
    keywords: m.kw,
  });
}

export default function PortfolioPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: locale === 'ru' ? 'Главная' : locale === 'en' ? 'Home' : 'Bosh sahifa', url: `/${locale}` },
    { name: locale === 'ru' ? 'Портфолио' : 'Portfolio', url: `/${locale}/portfolio` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PortfolioClient />
    </>
  );
}
