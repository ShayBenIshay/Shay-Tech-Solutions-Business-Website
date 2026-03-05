"use client";

import { useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./ServicesSection.module.css";
import { useContactModal } from "@/components/ContactModal/ContactModalContext";

const services = [
  {
    title: "הקמת חנות אינטרנטית",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    openModal: true,
  },
  {
    title: " יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    // lottieScale: 1.125,
    // lottieMarginLeft: "-100px",
    openModal: true,
  },
  {
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    // lottieScale: 0.8,
    openModal: true,
  },
  {
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
    openModal: true,
  },
  {
    title: "קידום ממומן",
    lottieSrc:
      "https://lottie.host/59a72b50-8b50-4c27-9c9c-efe954c87795/aomd8YgN2I.lottie",
    // lottieScale: 0.9,
    // lottieMarginLeft: "16px",
    openModal: true,
  },
  {
    title: "רוצה לראות דוגמאות",
    lottieSrc:
      "https://lottie.host/93c4fa5b-82ef-47f0-a3ba-f04eda19034d/XOtUJ2cvZ5.lottie",
    showLastFrame: true,
    lottieScale: 0.7,
    href: "/portfolio",
  },
];

function ServiceCard({ service }) {
  const dotLottieRef = useRef(null);
  const timerRef = useRef(null);
  const isMobileRef = useRef(false);
  const { open } = useContactModal();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 499px)");
    isMobileRef.current = mq.matches;
    if (mq.matches && dotLottieRef.current) {
      dotLottieRef.current.play();
    }
    const handler = (e) => { isMobileRef.current = e.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const dotLottieRefCallback = (dotLottie) => {
    dotLottieRef.current = dotLottie;

    if (dotLottie) {
      dotLottie.addEventListener("load", () => {
        if (isMobileRef.current) {
          dotLottie.play();
          return;
        }
        if (service.showLastFrame) {
          const lastFrame = dotLottie.totalFrames - 1;
          dotLottie.setFrame(lastFrame);
          dotLottie.pause();
        }
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

  const cardProps = service.openModal
    ? {
        role: "button",
        tabIndex: 0,
        onClick: open,
        onKeyDown: (e) => e.key === "Enter" && open(),
      }
    : { href: service.href };

  const CardTag = service.openModal ? "div" : "a";

  return (
    <CardTag
      {...cardProps}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="btn-primary">{service.title}</button>
      {/* <div
        className={styles.lottieWrapper}
        style={{
          ...(service.lottieScale
            ? { transform: `scale(${service.lottieScale})` }
            : {}),
          ...(service.lottieMarginLeft
            ? { marginLeft: service.lottieMarginLeft }
            : {}),
        }} */}
      {/* > */}
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
      {/* </div> */}
    </CardTag>
  );
}

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>
            בונה אתרים, חנויות ומערכות שעובדות בשבילך
          </h2>
          <p className={`h3 ${styles.subtitle}`}>
            ליווי מלא: מתכנון, דרך פיתוח מקצועי ועד ניהול שוטף ופרסום.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
