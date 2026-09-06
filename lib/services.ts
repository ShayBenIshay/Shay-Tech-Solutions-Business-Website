export interface ServicePlan {
  title: string;
  price: string;
  priceNote?: string;
  description: string;
  included: string[];
  suitable: string;
  focus: string;
  badge?: string;
  highlighted?: boolean;
}

// Website-only pricing — no BusinessBrain product/rate-card for one-time site builds yet.
export const websiteRenovationPlans: ServicePlan[] = [
  {
    title: "שיפוץ קל",
    price: "₪2,500",
    priceNote: "תשלום חד פעמי",
    description: "ניקוי ויזואלי, מהירות ויציבות לאתר קיים - בלי לשנות הכל.",
    included: [
      "WordPress או אתר קיים",
      "עדכון עיצוב ופלאגינים",
      "אופטימיזציית מהירות בסיסית",
      "תיקון שגיאות מובייל",
    ],
    suitable: "מתאים לאתר תקין שנראה ישן, איטי או לא מסודר.",
    focus: "🎯 מהירות, ניקיון ויציבות",
  },
  {
    title: "שיפוץ כבד",
    price: "₪4,000",
    priceNote: "תשלום חד פעמי",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description: "עיצוב מחדש של עמודים ראשיים, מבנה תוכן משודרג ותכונות חדשות.",
    included: [
      "הכל מחבילת שיפוץ קל",
      "עיצוב מחדש של עמודים ראשיים",
      "מבנה תוכן ושיווק משודרג",
      "הוספת סקשנים ותכונות חדשות",
    ],
    suitable: "מתאים לאתר שצריך שדרוג משמעותי במראה ובתוכן.",
    focus: "🎯 עיצוב, מבנה ותוכן שיווקי",
  },
  {
    title: "שיפוץ + עיצוב מחדש",
    price: "₪8,000",
    priceNote: "תשלום חד פעמי",
    description:
      "תכנון מחדש של כל הzflows, עיצוב רענן ובנייה מהיסוד על בסיס קיים.",
    included: [
      "אפיון מלא של הצרכים והflows",
      "עיצוב UI מחדש מאפס",
      "בנייה מחדש (WordPress / React)",
      "העברת תוכן והגדרות",
      "הדרכה לניהול עצמאי",
    ],
    suitable: "מתאים לאתר שדורש חידוש מוחלט - מראה, מבנה ואסטרטגיה.",
    focus: "🎯 מחדש מהיסוד, מותאם לעסק",
  },
];

// Website-only pricing — no BusinessBrain product/rate-card for one-time site builds yet.
export const websiteLandingPlans: ServicePlan[] = [
  {
    title: "דף נחיתה",
    price: "החל מ-₪4,000",
    priceNote: "תשלום חד פעמי",
    description: "דף נחיתה ממוקד המרה לקמפיין, שירות או אירוע ספציפי.",
    included: [
      "אפיון ועיצוב ממוקד המרה",
      "כתיבה שיווקית בסיסית",
      "שילוב טופס לידים",
      "הגדרת Google Analytics",
      "מותאם מובייל מלא",
    ],
    suitable: "מתאים לקמפיין פרסומי, שירות חדש או אירוע.",
    focus: "🎯 ממוקד, ממיר ומדיד",
  },
];

