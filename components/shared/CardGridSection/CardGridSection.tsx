import type { ReactNode } from "react";
import styles from "./CardGridSection.module.css";

export interface GridCard {
  title: string;
  description?: string;
  itemsHeading?: string;
  items?: string[];
  footer?: ReactNode;
}

interface CardProps {
  card: GridCard;
  dark: boolean;
}

function Card({ card, dark }: CardProps) {
  return (
    <div className={`${styles.card} ${dark ? styles.cardDark : ""}`}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <div className={styles.cardBody}>
          {card.description && (
            <p className={styles.cardDescription}>{card.description}</p>
          )}
          {card.items && (
            <div className={styles.optionsBlock}>
              {card.itemsHeading && (
                <p className={styles.optionsHeading}>{card.itemsHeading}</p>
              )}
              <ul className={styles.optionsList}>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {card.footer && <div className={styles.cardFooter}>{card.footer}</div>}
    </div>
  );
}

interface CardGridSectionProps {
  title: string;
  cards: GridCard[];
  id?: string;
  variant?: "light" | "dark";
}

export default function CardGridSection({
  title,
  cards,
  id,
  variant = "light",
}: CardGridSectionProps) {
  const dark = variant === "dark";

  return (
    <section className={`${styles.section} ${dark ? styles.sectionDark : ""}`} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.headline} ${dark ? styles.headlineDark : ""}`}>
          {title}
        </h2>
        <div className={`${styles.grid} ${dark ? styles.gridDark : ""}`}>
          {cards.map((card) => (
            <Card key={card.title} card={card} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}
