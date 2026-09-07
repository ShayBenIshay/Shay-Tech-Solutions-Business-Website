"use client";

import type { ReactNode } from "react";
import { useContactModal } from "./ContactModalContext";
import type { ServiceValue } from "@/components/sections/TalkToMe/TalkToMe";

interface OpenContactModalButtonProps {
  className?: string;
  children: ReactNode;
  presetService?: ServiceValue;
}

export default function OpenContactModalButton({
  className,
  children,
  presetService,
}: OpenContactModalButtonProps) {
  const { open } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => open(presetService)}
      className={className}
    >
      {children}
    </button>
  );
}
