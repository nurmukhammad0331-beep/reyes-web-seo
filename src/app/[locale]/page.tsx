import { unstable_setRequestLocale } from 'next-intl/server';
import { generatePageMetadata, seoKeywords, faqSchema, reviewSchema } from '@/lib/seo';
import type { Locale } from '@/lib/i18n-config';

import HeroSection from '@/components/sections/HeroSection';
import ResultsTicker from '@/components/sections/ResultsTicker';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PartnersSection from '@/components/sections/PartnersSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
// ARXIV: Jamoa bo'limi vaqtincha o'chirilgan — kerak bo'lganda importni va pastdagi qatorni oching
// import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return generatePageMetadata({
    locale,
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: [...seoKeywords[locale].primary, ...seoKeywords[locale].longTail],
  });
}

export default async function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const messages = (await import(`../../messages/${locale}.json`)).default;

  const faqJsonLd = faqSchema(messages.faq?.items || []);
  const reviewJsonLd = reviewSchema(
    (messages.testimonials?.items || []).map((t: any) => ({ author: t.name, text: t.text, rating: t.rating || 5 }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />

      <HeroSection />
      <ResultsTicker />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <PartnersSection />
      <WhyUsSection />
      <AboutSection />
      <AchievementsSection />
      {/* <TeamSection /> — arxivda */}
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
