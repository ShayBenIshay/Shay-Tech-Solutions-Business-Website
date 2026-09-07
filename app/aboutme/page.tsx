import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import NiceToMeet from "@/components/sections/NiceToMeet/NiceToMeet";
import ProcessJourney from "@/components/sections/ProcessJourney/ProcessJourney";
import WhyMe from "@/components/sections/WhyMe/WhyMe";
import Services from "@/components/sections/Services/Services";
import WhoIsItFor from "@/components/sections/WhoIsItFor/WhoIsItFor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'קצת עליי | שי טק סולושנס',
  description: 'בונה אתרים ומפתח תוכנה עצמאי. עובד עם עסקים קטנים ובינוניים על בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/aboutme' },
};

export default function AboutMePage() {
  return (
    <main>
      <Hero
        headline="קצת עליי."
        subtitle="אני עובד עם עסקים שרוצים יותר מאתר – פתרונות דיגיטליים שמביאים תוצאות לאורך זמן."
      />
      <NiceToMeet />
      <WhyMe />
      <ProcessJourney showCTA title="איך אני עובד" noBackground={true} />
      <WhoIsItFor />
      <Services />
      <CTABanner
        headline="בואו נבדוק אם מתאים לנו לעבוד ביחד"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר להתקדם."
      />
    </main>
  );
}
