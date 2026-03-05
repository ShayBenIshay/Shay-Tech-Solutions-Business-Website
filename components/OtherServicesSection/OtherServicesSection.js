import styles from "./OtherServicesSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const cards = [
  {
    title: "אחסון וניהול 🧩",
    subtitle: "שקט נפשי לאתר שלך",
    cta: "לאחסון וניהול",
  },
  {
    title: "האתר קיים? 🔧",
    subtitle: "הופכים אתר קיים לכלי שעובד",
    cta: "בואו נשפץ",
  },
  {
    title: "פיתוח אישי 🧠",
    subtitle: "נמצא את הפתרון המדויק בשבילך",
    cta: "תכנון ופיתוח",
  },
  {
    title: "קידום ממומן 📢",
    subtitle: "לקמפיינים עם חשיפה",
    cta: "פרסום וקידום",
  },
];

export default function OtherServicesSection() {
  return (
    <section className={styles.section} id="other-services">
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.title}`}>שירותים משלימים לצמיחה</h2>
          <p className={`h3 ${styles.subtitle}`}>
            השירותים המשלימים לצמיחה של העסק שלך
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card) => (
            <OpenContactModalButton key={card.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSub}>{card.subtitle}</p>
              </div>
              <button className="btn-primary">{card.cta}</button>
            </OpenContactModalButton>
          ))}
        </div>
      </div>
    </section>
  );
}
