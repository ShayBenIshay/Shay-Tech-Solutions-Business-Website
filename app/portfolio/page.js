import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'תיק עבודות | חנויות, אתרים ופיתוחים | שי טק סולושנס',
  description: 'תיק עבודות – חנויות אינטרנטיות, אתרי וורדפרס, פיתוחים מותאמים ועוד. ראו דוגמאות אמיתיות מפרויקטים שבנויים לעבוד.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/portfolio' },
};
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import FullPortfolioGrid from "@/components/FullPortfolioGrid/FullPortfolioGrid";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";
import SpecialProjectsSection from "@/components/SpecialProjectsSection/SpecialProjectsSection";

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection
        headline="עבודות נבחרות – פרויקטים שבנויים לעבוד."
        subtitle="חנויות אינטרנטיות, אתרי WordPress ופיתוחים מותאמים אישית –
כל פרויקט נבנה לפי מטרה עסקית ברורה."
      />
      <FullPortfolioGrid />
      <SpecialProjectsSection />
      <HowIWorkSection />
      <CTABannerSection
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
