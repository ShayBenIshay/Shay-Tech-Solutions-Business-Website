"use client";

import { useState } from "react";
import styles from "./FullPortfolioGrid.module.css";
import PortfolioCard from "@/components/shared/PortfolioCard/PortfolioCard";
import { caseStudies, PORTFOLIO_CATEGORY } from "@/lib/caseStudies";

const ALL_FILTER = "הכל";
const PAGE_SIZE = 6;

const filters = [
  { label: ALL_FILTER, value: ALL_FILTER },
  ...Object.values(PORTFOLIO_CATEGORY).map((category) => ({
    label: category,
    value: category,
  })),
];

export default function FullPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems =
    activeFilter === ALL_FILTER
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  function handleFilterChange(value: string) {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>עבודות נבחרות</h2>
          <p className={styles.sectionSubtitle}>פרויקטים שבנויים לעבוד</p>
        </div>

        <div className={styles.filterBar}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.filterBtnActive : ""
              }`}
              onClick={() => handleFilterChange(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleItems.map((item) => (
            <PortfolioCard
              key={item.slug}
              item={item}
              styles={styles}
              ctaLabel="לפרויקט המלא"
            />
          ))}
        </div>

        {hasMore && (
          <button
            type="button"
            className={`btn-secondary ${styles.loadMore}`}
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            עוד עבודות
          </button>
        )}
      </div>
    </section>
  );
}