// Website-only pricing — no BusinessBrain product/rate-card for one-time site builds yet.
export const websiteBrandingPlans: ServicePlan[] = [
  {
    title: "בסיסי",
    price: "₪8,000",
    priceNote: "תשלום חד פעמי",
    description: "אתר תדמית מקצועי עם עמודים עיקריים וזהות חזקה.",
    included: [
      "עד 5 עמודים",
      "עיצוב מותאם לעסק",
      "WordPress או React/Vite",
      "מותאם מובייל ו-SEO בסיסי",
    ],
    suitable: "מתאים לעסקים קטנים הזקוקים לנוכחות דיגיטלית ראשונה.",
    focus: "🎯 מקצועי, מהיר, ברמת כניסה",
  },
  {
    title: "מתקדם",
    price: "₪15,000",
    priceNote: "תשלום חד פעמי",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description: "אתר תדמית מלא עם אפיון מעמיק, עיצוב ייחודי ותוכן שיווקי.",
    included: [
      "עד 10 עמודים",
      "אפיון ועיצוב UI מלא",
      "כתיבת תוכן שיווקי",
      "SEO on-page",
      "אינטגרציות (CRM, Analytics, טפסים)",
    ],
    suitable: "מתאים לעסקים שרוצים אתר שמוכר - לא רק נראה יפה.",
    focus: "🎯 עיצוב, תוכן ושיווק יחד",
  },
  {
    title: "פרמיום",
    price: "₪25,000",
    priceNote: "תשלום חד פעמי",
    description:
      "פרויקט אתר מלא - אפיון, עיצוב, פיתוח, תוכן ואסטרטגיה דיגיטלית.",
    included: [
      "עמודים ללא הגבלה",
      "אפיון אסטרטגי מלא",
      "עיצוב UI/UX מותאם אישית",
      "פיתוח React / WordPress",
      "קידום SEO + אסטרטגיה",
      "ליווי חודש לאחר השקה",
    ],
    suitable: "מתאים לחברות ועסקים שרוצים פרויקט דיגיטל מושלם.",
    focus: "🎯 End-to-end, ממוצר עד שיווק",
  },
];

// Mirrors BusinessBrain: services/hosting.md, offers/hosting-management.md,
// offers/hosting-retainer-3hr.md, offers/hosting-retainer-5hr.md (current_list_price).
export const hostingPlans: ServicePlan[] = [
  {
    title: "אחסון אתר",
    price: "₪350",
    priceNote: "/ חודש",
    description: "אחסון מהיר ומאובטח עם תמיכה טכנית בסיסית.",
    included: [
      "שרת SSD מהיר",
      "SSL חינם",
      "גיבויים יומיים",
      "תמיכה בשגיאות טכניות",
    ],
    suitable: "מתאים לאתרים עם עדכוני תוכן נמוכים.",
    focus: "🎯 יציב, מהיר ובטוח",
  },
  {
    title: "אחסון + ניהול תוכן",
    price: "₪500",
    priceNote: "/ חודש",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description: "אחסון מלא עם עדכוני תוכן לפי דרישה - בלי להתעסק בזה לבד.",
    included: [
      "הכל מחבילת אחסון",
      "עדכוני טקסטים ותמונות",
      "הוספת מוצרים ושירותים",
      "דיווח ביצועים חודשי",
    ],
    suitable: "מתאים לעסקים שמעדכנים תוכן לפחות פעם בחודש.",
    focus: "🎯 גמישות ושקט נפשי",
  },
  {
    title: "אחסון + ריטיינר 3 שעות",
    price: "₪900",
    priceNote: "/ חודש",
    description: "3 שעות פיתוח חודשיות לכל שינוי טכני, שיפור או פיצ'ר שתרצו.",
    included: [
      "הכל מחבילת ניהול תוכן",
      "3 שעות פיתוח חודשיות",
      "עדיפות בתגובה",
      "שיחת עדכון חודשית",
    ],
    suitable: "מתאים לעסקים עם צרכי פיתוח קלים ושוטפים.",
    focus: "🎯 גמישות לתחזוקה שוטפת",
  },
  {
    title: "אחסון + ריטיינר 5 שעות",
    price: "₪1,300",
    priceNote: "/ חודש",
    description: "5 שעות פיתוח חודשיות לכל שינוי טכני, שיפור או פיצ'ר שתרצו.",
    included: [
      "הכל מחבילת ניהול תוכן",
      "5 שעות פיתוח חודשיות",
      "עדיפות בתגובה",
      "שיחת עדכון חודשית",
    ],
    suitable: "מתאים לעסקים עם צרכי פיתוח שוטפים.",
    focus: "🎯 פיתוח שוטף ותמיכה מלאה",
  },
];

