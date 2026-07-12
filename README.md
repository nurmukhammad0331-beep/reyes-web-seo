# 🚀 Reyes Digital Marketing Agency — Web-sayt

Next.js 14, Tailwind CSS, Framer Motion va next-intl bilan qurilgan professional web-sayt.

## SEO TAHLIL: Toshkent va Namangan bozorlari

### Bozor holati (2025-2026)
- O'zbekistonda digital marketing bozori tez o'smoqda — xizmatlar bozori hajmi 136 trln so'mga yetgan
- Toshkentda SMM xizmati narxi: 5-12 mln so'mdan boshlanadi
- SEO xizmati: 3.5-5.5 mln so'mdan boshlanadi
- Raqobatchilar: WeDigital, Webnow, OpenEngine, SMMlab, TheLead Media, Wunder Digital
- Namanganda digital marketing agentliklar deyarli yo'q — bu katta imkoniyat

### Asosiy SEO kalit so'zlar (Primary Keywords)

**O'zbek tilida:**
- digital marketing agentlik Toshkent
- SMM xizmati Toshkent
- SEO optimizatsiya O'zbekiston
- web sayt yaratish Toshkent
- Google Ads reklama Toshkent
- YouTube orqali sotuv
- video production Toshkent

**Rus tilida:**
- digital маркетинг агентство Ташкент
- SMM продвижение Ташкент
- SEO продвижение сайтов Узбекистан
- создание сайтов Ташкент
- контекстная реклама Google Ташкент

**Ingliz tilida:**
- digital marketing agency Tashkent
- SEO services Uzbekistan
- website development Tashkent

### Long-tail kalit so'zlar (yuqori konversiya)

**O'zbek:**
- Toshkentda eng yaxshi digital marketing agentlik
- YouTube orqali sotuv qilish xizmati
- web sayt orqali eksport qilish
- SMM xizmati narxi Toshkent
- Namanganda marketing xizmati
- sotuv bo'limini tashkil etish xizmati
- xalqaro bozorga chiqish marketing
- Instagram reklama narxi Toshkent
- sayt yaratish narxi Toshkent 2024
- onlayn sotuv strategiyasi O'zbekiston

**Rus:**
- лучшее маркетинговое агентство Ташкент
- продвижение бизнеса через YouTube Узбекистан
- создание сайтов под ключ Ташкент цены
- маркетинг Наманган
- digital маркетинг Наманган
- экспорт через интернет Узбекистан

### Geo-SEO strategiyasi
- Har bir sahifada geo meta taglar (geo.region, geo.position, ICBM)
- JSON-LD LocalBusiness schema
- areaServed: Tashkent, Namangan, Uzbekistan
- Google My Business optimizatsiyasi kerak (alohida qilish)
- Yandex.Webmaster ro'yxatdan o'tkazish

### SEO texnik xususiyatlari
- ✅ Server-Side Rendering (SSR) — Google bot to'liq ko'radi
- ✅ Metadata API — har sahifa uchun title, description, OG tags
- ✅ JSON-LD Structured Data (7 xil schema):
  - Organization (MarketingAgency)
  - LocalBusiness (Geo-SEO)
  - FAQPage (rich snippets)
  - Review/AggregateRating
  - Service (har xizmat uchun)
  - BreadcrumbList
  - Article (blog uchun)
- ✅ Hreflang tags (3 til: uz, ru, en)
- ✅ Canonical URLs
- ✅ Sitemap.xml (auto-generated, 30+ sahifa)
- ✅ Robots.txt
- ✅ Image optimization (WebP/AVIF)
- ✅ Core Web Vitals optimization
- ✅ Geo meta tags

## Loyiha strukturasi

```
src/
├── app/[locale]/          # UZ, RU, EN sahifalar
│   ├── layout.tsx         # Root layout (shriftlar, SEO schema, meta)
│   ├── page.tsx           # Bosh sahifa (9 section + FAQ)
│   ├── xizmatlar/         # Xizmat sahifalari (8 ta)
│   ├── portfolio/         # Portfolio (6 ta case study)
│   ├── haqimizda/         # About page
│   ├── jamoa/             # Team page
│   ├── blog/              # Blog (SEO kontent)
│   └── boglanish/         # Contact page
├── components/
│   ├── ui/                # Button, Card, Badge, Input
│   ├── sections/          # Hero, Services, Portfolio, About, etc.
│   └── layout/            # Header, Footer, Navigation
├── lib/
│   ├── i18n-config.ts     # 3 til konfiguratsiyasi
│   ├── seo.ts             # SEO kalit so'zlar, metadata, JSON-LD schemalar
│   └── utils.ts           # Utility funksiyalar
├── messages/
│   ├── uz.json            # O'zbek (150+ SEO kalit so'zlar)
│   ├── ru.json            # Rus (100+ SEO kalit so'zlar)
│   └── en.json            # Ingliz (80+ SEO kalit so'zlar)
└── styles/
    └── globals.css         # Reyes brend ranglari
```

## Ishga tushirish

```bash
npm install
npm run dev     # Development
npm run build   # Production build
npm start       # Production server
```

## Texnologiyalar

| Texnologiya | Vazifasi |
|---|---|
| Next.js 14 (App Router) | SSR/SSG framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling + Dark mode |
| Framer Motion | 3D scroll animatsiyalar |
| next-intl | UZ/RU/EN til tizimi |
| next-sitemap | Avtomatik sitemap + robots.txt |
| Lucide React | SVG ikonlar |
| Zod + React Hook Form | Forma validatsiya |

## Brend ranglari

| Rang | Hex | Nomi |
|---|---|---|
| Navy | #112950 | Space Cadet (asosiy) |
| Blue | #009fe3 | Vivid Cerulean (aksent) |
| Black | #000000 | Black |
| White | #ffffff | White |

## Keyingi qadamlar

1. **Komponentlar qo'shish** — Header, Footer, Hero, Services, Portfolio, About, Team, FAQ, Contact
2. **Blog tizimi** — MDX yoki Sanity CMS orqali SEO maqolalar
3. **Google Search Console** — saytni ro'yxatdan o'tkazish
4. **Yandex Webmaster** — Yandex uchun ro'yxatdan o'tkazish
5. **Google My Business** — Toshkent va Namangan uchun
6. **Analytics** — GA4 + Yandex Metrica ulash
7. **Forma backend** — Email/Telegram bot yuborish
8. **Rasmlar** — Real logo, portfolio va jamoa rasmlari
