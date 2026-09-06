import Link from "next/link";
import styles from "./Portfolio.module.css";
import PortfolioCard from "@/components/shared/PortfolioCard/PortfolioCard";
import { caseStudies } from "@/lib/caseStudies";

const FEATURED_SLUGS = [
  "bartzemachjewelry",
  "newsletter-club",
  "lapa",
  "alpha-pro",
];

const portfolioItems = caseStudies.filter((cs) =>
  FEATURED_SLUGS.includes(cs.slug)
);

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.sectionTitle}`}>עבודות / דוגמאות</h2>
        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.slug}
              item={item}
              styles={styles}
              ctaLabel="עוד מידע"
            />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary">
          עוד עבודות
        </Link>
      </div>
    </section>
  );
}
