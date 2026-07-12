/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reyesagency.uz',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Har bir til uchun hreflang
  alternateRefs: [
    { href: 'https://reyesagency.uz/uz', hreflang: 'uz' },
    { href: 'https://reyesagency.uz/ru', hreflang: 'ru' },
    { href: 'https://reyesagency.uz/en', hreflang: 'en' },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/admin/'] },
    ],
    additionalSitemaps: ['https://reyesagency.uz/sitemap.xml'],
  },

  // Asosiy sahifalar
  additionalPaths: async (config) => {
    const locales = ['uz', 'ru', 'en'];
    const pages = ['', '/xizmatlar', '/portfolio', '/haqimizda', '/jamoa', '/boglanish', '/blog'];
    const services = [
      '/xizmatlar/youtube-orqali-sotuv',
      '/xizmatlar/web-sayt-orqali-sotuv',
      '/xizmatlar/smm-marketing',
      '/xizmatlar/video-production',
      '/xizmatlar/seo-optimizatsiya',
      '/xizmatlar/google-ads',
      '/xizmatlar/sotuv-bolimi-tashkil-etish',
      '/xizmatlar/xalqaro-bozorga-chiqish',
    ];

    const paths = [];

    for (const locale of locales) {
      // Bosh sahifa — eng yuqori priority
      paths.push({ loc: `/${locale}`, changefreq: 'daily', priority: 1.0 });

      // Asosiy sahifalar
      for (const page of pages) {
        if (page) paths.push({ loc: `/${locale}${page}`, changefreq: 'weekly', priority: 0.8 });
      }

      // Xizmat sahifalari (long-tail SEO uchun muhim)
      for (const service of services) {
        paths.push({ loc: `/${locale}${service}`, changefreq: 'monthly', priority: 0.7 });
      }
    }

    return paths;
  },

  exclude: ['/api/*', '/admin/*', '/404', '/500'],
};
