import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import Services from "@/components/sections/Services/Services";
import TalkToMe from "@/components/sections/TalkToMe/TalkToMe";
import ProcessJourney, {
  type JourneyStep,
} from "@/components/sections/ProcessJourney/ProcessJourney";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'צור קשר | שי טק סולושנס',
  description: 'צרו קשר לתיאום שיחת היכרות. בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/contact' },
};

const afterContactSteps: JourneyStep[] = [
  { icon: "/assets/introductionIcon.png", label: "נבין את הצורך שלכם" },
  { icon: "/assets/offerIcon.png", label: "נכין הצעת עבודה מסודרת" },
  { icon: "/assets/development-icon.png", label: "פיתוח הפיתרון המדויק לכם" },
  { icon: "/assets/growth-icon.png", label: "ליווי להמשך צמיחה" },
];

export default function ContactPage() {
  return (
    <main>
      <Hero
        headline="מתחילים כאן."
        subtitle="שיחה קצרה יכולה להיות הצעד הראשון לאתר או מערכת שעובדים בשביל העסק שלך."
      />
      <TalkToMe />
      <Services />
      <ProcessJourney
        title="מה קורה אחרי שמשאירים פרטים?"
        steps={afterContactSteps}
        noBackground
      />
      <CTABanner
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
