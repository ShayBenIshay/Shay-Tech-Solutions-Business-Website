"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./TalkToMe.module.css";
import { event } from "@/lib/gtag";
import { PHONE_DISPLAY, PHONE_TEL_HREF, buildWhatsAppUrl } from "@/lib/contactInfo";

// Redesign (2026-09): service-type dropdown + ?plan=/?type= pre-select.
// Values/keys mirror the real link scheme other new pages use (e.g. /contact?plan=retainer-5,
// /contact?type=project) — only the visible option labels are scaffold placeholders pending
// Phase 2 copy review.
export type ServiceValue = "" | "maintenance" | "retainer" | "project" | "growth" | "other";

export const SERVICE_OPTIONS: { value: ServiceValue; label: string }[] = [
  { value: "maintenance", label: "אחסון, ניהול ותחזוקה (placeholder)" },
  { value: "retainer", label: "בנק שעות פיתוח / ריטיינר (placeholder)" },
  { value: "project", label: "אפיון ופיתוח פרויקט (placeholder)" },
  { value: "growth", label: "חבילת Growth (placeholder)" },
  { value: "other", label: "ייעוץ / שירות נקודתי (placeholder)" },
];

const PLAN_TO_SERVICE: Record<string, ServiceValue> = {
  "hosting-management": "maintenance",
  "hosting-only": "maintenance",
  "retainer-3": "retainer",
  "retainer-5": "retainer",
  "retainer-10": "retainer",
  "growth-bundle": "growth",
  "hourly-dev": "other",
};

function resolveServiceFromParams(params: URLSearchParams): ServiceValue | null {
  const plan = params.get("plan");
  if (plan && PLAN_TO_SERVICE[plan]) return PLAN_TO_SERVICE[plan];
  if (params.get("type") === "project") return "project";
  return null;
}

const WHATSAPP_URL = buildWhatsAppUrl(
  "שלום! ראיתי את האתר ואשמח לשמוע יותר על השירותים",
);

const isValidIsraeliPhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 9) return /^5[0-9]{8}$/.test(digits);
  if (digits.length === 10) return /^05[0-9]{8}$/.test(digits);
  if (digits.length === 12) return /^9725[0-9]{8}$/.test(digits);
  return false;
};

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const MAX_NAME = 80;
const MAX_PHONE = 20;
const MAX_EMAIL = 120;
const MAX_MESSAGE = 1500;

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: ServiceValue;
  message: string;
}

type FormField = keyof ContactFormData;

type FormErrors = Partial<Record<FormField | "submit" | "privacyConsent", string | null>>;

interface TalkToMeProps {
  compact?: boolean;
  /** Rendered alongside the form card (desktop) / below it (mobile). Contact page only. */
  sidebar?: ReactNode;
}

interface Web3FormsResponse {
  success: boolean;
}

