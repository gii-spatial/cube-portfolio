import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export type BaseModalPosition = "fixed" | "absolute";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: BaseModalPosition;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

type ModalComponent = React.FC<ModalProps> & {
  Header: React.FC<SectionProps>;
  Body: React.FC<SectionProps>;
  Footer: React.FC<SectionProps>;
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/* ---------------- Main Component ---------------- */
const BaseModal: ModalComponent = ({
  open,
  onClose,
  children,
  position = "fixed",
  className = "",
  overlayClassName = "",
  contentClassName = "",
}) => {
  const positionClass =
    position === "fixed" ? "fixed inset-0" : "absolute inset-0";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`${positionClass} z-50 flex items-center justify-center px-4 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className={`absolute inset-0 ${overlayClassName}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className={`relative z-10 w-full max-w-lg md:max-w-2xl rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] p-6 md:p-10 overflow-hidden ${contentClassName}`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------------- Subcomponents ---------------- */
BaseModal.Header = ({ children, className = "", style }) => {
  return (
    <div className={`mb-6 text-center ${className}`} style={style}>
      {children}
    </div>
  );
};

BaseModal.Body = ({ children, className = "", style }) => {
  return (
    <div
      className={`font-quantico leading-relaxed text-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

BaseModal.Footer = ({ children, className = "", style }) => {
  return (
    <div className={`mt-8 flex justify-center ${className}`} style={style}>
      {children}
    </div>
  );
};

export default BaseModal;
