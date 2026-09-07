import Link from "next/link";
import Hero from "@/components/sections/Hero/Hero";
import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";
import ProcessJourney, {
  type JourneyStep,
} from "@/components/sections/ProcessJourney/ProcessJourney";
import ServiceTiers from "@/components/sections/ServiceTiers/ServiceTiers";
import FAQ, { type FAQItem } from "@/components/sections/FAQ/FAQ";
import CTABanner from "@/components/sections/CTABanner/CTABanner";
import type { ServicePlan } from "@/lib/services";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shay Tech Solutions | בית אחד לניהול, תחזוקה ופיתוח האתר והמערכות שלך",
  description:
    "בית טכנולוגי אחד לעסק: ניהול, אחסון, פיתוח ופרויקטים מותאמים אישית (React, Node.js, WordPress) במחיר שקוף וקבוע מראש.",
  alternates: { canonical: "https://www.shaytechsolutions.com" },
};

const painCards: GridCard[] = [
  {
    title: "הפינג-פונג האינסופי",
    description:
      "חברת האחסון טוענת שהבעיה בקוד, המתכנת טוען שהשרת איטי, ואתם נשארים תקועים באמצע בלי מענה.",
  },
  {
    title: "הפחד משינויים ושדרוגים",
    description:
      "רוצים לעדכן מחיר, להוסיף דף או להתקין תוסף? הפחד שמשהו נשבר גורם לאתר או למערכת לעמוד במקום.",
  },
  {
    title: "חוסר וודאות תקציבי",
    description:
      "הצעות מחיר משתנות, חשבוניות מפתיעות לפי שעה בסוף החודש, ואפס שליטה בתקציב הטכנולוגי של העסק.",
  },
  {
    title: "כשהמפתח פשוט נעלם",
    description:
      "מי שבנה לכם את האתר כבר לא עונה, ואף אחד אחר לא מכיר את הקוד, הסיסמאות או האופן שבו המערכת בנויה. כל תיקון קטן הופך למשימה בלתי אפשרית.",
  },
];

const whyUsCards: GridCard[] = [
  {
    title: "תהליך מובנה ומדיד",
    description:
      "אנחנו לא מנחשים ולא קופצים לקוד בלי תכנון. כל פרויקט או שדרוג עובר אפיון והגדרת דרישות ברורה.",
  },
  {
    title: "תמחור שקוף מא' עד ת'",
    description:
      "בלי סעיפים נסתרים ובלי הפתעות. אתם יודעים בדיוק מה כולל כל מסלול ומה עלות כל שעה.",
  },
  {
    title: "גמישות ומודולריות",
    description:
      "צריכים רק אחסון ותחזוקה? מעולה. צריכים פיתוח אקטיבי? תוסיפו בנק שעות שמתאים לקצב שלכם.",
  },
  {
    title: "שליטה בטכנולוגיות מתקדמות",
    description:
      "עבודה עם סביבות הפיתוח והתשתיות המתקדמות בשוק – מוורדפרס ועד מערכות Full-Stack מורכבות.",
  },
];

// NOTE: ProcessJourney has no built-in step-number visual, so numbers are embedded in the
// label text here. `scene` selects which of the 4 built-in SVG icons renders per step.
const howItWorksSteps: JourneyStep[] = [
  {
    scene: "intro",
    label:
      "01. שיחת אפיון וסנכרון — מבינים מה העסק שלכם צריך: תחזוקה ואחסון, בנק שעות פיתוח, או קמפיין צמיחה",
  },
  {
    scene: "quote",
    label: "02. הצעה ברורה למסלול המתאים — מחיר חודשי קבוע שמתאים בדיוק לצרכים שלכם, בלי הפתעות",
  },
  {
    scene: "build",
    label: "03. מעבר חלק ויישור קו — מיגרציה שקטה, בדיקת אבטחה וביצועים, והתחלה נקייה",
  },
  {
    scene: "launch",
    label:
      "04. ליווי שוטף אחרי העלייה לאוויר — האתר מתוחזק ומאובטח בשוטף, ובנק השעות זמין לכל שינוי או רעיון חדש",
  },
];

