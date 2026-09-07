import styles from "./Services.module.css";
import ServiceLottieCard from "@/components/shared/ServiceLottieCard/ServiceLottieCard";
import { serviceCards } from "@/lib/serviceCards";

const defaultCards = [
  "estore",
  "website-improve",
  "hosting",
  "custom-development",
  "portfolio-examples",
];

interface ServicesProps {
  title?: string;
  subtitle?: string;
  cards?: string[];
  variant?: "grid" | "pair";
  sectionId?: string;
}

export default function Services({
  title = "בונה אתרים, חנויות ומערכות שעובדות בשבילך",
  subtitle = "ליווי מלא: מתכנון, דרך פיתוח מקצועי ועד ניהול שוטף ופרסום.",
  cards = defaultCards,
  variant = "grid",
  sectionId = "services",
}: ServicesProps) {
  const selectedCards = cards
    .map((id) => {
      const card = serviceCards.find((c) => c.id === id);
      if (!card) console.warn(`Services: no serviceCards entry for id "${id}"`);
      return card;
    })
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  return (
    <section className={styles.section} id={sectionId}>
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>{title}</h2>
          <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        </div>
        <div
          className={`${styles.grid} ${variant === "pair" ? styles.gridPair : ""}`}
        >
          {selectedCards.map((card) => (
            <ServiceLottieCard key={card.id} service={card} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
}
