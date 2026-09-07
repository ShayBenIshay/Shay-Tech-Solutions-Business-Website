import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import Services from "@/components/sections/Services/Services";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import WhatEStoreIncludes from "@/components/sections/WhatEStoreIncludes/WhatEStoreIncludes";
import WhyMe from "@/components/sections/WhyMe/WhyMe";
import { estorePlans } from "@/lib/services";

export const metadata: Metadata = {
  title: "בניית חנות אינטרנטית | WooCommerce | שי טק סולושנס",
  description:
    "בניית חנות אינטרנטית מקצועית עם WooCommerce. עיצוב ממיר, חוויית משתמש מעולה ותשתית יציבה לצמיחה. קבלו הצעת מחיר עכשיו.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/estore",
  },
};

export default function EStorePage() {
  return (
    <main>
      <Hero
        headline="בונים חנויות אינטרנטיות שמביאות תוצאות."
        subtitle="חנויות WooCommerce שנבנות עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה."
      />
      <Services
        title="חנויות אינטרנטיות שמוכרות"
        subtitle="אני בונה חנויות WooCommerce עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה."
        cards={["estore-pair", "portfolio-examples"]}
        variant="pair"
        sectionId="estore"
      />
      <WhatEStoreIncludes />
      <ServiceTiers
        id="estore-plans"
        title="שלושה מסלולים - לפי רמת הצורך שלך"
        subtitle="בנייה וניהול חנות אינטרנטית בשלושה מסלולים שונים"
        plans={estorePlans}
        expandable
        notesTitle="חשוב לדעת"
        notes={[
          "כל הדילים ניתנים לשדרוג",
          "ניתן לשלב תחזוקה, אחסון וליווי חודשי",
          "המחיר נקבע בהתאם להיקף ולצרכים (בשקיפות מלאה)",
        ]}
      />
      <WhyMe />
      <CTABanner
        headline="מוכן להתחיל למכור אונליין?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
