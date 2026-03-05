import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'בניית אתר וורדפרס מקצועי | בונה אתרים | שי טק סולושנס',
  description: 'בניית אתרי וורדפרס לעסקים. בונה אתרים מקצועי עם ניסיון בעיצוב, פיתוח ואופטימיזציה. מתאים לעסקים קטנים ובינוניים.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/services/wordpress' },
};
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function WordpressPage() {
  return (
    <main>
      <HeroSection
        headline="בניית אתרי וורדפרס מקצועיים"
        subtitle="אתרי וורדפרס מהירים, מאובטחים ומותאמים לצרכי העסק שלך."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן לבנות אתר וורדפרס?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
