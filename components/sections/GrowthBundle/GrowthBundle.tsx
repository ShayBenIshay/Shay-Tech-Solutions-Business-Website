import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import styles from "./GrowthBundle.module.css";

interface GrowthBundleProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  price?: string;
  priceNote?: string;
  features?: string[];
  ctaLabel?: string;
}

const defaultFeatures = [
  "אחסון שרת מהיר + ניהול ותחזוקה שוטפת מלאה",
  "ריטיינר פיתוח מורחב של 10 שעות חודשיות לכל שינוי, דף נחיתה או שדרוג",
  "ניהול קמפיינים ממומנים ב-Google Ads ו-Meta (Facebook/Instagram)",
  "יצירת קריאייטיב, קופירייטינג ובניית מודעות",
  "דוחות ביצועים חודשיים, ניטור לידים ואופטימיזציה מתמדת",
];

export default function GrowthBundle({
  id = "growth-bundle",
  eyebrow = "פתרון מקיף לצמיחה",
  title = "חבילת ה-Growth: מעטפת טכנית מלאה + ניהול שיווק",
  lead = "כל מה שהאתר והעסק שלכם צריכים כדי לגדול – במעטפת אחת כוללת ובכתובת אחת.",
  price = "₪5,990",
  priceNote = "/ חודש (ללא תקציב הפרסום עצמו)",
  features = defaultFeatures,
  ctaLabel = "דברו איתנו על חבילת ה-Growth",
}: GrowthBundleProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.box}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.priceTag}>
          {price}
          <span className={styles.priceNote}>{priceNote}</span>
        </div>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <OpenContactModalButton className="btn-primary-large" presetService="growth">
          {ctaLabel}
        </OpenContactModalButton>
      </div>
    </section>
  );
}
