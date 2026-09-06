"use client";

import type { ReactNode } from "react";
import { useContactModal } from "./ContactModalContext";

interface OpenContactModalButtonProps {
  className?: string;
  children: ReactNode;
}

export default function OpenContactModalButton({
  className,
  children,
}: OpenContactModalButtonProps) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
