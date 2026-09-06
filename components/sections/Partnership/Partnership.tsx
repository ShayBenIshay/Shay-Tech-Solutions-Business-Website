import styles from "./Partnership.module.css";
import IllustrationSection from "@/components/shared/IllustrationSection/IllustrationSection";

function TreeScene() {
  return (
    <svg viewBox="0 0 500 300" aria-hidden="true">
      <ellipse cx="250" cy="272" rx="150" ry="24" fill="#E3A857" opacity="0.35" />

      <path
        d="M250 258 C246 208 258 168 248 128 C240 98 252 73 250 53"
        fill="none"
        stroke="#476226"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <g className={styles.leafSway}>
        <ellipse cx="222" cy="186" rx="22" ry="12" fill="#476226" transform="rotate(-28 222 186)" />
        <ellipse cx="276" cy="166" rx="22" ry="12" fill="#5a8a30" transform="rotate(24 276 166)" />
      </g>

      <g className={styles.leafSway2}>
        <ellipse cx="228" cy="116" rx="20" ry="11" fill="#5a8a30" transform="rotate(-20 228 116)" />
        <ellipse cx="272" cy="98" rx="20" ry="11" fill="#476226" transform="rotate(18 272 98)" />
      </g>

      <g className={styles.leafSway}>
        <circle cx="250" cy="46" r="30" fill="#476226" />
        <circle cx="226" cy="58" r="20" fill="#5a8a30" />
        <circle cx="276" cy="56" r="22" fill="#5a8a30" />
      </g>

      <g transform="translate(312, 58)">
        <g className={styles.bob}>
          <path d="M0 0c4-4 10-4 13 0-3 1-5 3-6 6-1-3-4-5-7-6z" fill="#412662" />
        </g>
      </g>

      <path
        d="M160 292 Q206 262 246 256"
        fill="none"
        stroke="#412662"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M340 292 Q294 262 254 256"
        fill="none"
        stroke="#476226"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle cx="250" cy="257" r="13" fill="#E3A857" />

      <circle className={styles.twinkleSlow} cx="120" cy="90" r="3" fill="#412662" opacity="0.4" />
      <circle
        className={styles.twinkleSlow}
        cx="380"
        cy="120"
        r="2.4"
        fill="#476226"
        opacity="0.45"
        style={{ animationDelay: "1.2s" }}
      />
    </svg>
  );
}

function LighthouseScene() {
  return (
    <svg viewBox="0 0 500 300" aria-hidden="true">
      <circle className={styles.twinkleSlow} cx="80" cy="46" r="2.2" fill="#412662" opacity="0.5" />
      <circle
        className={styles.twinkleSlow}
        cx="200"
        cy="72"
        r="1.8"
        fill="#412662"
        opacity="0.4"
        style={{ animationDelay: "0.8s" }}
      />
      <circle
        className={styles.twinkleSlow}
        cx="440"
        cy="56"
        r="2.4"
        fill="#412662"
        opacity="0.5"
        style={{ animationDelay: "1.6s" }}
      />

      <path
        d="M46 60 Q54 50 62 60 Q70 50 78 60"
        fill="none"
        stroke="#412662"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      <path
        className={styles.beam}
        d="M362 122 L146 152 L146 194 Z"
        fill="#E3A857"
      />

      <ellipse cx="358" cy="248" rx="72" ry="16" fill="#E3A857" opacity="0.3" />

      <path d="M348 248 L352 128 L368 128 L372 248 Z" fill="#ffffff" stroke="#412662" strokeWidth="3" />
      <rect x="347" y="163" width="26" height="11" fill="#412662" opacity="0.85" />
      <rect x="347" y="198" width="26" height="11" fill="#412662" opacity="0.85" />
      <rect x="349" y="111" width="22" height="19" rx="2" fill="#E3A857" stroke="#412662" strokeWidth="2.5" />
      <path d="M346 111 L360 94 L374 111 Z" fill="#412662" />

      <path
        d="M20 252 Q60 240 100 252 Q140 264 180 252 Q220 240 260 252 Q300 264 340 252 Q380 240 420 252 Q450 264 480 252"
        fill="none"
        stroke="#476226"
        strokeWidth="3"
        opacity="0.3"
      />
      <path
        d="M20 262 Q60 250 100 262 Q140 274 180 262 Q220 250 260 262 Q300 274 340 262 Q380 250 420 262 Q450 274 480 262"
        fill="none"
        stroke="#412662"
        strokeWidth="3"
        opacity="0.2"
      />

      <g className={styles.bob}>
        <path
          d="M100 240 Q135 256 170 240 L161 249 Q135 260 109 249 Z"
          fill="#476226"
        />
        <line x1="135" y1="240" x2="135" y2="204" stroke="#412662" strokeWidth="2" />
        <path d="M135 207 L160 233 L135 233 Z" fill="#412662" opacity="0.85" />
      </g>
    </svg>
  );
}

const SCENES = {
  tree: TreeScene,
  lighthouse: LighthouseScene,
} as const;

type PartnershipVariant = keyof typeof SCENES;

interface PartnershipProps {
  title?: string;
  subtitle?: string;
  variant?: PartnershipVariant;
}

export default function Partnership({
  title = "למה לעבוד איתי?",
  subtitle = "לא סתם ספק - שותף אמיתי שנשאר לצידך גם אחרי שהאתר עולה לאוויר: עבודה שקופה, תקשורת ישירה ומחויבות מלאה לטווח הארוך.",
  variant = "tree",
}: PartnershipProps) {
  const Scene = SCENES[variant] ?? TreeScene;

  return (
    <IllustrationSection id="why-me" title={title} subtitle={subtitle}>
      <Scene />
    </IllustrationSection>
  );
}
