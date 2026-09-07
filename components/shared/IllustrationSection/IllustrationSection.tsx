import type { CSSProperties, ReactNode } from "react";
import styles from "./IllustrationSection.module.css";

interface IllustrationSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  maxWidth?: string;
  children: ReactNode;
}

export default function IllustrationSection({
  id,
  title,
  subtitle,
  maxWidth = "460px",
  children,
}: IllustrationSectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        <div
          className={styles.illustrationWrap}
          style={
            { "--illustration-max-width": maxWidth } as CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
}
