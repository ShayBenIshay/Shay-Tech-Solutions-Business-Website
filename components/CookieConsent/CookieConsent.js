'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { updateConsent } from '@/lib/gtag';
import styles from './CookieConsent.module.css';

const STORAGE_KEY = 'cookie_consent_accepted';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (accepted === 'true') {
      updateConsent();
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    updateConsent();
    setVisible(false);
  };

  const handleDismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="הסכמה לשימוש בעוגיות">
      <button className={styles.closeBtn} onClick={handleDismiss} aria-label="סגור">
        ×
      </button>
      <p className={styles.text}>
        אנו משתמשים בעוגיות (cookies) לצורך ניתוח שימוש באתר ושיפור חוויית הגלישה.
        המשך שימוש באתר מהווה הסכמה לשימוש בעוגיות בהתאם ל
        <Link href="/privacy-policy" className={styles.link}>
          מדיניות הפרטיות
        </Link>
        .
      </p>
      <button className={styles.acceptBtn} onClick={handleAccept}>
        הבנתי, אני מסכים/ה
      </button>
    </div>
  );
}
