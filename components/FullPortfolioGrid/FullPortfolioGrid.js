"use client";

import { useState } from "react";
import styles from "./FullPortfolioGrid.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const imgBarTzemach = "/assets/Portfolio-BarTzemach.png";
const imgLaptop = "/assets/Laptop-Mockup.png";
const imgLapa = "/assets/Portfolio-Lapa.png";
const imgNewsletterClub = "/assets/Portfolio-NewsletterClub.png";

const portfolioItems = [
  {
    title: "Newsletter Club",
    type: "תוסף",
    category: "SaaS",
    cta: "לבניית תוסף",
    cta2: "לפרויקט המלא",
    screenshot: imgNewsletterClub,
    hasRealImage: true,
    href: "/portfolio/newsletter-club",
  },
  {
    title: "Bar Tzemach Jewelry",
    type: "חנות אינטרנטית",
    category: "חנויות אינטרנטיות",
    cta: "לבניית חנות",
    cta2: "לפרויקט המלא",
    screenshot: imgBarTzemach,
    hasRealImage: true,
    href: "/portfolio/bartzemachjewelry",
  },
  {
    title: "Telegram Bot",
    type: "פיתוח מותאם אישית",
    category: "פיתוח מותאם אישית",
    cta: "לבניית בוט",
    cta2: "לפרויקט המלא",
    screenshot: null,
    hasRealImage: false,
    href: "/portfolio/telegram-bot",
  },
  {
    title: "LAPA",
    type: "שיפוץ אתר",
    category: "Wordpress",
    cta: "לשיפוץ אתר",
    cta2: "לפרויקט המלא",
    screenshot: imgLapa,
    hasRealImage: true,
    href: "/portfolio/lapa",
  },
  {
    title: "Hayot",
    type: "שיפוץ אתר",
    category: "Wordpress",
    cta: "לשיפוץ אתר",
    cta2: "לפרויקט המלא",
    screenshot: null,
    hasRealImage: false,
    href: "/portfolio/hayot",
  },
  {
    title: "Be The Way",
    type: "פיתוח מותאם אישית",
    category: "פיתוח מותאם אישית",
    cta: "לפיתוח מותאם",
    cta2: "לפרויקט המלא",
    screenshot: null,
    hasRealImage: false,
    href: "/portfolio/be-the-way",
  },
];

const filters = [
  { label: "הכל", value: "הכל" },
  { label: "חנויות אינטרנטיות", value: "חנויות אינטרנטיות" },
  { label: "Wordpress", value: "Wordpress" },
  { label: "פיתוח מותאם אישית", value: "פיתוח מותאם אישית" },
  { label: "SaaS", value: "SaaS" },
];

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        {/* Title block above laptop */}
        <div className={styles.titleBlock}>
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardType}>{item.type}</p>
        </div>
        {/* Laptop frame on top */}
        <div className={styles.laptopWrap}>
          {/* Screenshot clipped inside laptop screen area */}
          <div className={styles.screenshotClip}>
            {item.hasRealImage ? (
              <img
                src={item.screenshot}
                alt={item.title}
                className={styles.screenshot}
              />
            ) : (
              <div className={styles.placeholderScreen}>
                <span className={styles.placeholderText}>{item.title}</span>
              </div>
            )}
          </div>
          <img src={imgLaptop} alt="laptop" className={styles.laptop} />
        </div>
      </div>
      <div className={styles.cardActions}>
        <OpenContactModalButton className="btn-primary">
          {item.cta}
        </OpenContactModalButton>
        <a href={item.href} className="btn-secondary">
          {item.cta2}
        </a>
      </div>
    </div>
  );
}

export default function FullPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("הכל");

  const filteredItems =
    activeFilter === "הכל"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>עבודות נבחרות</h2>
          <p className={styles.sectionSubtitle}>פרויקטים שבנויים לעבוד</p>
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>

        {/* Load more */}
        {/* <a href="#portfolio" className="btn-secondary">
          עוד עבודות
        </a> */}
      </div>
    </section>
  );
}
