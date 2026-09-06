import styles from "./NiceToMeet.module.css";

export default function NiceToMeet() {
  return (
    <section id="nice-to-meet" className={styles.section}>
      <div className={styles.inner}>
        <div className="section-title-center">
          <h2 className={`h2 ${styles.headline}`}>מי עומד מאחורי הפרויקטים </h2>
          {/* <p className={`h3 ${styles.subtitle}`}>
            אני מפתח אתרים, חנויות ומערכות עם גישה של סדר, חשיבה עסקית ופתרונות
            שעובדים לאורך זמן.
          </p> */}
          <p className={`h3 ${styles.subtitle}`}>
            אני מפתח אתרים, חנויות ומערכות עם גישה של סדר, חשיבה עסקית ופתרונות
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.textWrap}>
            <h3 className="h3">שי בן ישי - נעים להכיר</h3>
            <div className={styles.textGroup}>
              <p>
                אני שי, מפתח אתרים ובוגר מדעי המחשב בטכניון, עם ניסיון בתכנות,
                עיצוב ופיתוח פתרונות טכנולוגיים לעסקים.רוצים אתר מקצועי שיקפיץ
                את העסק קדימה? אני כאן בשביל זה.
              </p>
              <p>
                אני עובד עם עסקים שרוצים אתר או מערכת שעובדים בשבילם – לא עוד
                פרויקט חד־פעמי, אלא תשתית לצמיחה. העבודה שלי משלבת פיתוח, חוויית
                משתמש והבנה של צרכים עסקיים.
              </p>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <img src="/assets/Selfie.webp" alt="Nice to meet" />
          </div>
        </div>
      </div>
    </section>
  );
}
