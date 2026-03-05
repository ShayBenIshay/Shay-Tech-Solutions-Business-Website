import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'צור קשר | שי טק סולושנס',
  description: 'צרו קשר לתיאום שיחת היכרות. בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/contact' },
};
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TalkToMeSection from "@/components/TalkToMeSection/TalkToMeSection";
import WhatsAfterContactSection from "@/components/WhatsAfterContactSection/WhatsAfterContactSection";

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        headline="מתחילים כאן."
        subtitle="שיחה קצרה יכולה להיות הצעד הראשון לאתר או מערכת שעובדים בשביל העסק שלך."
      />
      <TalkToMeSection />
      <ServicesSection />
      <WhatsAfterContactSection />
      <CTABannerSection
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