// Advertising page — out of scope for the 2026-09 BusinessBrain refresh, left as-is.
export const seoPlans: ServicePlan[] = [
  {
    title: "SEO בסיסי",
    price: "₪2,000",
    priceNote: "תשלום חד פעמי",
    description:
      "אופטימיזציה טכנית ותוך-עמודית - הבסיס שכל אתר צריך כדי להופיע בגוגל.",
    included: [
      "בדיקת מהירות ויישום שיפורים",
      "תגיות Title ו-Meta לכל עמוד",
      "מבנה כותרות (H1–H3)",
      "Sitemap + robots.txt",
      "הגדרת Google Search Console",
    ],
    suitable: "מתאים לאתר שרוצה להופיע בגוגל בלי לשלם על פרסום.",
    focus: "🎯 נראות בגוגל, תוצאות ארוכות טווח",
  },
  {
    title: "SEO מעמיק",
    price: "₪4,500",
    priceNote: "תשלום חד פעמי",
    badge: "⭐ מומלץ",
    highlighted: true,
    description:
      "מחקר מילות מפתח, אסטרטגיית תוכן וביצוע מלא - כדי להוביל את תוצאות החיפוש.",
    included: [
      "הכל מ-SEO בסיסי",
      "מחקר מילות מפתח מעמיק",
      "כתיבת תוכן אופטימיזד",
      "בניית קישורים (לינקבילדינג)",
      "דוח תוצאות חודשי (3 חודשים)",
    ],
    suitable: "מתאים לעסקים שרוצים להוביל את תוצאות החיפוש בתחומם.",
    focus: "🎯 סמכות, נפח חיפוש וצמיחה אורגנית",
  },
];

// Advertising page — out of scope for the 2026-09 BusinessBrain refresh, left as-is.
export const campaignPlans: ServicePlan[] = [
  {
    title: "Light",
    price: "₪1,500",
    priceNote: "/ חודש (+ תקציב פרסום)",
    description: "ניהול קמפיין ממומן בפלטפורמה אחת.",
    included: [
      "הגדרת הקמפיין",
      "כתיבת מודעות",
      "פלטפורמה אחת (גוגל / פייסבוק / אינסטגרם)",
      "דוח ביצועים חודשי",
    ],
    suitable: "מתאים לעסקים שרוצים להתחיל לפרסם.",
    focus: "🎯 חשיפה ולידים ראשונים",
  },
  {
    title: "Standard",
    price: "₪4,000",
    priceNote: "/ חודש (+ תקציב פרסום)",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description: "ניהול קמפיינים בשתי פלטפורמות עם קריאייטיב מלא.",
    included: [
      "הכל מ-Light",
      "2 פלטפורמות",
      "קריאייטיב (גרפיקה / עריכת סרטון)",
      "A/B טסטינג שוטף",
      "אופטימיזציה מתמשכת",
    ],
    suitable: "מתאים לעסקים עם קמפיין פעיל שרוצים לצמוח.",
    focus: "🎯 מכירות, המרות ואופטימיזציה",
  },
  {
    title: "Full",
    price: "₪10,000",
    priceNote: "/ חודש (+ תקציב פרסום)",
    description: "ניהול פרסום מלא - מולטי-פלטפורמה, קריאייטיב ודף נחיתה.",
    included: [
      "הכל מ-Standard",
      "פלטפורמות מרובות (כולל TikTok)",
      "קריאייטיב מקיף",
      "בניית דף נחיתה ממיר",
      "ניתוח מתקדם + אינטגרציית CRM",
    ],
    suitable: "מתאים לעסקים עם תקציב גבוה שרוצים מיקסום ROI.",
    focus: "🎯 ROI מלא, ניהול פרסום 360°",
  },
];

