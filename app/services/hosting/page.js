import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'אחסון אתרים מהיר ואמין | שי טק סולושנס',
  description: 'שירותי אחסון אתרים מהירים, אמינים ומנוהלים לעסקים. ניהול שוטף, עדכונים ותחזוקה שוטפת כדי שהאתר שלך תמיד יעבוד.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/services/hosting' },
};
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function HostingPage() {
  return (
    <main>
      <HeroSection
        headline="אחסון אתרים מהיר ואמין"
        subtitle="תשתית אחסון מקצועית עם ביצועים גבוהים, אבטחה ותמיכה שוטפת."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן לעבור לאחסון מקצועי?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
