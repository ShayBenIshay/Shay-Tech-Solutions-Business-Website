import styles from "./FAQ.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  id?: string;
  title?: string;
  items: FAQItem[];
}

export default function FAQ({
  id = "faq",
  title = "שאלות נפוצות",
  items,
}: FAQProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <div className={styles.accordion}>
          {items.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
