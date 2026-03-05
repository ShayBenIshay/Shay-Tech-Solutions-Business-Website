import styles from "./CTABannerSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

export default function CTABannerSection({
  headline = "מוכן לשדרג את האתר או להתחיל למכור אונליין?",
  sub = "בואו נדבר ונראה איך אפשר להתקדם – בקלות, מקצועיות וללא התחייבות.",
}) {
  return (
    <footer className={styles.footer} id="cta">
      <div className={styles.inner}>
        <div className={styles.textGroup}>
          <p className={`h2 ${styles.headline}`}>{headline}</p>
          <p className={`h3 ${styles.sub}`}>{sub}</p>
        </div>
        <OpenContactModalButton className="btn-primary-large">
          לתיאום שיחה
        </OpenContactModalButton>
      </div>
      <div>
        <div className={styles.contactDetails}>
          <p>פרטים ליצירת קשר: </p>
          <div className={styles.contactDetailsRow}>
            <p className={styles.phone}>054-7573914</p>
            <p className={styles.email}>shaybishay@gmail.com</p>
          </div>
        </div>
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">מדיניות פרטיות</a>
          <a href="/terms-of-service">תנאי שירות</a>
        </div>
      </div>
    </footer>
  );
}
