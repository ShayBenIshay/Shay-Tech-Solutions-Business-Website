import Link from "next/link";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import PortfolioMedia, {
  type PortfolioVisualStyles,
} from "@/components/shared/PortfolioMedia/PortfolioMedia";
import type { CaseStudy } from "@/lib/caseStudies";

export interface PortfolioCardStyles extends PortfolioVisualStyles {
  card: string;
  cardMedia: string;
  titleBlock: string;
  cardTitle: string;
  cardType: string;
  mediaLink: string;
  cardActions: string;
}

type CssModule = { readonly [className: string]: string };

interface PortfolioCardProps {
  item: CaseStudy;
  styles: PortfolioCardStyles | CssModule;
  ctaLabel: string;
}

export default function PortfolioCard({
  item,
  styles,
  ctaLabel,
}: PortfolioCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <div className={styles.titleBlock}>
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardType}>{item.type}</p>
        </div>
        <Link href={`/portfolio/${item.slug}`} className={styles.mediaLink}>
          <PortfolioMedia item={item} styles={styles} />
        </Link>
      </div>
      <div className={styles.cardActions}>
        <OpenContactModalButton className="btn-primary">
          {item.ctaLabel}
        </OpenContactModalButton>
        <Link href={`/portfolio/${item.slug}`} className="btn-secondary">
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
