import { Link } from "react-router-dom";
import { ContentRail } from "./ContentRail";
import styles from "./Footer.module.css";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Members", href: "/members" },
  { label: "Performances" },
  { label: "News" },
];
const socialItems = ["Instagram", "X", "YouTube"];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentRail className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <div className={styles.wordmark}>
              fromis_9 <strong>Thailand</strong>
            </div>
            <p>Footer description pending approved Figma content export.</p>
          </div>

          <div>
            <h2>SITEMAP</h2>
            <ul className={styles.linkList}>
              {sitemap.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link to={item.href}>{item.label}</Link>
                  ) : (
                    <span aria-disabled="true">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>SOCIAL</h2>
            <div className={styles.socials}>
              {socialItems.map((item) => (
                <span
                  className={styles.iconPlaceholder}
                  data-asset-status="figma-export-pending"
                  title={`${item} icon asset pending`}
                  key={item}
                >
                  asset
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          <span>© fromis_9 Thailand</span>
          <span>Non-commercial fan project</span>
        </div>
      </ContentRail>
    </footer>
  );
}
