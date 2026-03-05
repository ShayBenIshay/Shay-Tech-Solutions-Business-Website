"use client";

import { useState } from "react";
import styles from "./EStoresSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const plans = [
  {
    // badge: '⏱️ הכי מהיר',
    title: "חנות אינטרנטית – התחלה חכמה",
    description:
      "פתרון מהיר ויעיל לעסקים שרוצים להתחיל למכור אונליין בלי להסתבך.",
    whatIncluded: [
      "הקמת חנות על בסיס תבנית מקצועית ומוכנה",
      "עיצוב נקי ומסודר",
      "התאמות בסיסיות לצבעים וללוגו",
      "הגדרת סליקה, משלוחים ומיסים",
      "העלאה של עד 20 מוצרים",
      "הדרכה קצרה לניהול החנות",
    ],
    suitable: "עסק בתחילת הדרך / מוצרי בוטיק / מי שרוצה לבדוק את השוק במהירות.",
    focus: "🎯 ממוקד מהירות, פונקציונליות ויציאה לאוויר",
  },
  {
    badge: "⭐ הכי פופולרי",
    title: "חנות שמוכרת מעל המצופה",
    description:
      'חנות שנבנית עם מחשבה שיווקית ומניעה לפעולה – לא רק "יפה", אלא עובדת.',
    whatIncluded: [
      "הכל מדיל START",
      "עמוד ראשי מניע למכירה (Hero, מסרים, קריאות לפעולה)",
      "תבנית איכותית עם התאמות אישיות לצרכים שלך",
      "שיפור חוויית משתמש (UX)",
      "מבנה חנות חכם לקטגוריות ומוצרים",
      "העלאה של עד 60 מוצרים",
      "התאמה למובייל בצורה מדויקת",
      "הדרכה מלאה לניהול החנות",
    ],
    suitable: "עסק שרוצה למכור ברצינות, לבנות אמון ולהגדיל המרות.",
    focus: "🎯 ממוקד מכירות, חוויית משתמש ומיתוג",
    highlighted: true,
  },
  {
    // badge: "🌱 צמיחה עסקית",
    title: "חנות פרימיום שנבנית במיוחד בשבילך",
    description: "לא תבנית שמותאמת – אלא חנות שמתוכננת עבורך מהיסוד.",
    whatIncluded: [
      "אפיון מלא של החנות והצרכים העסקיים",
      "בניית תבנית ייחודית בהתאמה אישית",
      "שליטה מלאה בכל חלק באתר (עיצוב + מבנה)",
      "חוויית משתמש מתקדמת ומבודלת",
      "היררכיית תוכן ומכירה חכמה",
      "העלאה של עד 150 מוצרים",
      "הכנה להתרחבות עתידית",
      "הדרכה מקיפה + ליווי בהשקה",
    ],
    suitable: "מותגים, חנויות עם נפח מכירות, עסקים שרוצים לבלוט ולהוביל.",
    focus: "🎯 ממוקד מיתוג חזק, גמישות וצמיחה עסקית",
  },
];

export default function EStoresSection({
  title = "חנויות woocommerce",
  subtitle = "חנות אינטרנטית – בשלושה מסלולים ברורים",
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.section} id="estores">
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.title}`}>{title}</h2>
          <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        </div>

        <div className={styles.cards}>
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ""}`}
            >
              {plan.highlighted && (
                <div className={styles.highlightedBadge}>{plan.badge}</div>
              )}
              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{plan.title}</p>
                <div className={styles.cardDescWrapper}>
                  <div className={styles.cardDesc}>
                    <p>{plan.description}</p>
                    <div className={styles.featureList}>
                      <p className={styles.featureLabel}>מה כלול:</p>
                      <ul>
                        {plan.whatIncluded.slice(0, 3).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                        {expanded &&
                          plan.whatIncluded
                            .slice(3)
                            .map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    {expanded && (
                      <>
                        <div className={styles.suitable}>
                          <p className={styles.suitableLabel}>למי זה מתאים?</p>
                          <p>{plan.suitable}</p>
                        </div>
                        <p className={styles.focus}>{plan.focus}</p>
                      </>
                    )}
                  </div>
                  <button
                    className={`btn-secondary ${styles.btnSmall}`}
                    onClick={() => setExpanded((prev) => !prev)}
                  >
                    {expanded ? "קרא פחות" : "קרא עוד"}
                  </button>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <OpenContactModalButton className={styles.cta}>
                  לעוד פרטים
                </OpenContactModalButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.notes}>
        <p className={styles.notesTitle}>חשוב לדעת</p>
        <ul>
          <li>כל הדילים ניתנים לשדרוג</li>
          <li>ניתן לשלב תחזוקה, אחסון וליווי חודשי</li>
          <li>המחיר נקבע בהתאם להיקף ולצרכים (בשקיפות מלאה)</li>
        </ul>
      </div>
    </section>
  );
}
