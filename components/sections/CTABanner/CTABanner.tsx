import Link from "next/link";
import styles from "./CTABanner.module.css";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import { PHONE_DISPLAY, EMAIL } from "@/lib/contactInfo";
import type { ServiceValue } from "@/components/sections/TalkToMe/TalkToMe";

interface CTABannerProps {
  headline?: string;
  sub?: string;
  presetService?: ServiceValue;
}

export default function CTABanner({
  headline = "מוכנים לצעד הבא?",
  sub = "שיחת התאמה של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות.",
  presetService,
}: CTABannerProps) {
  return (
    <footer className={styles.footer} id="cta">
      <div className={styles.inner}>
        <div className={styles.textGroup}>
          <p className={`h2 ${styles.headline}`}>{headline}</p>
          <p className={`h3 ${styles.sub}`}>{sub}</p>
        </div>
        <OpenContactModalButton className="btn-primary-large" presetService={presetService}>
          לתיאום שיחה
        </OpenContactModalButton>
      </div>
      <div>
        <div className={styles.contactDetails}>
          <p>פרטים ליצירת קשר: </p>
          <div className={styles.contactDetailsRow}>
            <p className={styles.phone}>{PHONE_DISPLAY}</p>
            <p className={styles.email}>{EMAIL}</p>
          </div>
        </div>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">מדיניות פרטיות</Link>
          <Link href="/terms-of-service">תנאי שירות</Link>
        </div>
      </div>
    </footer>
  );
}
