import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import WhyMe from "@/components/sections/WhyMe/WhyMe";
import { seoPlans, campaignPlans } from "@/lib/services";

export const metadata: Metadata = {
  title: "קידום ממומן ו-SEO | גוגל, פייסבוק, אינסטגרם | שי טק סולושנס",
  description:
    "קידום אורגני (SEO) וקמפיינים ממומנים בגוגל, פייסבוק ואינסטגרם. מחירים ברורים ותוצאות מדידות.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/advertising",
  },
};

export default function AdvertisingPage() {
  return (
    <main>
      <Hero
        headline="פרסום שמביא לקוחות. לא רק קליקים."
        subtitle="SEO אורגני וקמפיינים ממומנים שנמדדים בלידים ובמכירות - לא בנתונים ריקים."
      />
      <ServiceTiers
        id="seo-plans"
        title="קידום אורגני - SEO"
        subtitle="תשלום חד פעמי. תוצאות לטווח ארוך."
        plans={seoPlans}
        notes={[
          "SEO הוא השקעה ארוכת טווח - תוצאות ראשוניות בדרך כלל אחרי 60–90 יום",
          "ניתן לשלב SEO עם קמפיין ממומן לכיסוי מקסימלי",
        ]}
      />
      <ServiceTiers
        id="campaign-plans"
        title="קמפיינים ממומנים"
        subtitle="גוגל, פייסבוק, אינסטגרם, TikTok - ניהול חודשי מלא"
        plans={campaignPlans}
        tinted={false}
        notes={[
          "המחיר הוא דמי ניהול בלבד - תקציב הפרסום בנוסף",
          "מינימום 3 חודשי עבודה לאופטימיזציה אפקטיבית",
          "כולל דוח ביצועים חודשי שקוף",
        ]}
      />
      <WhyMe />
      <CTABanner
        headline="מוכנים להתחיל לפרסם?"
        sub="שיחת התאמה של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
