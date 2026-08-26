import type { ProfileFact } from "../../types/content";
import styles from "./ProfileInfoGrid.module.css";

export function ProfileInfoGrid({ facts }: { facts: ProfileFact[] }) {
  const midpoint = Math.ceil(facts.length / 2);
  return (
    <div className={styles.grid}>
      {[facts.slice(0, midpoint), facts.slice(midpoint)].map((column, index) => (
        <dl className={styles.column} key={index}>
          {column.map((fact) => (
            <div className={styles.row} key={fact.label}>
              <dt>{fact.label}</dt><dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ))}
    </div>
  );
}
