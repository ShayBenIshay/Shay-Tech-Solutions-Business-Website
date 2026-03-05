import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'פיתוח תוכנה מותאם אישית | מפתח תוכנה | שי טק סולושנס',
  description: 'פיתוח תוכנה ופיתוחים בהתאמה אישית לעסקים. מפתח תוכנה עם ניסיון בבניית מערכות, בוטים, אפליקציות ואוטומציות.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/services/custom-development' },
};
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function CustomDevelopmentPage() {
  return (
    <main>
      <HeroSection
        headline="פיתוח אישי ומותאם לצרכים שלך"
        subtitle="פתרונות טכנולוגיים מותאמים אישית – מאפיון ועיצוב ועד פיתוח ועלייה לאוויר."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="יש לך רעיון? בואו נבנה אותו ביחד"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
