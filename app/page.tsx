import Link from "next/link";
import Hero from "@/components/sections/Hero/Hero";
import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";
import ProcessJourney, {
  type JourneyStep,
} from "@/components/sections/ProcessJourney/ProcessJourney";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import FAQ, { type FAQItem } from "@/components/sections/FAQ/FAQ";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { ServicePlan } from "@/lib/services";
import styles from "./page.module.css";
import type { Metadata } from "next";

// Redesign scaffold (2026-09): structure + wiring only. All visible copy below is a clearly
// marked placeholder pending Phase 2 (manual, user-reviewed content fill from
// STS-Website-Copywriting-Deliverable.md) — see the redesign plan file for the full mapping.

export const metadata: Metadata = {
  title: "עמוד הבית (placeholder) | שי טק סולושנס",
  description: "תיאור placeholder — יוחלף בשלב 2.",
  alternates: { canonical: "https://www.shaytechsolutions.com" },
};

const painCards: GridCard[] = [
  { title: "נקודת כאב 1 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "נקודת כאב 2 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "נקודת כאב 3 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
];

const whyUsCards: GridCard[] = [
  { title: "סיבה 1 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "סיבה 2 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "סיבה 3 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
  { title: "סיבה 4 (placeholder)", description: "טקסט לדוגמה — יוחלף בשלב 2." },
];

// NOTE: ProcessJourney has no built-in step-number visual, so numbers are embedded in the
// label text here. A 3-item set also leaves a gap in its 4-column desktop grid — worth a
// visual check once real content lands (flagged in the redesign plan).
const howItWorksSteps: JourneyStep[] = [
  { label: "01. שלב ראשון (placeholder)" },
  { label: "02. שלב שני (placeholder)" },
  { label: "03. שלב שלישי (placeholder)" },
];

const plansPreview: ServicePlan[] = [
  {
    title: "אחסון + ניהול (placeholder)",
    price: "₪0,000",
    priceNote: "/ חודש (placeholder)",
    badge: "בסיס חובה (placeholder)",
    highlighted: true,
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1", "פריט לדוגמה 2", "פריט לדוגמה 3"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
  {
    title: "בנק שעות פיתוח (placeholder)",
    price: "החל מ-₪0,000",
    priceNote: "/ חודש (placeholder)",
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1", "פריט לדוגמה 2"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
];

const faqItems: FAQItem[] = [
  { question: "שאלה לדוגמה 1 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 2 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 3 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 4 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 5 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 6 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
  { question: "שאלה לדוגמה 7 (placeholder)", answer: "תשובה לדוגמה — יוחלף בשלב 2." },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        headline="כותרת ראשית לדוגמה (placeholder)"
        subtitle="תת-כותרת לדוגמה — יוחלף בשלב 2."
        btnOutline="יש לכם פרויקט חדש? (placeholder)"
        btnOutlineHref="/project"
        btnPrimary="בואו נבדוק מה מתאים (placeholder)"
        btnPrimaryHref="#home-plans-preview"
      />

      <CardGridSection
        id="home-pain"
        title="כותרת נקודות כאב (placeholder)"
        cards={painCards}
      />

      <section className={styles.solution} id="home-solution">
        <div className={styles.solutionInner}>
          <h2 className="h2">כותרת פתרון (placeholder)</h2>
          <p className="body-text">טקסט לדוגמה — יוחלף בשלב 2.</p>
          <ul className={styles.solutionList}>
            <li>נקודה לדוגמה 1 (placeholder)</li>
            <li>נקודה לדוגמה 2 (placeholder)</li>
            <li>נקודה לדוגמה 3 (placeholder)</li>
          </ul>
          <Link href="/plans" className="btn-secondary">
            לצפייה בתוכניות (placeholder)
          </Link>
        </div>
      </section>

      <ProcessJourney
        title="איך זה עובד (placeholder)"
        steps={howItWorksSteps}
        noBackground
      />

      <ServiceTiers
        id="home-plans-preview"
        title="מסלולים מותאמים (placeholder)"
        subtitle="טקסט לדוגמה — יוחלף בשלב 2."
        plans={plansPreview}
      />

      <section className={styles.projectPreview} id="home-project-preview">
        <div className={styles.projectPreviewInner}>
          <h2 className="h2">פרויקט חדש? (placeholder)</h2>
          <p className="body-text">טקסט לדוגמה — יוחלף בשלב 2.</p>
          <Link href="/project" className="btn-secondary">
            למידע נוסף על פרויקטים (placeholder)
          </Link>
        </div>
      </section>

      <CardGridSection
        id="home-why-us"
        title="למה STS (placeholder)"
        cards={whyUsCards}
        variant="dark"
      />

      <FAQ id="home-faq" title="שאלות נפוצות (placeholder)" items={faqItems} />

      <CTABanner />
    </main>
  );
}
