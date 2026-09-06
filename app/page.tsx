import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Partnership from "@/components/sections/Partnership/Partnership";
import ProcessJourney from "@/components/sections/ProcessJourney/ProcessJourney";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import { estorePlans } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוח מותאם אישית",
  description:
    "בניית אתרים, חנויות אינטרנטיות, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
  alternates: { canonical: "https://www.shaytechsolutions.com" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ServiceTiers
        id="estore-plans-home"
        title="חנויות WooCommerce"
        subtitle="חנות אינטרנטית – בשלושה מסלולים ברורים"
        plans={estorePlans}
        expandable
        notesTitle="חשוב לדעת"
        notes={[
          "כל הדילים ניתנים לשדרוג",
          "ניתן לשלב תחזוקה, אחסון וליווי חודשי",
          "המחיר נקבע בהתאם להיקף ולצרכים (בשקיפות מלאה)",
        ]}
      />
      <Portfolio />
      <Partnership />
      <ProcessJourney />
      <CTABanner />
    </main>
  );
}
