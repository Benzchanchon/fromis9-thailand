import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./ContentRail.module.css";

interface ContentRailProps<T extends ElementType = "div"> {
  as?: T;
  children: ReactNode;
  className?: string;
}

export function ContentRail<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: ContentRailProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContentRailProps<T>>) {
  const Component = as ?? "div";

  return (
    <Component className={`${styles.rail} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

