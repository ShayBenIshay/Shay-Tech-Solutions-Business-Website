"use client";

import { useState } from "react";
import styles from "./ScrollToTop.module.css";
import { useScrollListener } from "@/lib/useScrollListener";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useScrollListener(() => {
    const scrolled = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setVisible(pageHeight > 0 && scrolled / pageHeight >= 0.3);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.btn} ${visible ? styles.btnVisible : ""}`}
      aria-label="חזרה לראש העמוד"
    >
      ↑
    </button>
  );
}
