import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n-config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    '/',
    '/(uz|ru|en)/:path*',
    '/((?!api|_next|_vercel|images|icons|fonts|favicon).*)',
  ],
};
