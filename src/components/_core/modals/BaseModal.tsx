import { type ReactNode, type CSSProperties, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tailwindMerge } from "@/global.utils";

type BaseModalPosition = "fixed" | "absolute";

interface BaseModalProps {
  open: boolean;
  children: ReactNode;
  position?: BaseModalPosition;
  classNames?: {
    rootClassName?: string;
    overlayClassName?: string;
    baseModalBodyClassName?: string;
  };
  onClose: () => void;
}

type ModalComponent = React.FC<BaseModalProps> & {
  Header: React.FC<SectionProps>;
  Body: React.FC<SectionProps>;
  Footer: React.FC<SectionProps>;
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/* ---------------- Main Component ---------------- */
const BaseModal: ModalComponent = (props: BaseModalProps) => {
  const {
    open,
    onClose,
    children,
    position = "fixed",
    classNames = {},
  } = props;

  const {
    rootClassName = "",
    overlayClassName = "",
    baseModalBodyClassName = "",
  } = classNames;

  const positionClass =
    position === "fixed" ? "fixed inset-0" : "absolute inset-0";

  // Handle Escape key to close modal as well
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={tailwindMerge(
            `${positionClass} z-50 flex items-center justify-center px-4`,
            rootClassName,
          )}
        >
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={tailwindMerge(`absolute inset-0`, overlayClassName)}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className={tailwindMerge(
              `relative z-10 w-full max-w-lg rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] p-6
              md:max-w-2xl md:p-10 overflow-hidden bg-background text-foreground`,
              baseModalBodyClassName,
            )}
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
    <div className={tailwindMerge(`mb-6 text-center`, className)} style={style}>
      {children}
    </div>
  );
};

BaseModal.Body = ({ children, className = "", style }) => {
  return (
    <div
      className={tailwindMerge(
        `font-quantico leading-relaxed text-center`,
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

BaseModal.Footer = ({ children, className = "", style }) => {
  return (
    <div
      className={tailwindMerge(`mt-8 flex justify-center`, className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default BaseModal;
export { type BaseModalProps, type BaseModalPosition };
