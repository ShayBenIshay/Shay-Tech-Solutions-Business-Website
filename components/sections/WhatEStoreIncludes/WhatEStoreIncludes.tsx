import styles from "./WhatEStoreIncludes.module.css";
import IllustrationSection from "@/components/shared/IllustrationSection/IllustrationSection";

interface WhatEStoreIncludesProps {
  title?: string;
  subtitle?: string;
}

export default function WhatEStoreIncludes({
  title = "מה כל חנות כוללת?",
  subtitle = "כל חנות שאני בונה מוכנה למכירה מהיום הראשון: מותאמת לנייד, מחוברת לסליקה ומשלוחים, עם הדרכה מלאה לניהול - ותשתית שגדלה יחד איתכם.",
}: WhatEStoreIncludesProps) {
  return (
    <IllustrationSection
      id="whats-included-estore"
      title={title}
      subtitle={subtitle}
      maxWidth="420px"
    >
      <svg viewBox="0 0 400 260" aria-hidden="true">
            <ellipse cx="195" cy="236" rx="150" ry="14" fill="#E3A857" opacity="0.3" />

            {/* awning */}
            <path
              d="M100 112 Q180 76 260 112 L260 124 Q180 90 100 124 Z"
              fill="#412662"
            />
            <path
              d="M100 118 Q180 84 260 118"
              fill="none"
              stroke="#5a8a30"
              strokeWidth="3"
              opacity="0.5"
            />

            {/* building */}
            <rect x="108" y="112" width="154" height="112" rx="8" fill="#ffffff" stroke="#412662" strokeWidth="3" />

            {/* windows */}
            <rect x="122" y="140" width="36" height="36" rx="4" fill="#EFEAF6" stroke="#412662" strokeWidth="2" />
            <circle cx="134" cy="158" r="4" fill="#5a8a30" />
            <circle cx="146" cy="158" r="4" fill="#E3A857" />

            <rect x="212" y="140" width="36" height="36" rx="4" fill="#EFEAF6" stroke="#412662" strokeWidth="2" />
            <circle cx="224" cy="158" r="4" fill="#412662" opacity="0.5" />
            <circle cx="236" cy="158" r="4" fill="#5a8a30" />

            {/* hanging open sign */}
            <line x1="240" y1="140" x2="240" y2="146" stroke="#412662" strokeWidth="1.5" />
            <g transform="translate(240, 146)">
              <g className={styles.signSwing}>
                <rect x="-11" y="0" width="22" height="13" rx="2" fill="#476226" />
                <path d="M-5 6.5l3 3 6-6" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>

            {/* door */}
            <path d="M177 224v-46a18 18 0 0 1 36 0v46z" fill="#412662" opacity="0.85" />
            <circle cx="205" cy="200" r="2" fill="#E3A857" />

            {/* package by the door */}
            <g transform="translate(140, 202)">
              <g className={styles.packageBob}>
                <rect x="-14" y="-14" width="28" height="24" rx="2" fill="#E3A857" />
                <path d="M-14 -4h28" stroke="#fff" strokeWidth="2" opacity="0.7" />
                <path d="M0 -14v24" stroke="#fff" strokeWidth="2" opacity="0.7" />
              </g>
            </g>

            {/* potted plant by the door */}
            <g transform="translate(235, 210)">
              <path d="M-12 0h24l-4 16h-16z" fill="#412662" />
              <g className={styles.leafSway}>
                <ellipse cx="-4" cy="-14" rx="9" ry="6" fill="#476226" transform="rotate(-25 -4 -14)" />
                <ellipse cx="6" cy="-16" rx="9" ry="6" fill="#5a8a30" transform="rotate(20 6 -16)" />
                <ellipse cx="1" cy="-22" rx="8" ry="6" fill="#5a8a30" />
              </g>
            </g>

            {/* floating phone showing the same store */}
            <g transform="translate(305, 150)">
              <rect x="-24" y="-38" width="48" height="86" rx="10" fill="#ffffff" stroke="#412662" strokeWidth="3" />
              <rect x="-18" y="-30" width="36" height="58" rx="3" fill="#EFEAF6" />
              <rect x="-15" y="-27" width="14" height="14" rx="2" fill="#476226" />
              <rect x="1" y="-27" width="14" height="14" rx="2" fill="#E3A857" />
              <rect x="-15" y="-10" width="14" height="14" rx="2" fill="#5a8a30" />
              <rect x="1" y="-10" width="14" height="14" rx="2" fill="#412662" opacity="0.5" />
              <rect x="-8" y="38" width="16" height="3" rx="1.5" fill="#412662" opacity="0.4" />
              <circle className={styles.twinkleSlow} cx="30" cy="-40" r="3" fill="#476226" opacity="0.5" />
            </g>
          </svg>
    </IllustrationSection>
  );
}
