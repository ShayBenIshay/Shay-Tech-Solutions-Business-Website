import type { ReactNode } from "react";
import "./globals.css";
import Script from "next/script";
import { Rubik, Assistant, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";
import ContactIcons from "@/components/layout/ContactIcons/ContactIcons";
import { ContactModalProvider } from "@/components/layout/ContactModal/ContactModalContext";
import ContactModal from "@/components/layout/ContactModal/ContactModal";
import CookieConsent from "@/components/layout/CookieConsent/CookieConsent";
import { GA_ID } from "@/lib/gtag";
import { PHONE_INTL } from "@/lib/contactInfo";
import type { Metadata } from "next";

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

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוחים אישיים",
  description:
    "חנויות, אתרים, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
  metadataBase: new URL("https://www.shaytechsolutions.com"),
  openGraph: {
    title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוחים אישיים",
    description:
      "חנויות, אתרים, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
    url: "https://www.shaytechsolutions.com",
    siteName: "שי טק סולושנס",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "שי טק סולושנס",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוחים אישיים",
    description:
      "חנויות, אתרים, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
    images: ["/opengraph-image.png"],
  },
  verification: {
    google: "SilR_ENvawMTZiLYj1YnXnxJ23hIyezL133kevXDAB8",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${rubik.variable} ${assistant.variable} ${dmSerifDisplay.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "שי טק סולושנס",
              description:
                "בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית",
              url: "https://www.shaytechsolutions.com",
              telephone: PHONE_INTL,
              areaServed: "IL",
              inLanguage: "he",
              serviceType: [
                "בניית אתרים",
                "חנות אינטרנטית",
                "דפי תדמית",
                "דפי נחיתה",
                "פיתוח תוכנה",
                "אחסון אתרים",
              ],
              image: "https://www.shaytechsolutions.com/assets/fullLogo.webp",
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
