import Link from "next/link";
import styles from "./not-found.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – הדף לא נמצא | שי טק סולושנס",
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={`h2 ${styles.title}`}>הדף לא נמצא</h1>
        <p className={`body-text ${styles.text}`}>
          נראה שהדף שחיפשת לא קיים או הוסר.
          <br />
          אבל לא נשאיר אותך תקוע – חזור לעמוד הבית ומשם תוכל להגיע לכל מקום.
        </p>
        <Link href="/" className="btn-primary">
          חזרה לעמוד הבית
        </Link>
      </div>
    </main>
  );
}
