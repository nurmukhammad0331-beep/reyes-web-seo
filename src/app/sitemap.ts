import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { locales } from '@/lib/i18n-config';

// Saytdagi barcha indekslanadigan yo'llar (locale'siz)
const paths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/xizmatlar/youtube-orqali-sotuv', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/xizmatlar/web-sayt-orqali-sotuv', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/xizmatlar/smm-marketing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/xizmatlar/video-production', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/xizmatlar/seo-optimizatsiya', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/xizmatlar/google-ads', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/xizmatlar/sotuv-bolimi-tashkil-etish', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/xizmatlar/xalqaro-bozorga-chiqish', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority: locale === 'uz' ? priority : priority - 0.1,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((loc) => [loc, `${siteConfig.url}/${loc}${path}`]),
          ['x-default', `${siteConfig.url}/uz${path}`],
        ]),
      },
    }))
  );
}
