"use client";

import { useState } from "react";
import styles from "./ServiceTiers.module.css";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import type { ServicePlan } from "@/lib/services";

interface ServiceTiersProps {
  id?: string;
  title?: string;
  subtitle?: string;
  plans: ServicePlan[];
  notes?: string[];
  notesTitle?: string;
  tinted?: boolean;
  expandable?: boolean;
}

export default function ServiceTiers({
  id = "plans",
  title,
  subtitle,
  plans,
  notes,
  notesTitle,
  tinted = true,
  expandable = false,
}: ServiceTiersProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`${styles.section} ${tinted ? styles.tinted : ""}`}
      id={id}
    >
      <div className={styles.inner}>
        {(title || subtitle) && (
          <div className={styles.titleGroup}>
            {title && <h2 className={`h2 ${styles.title}`}>{title}</h2>}
            {subtitle && (
              <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
            )}
          </div>
        )}

        <div className={styles.cards}>
          {plans.map((plan) => {
            const visibleItems = expandable
              ? plan.included.slice(0, 3)
              : plan.included;
            const hiddenItems = expandable ? plan.included.slice(3) : [];
            const showExtras = !expandable || expanded;

            return (
              <div
                key={plan.title}
                className={`${styles.card} ${plan.highlighted ? styles.highlighted : ""}`}
              >
                {plan.badge && (
                  <div className={styles.badge}>{plan.badge}</div>
                )}
                <div className={styles.cardBody}>
                  <p className={styles.planTitle}>{plan.title}</p>
                  <p className={styles.price}>
                    {plan.price}
                    {plan.priceNote && (
                      <span className={styles.priceNote}> {plan.priceNote}</span>
                    )}
                  </p>
                  <p className={styles.description}>{plan.description}</p>
                  <div className={styles.featureList}>
                    <p className={styles.featureLabel}>מה כלול:</p>
                    <ul>
                      {visibleItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                      {expanded &&
                        hiddenItems.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  {showExtras && plan.suitable && (
                    <p className={styles.suitable}>{plan.suitable}</p>
                  )}
                  {showExtras && plan.focus && (
                    <p className={styles.focus}>{plan.focus}</p>
                  )}
                </div>
                <div className={styles.cardFooter}>
                  {expandable && (
                    <button
                      type="button"
                      className={`btn-secondary ${styles.btnSmall}`}
                      onClick={() => setExpanded((prev) => !prev)}
                    >
                      {expanded ? "קרא פחות" : "קרא עוד"}
                    </button>
                  )}
                  <OpenContactModalButton className={styles.cta}>
                    לפרטים ותיאום
                  </OpenContactModalButton>
                </div>
              </div>
            );
          })}
        </div>

        {notes && notes.length > 0 && (
          <div className={styles.notes}>
            {notesTitle && <p className={styles.notesTitle}>{notesTitle}</p>}
            <ul>
              {notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
