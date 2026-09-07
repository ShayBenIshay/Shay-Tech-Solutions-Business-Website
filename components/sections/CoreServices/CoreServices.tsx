import Link from "next/link";
import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";

function Footer({ ctaLink, href }: { ctaLink: string; href: string }) {
  return (
    <>
      <OpenContactModalButton className="btn-primary">
        לתיאום שיחה
      </OpenContactModalButton>
      <Link href={href} className="btn-secondary">
        {ctaLink}
      </Link>
    </>
  );
}

const cards: GridCard[] = [
  {
    title: "🛒 חנויות אינטרנטיות",
    description:
      "חנויות WooCommerce ממוקדות מכירה עם חשיבה שיווקית ותשתית לצמיחה.",
    itemsHeading: "מה האפשרויות?",
    items: ["התחלה חכמה", "חנות מתקדמת", "חנות פרימיום"],
    footer: <Footer ctaLink="לכל החבילות" href="/services/estore" />,
  },
  {
    title: "🌐 בניית אתרים",
    description:
      "דפי תדמית, וורדפרס, דפי נחיתה ושיפוץ אתרים. React, Vite או WordPress.",
    itemsHeading: "מה האפשרויות?",
    items: ["דפי תדמית", "דפי נחיתה", "שיפוץ אתר קיים"],
    footer: <Footer ctaLink="לכל האפשרויות" href="/services/website" />,
  },
  {
    title: "🧩 אחסון וניהול",
    description: "אחסון, תחזוקה שוטפת וניהול מקצועי - שקט נפשי לאתר שלך.",
    itemsHeading: "מה האפשרויות?",
    items: ["אחסון בסיסי", "אחסון + ניהול", "אחסון + שעות פיתוח"],
    footer: <Footer ctaLink="לחבילות אחסון" href="/services/hosting" />,
  },
  {
    title: "🧠 פיתוח מותאם אישית",
    description: "כשאין פתרון מדף - מתכננים ומפתחים בדיוק מה שצריך.",
    itemsHeading: "מה האפשרויות?",
    items: ["מערכות Web ו-SaaS", "תוספי WordPress", "אוטומציות ו-APIs"],
    footer: (
      <Footer ctaLink="לפרויקטים" href="/services/custom-development" />
    ),
  },
];

export default function CoreServices() {
  return (
    <CardGridSection
      id="core-services"
      title="שירותים"
      cards={cards}
      variant="dark"
    />
  );
}
