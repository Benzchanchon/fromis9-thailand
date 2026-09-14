import styles from "./PageHeaderDecoration.module.css";

export type PageHeaderDecorationVariant =
  | "members"
  | "performances"
  | "news"
  | "history";

interface PageHeaderDecorationProps {
  variant: PageHeaderDecorationVariant;
  side: "left" | "right";
}

function MembersDecoration() {
  return (
    <svg viewBox="0 0 72 52" aria-hidden="true" focusable="false">
      <rect
        x="8"
        y="17"
        width="34"
        height="14"
        rx="7"
        fill="var(--color-pale-yellow)"
        stroke="var(--color-orange)"
        strokeWidth="1.5"
      />
      <path
        d="M49 7v12M43 13h12M45.5 9.5l7 7M52.5 9.5l-7 7"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 42c5-6 10 6 15 0s10 6 15 0"
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="59" cy="34" r="3" fill="var(--color-cyan)" opacity="0.7" />
      <circle cx="66" cy="28" r="1.75" fill="var(--color-orange)" />
    </svg>
  );
}

function PerformancesDecoration() {
  return (
    <svg viewBox="0 0 72 52" aria-hidden="true" focusable="false">
      <rect
        x="7"
        y="16"
        width="37"
        height="13"
        rx="6.5"
        fill="color-mix(in srgb, var(--color-brand) 14%, white)"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        transform="rotate(-9 25.5 22.5)"
      />
      <path
        d="M53 6l1.7 5.3L60 13l-5.3 1.7L53 20l-1.7-5.3L46 13l5.3-1.7L53 6Z"
        fill="var(--color-pale-yellow)"
        stroke="var(--color-orange)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M17 40c4-4 8 4 12 0s8 4 12 0 8 4 12 0"
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="61" cy="31" r="2.5" fill="var(--color-brand)" opacity="0.75" />
      <circle cx="66" cy="38" r="1.5" fill="var(--color-cyan)" />
    </svg>
  );
}

function NewsDecoration() {
  return (
    <svg viewBox="0 0 72 52" aria-hidden="true" focusable="false">
      <path
        d="M9 24c0-7 6-12 14-12 7 0 13 3 15 9 2 7-4 13-13 14-9 1-16-4-16-11Z"
        fill="color-mix(in srgb, var(--color-cyan) 13%, white)"
        stroke="var(--color-cyan)"
        strokeWidth="1.5"
      />
      <path
        d="M51 7v14M44 14h14M46.5 9.5l9 9M55.5 9.5l-9 9"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="42"
        y="32"
        width="20"
        height="8"
        rx="4"
        fill="var(--color-pale-yellow)"
        stroke="var(--color-orange)"
        strokeWidth="1.25"
        transform="rotate(7 52 36)"
      />
      <circle cx="66" cy="25" r="2" fill="var(--color-cyan)" />
      <circle cx="32" cy="44" r="1.75" fill="var(--color-orange)" />
    </svg>
  );
}

function HistoryDecoration() {
  return (
    <svg viewBox="0 0 72 52" aria-hidden="true" focusable="false">
      <path d="M35 46V30C35 19 18 30 15 16M35 34C35 17 54 28 57 12" fill="none" stroke="var(--color-brand)" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="5" y="7" width="24" height="10" rx="5" fill="var(--color-pale-yellow)" stroke="var(--color-orange)" transform="rotate(25 17 12)" />
      <rect x="47" y="4" width="21" height="10" rx="5" fill="#eafaff" stroke="var(--color-cyan)" transform="rotate(-25 57 9)" />
      <path d="M39 5v10M34 10h10" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="36" r="2.5" fill="var(--color-cyan)" />
      <circle cx="59" cy="37" r="2" fill="var(--color-orange)" />
    </svg>
  );
}

export function PageHeaderDecoration({
  variant,
  side,
}: PageHeaderDecorationProps) {
  return (
    <span className={`${styles.decoration} ${styles[side]}`} aria-hidden="true">
      {variant === "members" ? <MembersDecoration /> : null}
      {variant === "performances" ? <PerformancesDecoration /> : null}
      {variant === "news" ? <NewsDecoration /> : null}
      {variant === "history" ? <HistoryDecoration /> : null}
    </span>
  );
}
