import type { ProfileFact } from "../../types/content";
import styles from "./ProfileInfoGrid.module.css";

const mobileOrder = [
  "Stage Name", "Full Name", "Korean Name", "Date of Birth", "Position",
  "Height", "Weight", "Blood Type", "MBTI Type", "Representative Emoji", "Instagram",
];

function ProfileRow({ fact }: { fact: ProfileFact }) {
  return (
    <div className={styles.row}>
      <dt>{fact.label}</dt>
      <dd>
        {fact.href ? (
          <a href={fact.href} target="_blank" rel="noopener noreferrer">
            {fact.value}
          </a>
        ) : fact.value}
      </dd>
    </div>
  );
}

export function ProfileInfoGrid({ facts }: { facts: readonly ProfileFact[] }) {
  const midpoint = Math.ceil(facts.length / 2);
  return (
    <>
      <div className={styles.grid}>
        {[facts.slice(0, midpoint), facts.slice(midpoint)].map((column, index) => (
          <dl className={styles.column} key={index}>
            {column.map((fact) => (
              <ProfileRow fact={fact} key={fact.label} />
            ))}
          </dl>
        ))}
      </div>
      {/* Mutually exclusive layouts preserve desktop columns and mobile reading order. */}
      <dl className={styles.mobile}>
        {[...facts]
          .sort((a, b) => mobileOrder.indexOf(a.label) - mobileOrder.indexOf(b.label))
          .map((fact) => <ProfileRow fact={fact} key={fact.label} />)}
      </dl>
    </>
  );
}
