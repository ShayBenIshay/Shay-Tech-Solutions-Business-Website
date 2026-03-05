import "./globals.css";
import Script from "next/script";
import { Rubik, Assistant } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import { ContactModalProvider } from "@/components/ContactModal/ContactModalContext";
import ContactModal from "@/components/ContactModal/ContactModal";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import { GA_ID } from "@/lib/gtag";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title:
    "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות, קידום אתרים ממומן ופיתוחים אישיים",
  description:
    "חנויות, אתרים, קידום, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף ופרסום – הכל במקום אחד.",
  metadataBase: new URL("https://www.shaytechsolutions.com"),
  openGraph: {
    title:
      "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות, קידום אתרים ממומן ופיתוחים אישיים",
    description:
      "חנויות, אתרים, קידום, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף ופרסום – הכל במקום אחד.",
    url: "https://www.shaytechsolutions.com",
    siteName: "שי טק סולושנס",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות, קידום אתרים ממומן ופיתוחים אישיים",
    description:
      "חנויות, אתרים, קידום, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף ופרסום – הכל במקום אחד.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${assistant.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'ProfessionalService'],
              name: 'שי טק סולושנס',
              description: 'בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית',
              url: 'https://www.shaytechsolutions.com',
              telephone: '+972547573914',
              areaServed: 'IL',
              inLanguage: 'he',
              serviceType: [
                'בניית אתרים',
                'חנות אינטרנטית',
                'קידום ממומן',
                'פיתוח תוכנה',
                'אחסון אתרים',
                'בניית אתרי וורדפרס',
              ],
              image: 'https://www.shaytechsolutions.com/assets/fullLogo.png',
            }),
          }}
        />
        <ContactModalProvider>
          <Navbar />
          {children}
          <ContactModal />
          <ContactIcons />
          <ScrollToTop />
          <CookieConsent />
        </ContactModalProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
