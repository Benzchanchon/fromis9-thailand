import { useState } from "react";
import styles from "./PillFilterBar.module.css";

interface FilterOption {
  id: string;
  label: string;
}

interface PillFilterBarProps {
  options: readonly FilterOption[];
  ariaLabel: string;
}

export function PillFilterBar({ options, ariaLabel }: PillFilterBarProps) {
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
          data-content-status={
            option.id === "all" ? "interface-label" : "placeholder"
          }
          onClick={() => setActiveId(option.id)}
          key={option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
