import styles from "./PortfolioSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const imgImage23 = "/assets/Portfolio-BarTzemach.webp";
const imgLaptop2 = "/assets/Laptop-Mockup.png";
const imgLapa = "/assets/Portfolio-Lapa.webp";
const imgNewsletterClub = "/assets/Portfolio-NewsletterClub.webp";

const portfolioItems = [
  {
    title: "Bar Tzemach Jewlry",
    type: "חנות אינטרנטית",
    screenshot: imgImage23,
    hasRealImage: true,
    cta: "לבניית חנות",
    href: "/portfolio/bartzemachjewelry",
  },
  {
    title: "Newsletter club",
    type: "תוסף",
    screenshot: imgNewsletterClub,
    hasRealImage: true,
    cta: "לבניית תוסף",
    href: "/portfolio/newsletter-club",
  },
  {
    title: "LAPA",
    type: "שיפוץ אתר",
    screenshot: imgLapa,
    hasRealImage: true,
    cta: "שיפוץ אתר",
    href: "/portfolio/lapa",
  },
  {
    title: "Telegram bot",
    type: "פיתוח מותאם אישית",
    screenshot: null,
    hasRealImage: false,
    cta: "לבניית בוט",
    href: "/portfolio/telegram-bot",
  },
];

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.titleBlock}>
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardType}>{item.type}</p>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.laptopWrap}>
          <div className={styles.screenshotClip}>
            {item.hasRealImage ? (
              <img
                src={item.screenshot}
                alt={item.title}
                className={styles.screenshot}
                loading="lazy"
              />
            ) : (
              <div className={styles.placeholderScreen}>
                <span className={styles.placeholderText}>{item.title}</span>
              </div>
            )}
          </div>
          <img src={imgLaptop2} alt="laptop" className={styles.laptop} loading="lazy" />
        </div>
        <div className={styles.cardActions}>
          <OpenContactModalButton className="btn-primary">
            {item.cta}
          </OpenContactModalButton>
          <a href={item.href} className="btn-secondary">
            עוד מידע
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.sectionTitle}`}>עבודות / דוגמאות</h2>
        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
        <a href="/portfolio" className="btn-secondary">
          עוד עבודות
        </a>
      </div>
    </section>
  );
}