const plansPreview: ServicePlan[] = [
  {
    title: "אחסון + ניהול ותחזוקה",
    price: "₪500",
    priceNote: "/ חודש",
    badge: "בסיס חובה",
    highlighted: true,
    serviceValue: "maintenance",
    description:
      "אחסון שרת מהיר, גיבויים יומיים, עדכוני תוספים ומערכת, אבטחה אקטיבית וטיפול בתקלות שוטפות.",
    included: [
      "אחסון שרת מהיר ומאובטח",
      "גיבויים יומיים ועדכוני מערכת שוטפים",
      "טיפול בתקלות שרת ללא דיחוי",
    ],
    suitable: "מתאים לכל עסק שרוצה אתר יציב, בלי לחשוב עליו.",
    focus: "🎯 שקט נפשי ויציבות",
  },
  {
    title: "בנק שעות פיתוח (Retainer)",
    price: "החל מ-₪600",
    priceNote: "/ חודש",
    badge: "פיתוח ושינויים",
    serviceValue: "retainer",
    description:
      "בנק שעות חודשי (3, 5 או 10 שעות) לעדכוני תוכן, פיתוח פיצ'רים חדשים, שיפורים ועיצוב.",
    included: [
      "3, 5 או 10 שעות פיתוח בחודש",
      "עדכוני תוכן ותכונות חדשות",
      "גמישות לבחור את הכמות המתאימה לעסק",
    ],
    suitable: "מתאים לעסקים שצריכים פיתוח שוטף בלי לשכור מפתח פנימי.",
    focus: "🎯 גמישות וקצב מותאם אישית",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "מה בדיוק כלול בשירות האחסון, ומה לא?",
    answer:
      "שירות האחסון בלבד (₪350/חודש) כולל את אחזקת השרת, הדומיין והבטחת זמינות האתר. הוא אינו כולל עדכוני תוכן, שינויים עיצוביים, עדכוני תוספים או עבודות פיתוח. בשביל שקט נפשי מלא מומלץ לבחור במסלול אחסון + ניהול ותחזוקה (₪500/חודש).",
  },
  {
    question: "אני צריך גם אחסון וגם שעות פיתוח – איך זה עובד?",
    answer:
      'שני השירותים נמכרים כסעיפים נפרדים ושקופים: בוחרים במסלול "אחסון + ניהול ותחזוקה" (₪500/חודש), ומוסיפים אליו את ריטיינר השעות המתאים לכם (3, 5 או 10 שעות חודשיות). שתי השורות מופיעות יחד בחשבונית חודשית אחת.',
  },
  {
    question: "כמה זמן לוקח עד שרואים תוצאות?",
    answer:
      "בתחזוקה ואחסון – התוצאה מיידית: האתר עולה במהירות, מאובטח ועובד ברצף. בפרויקטי פיתוח או קמפיינים שיווקיים, לוחות הזמנים נקבעים בצורה מדויקת במסגרת שלב האפיון הראשוני.",
  },
  {
    question: "מה קורה אם אני צריך יותר שעות ממה שכלול בתוכנית הריטיינר שלי?",
    answer:
      "אנחנו עובדים בשקיפות מלאה. במידה ואנחנו רואים שאתם מתקרבים לניצול מלא של מכסת השעות החודשית, נודיע לכם מראש. שעות נוספות מעבר למכסת הריטיינר מתומחרות בתעריף השעתי הסטנדרטי שלנו (₪300 / שעה), או שתוכלו לבחור לשדרג למסלול ריטיינר מורחב יותר.",
  },
  {
    question: "אם אני משלם על אפיון פרויקט ואז מחליט לא להמשיך לבנייה?",
    answer:
      "שלב האפיון הוא מוצר עצמאי לחלוטין. בסיומו אתם מקבלים מסמך אפיון ארכיטקטוני ומפרט טכני מלא שהוא נכס שלכם. אתם רשאים להמשיך איתנו לשלב הפיתוח, או לקחת את המסמך ולבצע אותו עם כל גורם אחר.",
  },
  {
    question: "אין לי אתר או מערכת בכלל – מאיפה מתחילים?",
    answer:
      "מתחילים בעמוד הפרויקטים שלנו! נקבע שיחת אפיון ראשונית (במחיר מוגדר מראש של ₪600–₪2,000 בהתאם למורכבות הפרויקט), נבנה את תוכנית העבודה, ולאחר מכן תקבלו הצעת מחיר מדויקת וסופית לבנייה.",
  },
  {
    question: "האם אני תלוי בכם לתמיד?",
    answer:
      "ממש לא. האתר, הקוד, התכנים והנכסים שייכים לכם באופן מלא. אנחנו מאמינים בשימור לקוחות בזכות שירות מעולה ושקט נפשי, ולא באמצעות כבילה או נעילה טכנולוגית.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        headline="מפסיקים להתעסק עם האתר. מתחילים להתמקד בעסק."
        subtitle="בית טכנולוגי אחד שמנהל, מתחזק ומפתח את המערכות והאתרים שלכם – במחיר חודשי קבוע ובלי הפתעות."
        btnOutline="יש לכם פרויקט חדש בקנה?"
        btnOutlineHref="/project"
        btnPrimary="בואו נבדוק מה מתאים לעסק שלכם"
        btnPrimaryHref="#home-plans-preview"
      />

      <CardGridSection
        id="home-pain"
        title="מכירים את הרגע הזה שהאתר נופל... בדיוק כשיש קמפיין באוויר?"
        cards={painCards}
      />

      <section className={styles.solution} id="home-solution">
        <div className={styles.solutionInner}>
          <h2 className="h2">STS: כתובת אחת. מעטפת אחת. שקט נפשי מלא.</h2>
          <p className="body-text">
            אנחנו לא עוד חברת אחסון גנרית ולא פרילנסר מזדמן. STS פועלת כזרוע הטכנולוגית של
            העסק שלכם.
          </p>
          <ul className={styles.solutionList}>
            <li>
              כתובת אחת לכל שאלה: לא צריך לנחש למי להתקשר. אנחנו מנהלים את האחסון, התחזוקה,
              האבטחה והפיתוח.
            </li>
            <li>
              תקציב ידוע מראש: מודל מנויים וריטיינרים שקוף. אתם יודעים בדיוק מה העלויות שלכם
              בכל חודש.
            </li>
            <li>
              עבודה אקטיבית ברצף: האתר והמערכות שלכם נשארים מעודכנים, מאובטחים ומהירים –
              באופן קבוע.
            </li>
          </ul>
          <Link href="/plans" className="btn-secondary">
            לצפייה בתוכניות התחזוקה והפיתוח
          </Link>
        </div>
      </section>

      <ProcessJourney
        title="3 צעדים פשוטים לשקט טכנולוגי"
        steps={howItWorksSteps}
        noBackground
      />

      <ServiceTiers
        id="home-plans-preview"
        title="מסלולים מותאמים לקצב הצמיחה של העסק"
        subtitle="ניתן לשלב בין מסלול התחזוקה לבנק שעות פיתוח בהתאם לצורכי העסק"
        plans={plansPreview}
      />

      <section className={styles.projectPreview} id="home-project-preview">
        <div className={styles.projectPreviewInner}>
          <h2 className="h2">צריכים לבנות מערכת, אפליקציה או אתר מותאם אישית?</h2>
          <p className="body-text">
            פיתוח מוצלח לא מתחיל בקוד – הוא מתחיל בארכיטקטורה ותכנון מדויק. כל פרויקט חדש
            מתחיל בשלב אפיון ממוקד (₪600–₪2,000), שבו נגדיר את הארכיטקטורה, הדרישות והתוכנית
            המלאה – עוד לפני שמתחילים לבנות.
          </p>
          <Link href="/project" className="btn-secondary">
            למידע נוסף על תהליך הפרויקטים והאפיון
          </Link>
        </div>
      </section>

      <CardGridSection
        id="home-why-us"
        title="למה עסקים בוחרים לעבוד עם STS?"
        cards={whyUsCards}
        variant="dark"
      />

      <FAQ id="home-faq" title="שאלות נפוצות ותשובות שקופות" items={faqItems} />

      <CTABanner />
    </main>
  );
}
