import type { ReactNode } from "react";
import styles from "./Legal.module.css";

interface LegalProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function Legal({ title, lastUpdated, children }: LegalProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={`h2 ${styles.title}`}>{title}</h1>
          {lastUpdated && (
            <p className={styles.updated}>עודכן לאחרונה: {lastUpdated}</p>
          )}
        </div>
      </header>

      <article className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </article>
    </main>
  );
}
