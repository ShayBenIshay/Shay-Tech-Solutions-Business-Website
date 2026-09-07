export const GA_ID = "G-WBVEHWX000";

export type GtagEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "consent" | "config" | "event" | "js",
      ...args: unknown[]
    ) => void;
  }
}

export const updateConsent = (): void => {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
  });
};

export const pageview = (url: string): void => {
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_ID, { page_path: url });
};

export const event = (action: string, params: GtagEventParams = {}): void => {
  if (typeof window === "undefined") return;
  window.gtag?.("event", action, params);
};
