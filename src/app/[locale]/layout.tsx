import { Space_Grotesk, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales, localeHtmlLang, type Locale } from '@/lib/i18n-config';
import { organizationSchema, localBusinessSchema } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import '@/styles/globals.css';

const fontHeading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading', display: 'swap', preload: true, weight: ['400', '500', '600', '700'] });
const fontBody = DM_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-body', display: 'swap', preload: true });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children, params: { locale },
}: { children: React.ReactNode; params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={localeHtmlLang[locale]} className={`${fontHeading.variable} ${fontBody.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Tema flash'ini oldini olish: localStorage'dagi tanlov renderdan oldin qo'llanadi */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(sessionStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}` }} />
        {/* Google tag (gtag.js) — GA4 analitika */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VXK045DXZK" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VXK045DXZK');
        ` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#112950" />
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && (
          <meta name="yandex-verification" content={process.env.NEXT_PUBLIC_YANDEX_VERIFICATION} />
        )}
        <meta name="geo.region" content="UZ-TO" />
        <meta name="geo.placename" content="Tashkent" />
        <meta name="geo.position" content="41.3389;69.2856" />
        <meta name="ICBM" content="41.3389, 69.2856" />

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        {/* Local Business Schema for Geo-SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded-xl z-[100]">
            Skip to content
          </a>
          <ScrollProgress />
          <Header locale={locale} />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer locale={locale} />
          <ScrollToTop />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
