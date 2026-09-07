"use client";

import styles from "./ContactIcons.module.css";
import { event } from "@/lib/gtag";
import { PHONE_TEL_HREF, WHATSAPP_URL } from "@/lib/contactInfo";

export default function ContactIcons() {
  return (
    <section className={styles.contactIcons}>
      <a
        href={PHONE_TEL_HREF}
        className={`${styles.link} ${styles.phoneIcon}`}
        aria-label="לשיחה טלפונית"
        onClick={() => event("click_phone", { link_type: "tel" })}
      >
        <span className={styles.iconWrap}>
          <img src="/assets/phone-icon.png" alt="" />
        </span>
        <span className={styles.text}>לשיחה טלפונית</span>
      </a>
      <a
        href={WHATSAPP_URL}
        className={`${styles.link} ${styles.whatsappIcon}`}
        aria-label="לשליחת הודעה"
        onClick={() => event("click_whatsapp", { link_type: "whatsapp" })}
      >
        <span className={styles.iconWrap}>
          <img src="/assets/whatsapp-icon.png" alt="" />
        </span>
        <span className={styles.text}>לשליחת הודעה</span>
      </a>
    </section>
  );
}
