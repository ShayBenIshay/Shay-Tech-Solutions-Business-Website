'use client';

import styles from "./ContactIcons.module.css";
import { event } from "@/lib/gtag";

export default function ContactIcons() {
  return (
    <section className={styles.contactIcons}>
      <a
        href="tel:0547573914"
        className={`${styles.link} ${styles.phoneIcon}`}
        aria-label="לשיחה טלפונית"
        onClick={() => event('click_phone', { link_type: 'tel' })}
      >
        <span className={styles.iconWrap}>
          <img src="/assets/phone-icon.png" alt="" />
        </span>
        <span className={styles.text}>לשיחה טלפונית</span>
      </a>
      <a
        href="https://wa.me/972547573914"
        className={`${styles.link} ${styles.whatsappIcon}`}
        aria-label="לשליחת הודעה"
        onClick={() => event('click_whatsapp', { link_type: 'whatsapp' })}
      >
        <span className={styles.iconWrap}>
          <img src="/assets/whatsapp-icon.png" alt="" />
        </span>
        <span className={styles.text}>לשליחת הודעה</span>
      </a>
    </section>
  );
}
