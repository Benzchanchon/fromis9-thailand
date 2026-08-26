import { Link, NavLink } from "react-router-dom";
import { ContentRail } from "./ContentRail";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "home", label: "Home", href: "/", enabled: true },
  { id: "members", label: "Members", href: "/members", enabled: true },
  {
    id: "performances",
    label: "Performances",
    href: "/performances",
    enabled: false,
  },
  { id: "news", label: "News", href: "/news", enabled: false },
] as const;

const socialItems = ["Instagram", "X", "YouTube"];

type ActiveRoute = "home" | "members";

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

        <div className={styles.socials} aria-label="Social assets pending export">
          {socialItems.map((item) => (
            <span
              className={styles.iconPlaceholder}
              data-asset-status="figma-export-pending"
              title={`${item} icon asset pending`}
              aria-label={`${item} icon asset pending`}
              key={item}
            >
              asset
            </span>
          ))}
        </div>
      </ContentRail>
    </header>
  );
}
