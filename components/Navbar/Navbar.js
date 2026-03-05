"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const peakScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
      <nav className={styles.nav}>
        {/* Nav Links */}
        <ul className={styles.navLinks}>
          <li className={styles.dropdown}>
            <a href="/services" className={styles.dropdownTrigger}>
              שירותים
              <span className={styles.dropdownArrow}>▾</span>
            </a>
            <div className={styles.dropdownMenu}>
              <a href="/services/estore" className={styles.dropdownItem}>
                חנות אינטרנטית
              </a>
              <a href="/services/wordpress" className={styles.dropdownItem}>
                וורדפרס
              </a>
              <a href="/services/hosting" className={styles.dropdownItem}>
                אחסון אתרים
              </a>
              <a href="/services/advertising" className={styles.dropdownItem}>
                פרסום דיגיטלי
              </a>
              <a
                href="/services/custom-development"
                className={styles.dropdownItem}
              >
                פיתוח אישי
              </a>
            </div>
          </li>
          <li>
            <a href="/portfolio">עבודות</a>
          </li>
          <li>
            <a href="/aboutme">קצת עליי</a>
          </li>
          <li>
            <a href="/contact">צור קשר</a>
          </li>
        </ul>

        <a href="/" className={styles.logo}>
          <img
            src="/assets/fullLogo.png"
            alt="Shay Tech Solutions"
            className={styles.fullLogo}
          />
        </a>
      </nav>
    </header>
  );
}
