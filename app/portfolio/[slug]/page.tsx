import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import PortfolioMedia from "@/components/shared/PortfolioMedia/PortfolioMedia";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/caseStudies";
import styles from "./case-study.module.css";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | תיק עבודות | שי טק סולושנס`,
    description: cs.tagline,
    alternates: {
      canonical: `https://www.shaytechsolutions.com/portfolio/${cs.slug}`,
    },
  };
}

const RELATED_VISIBLE_COUNT = 3;

function RelatedProjects({ cs }: { cs: CaseStudy }) {
  const related = (cs.relatedSlugs ?? [])
    .map((slug) => getCaseStudy(slug))
    .filter((item): item is CaseStudy => item !== null);

  if (related.length === 0) return null;

  const visible = related.slice(0, RELATED_VISIBLE_COUNT);
  const rest = related.slice(RELATED_VISIBLE_COUNT);

  return (
    <section className={styles.related}>
      <div className={styles.relatedInner}>
        <h2 className={styles.relatedTitle}>חלק מאותו הפרויקט</h2>
        <ul className={styles.relatedList}>
          {visible.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/portfolio/${r.slug}`}
                className={styles.relatedLink}
              >
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
        {rest.length > 0 && (
          <details className={styles.relatedMore}>
            <summary>
              ועוד {rest.length} {rest.length === 1 ? "נוסף" : "נוספים"}
            </summary>
            <ul className={styles.relatedList}>
              {rest.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/portfolio/${r.slug}`}
                    className={styles.relatedLink}
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main>
      {/* ── Hero: back link + centered meta ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/portfolio" className={styles.backLink}>
            → חזרה לתיק העבודות
          </Link>
          <div className={styles.heroMeta}>
            <span className={styles.typeBadge}>{cs.type}</span>
            <h1 className={styles.heroTitle}>{cs.title}</h1>
            <p className={styles.heroTagline}>{cs.tagline}</p>
            {cs.stack && cs.stack.length > 0 && (
              <div className={styles.stackChips}>
                {cs.stack.map((tech) => (
                  <span key={tech} className={styles.stackChip}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Split: cards (right) + laptop (left) ── */}
      <section className={styles.split}>
        <div className={styles.splitInner}>
          {/* Cards on the right in RTL (first in DOM) */}
          <div className={styles.cards}>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>האתגר</h2>
              <p className={styles.blockText}>{cs.challenge}</p>
            </div>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>מה בנינו</h2>
              <ul className={styles.blockList}>
                {cs.solution.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            {cs.techNote && (
              <div className={styles.techNote}>
                <p className={styles.techNoteLabel}>לקוראים טכניים</p>
                <p className={styles.techNoteText}>{cs.techNote}</p>
              </div>
            )}
          </div>

          {/* Laptop on the left in RTL (second in DOM) */}
          <div className={styles.visualWrap}>
            <PortfolioMedia item={cs} styles={styles} eager />
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className={styles.results}>
        <div className={styles.resultsInner}>
          <div className={styles.resultsBlock}>
            <h2 className={styles.resultsTitle}>התוצאה</h2>
            <ul className={styles.resultsList}>
              {cs.results.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {cs.liveUrl && (
              <div className={styles.liveLink}>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  לאתר החי
                </a>
              </div>
            )}
            {cs.designer && (
              <p className={styles.designerCredit}>
                קרדיט לעיצוב UI/UX {cs.designer.name} הקוסם -{" "}
                <a
                  href={cs.designer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.designerLink}
                >
                  לאתר העסק שלו
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      <RelatedProjects cs={cs} />

      <CTABanner
        headline="רוצים פרויקט כזה?"
        sub="שיחת התאמה של 20 דקות - חינם, ללא התחייבות."
      />
    </main>
  );
}
