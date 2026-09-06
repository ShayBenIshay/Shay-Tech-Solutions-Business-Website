"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { useContactModal } from "@/components/layout/ContactModal/ContactModalContext";
import type { ServiceCard } from "@/lib/serviceCards";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false, loading: () => <div /> },
);

export interface LottieCardStyles {
  card: string;
  lottieWrapper: string;
  lottie: string;
  lottiePlaceholder: string;
}

type CssModule = { readonly [className: string]: string };

interface ServiceLottieCardProps {
  service: ServiceCard;
  styles: LottieCardStyles | CssModule;
}

function LottieVisual({
  service,
  styles,
  dotLottieRefCallback,
}: {
  service: ServiceCard;
  styles: LottieCardStyles | CssModule;
  dotLottieRefCallback: (dotLottie: DotLottie | null) => void;
}) {
  return (
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
  );
}

export default function ServiceLottieCard({
  service,
  styles,
}: ServiceLottieCardProps) {
  const dotLottieRef = useRef<DotLottie | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMobileRef = useRef(false);
  const { open } = useContactModal();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 499px)");
    isMobileRef.current = mq.matches;
    if (mq.matches && dotLottieRef.current) {
      dotLottieRef.current.play();
    }
    const handler = (e: MediaQueryListEvent) => {
      isMobileRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
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
    if (timerRef.current) clearTimeout(timerRef.current);
    if (service.showLastFrame) {
      dotLottieRef.current?.pause();
      const lastFrame = (dotLottieRef.current?.totalFrames ?? 1) - 1;
      dotLottieRef.current?.setFrame(lastFrame);
    } else {
      dotLottieRef.current?.stop();
    }
  };

  const visual = (
    <LottieVisual
      service={service}
      styles={styles}
      dotLottieRefCallback={dotLottieRefCallback}
    />
  );

  if (service.openModal) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {visual}
        <span className="btn-primary">{service.title}</span>
      </div>
    );
  }

  return (
    <Link
      href={service.href ?? "/"}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {visual}
      <span className="btn-primary">{service.title}</span>
    </Link>
  );
}
