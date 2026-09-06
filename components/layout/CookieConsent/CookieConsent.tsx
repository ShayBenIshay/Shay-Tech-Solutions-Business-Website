"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { updateConsent } from "@/lib/gtag";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "cookie_consent_accepted";
const SESSION_DISMISS_KEY = "cookie_consent_dismissed";
const CONSENT_EVENT = "cookie-consent-change";

type ConsentState = "accepted" | "dismissed" | "pending";

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot(): ConsentState {
  if (localStorage.getItem(STORAGE_KEY) === "true") return "accepted";
  if (sessionStorage.getItem(SESSION_DISMISS_KEY) === "true") return "dismissed";
  return "pending";
}

const getServerSnapshot = (): ConsentState => "accepted";

export default function CookieConsent() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (state === "accepted") updateConsent();
  }, [state]);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_DISMISS_KEY, "true");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  if (state !== "pending") return null;

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
