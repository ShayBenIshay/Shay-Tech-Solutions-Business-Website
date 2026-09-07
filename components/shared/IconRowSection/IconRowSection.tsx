import type { CSSProperties } from "react";
import styles from "./IconRowSection.module.css";

export interface IconRowItem {
  src: string;
  label: string;
}

interface IconRowSectionProps {
  id?: string;
  title?: string;
  items: IconRowItem[];
  iconSize?: number;
  itemWidth?: number;
}

export default function IconRowSection({
  id,
  title,
  items,
  iconSize = 64,
  itemWidth,
}: IconRowSectionProps) {
  return (
    <section
      className={styles.section}
      id={id}
      style={
        {
          "--icon-size": `${iconSize}px`,
          ...(itemWidth ? { "--item-width": `${itemWidth}px` } : {}),
        } as CSSProperties
      }
    >
      <div className={styles.inner}>
        {title && <h2 className={styles.headline}>{title}</h2>}
        <div className={styles.iconsRow}>
          {items.map((item) => (
            <div key={item.label} className={styles.iconItem}>
              <div className={styles.iconWrap}>
                <img src={item.src} alt={item.label} className={styles.icon} />
              </div>
              <p className={styles.iconLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
