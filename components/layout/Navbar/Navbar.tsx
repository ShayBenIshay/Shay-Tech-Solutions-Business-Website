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
        {/* Nav Links — redesign (2026-09): Home/Plans/Project/About/Contact,
            replacing the old Services-dropdown + Portfolio sitemap. Portfolio stays live at
            its existing route, intentionally dropped from the nav (see redesign plan). */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/plans">מסלולים</Link>
          </li>
          <li>
            <Link href="/project">פרויקטים</Link>
          </li>
          <li>
            <Link href="/about">אודות</Link>
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
