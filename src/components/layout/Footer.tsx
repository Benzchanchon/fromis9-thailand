import { Link } from "react-router-dom";
import { footerContent, socialLinks } from "../../data/site";
import { ContentRail } from "./ContentRail";
import styles from "./Footer.module.css";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Members", href: "/members" },
  { label: "Performances" },
  { label: "News" },
];
export function Footer() {
  return (
    <footer className={styles.footer}>
      <ContentRail className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <div className={styles.wordmark}>
              fromis_9 <strong>Thailand</strong>
            </div>
            {footerContent.description ? (
              <p>{footerContent.description}</p>
            ) : null}
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
              {socialLinks.map((item) => (
                <a
                  className={styles.iconPlaceholder}
                  data-asset-status="figma-export-pending"
                  href={item.href}
                  title={item.label}
                  aria-label={`${item.label} social link`}
                  key={item.id}
                >
                  asset
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          <span>{footerContent.copyright}</span>
          <span>{footerContent.disclaimer}</span>
        </div>
      </ContentRail>
    </footer>
  );
}
