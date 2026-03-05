import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import ContactIcons from '@/components/ContactIcons/ContactIcons';
import { ContactModalProvider } from '@/components/ContactModal/ContactModalContext';
import ContactModal from '@/components/ContactModal/ContactModal';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import { GA_ID } from '@/lib/gtag';

export const metadata = {
  title: 'שי טק סולושנס | בניית אתרים, חנויות, קידום ופיתוח',
  description: 'חנויות, אתרים, קידום, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף ופרסום – הכל במקום אחד.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&family=Aboreto&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
