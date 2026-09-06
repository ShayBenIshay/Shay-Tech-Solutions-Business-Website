import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import FullPortfolioGrid from "@/components/sections/FullPortfolioGrid/FullPortfolioGrid";
import ProcessJourney from "@/components/sections/ProcessJourney/ProcessJourney";
import SpecialProjects from "@/components/sections/SpecialProjects/SpecialProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'תיק עבודות | חנויות, אתרים ופיתוחים | שי טק סולושנס',
  description: 'תיק עבודות – חנויות אינטרנטיות, אתרי וורדפרס, פיתוחים מותאמים ועוד. ראו דוגמאות אמיתיות מפרויקטים שבנויים לעבוד.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main>
      <Hero
        headline="עבודות נבחרות – פרויקטים שבנויים לעבוד."
        subtitle="חנויות אינטרנטיות, אתרי WordPress ופיתוחים מותאמים אישית –
כל פרויקט נבנה לפי מטרה עסקית ברורה."
      />
      <FullPortfolioGrid />
      <SpecialProjects />
      <ProcessJourney />
      <CTABanner
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
