import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { socialLinks } from "../../data/site";
import { SocialIconLink } from "../ui/SocialIconLink";
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
  { id: "history", label: "History", href: "/history", enabled: true },
] as const;

type ActiveRoute = "home" | "members" | "performances" | "news" | "history";

interface NavbarProps {
  activeRoute?: ActiveRoute;
  mobileHome?: boolean;
}

export function Navbar({
  activeRoute = "home",
  mobileHome = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${mobileHome ? styles.mobileHome : ""} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ""
      }`.trim()}
    >
      <ContentRail className={styles.inner}>
        <Link
          className={styles.brand}
          to="/"
          aria-label="fromis_9 Thailand home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className={styles.wordmark}>
            fromis_9 <strong>Thailand</strong>
          </span>
          <span className={styles.descriptor}>THAI FAN COMMUNITY</span>
          <span className={styles.mobileDescriptor}>FAN CLUB</span>
        </Link>

        <nav
          className={styles.navigation}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.enabled ? (
                  <NavLink
                    className={item.id === activeRoute ? styles.active : undefined}
                    to={item.href}
                    aria-current={item.id === activeRoute ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
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
            <SocialIconLink
              platform={item.id}
              href={item.href}
              label={item.label}
              variant="header"
              key={item.id}
            />
          ))}
        </div>

        <button
          className={styles.mobileMenuButton}
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </ContentRail>
    </header>
  );
}
