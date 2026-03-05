import styles from "./CoreServicesSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const services = [
  {
    title: "🛒 חנויות WooCommerce",
    description:
      "הקמת חנויות אינטרנטיות עם חשיבה שיווקית, חוויית משתמש ותשתית לצמיחה.",
    options: ["חנות מתחילה", "חנות מתקדמת", "חנות דלוקס"],
    cta: "לבניית חנות",
    cta2: "חבילות חנות",
    href: "/contact#talk-to-me",
    href2: "/services/estore",
  },
  {
    title: "🔧 שיפוץ ותחזוקה - WordPress",
    description: "שדרוג אתרים קיימים כך שיעבדו טוב יותר ויביאו תוצאות.",
    options: ["שיפוץ בסיסי", "שיפוץ שמביא תוצאות", "שיפוץ שמרגיש כמו אתר חדש"],
    cta: "לשיפוץ אתר",
    cta2: "עוד מידע",
    href: "/contact#talk-to-me",
    href2: "#wordpress",
  },
  {
    title: "🧩 אחסון וניהול אתרים",
    description: "שקט נפשי, תחזוקה שוטפת וניהול מקצועי.",
    options: [
      "אחסון בסיסי",
      "אחסון + ניהול ותחזוקה",
      "אחסון, ניהול ותחזוקה + שעות פיתוח",
    ],
    cta: "לאחסון אתר",
    cta2: "לדילים",
    href: "/contact#talk-to-me",
    href2: "#hosting",
  },
];

function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardDescription}>{service.description}</p>
          <div className={styles.optionsBlock}>
            <p className={styles.optionsHeading}>מה האפשרויות?</p>
            <ul className={styles.optionsList}>
              {service.options.map((opt) => (
                <li key={opt}>{opt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <OpenContactModalButton className="btn-primary">
          {service.cta}
        </OpenContactModalButton>
        <a href={service.href2} className="btn-secondary">
          {service.cta2}
        </a>
      </div>
    </div>
  );
}

export default function CoreServicesSection() {
  return (
    <section className={styles.section} id="core-services">
      <div className={styles.inner}>
        <h2 className={styles.headline}>שירותי הליבה</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
