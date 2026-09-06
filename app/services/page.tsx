import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import Hero from "@/components/sections/Hero/Hero";
import CoreServices from "@/components/sections/CoreServices/CoreServices";
import Partnership from "@/components/sections/Partnership/Partnership";

export const metadata: Metadata = {
  title: "שירותים | בניית אתרים, חנויות ופיתוח מותאם | שי טק סולושנס",
  description:
    "חנויות אינטרנטיות, בניית אתרי תדמית ונחיתה, אחסון וניהול ופיתוח תוכנה מותאם אישית - הכל במקום אחד.",
  alternates: { canonical: "https://www.shaytechsolutions.com/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <Hero
        headline="כל מה שהעסק שלך צריך כדי לגדול אונליין."
        subtitle="חנויות, אתרים, אחסון ופיתוחים מותאמים - הכל במקום אחד."
        imgScreen="/assets/storeLottie.png"
        btnOutline="רוצה לשמוע עוד"
      />
      <CoreServices />
      <Partnership variant="lighthouse" />
      <CTABanner
        headline="לא בטוח מה מתאים?"
        sub="בשיחה קצרה נבין את הצורך ונכוון לפתרון הנכון."
      />
    </main>
  );
}
