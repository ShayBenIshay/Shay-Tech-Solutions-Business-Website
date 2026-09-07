import Hero from "@/components/sections/Hero/Hero";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import GrowthBundle from "@/components/sections/GrowthBundle/GrowthBundle";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { ServicePlan } from "@/lib/services";
import type { Metadata } from "next";

// Do NOT reuse lib/services.ts's existing plan arrays here — they carry stale,
// pre-refresh combo pricing already retired in BusinessBrain.

export const metadata: Metadata = {
  title: "מחירון ותוכניות תחזוקה, אחסון ופיתוח | Shay Tech Solutions",
  description:
    "מחירון שקוף וגלוי: מסלול אחסון ותחזוקה ב-₪500/חודש, בנק שעות פיתוח (3, 5, 10 שעות), וחבילת צמיחה כוללת. בחרו את המסלול שלכם.",
  alternates: { canonical: "https://www.shaytechsolutions.com/plans" },
};

const hostingManagementPlan: ServicePlan[] = [
  {
    title: "אחסון + ניהול ותחזוקה שוטפת",
    price: "₪500",
    priceNote: "/ חודש",
    badge: "בסיס חובה",
    highlighted: true,
    serviceValue: "maintenance",
    description: "הפתרון היסודי לשקט נפשי, אבטחה וזמינות מלאה של האתר.",
    included: [
      "אחסון בשרת מנוהל ומהיר",
      "גיבויים יומיים ואבטחה היקפית",
      "עדכוני וורדפרס, תוספים ותבניות",
      "ניטור זמינות וטיפול בתקלות שרת",
      "ללא שעות פיתוח או שינויי קוד (ניתן להוסיף ריטיינר בנפרד)",
    ],
    suitable: "מתאים לכל עסק שרוצה שהאתר יישאר מהיר, מאובטח ותקין – בלי לחשוב על זה.",
    focus: "🎯 שקט נפשי ויציבות מלאה",
  },
];

const retainerPlans: ServicePlan[] = [
  {
    title: "ריטיינר 3 שעות",
    price: "₪600",
    priceNote: "/ חודש",
    serviceValue: "retainer",
    description: "3 שעות פיתוח חודשיות לכל שינוי קטן, עדכון תוכן או תחזוקה שוטפת.",
    included: [
      "3 שעות פיתוח, עיצוב ותוכן בחודש",
      "מתאים לשיפורים קטנים בשוטף",
      "שעות נוספות ב-₪300/שעה",
    ],
    suitable: "מתאים לעסקים עם צורך קליל ומזדמן בעדכונים ותחזוקה.",
    focus: "🎯 גמישות בסיסית להתחלה",
  },
  {
    title: "ריטיינר 5 שעות",
    price: "₪1,100",
    priceNote: "/ חודש",
    badge: "המסלול המבוקש",
    highlighted: true,
    serviceValue: "retainer",
    description: "5 שעות פיתוח חודשיות לעסקים שזקוקים לשיפורים שוטפים ותכופים יותר.",
    included: ["5 שעות פיתוח, עיצוב ותוכן בחודש", "שעות נוספות ב-₪300/שעה"],
    suitable: "מתאים לעסקים צומחים הזקוקים לשיפורים מתמידים באתר.",
    focus: "🎯 הבחירה הפופולרית לעסקים צומחים",
  },
  {
    title: "ריטיינר 10 שעות",
    price: "₪2,200",
    priceNote: "/ חודש",
    serviceValue: "retainer",
    description: "10 שעות פיתוח חודשיות לעסקים עם פעילות דיגיטלית אינטנסיבית.",
    included: [
      "10 שעות פיתוח, עיצוב ותוכן בחודש",
      "עבודה אקטיבית על פיצ'רים ושיפורים",
      "שעות נוספות ב-₪300/שעה",
    ],
    suitable: "מתאים לאתרי מסחר או לעסקים עם פעילות דיגיטלית אינטנסיבית.",
    focus: "🎯 מחויבות מלאה לצמיחה דיגיטלית",
  },
];

const secondaryPlans: ServicePlan[] = [
  {
    title: "אחסון שרת בלבד",
    price: "₪350",
    priceNote: "/ חודש",
    serviceValue: "maintenance",
    description:
      "אחסון שרת בלבד. ללא עדכוני תוספים, ללא עבודות תחזוקה, ללא עדכוני תוכן וללא שעות פיתוח.",
    included: ["אחסון שרת ודומיין בלבד", "ללא עדכוני תוכן, תוספים או תחזוקה"],
    suitable: "מתאים לעסקים שכבר מתחזקים את התוכן בעצמם או עם ספק אחר.",
    focus: "🎯 תשתית בסיסית בלבד",
  },
  {
    title: "פיתוח וייעוץ לפי שעה (Ad-hoc)",
    price: "₪300",
    priceNote: "/ שעה",
    serviceValue: "other",
    description:
      "עבודה נקודתית ללא התחייבות חודשית. מתאים לתיקון תקלה ממוקדת, ייעוץ ארכיטקטורה או שינוי חד-פעמי.",
    included: ["ללא התחייבות חודשית", "תשלום לפי שעות עבודה בפועל"],
    suitable: "מתאים לצורך חד-פעמי או מזדמן, בלי לפתוח מסלול קבוע.",
    focus: "🎯 גמישות מלאה בלי התחייבות",
  },
];

export default function PlansPage() {
  return (
    <main>
      <Hero
        headline="תוכניות תחזוקה, אחסון ובנק שעות פיתוח"
        subtitle="ללא חוזים דרקוניים, ללא סעיפים נסתרים. בוחרים את תשתית התחזוקה ומוסיפים שעות פיתוח לפי צורך."
        btnOutline="לבנק שעות הפיתוח"
        btnOutlineHref="#plans-retainers"
        btnPrimaryHref={null}
      />

      <ServiceTiers
        id="plans-hosting"
        title="תשתית אחסון ותחזוקה שוטפת"
        plans={hostingManagementPlan}
      />

      <ServiceTiers
        id="plans-retainers"
        title="בנק שעות פיתוח חודשי (Retainer)"
        subtitle="מתווסף למסלול התחזוקה (או נרכש בנפרד ללקוחות המאוחסנים בשרת חיצוני)"
        tinted={false}
        plans={retainerPlans}
      />

      <GrowthBundle id="plans-growth-bundle" />

      <ServiceTiers
        id="plans-secondary"
        title="צריכים פתרון נקודתי?"
        plans={secondaryPlans}
      />

      <CTABanner />
    </main>
  );
}
