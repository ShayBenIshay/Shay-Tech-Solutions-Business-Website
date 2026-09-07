import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import styles from "./about.module.css";
import type { Metadata } from "next";

// Redesign scaffold (2026-09): replaces /aboutme's content-equivalent page. Structurally this
// is a Hero + plain prose block, not the old NiceToMeet (which takes zero props — see the
// redesign plan for why it isn't reused here). All visible copy below is a clearly marked
// placeholder pending Phase 2.

export const metadata: Metadata = {
  title: "אודות (placeholder) | שי טק סולושנס",
  description: "תיאור placeholder — יוחלף בשלב 2.",
  alternates: { canonical: "https://www.shaytechsolutions.com/about" },
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        headline="הבית הטכנולוגי של העסק שלכם (placeholder)"
        subtitle="תת-כותרת לדוגמה — יוחלף בשלב 2."
        btnOutline="דברו איתנו (placeholder)"
        btnOutlineHref="/contact"
        btnPrimaryHref={null}
      />

      <section className={styles.story} id="about-content">
        <div className={styles.storyInner}>
          <p className="body-text">פסקה לדוגמה 1 — יוחלף בשלב 2.</p>
          <p className="body-text">פסקה לדוגמה 2 — יוחלף בשלב 2.</p>
          <p className="body-text">פסקה לדוגמה 3 — יוחלף בשלב 2.</p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
