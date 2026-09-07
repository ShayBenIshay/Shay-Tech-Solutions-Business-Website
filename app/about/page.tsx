import Hero from "@/components/sections/Hero/Hero";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import styles from "./about.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | Shay Tech Solutions",
  description:
    "הכירו את STS – השותף הטכנולוגי שלכם. מעטפת מלאה של תחזוקה, פיתוח, אחסון וניהול מערכות בשקיפות ובמקצועיות.",
  alternates: { canonical: "https://www.shaytechsolutions.com/about" },
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        headline="הבית הטכנולוגי של העסק שלכם"
        subtitle="STS הוקמה מתוך הבנה פשוטה: בעלי עסקים צריכים פרטנר טכנולוגי אחד שניתן לסמוך עליו."
        btnOutline="דברו איתנו"
        btnOutlineHref="/contact"
        btnPrimaryHref={null}
      />

      <section className={styles.story} id="about-content">
        <div className={styles.storyInner}>
          <p className="body-text">
            בעולם שבו אתרי אינטרנט ומערכות תוכנה דורשים תחזוקה מתמדת, אבטחה,
            עדכונים והתאמה אישית, בעלי עסקים רבים מוצאים את עצמם מבזבזים זמן יקר
            על פתרון תקלות ותיזוזים בין ספקים שונים.
          </p>
          <p className="body-text">
            אנחנו ב-Shay Tech Solutions (STS) מאמינים בשקיפות מוחלטת, בעבודה
            מתוכננת מראש ובמתן מענה הנדסי מקיף – החל מהאחסון ותשתיות השרת, דרך
            תחזוקת וורדפרס, ועד לפיתוח מערכות Full-Stack מורכבות (React,
            Next.js, Node.js, Python) וניהול קמפיינים.
          </p>
          <p className="body-text">
            כשאתם עובדים איתנו, אתם לא מקבלים עוד קבלן משנה – אלא זרוע טכנולוגית
            שמבינה את צורכי העסק שלכם ומבטיחה שהמערכות שלכם ימשיכו לעבוד, לגדול
            ולהניב תוצאות.
          </p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
