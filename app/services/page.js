import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MainServicesSection from "@/components/MainServicesSection/MainServicesSection";
import CoreServicesSection from "@/components/CoreServicesSection/CoreServicesSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import AdvancedServicesSection from "@/components/AdvancedServicesSection/AdvancedServicesSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";

export const metadata = {
  title: 'שירותים | בניית אתרים, חנויות וקידום ממומן | שי טק סולושנס',
  description: 'חנויות אינטרנטיות, בניית אתרים עסקיים, קידום ממומן בגוגל ופייסבוק, פיתוח תוכנה ופתרונות דיגיטליים מקצה לקצה.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/services' },
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        headline="כל מה שהעסק שלך צריך כדי לגדול אונליין."
        subtitle="הקמת חנויות, שיפוץ אתרי WordPress, קידום ממומן, אחסון וניהול שוטף ופיתוחים מותאמים אישית - הכל במקום אחד."
        imgScreen="/assets/storeLottie.png"
        btnOutline="רוצה לשמוע עוד"
      />
      <MainServicesSection />
      <CoreServicesSection />
      <AdvancedServicesSection />
      <WhyMeSection />
      <ServicesSection />
      <CTABannerSection
        headline="לא בטוח מה מתאים?"
        sub="בשיחה קצרה נבין את הצורך ונכוון לפתרון הנכון."
      />
    </main>
  );
}
