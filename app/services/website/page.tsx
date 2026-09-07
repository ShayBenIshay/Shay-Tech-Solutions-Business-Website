import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import {
  websiteRenovationPlans,
  websiteLandingPlans,
  websiteBrandingPlans,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "בניית אתרים מקצועית | דפי תדמית, וורדפרס ודפי נחיתה | שי טק סולושנס",
  description:
    "בניית אתרי תדמית, וורדפרס, דפי נחיתה ואתרי React. שיפוץ אתרים קיימים ובנייה מחדש. מחירים שקופים, תוצאות שניתן למדוד.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/website",
  },
};

export default function WebsitePage() {
  return (
    <main>
      <Hero
        headline="אתר שעובד בשבילך - לא רק נראה יפה."
        subtitle="דפי תדמית, וורדפרס, דפי נחיתה ופיתוח React. שיפוצים ובנייה מחדש."
      />

      <ServiceTiers
        title="שיפוץ אתרים קיימים"
        subtitle="יש לכם אתר - בואו נגרום לו לעבוד."
        plans={websiteRenovationPlans}
        notes={[
          "מתאים לאתרי WordPress ואתרים קיימים בכל פלטפורמה",
          "כוללים תמיכה בהשקה",
          "לא בטוחים מה מתאים? נגלה יחד בשיחה חינם",
        ]}
      />

      <ServiceTiers
        title="דפי נחיתה"
        subtitle="דף אחד. מטרה אחת. תוצאות."
        plans={websiteLandingPlans}
        tinted={false}
        notes={["המחיר הסופי תלוי בהיקף הפרויקט", "ניתן לשלב עם קמפיין פרסומי"]}
      />

      <ServiceTiers
        title="דפי תדמית"
        subtitle="נוכחות דיגיטלית שמייצגת את העסק שלך."
        plans={websiteBrandingPlans}
        notes={[
          "ניתן לבנות בוורדפרס, React/Vite או כל פלטפורמה מתאימה",
          "כל המסלולים כוללים הדרכה לניהול עצמאי",
          "שאלות? שיחת התאמה חינם ללא התחייבות",
        ]}
      />

      <CTABanner
        headline="מוכנים לאתר שעושה עבודה?"
        sub="שיחת התאמה של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
