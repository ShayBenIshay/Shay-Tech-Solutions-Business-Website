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
  "פיצ'ר לדוגמה 1 (placeholder)",
  "פיצ'ר לדוגמה 2 (placeholder)",
  "פיצ'ר לדוגמה 3 (placeholder)",
];

export default function GrowthBundle({
  id = "growth-bundle",
  eyebrow = "פתרון מקיף (placeholder)",
  title = "חבילת ה-Growth (placeholder)",
  lead = "טקסט תיאור לדוגמה — יוחלף בשלב 2.",
  price = "₪0,000",
  priceNote = "/ חודש (placeholder)",
  features = defaultFeatures,
  ctaLabel = "דברו איתנו (placeholder)",
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
        <OpenContactModalButton className="btn-primary-large">
          {ctaLabel}
        </OpenContactModalButton>
      </div>
    </section>
  );
}
