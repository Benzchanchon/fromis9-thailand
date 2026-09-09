import { useState } from "react";
import styles from "./PillFilterBar.module.css";

interface FilterOption {
  id: string;
  label: string;
}

interface PillFilterBarProps {
  options: readonly FilterOption[];
  ariaLabel: string;
  onChange?: (id: string) => void;
}

export function PillFilterBar({
  options,
  ariaLabel,
  onChange,
}: PillFilterBarProps) {
  const [activeId, setActiveId] = useState(options[0]?.id ?? "");

  return (
    <div className={styles.filters} aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          className={`${styles.filter} ${
            option.id === activeId ? styles.active : ""
          }`.trim()}
          type="button"
          aria-pressed={option.id === activeId}
          onClick={() => {
            setActiveId(option.id);
            onChange?.(option.id);
          }}
          key={option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
