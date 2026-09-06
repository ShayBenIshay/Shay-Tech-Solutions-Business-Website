export const PHONE_DISPLAY = "054-7573914";
export const PHONE_INTL = "+972547573914";
export const PHONE_TEL_HREF = `tel:${PHONE_INTL}`;

export const EMAIL = "shaybishay@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const WHATSAPP_URL = "https://wa.me/972547573914";

export function buildWhatsAppUrl(message?: string): string {
  return message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
}
