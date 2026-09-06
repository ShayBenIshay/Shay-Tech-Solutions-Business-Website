import styles from "./SpecialProjects.module.css";

const paidevoTextLogo = "/assets/PaiDevo-Text-Logo.webp";
const paidevoLogo = "/assets/PaiDevo-Logo.webp";

interface SpecialProject {
  id: string;
  name: string;
  logoText?: string;
  subtitle: string;
  description: string[];
  btnLabel: string;
  btnHref: string;
  hasLogo: boolean;
  centered: boolean;
}

const projects: SpecialProject[] = [
  {
    id: "paidevo",
    name: "PAIDEVO",
    logoText: "PAiDeVo",
    subtitle: "מערכת חכמה ללמידה - מותאמת לאופני הלמידה שלך",
    description: [
      "ב-2026 הצטרפתי לחברת סטארטאפ לבניית מוצר חדשני.",
      "המערכת תעבד קורסים ותהפוך את הלמידה למותאמת אישית לצרכי הלקוח",
    ],
    btnLabel: "לעמוד החברה",
    btnHref: "https://www.paidevo.com",
    hasLogo: true,
    centered: false,
  },
];

export default function SpecialProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>פרויקטים מיוחדים</h2>

        <div className={styles.cards}>
          {projects.map((project) =>
            project.centered ? (
              /* ---- PAYCASH - centered layout ---- */
              <div
                key={project.id}
                className={`${styles.card} ${styles.cardCentered}`}
              >
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                {project.description.map((line, i) => (
                  <p key={i} className={styles.desc}>
                    {line}
                  </p>
                ))}
                <a
                  href={project.btnHref}
                  className={`btn-primary ${styles.btn}`}
                >
                  {project.btnLabel}
                </a>
              </div>
            ) : (
              /* ---- PAIDEVO - horizontal split layout ---- */
              <div
                key={project.id}
                className={`${styles.card} ${styles.cardSplit}`}
              >
                {/* Content side - first in JSX = visual right in RTL */}
                <div className={styles.contentSide}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  {project.description.map((line, i) => (
                    <p key={i} className={styles.desc}>
                      {line}
                    </p>
                  ))}
                  <a
                    href={project.btnHref}
                    className={`btn-primary ${styles.btn}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.btnLabel}
                  </a>
                </div>

                {/* Logo side - second in JSX = visual left in RTL */}
                <div className={styles.logoSide}>
                  <img
                    src={paidevoTextLogo}
                    alt="Paidevo Text Logo"
                    className={styles.paidevoTextLogo}
                  />
                  <img
                    src={paidevoLogo}
                    alt="Paidevo Logo"
                    className={styles.paidevoLogo}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
