import React, { type ReactElement, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/themes";

interface DropdownItem<T extends React.Key = string> {
  id: T;
  label: string;
  color?: string;
}

interface DropdownBaseProps<T extends React.Key = string> {
  items: DropdownItem<T>[];
  selectedId: T;
  onSelect: (id: T) => void;
  startIcon?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  style?: React.CSSProperties;
}

export default function DropdownBase<T extends React.Key>({
  items,
  selectedId,
  onSelect,
  startIcon,
  className = "",
  buttonClassName = "",
  dropdownClassName = "",
  style,
}: DropdownBaseProps<T>): ReactElement {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedItem = items.find((i) => i.id === selectedId);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Adjust dropdown position and maxHeight on open
  useEffect(() => {
    if (!open || !buttonRef.current || !dropdownRef.current) return;

    // Use requestAnimationFrame to let Safari render first
    requestAnimationFrame(() => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current!.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // Add safety margin for iOS Safari toolbars
      const SAFETY_MARGIN = /iPad|iPhone|iPod/.test(navigator.userAgent)
        ? 120
        : 20;

      if (
        spaceBelow - SAFETY_MARGIN < dropdownHeight &&
        spaceAbove > dropdownHeight
      ) {
        setDropUp(true);
        setMaxHeight(spaceAbove - SAFETY_MARGIN);
      } else {
        setDropUp(false);
        setMaxHeight(spaceBelow - SAFETY_MARGIN);
      }
    });
  }, [open]);

  return (
    <div ref={dropdownRef} className={`relative w-fit ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex flex-row justify-between items-center bg-transparent text-[inherit] rounded-md px-2 py-2 focus:outline-none focus:ring-0 transition-all duration-150 ${buttonClassName} border-red `}
        style={{
          borderColor: "var(--comp-cube-border-color)",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <span className="flex items-center gap-2 mx-2">
          {startIcon && <span>{startIcon}</span>}
          <span className="font-medium">{selectedItem?.label}</span>
        </span>

        <ChevronDown size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`absolute w-full border rounded-md shadow-lg z-50 overflow-auto ${dropdownClassName}`}
            style={{
              top: dropUp ? "auto" : "100%",
              bottom: dropUp ? "100%" : "auto",
              marginTop: dropUp ? 0 : 4,
              marginBottom: dropUp ? 4 : 0,
              maxHeight: maxHeight,
              backgroundColor: palette.background,
              ...style,
            }}
          >
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  onSelect(item.id);
                  setOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:text-white transition-colors duration-150 ${
                  item.color ? `hover:bg-[${item.color}]` : "hover:bg-gray-700"
                }`}
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
