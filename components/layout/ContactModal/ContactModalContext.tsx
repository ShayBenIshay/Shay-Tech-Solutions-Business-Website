"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ContactModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
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
