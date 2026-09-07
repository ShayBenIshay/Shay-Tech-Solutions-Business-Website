export const PORTFOLIO_CATEGORY = {
  STORES_AND_SITES: "חנויות ואתרים",
  STORE_TOOLS: "תוספים וכלים לחנות",
  CUSTOM_SYSTEMS: "מערכות ואינטגרציות מותאמות",
} as const;

export type PortfolioCategory =
  (typeof PORTFOLIO_CATEGORY)[keyof typeof PORTFOLIO_CATEGORY];

export type PortfolioVisual = "laptop" | "phone" | "email" | "diagram";

export interface CaseStudyDesigner {
  name: string;
  url: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: PortfolioCategory;
  type: string;
  tagline: string;
  visual: PortfolioVisual;
  screenshot: string;
  stack: string[];
  challenge: string;
  solution: string[];
  results: string[];
  techNote: string;
  relatedSlugs: string[];
  liveUrl: string | null;
  ctaLabel: string;
  ctaHref: string;
  designer?: CaseStudyDesigner;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bartzemachjewelry",
    title: "Jewelry Store",
    category: PORTFOLIO_CATEGORY.STORES_AND_SITES,
    type: "חנות אינטרנטית",
    tagline:
      "חנות תכשיטים מותאמת אישית מהיסוד - לא תבנית, אלא מערכת שלמה שנבנתה למכור.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-BarTzemach.webp",
    stack: ["WooCommerce", "SEO"],
    challenge:
      "המותג רצה חנות שמרגישה יוקרתית ומייצגת אותו נאמנה - לא תבנית גנרית כמו כל חנות אחרת.",
    solution: [
      "עיצוב חנות ייחודי מהדף הראשי ועד לתשלום, בהתאמה מלאה למותג",
      "אזור אישי מלא ללקוחות - התחברות, הזמנות וניהול חשבון",
      "מערכת גיפט-קארד, מועדון לקוחות ותזכורות לעגלה נטושה, כל אחד ככלי עצמאי",
      "קרוסלת מוצרים, פיד אינסטגרם חי ואופטימיזציה למנועי חיפוש",
    ],
    results: [
      "חנות אחת עם ערכת כלים שבדרך כלל דורשת כמה תוספים בתשלום",
      "מותג שמרגיש יוקרתי ומקצועי בכל עמוד, לא כמו כל חנות וורדפרס",
    ],
    techNote:
      "כל הבלוקים המותאמים, דפי החשבון ותשתית ה-SEO (Open Graph, נתונים מובנים) נבנו כ-HTML5 סמנטי ידני - לא בעורך גרירה.",
    relatedSlugs: [
      "newsletter-club",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: "https://store.bartzemachjewelry.com/",
    ctaLabel: "לבניית חנות",
    ctaHref: "/services/estore",
  },
  {
    slug: "newsletter-club",
    title: "מועדון לקוחות",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "מועדון לקוחות שמנוהל מתוך וורדפרס - בלי לשלם על שירות חיצוני.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-NewsletterClub.webp",
    stack: ["WooCommerce", "WhatsApp", "Email"],
    challenge:
      "בעל החנות רצה לנהל רשימת תפוצה בעצמו, בלי להסתמך על כלי חיצוני יקר עם גישה חלקית לנתונים.",
    solution: [
      "הרשמת מנויים ישירות מהחנות, בלי טופס חיצוני",
      "שליחת עדכונים באימייל או בוואטסאפ, לפי מה שהלקוח מעדיף",
      "מעקב פתיחות והסרה בלחיצה אחת מכל הודעה",
      "הכל מנוהל מלוח הבקרה של וורדפרס, בלי כלי נוסף",
    ],
    results: [
      "שליטה מלאה בנתוני הלקוחות, בלי תלות בשירות חיצוני",
      "תוסף מוכן להתקנה בכל חנות WooCommerce",
    ],
    techNote:
      "הצפנה, נרמול מספרי טלפון וקישור הסרה מקוצר (unsub/TOKEN) - בארכיטקטורה של 8 מחלקות נפרדות.",
    relatedSlugs: [
      "bartzemachjewelry",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: null,
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "whatsapp-memo",
    title: "תזכורות לרכישה בוואטסאפ",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "וואטסאפ שיודע לפני שהאוכל של הכלב נגמר - ומזכיר להזמין עוד.",
    visual: "phone",
    screenshot: "/assets/Portfolio-WhatsappMemo.webp",
    stack: ["WooCommerce", "CRM Sync", "WhatsApp API"],
    challenge:
      "חנות מזון לחיות רצתה להזכיר ללקוחות להזמין מחדש, בלי לשלוח הודעות ידנית לכל אחד.",
    solution: [
      "המערכת מחשבת מתי סביר שהמלאי של הלקוח עומד להיגמר",
      "שולחת תזכורת אוטומטית בוואטסאפ עם קישור ישיר להזמנה חוזרת",
      "מבקשת הסכמה לקבלת הודעות מכל לקוח חדש אוטומטית",
      "לא שומרת שום פרט מזהה של הלקוח מקומית - הכל נשאר במערכת ה-CRM",
    ],
    results: [
      "לקוחות מקבלים תזכורת בדיוק כשהם צריכים אותה, לא באקראי",
      "פחות הזמנות שנשכחות, בלי מאמץ שיווקי ידני",
    ],
    techNote:
      "ציון סיכוי-לרכישה-חוזרת מתעדכן מ-CRM חיצוני (BOSS) ומפעיל את ההודעה - בלי לשמור פרטים מזהים של לקוחות במסד הנתונים המקומי בכלל.",
    relatedSlugs: ["api-whatsapp-sts"],
    liveUrl: null,
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "barcode-scanner",
    title: "סורק ברקוד",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף סריקת ברקוד",
    tagline: "הנייד הופך לקופה - הלקוח סורק, קונה, וזהו.",
    visual: "phone",
    screenshot: "/assets/Portfolio-BarcodeScanner.webp",
    stack: ["WooCommerce", "מצלמה", "Barcode"],
    challenge:
      "החנות רצתה לאפשר קנייה עצמאית בלי קופאי, בלי לרשום כל מכירה ידנית.",
    solution: [
      "סריקת ברקוד ישירות מהמצלמה של הנייד, בכל עמוד בחנות",
      "זיהוי אוטומטי של המוצר והוספה לעגלה, כולל מוצרים עם מידות/צבעים",
      "הנחיה ברורה למשתמש אם המצלמה חסומה, לפי סוג המכשיר שלו",
      "עובד רק בחיבור מאובטח (HTTPS), כנדרש לגישה למצלמה",
    ],
    results: [
      "קנייה עצמאית ומהירה בלי תלות באיש מכירות",
      "פחות טעויות רישום וזמן שנחסך על מעקב ידני",
    ],
    techNote:
      "בודק הרשאת מצלמה מראש במקום לתת לסריקה להיכשל, ומזהה גם מוצרים עם וריאציות (מידה/צבע) בשתי קריאות API עוקבות.",
    relatedSlugs: ["alpha-pro"],
    liveUrl: "https://alpha-pro.co.il/",
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "alpha-pro",
    title: "Alpha Pro",
    category: PORTFOLIO_CATEGORY.STORES_AND_SITES,
    type: "שיפוץ חנות",
    tagline: "שיפוץ מלא לחנות עמוסה - עיצוב מסודר שגם נגיש לכולם.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-AlphaPro.webp",
    stack: ["WooCommerce", "Elementor", "נגישות"],
    challenge:
      "הפיתוח הקודם היה מסורבל - לקוחות התקשו להתמצא באתר והתלונות הצטברו.",
    solution: [
      "עיצוב מחדש לעמוד הראשי, קטגוריה, עגלה, אזור אישי ועמוד מוצר",
      "תפריט נגיש עם תמיכה מלאה בקוראי מסך ותגי נגישות בכל רכיב",
      "תפריט קטגוריות עם תתי-קטגוריות שנפתחות בלי לעזוב את העמוד",
      'תג מבצע "10 ב-50" משולב בעיצוב בלי לשבור את דף המוצר',
    ],
    results: [
      "אתר נוח ונגיש יותר ללקוחות עם כל סוג מכשיר",
      "חוויית קנייה מסודרת שמחליפה בלבול בהתמצאות ברורה",
    ],
    techNote:
      "כותרת, תפריט ותחתית נבנו עם aria-label/aria-expanded מלא ותגי role סמנטיים - נגישות ברמת קוד, לא רק עיצוב מחדש.",
    relatedSlugs: ["barcode-scanner"],
    liveUrl: "https://alpha-pro.co.il/",
    ctaLabel: "לשיפוץ חנות",
    ctaHref: "/services/estore",
  },
  {
    slug: "lapa",
    title: "LAPA",
    category: PORTFOLIO_CATEGORY.STORES_AND_SITES,
    type: "שיפוץ חנות",
    tagline: "חנות מהירה יותר, נגישה יותר, ומותאמת לעיר של הלקוח.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-Lapa.webp",
    stack: ["WooCommerce", "Elementor", "ביצועים"],
    challenge:
      "הפיתוח הקודם היה איטי ומסורבל - לקוחות התקשו להתמצא והתלונות הצטברו.",
    solution: [
      'קרוסלת מוצרים, בלוק "למה לבחור בנו" ובלוק לוגואים מותאמים אישית',
      "משלוח מוגבל לערים נבחרות בלבד, לפי הגדרת בעל החנות",
      "טעינה מהירה יותר של תמונות ואייקונים, כולל בעמוד הראשון שנטען",
      "תגי נגישות בכל כפתור וסמל בממשק, כולל בחירת גרסת מוצר",
    ],
    results: [
      "זמן טעינה מהיר יותר לעמוד הראשי ולקטגוריות",
      "חנות מדויקת יותר לאזור המשלוח האמיתי של העסק",
    ],
    techNote:
      "טעינת פונטים אסינכרונית, preload+fetchpriority לתמונות הירו, ותגי aria-label בכל אלמנט אינטראקטיבי - עבודת ביצועים ונגישות ברמת קוד.",
    relatedSlugs: [],
    liveUrl: "https://lapa.co.il/",
    ctaLabel: "לשיפוץ חנות",
    ctaHref: "/services/estore",
  },
  {
    slug: "be-the-way",
    title: "Be The Way",
    category: PORTFOLIO_CATEGORY.CUSTOM_SYSTEMS,
    type: "אינטגרציית מערכות",
    tagline:
      "וורדפרס, תשלומים ווואטסאפ אוטומטי - כולם מתחברים ל-CRM אחד, בלי הקלדה ידנית.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-BeTheWay.webp",
    stack: [
      "BOSS CRM",
      "וואטסאפ אוטומטי",
      "Grow",
      "Google APIs",
      "Rav Messer",
      "WordPress",
    ],
    challenge:
      "העסק קיבל לידים ותשלומים ממספר מקורות - אתר, רשימות תפוצה וטופס תשלום - וכל אחד דרש הקלדה ידנית נפרדת ל-CRM ולמערכות השיווק.",
    solution: [
      "כל ליד מהאתר, מרשימות התפוצה ומהתשלומים זורם אוטומטית ל-CRM אחד",
      "רישום לוובינר או לסדנה מפעיל אוטומטית רצף הודעות וואטסאפ להיכרות עם הלקוח",
      "תשלום כפול נחסם אוטומטית - גם אם ההודעה על תשלום מגיעה פעמיים",
      "לקוח שמבקש להסיר את עצמו יורד בבת אחת מכל רשימות התפוצה ומהסכמת השיווק ב-CRM",
    ],
    results: [
      "אפס הקלדה ידנית של פרטי לקוחות בין המערכות",
      "תשלום של לקוח לא הולך לאיבוד, גם כשמערכת חיצונית נופלת",
    ],
    techNote:
      "נעילת החסימה הכפולה נשמרת רק אחרי שהאסימון מול ה-CRM כבר התקבל בהצלחה - כך שכשל זמני שם לא מבזבז את החסימה על תשלום שעוד לא טופל באמת.",
    relatedSlugs: [],
    liveUrl: null,
    ctaLabel: "לפיתוח מותאם",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "pitbull-petshop",
    title: "Pitbull Petshop",
    category: PORTFOLIO_CATEGORY.STORES_AND_SITES,
    type: "פיתוח חנות",
    tagline:
      "חנות חיות עם כניסה מהירה בגוגל, וכתובת ישראלית שמבינה קומה וכניסה.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-PitbullPetshop.webp",
    stack: ["WooCommerce", "Google Sign-In", "Gutenberg"],
    challenge: "הלקוח רצה לשפר גם את הנראות של האתר וגם את אחוזי ההמרה שלו.",
    solution: [
      "כניסה מהירה עם חשבון גוגל, בלי טופס הרשמה ארוך",
      "שדות כתובת ישראליים מלאים - קומה, דירה וקוד כניסה לבניין",
      "חמישה בלוקים מותאמים: גלריה, קרוסלת מוצרים, לוגואים וביקורות לקוחות",
      "אזור אישי מלא - התחברות, הזמנות ועריכת פרטי חשבון",
    ],
    results: [
      "הרשמה והזמנה מהירות יותר ללקוח",
      "משלוח שמגיע לכתובת הנכונה בפעם הראשונה, כולל בבניינים מורכבים",
    ],
    techNote:
      "כל שינוי עובר Pull Request עם ביקורת קוד אוטומטית (CodeRabbit) לפני מיזוג - תהליך עבודה מסודר, לא עריכה ישירה בפרודקשן.",
    relatedSlugs: ["sts-benefits"],
    liveUrl: "https://pitbull-petshop.com/",
    ctaLabel: "לבניית/שיפוץ חנות",
    ctaHref: "/services/estore",
  },
  {
    slug: "yaly-mevorach",
    title: "Yaly Mevorach",
    category: PORTFOLIO_CATEGORY.STORES_AND_SITES,
    type: "אתר אישי",
    tagline: "אתר אישי שמספר סיפור - לא רק קורות חיים בעיצוב יפה.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-YalyMevorach.webp",
    stack: ["Next.js", "React", "TypeScript"],
    challenge:
      "יאלי רצתה אתר שמשקף את הזהות המקצועית שלה במחקר לוויתנים, לא תבנית קורות חיים גנרית.",
    solution: [
      "עיצוב בהשראת ים, עם אנימציית גלילה מותאמת אישית שמניעה את העמוד",
      "אזורי תוכן נפרדים: אודות, פרויקטים, פרסומים וכנסים, והשכלה",
      'אזור "חזון" עם קריאה לפעולה להצטרפות למחקר',
      "אתר קליל וטעינה מהירה, ללא צורך בשרת",
    ],
    results: [
      "אתר שמייצג את הזהות המקצועית שלה בצורה מדויקת ומרשימה",
      "נבנה ועלה לאוויר תוך כשבועיים",
    ],
    techNote:
      "אנימציית הגלילה (parallax) נבנתה כ-hook מותאם אישית משלו, לא ספריית אנימציה מהמדף.",
    relatedSlugs: [],
    liveUrl: "https://www.yalymevorach.com/",
    ctaLabel: "לבניית אתר אישי",
    ctaHref: "/services/website",
  },
  {
    slug: "paidevo-dashboard",
    title: "PaiDevo Dashboard",
    category: PORTFOLIO_CATEGORY.CUSTOM_SYSTEMS,
    type: "מערכת ניהול",
    tagline: "דשבורד שהופך תשובות של לומדים לתובנות ברורות למורה.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-PaidevoDashboard.webp",
    stack: ["React", "NestJS", "MongoDB"],
    challenge:
      "המערכת דרשה תכנון מקיף - הצגת נתוני למידה מורכבים בצורה שמורה יכול להבין ולפעול לפיה מיד.",
    solution: [
      "דשבורד אנליטיקס עם גרפים חיים לפי תוצאות שאלונים ולומדים",
      "ניהול לומדים - הוספה, מעקב והצגת התקדמות",
      "ייצוא נתונים לאקסל לניתוח מעמיק מחוץ למערכת",
      "מיתוג נפרד לכל ארגון לקוח שמשתמש במערכת",
    ],
    results: [
      "תמונת מצב ברורה על התקדמות לומדים, בלי לחפור בטבלאות",
      "מערכת שגדלה עם כל לקוח ארגוני חדש, בלי לשכתב קוד",
    ],
    techNote:
      "טיפוסי TypeScript משותפים בין ה-frontend וה-backend, כך שהנתונים בדשבורד תמיד תואמים בדיוק למה שהשרת שולח.",
    relatedSlugs: [],
    liveUrl: "https://paidevo.shaytechsolutions.com/",
    designer: { name: "Alon Kerklies", url: "https://kerk.co.il/" },
    ctaLabel: "לבניית מערכת ניהול",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "gift-card-plugin",
    title: "Gift Card",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "כרטיס מתנה שמגיע במייל תוך שניות - בלי כרטיס פלסטיק.",
    visual: "email",
    screenshot: "/assets/Portfolio-GiftCardPlugin.webp",
    stack: ["WooCommerce", "MySQL", "Email"],
    challenge:
      "הלקוח רצה לאפשר רכישת כרטיס מתנה שנשלח ישירות לחבר/ה, בלי תהליך ידני.",
    solution: [
      "הקונה בוחר סכום ומזין את המייל של מקבל/ת המתנה",
      "הכרטיס נשלח אוטומטית במייל ברגע שההזמנה הושלמה",
      'מימוש בקופה בהקלדת קוד - כולל משלוח ומע"מ בחישוב הכולל',
      "תזכורת אוטומטית לפני שהכרטיס פג תוקף",
    ],
    results: [
      "תהליך מתנה מלא בלי מעורבות ידנית של בעל החנות",
      "כל שימוש בכרטיס מתועד בנפרד, עם בדיקת יתרה ותוקף לפני כל שימוש",
    ],
    techNote:
      "כל שימוש בכרטיס נרשם בטבלת יומן נפרדת (יתרה לפני/אחרי) לביקורת מלאה, ודגל על ההזמנה מונע יצירת אותו כרטיס פעמיים.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: null,
    ctaLabel: "לבניית תוסף WordPress",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "bt-abandoned-cart",
    title: "תזכורות לעגלה נטושה",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "עגלה ננטשה? תזכורת אוטומטית יוצאת - ומגדילה את אחוזי הסגירה.",
    visual: "phone",
    screenshot: "/assets/Portfolio-BtAbandonedCart.webp",
    stack: ["WooCommerce", "WhatsApp", "חוק התקשורת"],
    challenge:
      "לקוחות נוטשים עגלת קניות בלי להשלים רכישה, ובעל החנות לא רצה לשלוח הודעות שיווק שמפרות את החוק.",
    solution: [
      "זיהוי אוטומטי של עגלה נטושה ושליחת תזכורת באימייל או בוואטסאפ",
      'כל הודעה כוללת סימון "פרסומת", זהות העסק וקישור הסרה בלחיצה אחת',
      "לקוח שביקש לא לקבל הודעות - לא מקבל, אוטומטית ובאופן קבוע",
      "הכל לפי דרישות חוק התקשורת הישראלי (תיקון 40), מובנה בתוסף",
    ],
    results: [
      "עגלות נטושות מקבלות תזכורת שעומדת בדרישות חוק התקשורת (תיקון 40)",
      "הדרישות החוקיות מטופלות אוטומטית בכל הודעה, בלי שבעל החנות צריך להתעסק בפרטים",
    ],
    techNote:
      "עמידה בחוק מרוכזת במחלקה ייעודית אחת - רשימת חסימה, גילוי זהות עסקית וקישור הסרה בכל הודעה, כך שהיא ניתנת לביקורת במקום אחד.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "gift-card-plugin",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: null,
    ctaLabel: "לתוסף שיווק מותאם",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "sts-benefits",
    title: "תוסף הטבות",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "10% הנחה אוטומטית ללקוח חדש - בלי לזכור להפעיל קופון.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-StsBenefits.webp",
    stack: ["WooCommerce", "Analytics", "Checkout API"],
    challenge:
      "חנויות רוצות לעודד לקוחות חדשים לבצע הזמנה ראשונה, בלי להסתמך על קוד קופון שצריך לזכור להפעיל.",
    solution: [
      "הנחה של 10% מופעלת אוטומטית להזמנה הראשונה של כל לקוח",
      "פופאפ מציג את ההטבה ברגע הנכון, בלי מאמץ מצד הלקוח",
      "שתי הגדרות זכאות אפשריות - לקוח חדש לגמרי או הטבה חד-פעמית שטרם נוצלה",
      "עובד גם בקופה הרגילה וגם בקופה המהירה (Block-based) של וורדפרס",
    ],
    results: [
      "לקוחות חדשים מקבלים תמריץ לרכישה ראשונה בלי מאמץ שיווקי חוזר",
      "דשבורד ניהול מציג לבעל החנות בדיוק כמה הטבות מומשו",
    ],
    techNote:
      "רישום ההטבה מחובר גם לתהליך הקופה הקלאסי וגם ל-Store API החדש - שני מסלולי תשלום שונים לגמרי בוורדפרס, מכוסים במלואם.",
    relatedSlugs: ["pitbull-petshop"],
    liveUrl: null,
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "sts-free-delivery",
    title: "בר התקדמות למשלוח חינם",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "עוד ₪45 ותקבלו למשלוח חינם - הבר שמניע לקוחות לסל גדול יותר.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-StsFreeDelivery.webp",
    stack: ["WooCommerce", "Cart UX"],
    challenge:
      "לקוחות משלימים לפעמים סל קטן בלי לדעת כמה נשאר להם עד למשלוח חינם.",
    solution: [
      "בר התקדמות בעגלה ובקופה שמראה כמה נשאר עד למשלוח חינם",
      "מתעדכן בזמן אמת עם כל שינוי בסל הקניות",
      "סף המשלוח החינם מוגדר ונשלט לגמרי על ידי בעל החנות",
    ],
    results: [
      "לקוחות רואים בדיוק כמה נשאר להם למשלוח חינם, בלי לנחש",
      "כלי מוכר שלקוחות כבר מכירים מפלטפורמות אחרות",
    ],
    techNote:
      "מחלקת מימוש אחת וממוקדת מאחורי כל הפיצ'ר - קל להתקין ולתחזק בכל חנות נוספת.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-webp-converter",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: null,
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "sts-webp-converter",
    title: "ממיר תמונות WebP",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline:
      "תמונות קטנות יותר, אתר מהיר יותר - אוטומטית, בלי לגעת בתמונה אחת.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-StsWebpConverter.webp",
    stack: ["WordPress", "ביצועים"],
    challenge:
      "תמונות כבדות מאיטות את האתר ופוגעות בדירוג בגוגל, אבל המרה ידנית לכל תמונה גוזלת זמן.",
    solution: [
      "כל תמונה חדשה שמועלית מומרת אוטומטית ל-WebP",
      "כלי המרה גורפת גם לתמונות שכבר קיימות בספריית המדיה",
      "התמונה המומרת מוגשת ללקוחות בלי לשנות שום דבר בעריכה הקיימת",
    ],
    results: [
      "אתר שנטען מהר יותר בלי מאמץ נוסף מבעל האתר",
      "כלי אחיד שמתאים לכל אתר וורדפרס, לא רק לחנות",
    ],
    techNote:
      "קוד הניהול (המרה גורפת) והקוד שרץ בפועל בפרונט טעונים בנפרד, כך שביקור רגיל באתר לא טוען קוד ניהול מיותר.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "bt-wishlist",
      "bt-instagram",
    ],
    liveUrl: null,
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "api-whatsapp-sts",
    title: "מנוע וואטסאפ",
    category: PORTFOLIO_CATEGORY.CUSTOM_SYSTEMS,
    type: "תשתית API",
    tagline: "המנוע שמפעיל את כל אוטומציות הוואטסאפ של העסק, בקנה מידה.",
    visual: "laptop",
    screenshot: "/assets/Portfolio-ApiWhatsappSts.webp",
    stack: ["Node.js", "TypeScript", "Docker", "WhatsApp Web"],
    challenge:
      "עסקים רוצים לשלוח הודעות וואטסאפ אוטומטיות ללקוחות, בלי להסתמך על שליחה ידנית או כלים לא אמינים.",
    solution: [
      "השהיות אקראיות בין הודעות וחלון שעות שליחה קבוע, כדי לחקות שליחה אנושית",
      "המערכת נחה אוטומטית בשבת, לפי שעון ישראל",
      "לקוח שמבקש להפסיק לקבל הודעות מוסר אוטומטית דרך תגובה פשוטה",
    ],
    results: [
      "הודעות אוטומטיות נשלחות בקצב שמדמה שליחה אנושית, לא הפצה המונית",
      "כמה מערכות של הלקוח יכולות להתחבר במקביל, כל אחת בנפרד",
    ],
    techNote:
      "תור משלוח אסינכרוני עם webhook עמיד ל-retry (עד כשעתיים) ובדיקת רישום מוקדמת לפני כל שליחה - תשתית ברמת production, לא סקריפט שליחה בסיסי.",
    relatedSlugs: ["whatsapp-memo", "newsletter-club"],
    liveUrl: null,
    ctaLabel: "לפיתוח מותאם",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "bt-wishlist",
    title: "רשימת משאלות",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "לב אחד קליק - והמוצר מחכה ברשימת המשאלות, לא נשכח בגלילה.",
    visual: "phone",
    screenshot: "/assets/Portfolio-BarTzemach-Wishlist.webp",
    stack: ["WooCommerce", "Analytics", "MySQL"],
    challenge:
      "לקוחות רואים מוצר שהם אוהבים אבל לא בטוחים לגבי הרכישה עכשיו, ובלי דרך לשמור אותו - הוא פשוט נשכח.",
    solution: [
      "לב קטן על כל מוצר בכל עמוד קטגוריה - לחיצה אחת שומרת, בלי לעזוב את העמוד",
      "אישור מיידי בהודעת טוסט שהמוצר נוסף לרשימה",
      "עמוד רשימת משאלות ייעודי שמציג את כל השמור, בדיוק כמו עמוד הקטגוריה הרגיל",
      "הרשימה שמורה ללקוחות מחוברים - לא נעלמת בין ביקורים",
    ],
    results: [
      "בעל החנות רואה בדיוק אילו מוצרים לקוחות רוצים, גם אם עדיין לא קנו",
      "דשבורד ניהול ייעודי עם דירוג המוצרים הכי נשמרים ופעילות עדכנית",
    ],
    techNote:
      "מטמון בצד הלקוח (5 דקות) מעל מטמון שרת (שעה) - כך שרשימת המשאלות לא פוגעת בביצועי החנות גם בשימוש תכוף.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-instagram",
    ],
    liveUrl: "https://store.bartzemachjewelry.com/wishlist/",
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
  {
    slug: "bt-instagram",
    title: "פיד אינסטגרם חי",
    category: PORTFOLIO_CATEGORY.STORE_TOOLS,
    type: "תוסף WordPress",
    tagline: "הפיד האחרון מאינסטגרם, ישר בתוך האתר - מתעדכן לבד.",
    visual: "phone",
    screenshot: "/assets/Portfolio-BarTzemach-Instagram.webp",
    stack: ["WordPress", "Instagram API", "Facebook Graph API"],
    challenge:
      "בעלי חנויות רוצים להראות את האינסטגרם העסקי שלהם באתר, בלי להעתיק פוסטים ידנית בכל פעם שמעלים תמונה חדשה.",
    solution: [
      "פוסטים אחרונים מהעסק מוצגים אוטומטית בבלוק ייעודי בתוך האתר",
      "כל פוסט מציג תמונה, כיתוב, לייקים ותגובות - לא רק תמונה יבשה",
      "בדיקת חיבור חיה בהגדרות שמאשרת מיד שהחיבור לאינסטגרם תקין",
      "טוקן הגישה מתחדש אוטומטית ברקע - בלי שבעל האתר יצטרך להתחבר שוב",
    ],
    results: [
      "האתר תמיד מציג את הפוסטים העדכניים ביותר, בלי עדכון ידני",
      "מסך ניהול ברור שמראה אם החיבור לאינסטגרם תקין או דורש טיפול",
    ],
    techNote:
      "אם הפיד נכשל בגלל טוקן שפג באמצע ביקור של גולש, המערכת מרעננת את הטוקן ומנסה שוב פעם אחת אוטומטית, לפני שהיא מוותרת.",
    relatedSlugs: [
      "bartzemachjewelry",
      "newsletter-club",
      "gift-card-plugin",
      "bt-abandoned-cart",
      "sts-free-delivery",
      "sts-webp-converter",
      "bt-wishlist",
    ],
    liveUrl: "https://store.bartzemachjewelry.com/",
    ctaLabel: "לפיתוח תוסף",
    ctaHref: "/services/custom-development",
  },
];

export function getCaseStudy(slug: string): CaseStudy | null {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}
