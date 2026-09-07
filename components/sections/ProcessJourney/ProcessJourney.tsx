import type { CSSProperties } from "react";
import styles from "./ProcessJourney.module.css";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";

type JourneyScene = "intro" | "quote" | "build" | "launch";

export interface JourneyStep {
  scene?: JourneyScene;
  label: string;
  icon?: string;
}

const defaultSteps: JourneyStep[] = [
  { scene: "intro", label: "שיחת היכרות ואפיון" },
  { scene: "quote", label: "הצעת מחיר מסודרת" },
  { scene: "build", label: "בנייה / שיפוץ / פיתוח" },
  { scene: "launch", label: "עלייה לאוויר + ליווי" },
];

function IntroScene() {
  return (
    <svg viewBox="0 0 160 160">
      <rect width="160" height="160" rx="20" fill="#EFEAF6" />
      <rect x="40" y="108" width="80" height="8" rx="4" fill="#412662" opacity="0.15" />
      <path
        d="M50 70h60v38a4 4 0 0 1-4 4H54a4 4 0 0 1-4-4V70z"
        fill="#ffffff"
        stroke="#412662"
        strokeWidth="2"
      />
      <rect x="56" y="76" width="48" height="26" rx="3" fill="#412662" opacity="0.08" />
      <path
        d="M95 30h40a10 10 0 0 1 10 10v18a10 10 0 0 1-10 10h-16l-10 9v-9h-14a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10z"
        fill="#476226"
      />
      <g className={styles.dots}>
        <circle cx="103" cy="50" r="2.6" fill="#fff" />
        <circle cx="113" cy="50" r="2.6" fill="#fff" style={{ animationDelay: "0.15s" }} />
        <circle cx="123" cy="50" r="2.6" fill="#fff" style={{ animationDelay: "0.3s" }} />
      </g>
      <circle cx="32" cy="42" r="3" fill="#476226" opacity="0.5" />
      <circle cx="24" cy="60" r="1.8" fill="#412662" opacity="0.4" />
    </svg>
  );
}

function QuoteScene() {
  return (
    <svg viewBox="0 0 160 160">
      <rect width="160" height="160" rx="20" fill="#E9F3E3" />
      <path
        d="M50 30h44l16 16v70a4 4 0 0 1-4 4H50a4 4 0 0 1-4-4V34a4 4 0 0 1 4-4z"
        fill="#ffffff"
        stroke="#412662"
        strokeWidth="2"
      />
      <path d="M94 30v16h16" fill="none" stroke="#412662" strokeWidth="2" />
      <rect x="58" y="58" width="48" height="5" rx="2.5" fill="#412662" opacity="0.18" />
      <rect x="58" y="70" width="48" height="5" rx="2.5" fill="#412662" opacity="0.18" />
      <rect x="58" y="82" width="30" height="5" rx="2.5" fill="#412662" opacity="0.18" />
      <path
        d="M108 96l24 24-14 14a6 6 0 0 1-8.5 0l-15.5-15.5a6 6 0 0 1 0-8.5l14-14z"
        fill="#476226"
      />
      <circle cx="121" cy="109" r="3.4" fill="#fff" />
      <path
        className={styles.twinkle}
        d="M132 38l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4z"
        fill="#476226"
      />
    </svg>
  );
}

function BuildScene() {
  return (
    <svg viewBox="0 0 160 160">
      <rect width="160" height="160" rx="20" fill="#FBF1E4" />
      <rect x="28" y="42" width="104" height="76" rx="8" fill="#ffffff" stroke="#412662" strokeWidth="2" />
      <rect x="28" y="42" width="104" height="16" rx="8" fill="#412662" opacity="0.1" />
      <circle cx="38" cy="50" r="2.4" fill="#412662" opacity="0.4" />
      <circle cx="46" cy="50" r="2.4" fill="#412662" opacity="0.4" />
      <circle cx="54" cy="50" r="2.4" fill="#412662" opacity="0.4" />
      <rect x="38" y="66" width="34" height="20" rx="4" fill="#476226" />
      <rect x="76" y="66" width="46" height="10" rx="3" fill="#412662" opacity="0.25" />
      <rect
        x="38"
        y="90"
        width="84"
        height="18"
        rx="4"
        fill="#E3A857"
        transform="rotate(-4 80 99)"
      />
      <g transform="translate(122,102)">
        <g className={styles.gear}>
          <circle r="13" fill="#412662" />
          <circle r="4.6" fill="#fff" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <rect
              key={a}
              x="-1.7"
              y="-16.5"
              width="3.4"
              height="6.5"
              rx="1"
              fill="#412662"
              transform={`rotate(${a})`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

function LaunchScene() {
  return (
    <svg viewBox="0 0 160 160">
      <rect width="160" height="160" rx="20" fill="#E8F3F7" />
      <g fill="#BFE0EC">
        <ellipse cx="38" cy="122" rx="16" ry="9" />
        <ellipse cx="52" cy="117" rx="12" ry="8" />
        <ellipse cx="124" cy="44" rx="14" ry="8" />
        <ellipse cx="112" cy="40" rx="10" ry="7" />
      </g>
      <circle cx="28" cy="32" r="2" fill="#476226" opacity="0.5" />
      <circle cx="132" cy="88" r="1.6" fill="#412662" opacity="0.4" />
      <g transform="translate(80,82) rotate(-35)">
        <g className={styles.bob}>
          <path d="M0 -34c9 8 9 26 0 40-9-14-9-32 0-40z" fill="#476226" />
          <circle cx="0" cy="-12" r="6" fill="#412662" />
          <path d="M-9 4l-8 12 12-4z" fill="#412662" />
          <path d="M9 4l8 12-12-4z" fill="#412662" />
          <path d="M-5 6c2 10 8 10 10 0-3 4-7 4-10 0z" fill="#E3A857" />
        </g>
      </g>
    </svg>
  );
}

const SCENES = {
  intro: IntroScene,
  quote: QuoteScene,
  build: BuildScene,
  launch: LaunchScene,
} as const;

interface ProcessJourneyProps {
  showCTA?: boolean;
  title?: string;
  noBackground?: boolean;
  steps?: JourneyStep[];
}

export default function ProcessJourney({
  showCTA = false,
  title = "איך זה עובד בפועל?",
  noBackground = false,
  steps = defaultSteps,
}: ProcessJourneyProps) {
  return (
    <section
      className={`${styles.section} ${noBackground ? styles.noBackground : ""}`}
      id="how-i-work"
    >
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>

        <div className={styles.panels}>
          {steps.map((step, i) => {
            const Scene = step.scene ? SCENES[step.scene] : null;
            if (step.scene && !Scene) {
              console.warn(
                `ProcessJourney: no scene "${step.scene}" for step "${step.label}"`,
              );
            }
            return (
              <div
                key={step.label}
                className={styles.panel}
                style={{ "--i": i } as CSSProperties}
              >
                <div className={styles.sceneWrap}>
                  {Scene ? (
                    <Scene />
                  ) : step.icon ? (
                    <div className={styles.iconPanel}>
                      <img src={step.icon} alt={step.label} className={styles.icon} />
                    </div>
                  ) : null}
                </div>
                <p className={styles.label}>{step.label}</p>
              </div>
            );
          })}
        </div>

        {showCTA && (
          <OpenContactModalButton className={`btn-primary ${styles.ctaBtn}`}>
            לתיאום שיחה
          </OpenContactModalButton>
        )}
      </div>
    </section>
  );
}
