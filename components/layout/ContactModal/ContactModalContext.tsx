"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { ServiceValue } from "@/components/sections/TalkToMe/TalkToMe";

interface ContactModalContextValue {
  isOpen: boolean;
  presetService: ServiceValue;
  open: (presetService?: ServiceValue) => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<ServiceValue>("");
  const open = (service?: ServiceValue) => {
    setPresetService(service || "");
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, presetService, open, close }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal(): ContactModalContextValue {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}
