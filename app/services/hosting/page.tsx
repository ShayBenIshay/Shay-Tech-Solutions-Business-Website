import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import WhyMe from "@/components/sections/WhyMe/WhyMe";
import { hostingPlans } from "@/lib/services";

export const metadata: Metadata = {
  title: "אחסון אתרים מהיר ואמין | שי טק סולושנס",
  description:
    "שירותי אחסון אתרים מנוהלים לעסקים. כולל SSL, גיבויים יומיים, ניהול תוכן ו-5 שעות פיתוח חודשיות לפי בחירה. מחירים מ-₪250/חודש.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/hosting",
  },
};

export default function HostingPage() {
  return (
    <main>
      <Hero
        headline="האתר שלכם רץ. תמיד."
        subtitle="אחסון מנוהל עם SSL, גיבויים יומיים ותמיכה טכנית - כדי שלא תצטרכו לחשוב על זה."
      />
      <ServiceTiers
        title="חבילות אחסון"
        subtitle="בחרו את הרמה שמתאימה לצרכי העסק שלכם"
        plans={hostingPlans}
        notes={[
          "חוזה חודשי - ללא התחייבות שנתית",
          "כל החבילות כוללות SSL חינם וגיבויים יומיים",
          "שעות ריטיינר אינן מצטברות",
        ]}
      />
      <WhyMe />
      <CTABanner
        headline="מוכנים לאחסון שעובד בשבילכם?"
        sub="שיחת התאמה של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
