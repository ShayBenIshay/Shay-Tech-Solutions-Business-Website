import IconRowSection, {
  type IconRowItem,
} from "@/components/shared/IconRowSection/IconRowSection";

const imgSupport = "/assets/support-icon.png";
const imgTransparent = "/assets/transparent-icon.png";
const imgProfessional = "/assets/professional-icon.png";
const imgGrowth = "/assets/growth-icon.png";
const imgResponsibility = "/assets/direct-communication-icon.png";
const imgLongTermSolutions = "/assets/long-term-icon.png";
const imgDirectCommunication = "/assets/accountability-icon.png";
const items: IconRowItem[] = [
  { src: imgSupport, label: "ליווי אחרי העלייה לאוויר" },
  { src: imgTransparent, label: "עבודה שקופה וברורה" },
  { src: imgProfessional, label: "מסודר ומקצועי" },
  { src: imgGrowth, label: "חשיבה שיווקית" },
  { src: imgResponsibility, label: "אחריות מלאה" },
  { src: imgLongTermSolutions, label: "פתרונות לטווח ארוך" },
  { src: imgDirectCommunication, label: "תקשורת ישירה" },
];

export default function WhyMe() {
  return <IconRowSection id="why-me" title="למה לעבוד איתי?" items={items} />;
}
