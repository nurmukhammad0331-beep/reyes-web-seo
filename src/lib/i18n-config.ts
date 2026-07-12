export const locales = ['uz', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uz';
export const localeNames: Record<Locale, string> = { uz: "O'zbekcha", ru: 'Русский', en: 'English' };
export const localeHtmlLang: Record<Locale, string> = { uz: 'uz-Latn', ru: 'ru', en: 'en' };
export const localeHrefLang: Record<Locale, string> = { uz: 'uz', ru: 'ru', en: 'en' };
