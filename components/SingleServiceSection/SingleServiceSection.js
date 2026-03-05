"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false, loading: () => <div className={styles.lottiePlaceholder} /> }
);
import styles from "./SingleServiceSection.module.css";
import { useContactModal } from "@/components/ContactModal/ContactModalContext";

const services = [
  {
    title: "אני רוצה להקים חנות",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    tag: "estore",
    openModal: true,
  },
  {
    title: " יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    lottieScale: 1.125,
    lottieMarginLeft: "-100px",
  },
  {
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    lottieScale: 0.7,
  },
  {
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
  },
  {
    title: "קידום ממומן",
    lottieSrc:
      "https://lottie.host/59a72b50-8b50-4c27-9c9c-efe954c87795/aomd8YgN2I.lottie",
    lottieScale: 0.9,
    lottieMarginLeft: "16px",
  },
  {
    title: "רוצה לראות דוגמאות",
    lottieSrc:
      "https://lottie.host/93c4fa5b-82ef-47f0-a3ba-f04eda19034d/XOtUJ2cvZ5.lottie",
    showLastFrame: true,
    lottieScale: 0.7,
    tag: "more-examples",
  },
];

function ServiceCard({ service }) {
  const dotLottieRef = useRef(null);
  const timerRef = useRef(null);
  const { open } = useContactModal();

  const dotLottieRefCallback = (dotLottie) => {
    dotLottieRef.current = dotLottie;

    if (service.showLastFrame && dotLottie) {
      dotLottie.addEventListener("load", () => {
        const lastFrame = dotLottie.totalFrames - 1;
        dotLottie.setFrame(lastFrame);
        dotLottie.pause();
      });
    }
  };

  const handleMouseEnter = () => {
    const delay = service.instantPlay ? 0 : 250;
    timerRef.current = setTimeout(() => {
      if (service.showLastFrame) {
        dotLottieRef.current?.setFrame(0);
      }
      dotLottieRef.current?.play();
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    if (service.showLastFrame) {
      dotLottieRef.current?.pause();
      const lastFrame = (dotLottieRef.current?.totalFrames ?? 1) - 1;
      dotLottieRef.current?.setFrame(lastFrame);
    } else {
      dotLottieRef.current?.stop();
    }
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {service.openModal ? (
        <button type="button" onClick={open} className="btn-primary">
          {service.title}
        </button>
      ) : (
        <a href={service.href} className="btn-primary">
          {service.title}
        </a>
      )}
      <div
        className={styles.lottieWrapper}
        style={{
          ...(service.lottieScale
            ? { transform: `scale(${service.lottieScale})` }
            : {}),
          ...(service.lottieMarginLeft
            ? { marginLeft: service.lottieMarginLeft }
            : {}),
        }}
      >
        {service.lottieSrc ? (
          <DotLottieReact
            src={service.lottieSrc}
            loop
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
            className={styles.lottie}
          />
        ) : (
          <div className={styles.lottiePlaceholder} />
        )}
      </div>
    </div>
  );
}
16;

export default function SingleServiceSection({
  title = "חנויות אינטרנטיות שמוכרות",
  subtitle = "אני בונה חנויות WooCommerce עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה.",
  tag = "estore",
}) {
  const service = services.find((s) => s.tag === tag);
  const moreExamples = services.find((s) => s.tag === "more-examples");
  if (!service) return null;

  return (
    <section className={styles.section} id={tag}>
      <div className={styles.inner}>
        <div>
          <h2 className={`h2 ${styles.headline}`}>{title}</h2>
          <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        </div>
        <div className={styles.grid}>
          <ServiceCard key={service.title} service={service} />
          <ServiceCard key={moreExamples.title} service={moreExamples} />
        </div>
      </div>
    </section>
  );
}
