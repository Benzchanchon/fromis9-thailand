import { Link, NavLink } from "react-router-dom";
import { socialLinks } from "../../data/site";
import { ContentRail } from "./ContentRail";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "home", label: "Home", href: "/", enabled: true },
  { id: "members", label: "Members", href: "/members", enabled: true },
  {
    id: "performances",
    label: "Performances",
    href: "/performances",
    enabled: true,
  },
  { id: "news", label: "News", href: "/news", enabled: true },
] as const;

type ActiveRoute = "home" | "members" | "performances" | "news";

interface NavbarProps {
  activeRoute?: ActiveRoute;
}

export function Navbar({ activeRoute = "home" }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <ContentRail className={styles.inner}>
        <Link className={styles.brand} to="/" aria-label="fromis_9 Thailand home">
          <span className={styles.wordmark}>
            fromis_9 <strong>Thailand</strong>
          </span>
          <span className={styles.descriptor}>THAI FAN COMMUNITY</span>
        </Link>

        <nav className={styles.navigation} aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.enabled ? (
                  <NavLink
                    className={item.id === activeRoute ? styles.active : undefined}
                    to={item.href}
                    aria-current={item.id === activeRoute ? "page" : undefined}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <span aria-disabled="true">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socials} aria-label="Social links">
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
      </ContentRail>
    </header>
  );
}
