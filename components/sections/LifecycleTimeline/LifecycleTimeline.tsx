import styles from "./LifecycleTimeline.module.css";

export interface LifecycleStep {
  number: string;
  title: string;
  priceNote?: string;
  body: string[];
}

interface LifecycleTimelineProps {
  id?: string;
  title?: string;
  steps: LifecycleStep[];
}

export default function LifecycleTimeline({
  id = "lifecycle",
  title = "שלבי הפרויקט (placeholder)",
  steps,
}: LifecycleTimelineProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <ol className={styles.timeline}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <div className={styles.marker}>
                <span className={styles.markerNumber}>{step.number}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.stepHeader}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  {step.priceNote && (
                    <span className={styles.priceNote}>{step.priceNote}</span>
                  )}
                </div>
                {step.body.map((paragraph) => (
                  <p key={paragraph} className={styles.stepBody}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
