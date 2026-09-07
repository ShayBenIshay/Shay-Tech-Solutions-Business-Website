import Hero from "@/components/sections/Hero/Hero";
import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";
import LifecycleTimeline, {
  type LifecycleStep,
} from "@/components/sections/LifecycleTimeline/LifecycleTimeline";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "פיתוח פרויקטים, מערכות ואפליקציות | Shay Tech Solutions",
  description:
    "מאפיון ועד להשקה: פיתוח מערכות Web, אפליקציות, תוספים ואינטגרציות מורכבות (React, Next.js, Node.js, Python) בתוספת ניהול סביבות ריצה.",
  alternates: { canonical: "https://www.shaytechsolutions.com/project" },
};

const capabilityCards: GridCard[] = [
  {
    title: "אפליקציות ומערכות Web מורכבות",
    description:
      "פיתוח Full-Stack מלא בטכנולוגיות המתקדמות בשוק (React, Next.js, Node.js, Python) להתאמה מושלמת לצורכי העסק.",
  },
  {
    title: "תוספים ופיתוח Custom לוורדפרס / WooCommerce",
    description:
      "הרחבת יכולות האתר הקיים שלכם, כתיבת תוספים ייעודיים ללא תלות בתוספים כבדים מהמדף.",
  },
  {
    title: "אינטגרציות ו-APIs",
    description:
      "חיבור מושלם בין מערכות CRM, מערכות סליקה, ניהול מלאי, או מערכות צד-שלישי שונות לעסק.",
  },
  {
    title: "ניהול סביבות ריצה ותשתיות",
    description:
      "דואגים לשרתים, סביבות Deploy, קונפיגורציות ענן ותחזוקת התשתית כחלק מהצעת הפרויקט – כדי שהמערכת שלכם תרוץ ביציבות מקסימלית.",
  },
];

const lifecycleSteps: LifecycleStep[] = [
  {
    number: "1",
    title: "אפיון וארכיטקטורה (Characterization)",
    priceNote: "מחיר קבוע: ₪600 (פרויקט ממוקד) / ₪2,000 (מערכת מורכבת)",
    body: [
      "לפני שכותבים שורת קוד אחת, בונים את יסודות הפרויקט: הגדרת דרישות המערכת, תרשימי זרימה, ארכיטקטורת בסיס הנתונים (DB), חוויית המשתמש (UX) והגדרת ה-APIs.",
      "התוצר שמתקבל: מסמך אפיון ארכיטקטוני ומפרט טכני מלא – נכס שנשאר אצלכם.",
    ],
  },
  {
    number: "2",
    title: "פיתוח וקידוד (Implementation)",
    priceNote: "מתומחר לפי מפרט האפיון (Quote-Based)",
    body: [
      "כתיבת הקוד, הקמת בסיסי הנתונים, חיבור ה-APIs ובניית הממשקים. אתם מעודכנים באופן שוטף לאורך כל שלבי הפיתוח.",
    ],
  },
  {
    number: "3",
    title: "מסירה, QA והקמת סביבת ריצה (Delivery & Deployment)",
    priceNote: "כלול בהצעת הפרויקט",
    body: [
      "בדיקות איכות מקיפות (QA), בדיקות עומסים ואבטחה, והעלאת המערכת לאוויר. במידת הצורך, אנחנו מקימים ומגדירים את סביבת הריצה והשרתים הנדרשים.",
    ],
  },
  {
    number: "4",
    title: "תחזוקה, שרתים ועבודה מתמשכת (Continuous Work)",
    priceNote: "מעבר למסלול ריטיינר / תחזוקה",
    body: [
      "מערכת חיה דורשת בית. לאחר ההשקה, המערכת שלכם עוברת באופן טבעי למסלול תחזוקת שרתים ובנק שעות (Retainer) – כדי להבטיח עדכוני אבטחה, ניטור סביבת הריצה ופיתוח תכונות חדשות לפי צורך.",
    ],
  },
];

export default function ProjectPage() {
  return (
    <main>
      <Hero
        headline="הופכים רעיון טכנולוגי למערכת עובדת."
        subtitle="פיתוח אפליקציות, מערכות Web מורכבות, תוספים ואינטגרציות Custom – מבוססי React, Next.js, Node.js, Python ועוד."
        btnOutline="איך זה עובד"
        btnOutlineHref="#project-lifecycle"
        btnPrimaryHref={null}
      />

      <CardGridSection
        id="project-scope"
        title="פתרונות פיתוח לכל סדר גודל טכנולוגי"
        cards={capabilityCards}
      />

      <LifecycleTimeline
        id="project-lifecycle"
        title="4 שלבים מוגדרים – מאפיון הארכיטקטורה ועד להשקה"
        steps={lifecycleSteps}
      />

      <CTABanner
        headline="מתחילים באפיון הפרויקט שלכם (₪600–₪2,000)"
        sub="שיחת אפיון ממוקדת שנותנת לכם תמונה מלאה על הארכיטקטורה, ההיקף והמחיר – עוד לפני שמתחילים לבנות."
        presetService="project"
      />
    </main>
  );
}
