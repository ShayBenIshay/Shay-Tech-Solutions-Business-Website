import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'קידום ממומן | קידום בגוגל, פייסבוק, אינסטגרם וטיקטוק | שי טק סולושנס',
  description: 'קמפיינים לקידום ממומן בגוגל, פייסבוק, אינסטגרם וטיקטוק. קידום אתרים ממומן עם מדידה, אופטימיזציה מתמשכת ותוצאות מוכחות.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/services/advertising' },
};
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function AdvertisingPage() {
  return (
    <main>
      <HeroSection
        headline="פרסום דיגיטלי שמביא תוצאות"
        subtitle="קמפיינים ממוקדים בגוגל ובמדיה חברתית שמייצרים לידים ומכירות."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן להתחיל לפרסם?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
