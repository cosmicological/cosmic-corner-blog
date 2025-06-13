"use client";
import { ReactNode } from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black backdrop-blur-sm">
      <div></div>
    </div>
  );
}
