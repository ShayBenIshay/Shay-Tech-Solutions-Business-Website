import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import HowCanIHelpSection from '@/components/HowCanIHelpSection/HowCanIHelpSection';
import EStoresSection from '@/components/EStoresSection/EStoresSection';
import OtherServicesSection from '@/components/OtherServicesSection/OtherServicesSection';
import WhyMeSection from '@/components/WhyMeSection/WhyMeSection';
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection';
import HowIWorkSection from '@/components/HowIWorkSection/HowIWorkSection';
import CTABannerSection from '@/components/CTABannerSection/CTABannerSection';

export const metadata = {
  title: 'שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות וקידום ממומן',
  description: 'בונה אתרים ומפתח תוכנה. בניית אתרים עסקיים, חנויות אינטרנטיות WooCommerce, קידום ממומן בגוגל ופייסבוק, ופיתוח תוכנה מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com' },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowCanIHelpSection />
      <EStoresSection />
      <OtherServicesSection />
      <WhyMeSection />
      <PortfolioSection />
      <HowIWorkSection />
      <CTABannerSection />
    </main>
  );
}