// Mirrors BusinessBrain: services/retainer-3-hours.md, services/retainer-5-hours.md,
// services/retainer-10-hours.md (standard_price — hours-only, no hosting bundled; the hosting
// bundle versions live on the Hosting page instead).
export const customDevRetainers: ServicePlan[] = [
  {
    title: "3 שעות / חודש",
    price: "₪500",
    priceNote: "/ חודש",
    description: "3 שעות פיתוח חודשיות לתחזוקה, שיפורים ופיצ'רים קטנים.",
    included: [
      "3 שעות פיתוח חודשיות",
      "כל טכנולוגיה (React, Node.js, Python, WordPress)",
      "תגובה תוך 24 שעות",
      "ניהול גמיש לפי הצורך",
    ],
    suitable: "מתאים לצרכי תחזוקה שוטפת ושיפורים קטנים.",
    focus: "🎯 גמיש, זמין וללא התחייבות גדולה",
  },
  {
    title: "5 שעות / חודש",
    price: "₪900",
    priceNote: "/ חודש",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description: "5 שעות פיתוח חודשיות - הנפח שמניע צמיחה אמיתית.",
    included: [
      "5 שעות פיתוח חודשיות",
      "כל טכנולוגיה",
      "עדיפות בתגובה (תוך 12 שעות)",
      "שיחת תכנון חודשית",
    ],
    suitable: "מתאים לעסקים עם פיתוח שוטף ושדרוגים קבועים.",
    focus: "🎯 פיתוח עקבי ותוצאות",
  },
  {
    title: "10 שעות / חודש",
    price: "₪1,800",
    priceNote: "/ חודש",
    description: "10 שעות פיתוח חודשיות - מיקוד כמעט מלא על הפרויקט שלך.",
    included: [
      "10 שעות פיתוח חודשיות",
      "כל טכנולוגיה",
      "עדיפות גבוהה (תוך 6 שעות)",
      "שיחת תכנון חודשית + דוח ביצועים",
    ],
    suitable: "מתאים לפרויקטים פעילים ותשתיות שדורשות פיתוח מתמשך.",
    focus: "🎯 מחויבות מלאה לפרויקט שלך",
  },
];

// Website-only pricing — no BusinessBrain product yet (see BusinessBrain memory
// project_bb_future_schema_ideas: a possible future "Product" entity for hard-to-price,
// catalog-style offerings like this). Numbers carried over unchanged from the pre-refresh site.
export const estorePlans: ServicePlan[] = [
  {
    title: "חנות אינטרנטית – התחלה חכמה",
    price: "החל מ-₪6,000",
    description:
      "פתרון מהיר ויעיל לעסקים שרוצים להתחיל למכור אונליין בלי להסתבך.",
    included: [
      "הקמת חנות על בסיס תבנית מקצועית ומוכנה",
      "עיצוב נקי ומסודר",
      "התאמות בסיסיות לצבעים וללוגו",
      "הגדרת סליקה, משלוחים ומיסים",
      "העלאה של עד 60 מוצרים",
      "הדרכה קצרה לניהול החנות",
    ],
    suitable: "עסק בתחילת הדרך / מוצרי בוטיק / מי שרוצה לבדוק את השוק במהירות.",
    focus: "🎯 ממוקד מהירות, פונקציונליות ויציאה לאוויר",
  },
  {
    title: "חנות שמוכרת מעל המצופה",
    price: "החל מ-₪12,000",
    badge: "⭐ הכי פופולרי",
    highlighted: true,
    description:
      'חנות שנבנית עם מחשבה שיווקית ומניעה לפעולה – לא רק "יפה", אלא עובדת.',
    included: [
      "הכל מדיל START",
      "עמוד ראשי מניע למכירה (Hero, מסרים, קריאות לפעולה)",
      "תבנית איכותית עם התאמות אישיות לצרכים שלך",
      "שיפור חוויית משתמש (UX)",
      "מבנה חנות חכם לקטגוריות ומוצרים",
      "העלאה של עד 200 מוצרים",
      "התאמה למובייל בצורה מדויקת",
      "הדרכה מלאה לניהול החנות",
    ],
    suitable: "עסק שרוצה למכור ברצינות, לבנות אמון ולהגדיל המרות.",
    focus: "🎯 ממוקד מכירות, חוויית משתמש ומיתוג",
  },
  {
    title: "חנות פרימיום שנבנית במיוחד בשבילך",
    price: "החל מ-₪25,000",
    description: "לא תבנית שמותאמת – אלא חנות שמתוכננת עבורך מהיסוד.",
    included: [
      "אפיון מלא של החנות והצרכים העסקיים",
      "בניית תבנית ייחודית בהתאמה אישית",
      "שליטה מלאה בכל חלק באתר (עיצוב + מבנה)",
      "חוויית משתמש מתקדמת ומבודלת",
      "היררכיית תוכן ומכירה חכמה",
      "העלאה של עד 1,000 מוצרים",
      "הכנה להתרחבות עתידית",
      "הדרכה מקיפה + ליווי בהשקה",
    ],
    suitable: "מותגים, חנויות עם נפח מכירות, עסקים שרוצים לבלוט ולהוביל.",
    focus: "🎯 ממוקד מיתוג חזק, גמישות וצמיחה עסקית",
  },
];
