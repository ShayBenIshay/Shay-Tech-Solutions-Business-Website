import Hero from "@/components/sections/Hero/Hero";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import GrowthBundle from "@/components/sections/GrowthBundle/GrowthBundle";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { ServicePlan } from "@/lib/services";
import type { Metadata } from "next";

// Redesign scaffold (2026-09): structure + wiring only. All visible copy below is a clearly
// marked placeholder pending Phase 2 (manual, user-reviewed content fill) — see the redesign
// plan file for the full mapping. Do NOT reuse lib/services.ts's existing plan arrays here —
// they carry stale, pre-refresh combo pricing already retired in BusinessBrain.

export const metadata: Metadata = {
  title: "מחירון ותוכניות (placeholder) | שי טק סולושנס",
  description: "תיאור placeholder — יוחלף בשלב 2.",
  alternates: { canonical: "https://www.shaytechsolutions.com/plans" },
};

const hostingManagementPlan: ServicePlan[] = [
  {
    title: "אחסון + ניהול ותחזוקה (placeholder)",
    price: "₪0,000",
    priceNote: "/ חודש (placeholder)",
    badge: "בסיס חובה (placeholder)",
    highlighted: true,
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: [
      "פריט לדוגמה 1",
      "פריט לדוגמה 2",
      "פריט לדוגמה 3",
      "פריט לדוגמה 4",
    ],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
];

const retainerPlans: ServicePlan[] = [
  {
    title: "ריטיינר 3 שעות (placeholder)",
    price: "₪0,00",
    priceNote: "/ חודש (placeholder)",
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1", "פריט לדוגמה 2"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
  {
    title: "ריטיינר 5 שעות (placeholder)",
    price: "₪0,000",
    priceNote: "/ חודש (placeholder)",
    badge: "המסלול המבוקש (placeholder)",
    highlighted: true,
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1", "פריט לדוגמה 2"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
  {
    title: "ריטיינר 10 שעות (placeholder)",
    price: "₪0,000",
    priceNote: "/ חודש (placeholder)",
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1", "פריט לדוגמה 2"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
];

const secondaryPlans: ServicePlan[] = [
  {
    title: "אחסון שרת בלבד (placeholder)",
    price: "₪000",
    priceNote: "/ חודש (placeholder)",
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
  {
    title: "פיתוח וייעוץ לפי שעה (placeholder)",
    price: "₪000",
    priceNote: "/ שעה (placeholder)",
    description: "טקסט לדוגמה — יוחלף בשלב 2.",
    included: ["פריט לדוגמה 1"],
    suitable: "טקסט התאמה לדוגמה.",
    focus: "🎯 מיקוד לדוגמה",
  },
];

export default function PlansPage() {
  return (
    <main>
      <Hero
        headline="תוכניות תחזוקה ובנק שעות (placeholder)"
        subtitle="תת-כותרת לדוגמה — יוחלף בשלב 2."
        btnOutline="לבנק שעות הפיתוח (placeholder)"
        btnOutlineHref="#plans-retainers"
        btnPrimaryHref={null}
      />

      <ServiceTiers
        id="plans-hosting"
        title="תשתית אחסון ותחזוקה שוטפת (placeholder)"
        plans={hostingManagementPlan}
      />

      <ServiceTiers
        id="plans-retainers"
        title="בנק שעות פיתוח חודשי (placeholder)"
        subtitle="טקסט לדוגמה — יוחלף בשלב 2."
        tinted={false}
        plans={retainerPlans}
      />

      <GrowthBundle id="plans-growth-bundle" />

      <ServiceTiers
        id="plans-secondary"
        title="צריכים פתרון נקודתי? (placeholder)"
        plans={secondaryPlans}
      />

      <CTABanner />
    </main>
  );
}
