"use client";

import { useEffect, useRef } from "react";

export function useScrollListener(handler: () => void): void {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    const onScroll = () => handlerRef.current();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
