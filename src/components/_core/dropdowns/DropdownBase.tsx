import {
  type ReactElement,
  type CSSProperties,
  type ReactNode,
  useState,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { tailwindMerge } from "@/global.utils";

interface Item<T extends React.Key = string> {
  id: T;
  label: string;
  color?: string;
}

interface Props<T extends React.Key = string> {
  options: Item<T>[];
  startIcon?: ReactNode;
  value: T;
  styles?: {
    dropdownStyles?: CSSProperties;
  };
  classNames?: {
    rootClassName?: string;
    buttonClassName?: string;
    dropdownClassName?: string;
  };
  onSelect: (item: T) => void;
}

function DropdownBase<T extends React.Key>(props: Props<T>): ReactElement {
  const {
    options,
    value,
    onSelect,
    startIcon,
    classNames = {},
    styles = {},
  } = props;

  const { dropdownStyles = {} } = styles;
  const {
    rootClassName = "",
    buttonClassName = "",
    dropdownClassName = "",
  } = classNames;

  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>();

  // trackers
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedItem = options.find((o) => o.id === value);

  const handleDropdownToggle = () => {
    setOpen((prev) => !prev);
  };

  /**
   * Recalculate dropdown position and max height on open, and on window resize.
   * Helpful especially on mobile Safari with its dynamic toolbars.
   * We use requestAnimationFrame to ensure we get accurate measurements after the dropdown has rendered.
   */
  useEffect(() => {
    if (!open) return;
    if (buttonRef.current === null || rootRef.current === null) return; // defensive check

    requestAnimationFrame(() => {
      if (buttonRef.current === null || rootRef.current === null) return;
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = rootRef.current.offsetHeight;

      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // Safety margin for iOS Safari toolbars
      const SAFETY_MARGIN = /iPad|iPhone|iPod/.test(navigator.userAgent)
        ? 120
        : 30;

      const shouldDropUp =
        spaceBelow - SAFETY_MARGIN < dropdownHeight &&
        spaceAbove > dropdownHeight;

      const maxAvailableHeight = shouldDropUp
        ? spaceAbove - SAFETY_MARGIN
        : spaceBelow - SAFETY_MARGIN;

      setDropUp(shouldDropUp);
      setMaxHeight(maxAvailableHeight);
    });
  }, [open]);

  //  Close dropdown handlers
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={tailwindMerge("relative w-fit", rootClassName)}
    >
      <button
        ref={buttonRef}
        onClick={handleDropdownToggle}
        className={tailwindMerge(
          ` flex flex-row justify-between items-center 
            px-2 py-2 rounded-md bg-background font-medium
            focus:outline-none focus:ring-0 transition-all duration-150`,
          buttonClassName,
        )}
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "var(--comp-cube-border-color)",
        }}
      >
        <span className="flex items-center gap-2 mx-2">
          {startIcon && <span>{startIcon}</span>}
          <span>{selectedItem?.label}</span>
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
            className={`absolute w-full border bg-background rounded-md shadow-lg z-50 overflow-auto ${dropdownClassName}`}
            style={{
              top: dropUp ? "auto" : "100%",
              bottom: dropUp ? "100%" : "auto",
              marginTop: dropUp ? 0 : 4,
              marginBottom: dropUp ? 4 : 0,
              maxHeight: maxHeight,
              ...dropdownStyles,
            }}
          >
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => {
                  onSelect(option.id);
                  setOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:text-white transition-colors duration-150 ${
                  option.color
                    ? `hover:bg-[${option.color}]`
                    : "hover:bg-gray-700"
                }`}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownBase;
export { type Item as DropdownItem, type Props as DropdownBaseProps };
