import Hero from "@/components/sections/Hero/Hero";
import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";
import LifecycleTimeline, {
  type LifecycleStep,
} from "@/components/sections/LifecycleTimeline/LifecycleTimeline";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { Metadata } from "next";

// Redesign scaffold (2026-09): structure + wiring only. All visible copy below is a clearly
// marked placeholder pending Phase 2 (manual, user-reviewed content fill) — see the redesign
// plan file for the full mapping.

export const metadata: Metadata = {
  title: "פיתוח פרויקטים ומערכות (placeholder) | שי טק סולושנס",
  description: "תיאור placeholder — יוחלף בשלב 2.",
  alternates: { canonical: "https://www.shaytechsolutions.com/project" },
};

const capabilityCards: GridCard[] = [
  { title: "יכולת 1 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "יכולת 2 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "יכולת 3 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "יכולת 4 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
];

const lifecycleSteps: LifecycleStep[] = [
  {
    number: "1",
    title: "אפיון וארכיטקטורה (placeholder)",
    priceNote: "מחיר קבוע (placeholder)",
    body: ["טקסט לדוגמה — יוחלף בשלב 2."],
  },
  {
    number: "2",
    title: "פיתוח וקידוד (placeholder)",
    priceNote: "לפי הצעת מחיר (placeholder)",
    body: ["טקסט לדוגמה — יוחלף בשלב 2."],
  },
  {
    number: "3",
    title: "מסירה, QA והקמת סביבת ריצה (placeholder)",
    priceNote: "כלול בהצעת הפרויקט (placeholder)",
    body: ["טקסט לדוגמה — יוחלף בשלב 2."],
  },
  {
    number: "4",
    title: "תחזוקה ועבודה מתמשכת (placeholder)",
    priceNote: "מעבר למסלול ריטיינר (placeholder)",
    body: ["טקסט לדוגמה — יוחלף בשלב 2."],
  },
];

export default function ProjectPage() {
  return (
    <main>
      <Hero
        headline="הופכים רעיון טכנולוגי למערכת עובדת (placeholder)"
        subtitle="תת-כותרת לדוגמה — יוחלף בשלב 2."
        btnOutline="איך זה עובד (placeholder)"
        btnOutlineHref="#project-lifecycle"
        btnPrimaryHref={null}
      />

      <CardGridSection
        id="project-scope"
        title="פתרונות פיתוח (placeholder)"
        cards={capabilityCards}
      />

      <LifecycleTimeline
        id="project-lifecycle"
        title="4 שלבים מוגדרים (placeholder)"
        steps={lifecycleSteps}
      />

      <CTABanner
        headline="מתחילים באפיון הפרויקט שלכם (placeholder)"
        sub="טקסט לדוגמה — יוחלף בשלב 2."
      />
    </main>
  );
}
