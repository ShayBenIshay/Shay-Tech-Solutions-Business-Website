"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TalkToMeSection.module.css";
import { event } from "@/lib/gtag";

const isValidIsraeliPhone = (value) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 9) return /^5[0-9]{8}$/.test(digits);
  if (digits.length === 10) return /^05[0-9]{8}$/.test(digits);
  if (digits.length === 12) return /^9725[0-9]{8}$/.test(digits);
  return false;
};

export default function TalkToMeSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "נא להזין שם מלא";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "נא להזין מספר טלפון";
    } else if (!isValidIsraeliPhone(formData.phone)) {
      newErrors.phone = "מספר טלפון לא תקין (למשל: 050-1234567)";
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
          message: formData.message || "(לא צוין)",
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setErrors({ submit: "אירעה שגיאה. נסו שוב." });
        return;
      }

      event("contact_form_submit", { method: "web3forms" });
      setIsSent(true);
      setFormData({ fullName: "", phone: "", message: "" });
      setPrivacyConsent(false);
      setTimeout(() => setIsSent(false), 5000);
    } catch {
      setErrors({ submit: "אירעה שגיאה. נסו שוב מאוחר יותר." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="talk-to-me">
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>דברו איתי</h2>
          <p className={`h3 ${styles.subtitle}`}>
            תשאירו פרטים ואחזור אליכם בהקדם.
          </p>
        </div>
        <form
          className={`${styles.card} ${styles.formCard}`}
          onSubmit={handleSubmit}
        >
          <h3 className={styles.cardTitle}>השארת פרטים</h3>

          {isSent && (
            <div className={styles.successMessage} role="alert">
              ✓ נשלח בהצלחה! אחזור אליכם בהקדם.
            </div>
          )}

          {errors.submit && (
            <div className={styles.errorMessage} role="alert">
              {errors.submit}
            </div>
          )}

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
              />
              {errors.phone && (
                <span className={styles.fieldError}>{errors.phone}</span>
              )}
            </label>
            <label className={styles.label}>
              <span className={styles.labelText}>במה אפשר לעזור לכם?</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="ספרו לי במה אתם צריכים עזרה..."
                className={`${styles.input} ${styles.textarea}`}
                rows={4}
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
      </div>
    </section>
  );
}
