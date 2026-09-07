import CardGridSection, {
  type GridCard,
} from "@/components/shared/CardGridSection/CardGridSection";

const cards: GridCard[] = [
  {
    title: "✖ פחות מתאים אם:",
    items: [
      "מי שמחפש פתרון הכי זול",
      "פרויקטים בלי אפיון",
      "“רק שיעלה לאוויר וזהו”",
    ],
  },
  {
    title: "✔ מתאים ל:",
    items: [
      "עסקים שרוצים תוצאה ולא “רק אתר”",
      "מי שמעריך סדר וחשיבה",
      "פרויקטים עם המשכיות",
    ],
  },
];

export default function WhoIsItFor() {
  return (
    <CardGridSection id="advanced-services" title="למי זה מתאים?" cards={cards} />
  );
}
