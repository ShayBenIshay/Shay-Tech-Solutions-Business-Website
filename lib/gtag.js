export const GA_ID = 'G-WBVEHWX000';

export const updateConsent = () => {
  if (typeof window === 'undefined') return;
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
  });
};

export const pageview = (url) => {
  if (typeof window === 'undefined') return;
  window.gtag?.('config', GA_ID, { page_path: url });
};

export const event = (action, params = {}) => {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', action, params);
};