export default function TalkToMe({ compact = false, sidebar }: TalkToMeProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [botcheck, setBotcheck] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Pre-select the service dropdown from ?plan=/?type= after mount (avoids an SSR/CSR
  // hydration mismatch on the static export, since searchParams only resolves in the browser).
  // This is a one-time sync from an external source (the URL), not state derived from props —
  // the lint rule's "compute during render" alternative isn't available here.
  useEffect(() => {
    const resolved = resolveServiceFromParams(searchParams);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (resolved) setFormData((prev) => ({ ...prev, service: resolved }));
  }, [searchParams]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const field = name as FormField;
    setFormData((prev) => ({ ...prev, [field]: value } as ContactFormData));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "נא להזין שם מלא";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "נא להזין מספר טלפון";
    } else if (!isValidIsraeliPhone(formData.phone)) {
      newErrors.phone = "מספר טלפון לא תקין (למשל: 050-1234567)";
    }
    if (formData.email?.trim() && !isValidEmail(formData.email)) {
      newErrors.email = "כתובת אימייל לא תקינה";
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = "יש לאשר את מדיניות הפרטיות להמשך";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `פנייה חדשה מאתר: ${formData.fullName}`,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email || "לא צוין",
          service: formData.service || "לא צוין",
          message: formData.message || "(לא צוין)",
          botcheck,
        }),
      });

      const data = (await res.json()) as Web3FormsResponse;

      if (!data.success) {
        setErrors({ submit: "אירעה שגיאה. נסו שוב." });
        return;
      }

      event("contact_form_submit", { method: "web3forms" });
      setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
      setBotcheck("");
      setPrivacyConsent(false);
      setIsSent(true);
    } catch {
      setErrors({ submit: "אירעה שגיאה. נסו שוב מאוחר יותר." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      id="talk-to-me"
    >
      <div className={`${styles.inner} ${compact ? styles.innerCompact : ""}`}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>בואו נדבר</h2>
          <p className={`h3 ${styles.subtitle}`}>
            אחזור אליכם תוך 24 שעות - בדרך שנוחה לכם.
          </p>
        </div>

        {/* Quick-contact channels */}
        <div className={styles.quickContactRow}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="שלחו הודעה בWhatsApp"
          >
            <img
              src="/assets/whatsapp-icon.png"
              alt="WhatsApp"
              className={styles.contactIconImg}
            />
            <span className={styles.iconLinkLabel}>WhatsApp</span>
          </a>
          <a
            href={PHONE_TEL_HREF}
            className={styles.iconLink}
            aria-label="לשיחה טלפונית"
          >
            <img
              src="/assets/phone-icon.png"
              alt=""
              className={styles.contactIconImg}
            />
            <span className={styles.iconLinkLabel}>{PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerText}>או שלחו הודעה</span>
        </div>

        {/* Contact form / success state, optionally alongside a sidebar (contact page only) */}
        {isSent ? (
          <div className={sidebar ? styles.contentRow : undefined}>
            <div
              className={`${styles.card} ${styles.formCard} ${styles.successCard}`}
              role="alert"
              aria-live="polite"
            >
              <div className={styles.successIconWrap}>
                <span className={styles.successCheckmark}>✓</span>
              </div>
              <p className={styles.successTitle}>ההודעה נשלחה בהצלחה!</p>
              <p className={styles.successSubtitle}>
                אחזור אליכם תוך 24 שעות.
              </p>
              <button
                type="button"
                className={`btn-secondary ${styles.resetBtn}`}
                onClick={() => setIsSent(false)}
              >
                שלח הודעה נוספת
              </button>
            </div>
            {sidebar && <div className={styles.sidebar}>{sidebar}</div>}
          </div>
        ) : (
          <div className={sidebar ? styles.contentRow : undefined}>
          <form
            className={`${styles.card} ${styles.formCard}`}
            onSubmit={handleSubmit}
          >
            {errors.submit && (
              <div className={styles.errorMessage} role="alert">
                {errors.submit}
              </div>
            )}

            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              checked={!!botcheck}
              onChange={(e) => setBotcheck(e.target.checked ? "true" : "")}
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                border: 0,
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            <div className={styles.formFields}>
              <label className={styles.label}>
                <span className={styles.labelText}>שם מלא</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="הכנס את שמך המלא"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                  aria-invalid={!!errors.fullName}
                  maxLength={MAX_NAME}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <span className={styles.fieldError}>{errors.fullName}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>מספר טלפון</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                  aria-invalid={!!errors.phone}
                  maxLength={MAX_PHONE}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <span className={styles.fieldError}>{errors.phone}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>
                  אימייל <span className={styles.optional}>(אופציונלי)</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  aria-invalid={!!errors.email}
                  maxLength={MAX_EMAIL}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className={styles.fieldError}>{errors.email}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>
                  סוג השירות המבוקש{" "}
                  <span className={styles.optional}>(אופציונלי)</span>
                </span>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="">בחרו סוג שירות (placeholder)</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>במה אפשר לעזור לכם?</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ספרו לי במה אתם צריכים עזרה..."
                  className={`${styles.input} ${styles.textarea}`}
                  rows={compact ? 3 : 4}
                  maxLength={MAX_MESSAGE}
                />
              </label>
            </div>

            <div className={styles.consentWrapper}>
              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => {
                    setPrivacyConsent(e.target.checked);
                    if (errors.privacyConsent)
                      setErrors((prev) => ({ ...prev, privacyConsent: null }));
                  }}
                  className={`${styles.consentCheckbox} ${errors.privacyConsent ? styles.consentCheckboxError : ""}`}
                  aria-invalid={!!errors.privacyConsent}
                />
                <span className={styles.consentText}>
                  אני מאשר/ת את{" "}
                  <Link
                    href="/privacy-policy"
                    className={styles.consentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    מדיניות הפרטיות
                  </Link>{" "}
                  ומסכים/ה לשימוש בפרטי לצורכי קשר ושירות.*
                </span>
              </label>
              {errors.privacyConsent && (
                <span className={styles.fieldError}>{errors.privacyConsent}</span>
              )}
            </div>

            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שליחה"}
            </button>
          </form>
          {sidebar && <div className={styles.sidebar}>{sidebar}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
