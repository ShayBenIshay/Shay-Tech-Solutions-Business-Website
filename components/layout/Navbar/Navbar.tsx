"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useScrollListener } from "@/lib/useScrollListener";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const peakScrollY = useRef(0);

  useScrollListener(() => {
    const currentScrollY = window.scrollY;
    const revealThreshold = window.innerHeight * 0.4;

    if (currentScrollY > lastScrollY.current) {
      peakScrollY.current = currentScrollY;
      if (currentScrollY > 80) {
        setHidden(true);
      }
    } else {
      const scrolledUp = peakScrollY.current - currentScrollY;
      if (currentScrollY === 0 || scrolledUp >= revealThreshold) {
        setHidden(false);
      }
    }

    lastScrollY.current = currentScrollY;
  });

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
      <nav className={styles.nav}>
        {/* Nav Links */}
        <ul className={styles.navLinks}>
          <li className={styles.dropdown}>
            <Link href="/services" className={styles.dropdownTrigger}>
              שירותים
              <span className={styles.dropdownArrow}>▾</span>
            </Link>
            <div className={styles.dropdownMenu}>
              <Link href="/services/estore" className={styles.dropdownItem}>
                חנות אינטרנטית
              </Link>
              <Link href="/services/website" className={styles.dropdownItem}>
                בניית אתרים
              </Link>
              <Link href="/services/hosting" className={styles.dropdownItem}>
                אחסון אתרים
              </Link>
              <Link
                href="/services/custom-development"
                className={styles.dropdownItem}
              >
                פיתוח אישי
              </Link>
            </div>
          </li>
          <li>
            <Link href="/portfolio">עבודות</Link>
          </li>
          <li>
            <Link href="/aboutme">קצת עליי</Link>
          </li>
          <li>
            <Link href="/contact">צור קשר</Link>
          </li>
        </ul>

        <Link href="/" className={styles.logo}>
          <img
            src="/assets/fullLogo.webp"
            alt="Shay Tech Solutions"
            className={styles.fullLogo}
          />
        </Link>
      </nav>
    </header>
  );
}
