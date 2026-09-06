import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "שי טק סולושנס",
    short_name: "שי טק",
    description: "בניית אתרים, חנויות אונליין, קידום דיגיטלי ופיתוח מותאם אישית.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#412662",
    lang: "he",
    dir: "rtl",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        // W3C allows space-separated purposes; Next's Manifest type does not.
        purpose: "any maskable" as unknown as "any",
      },
    ],
  };
}
