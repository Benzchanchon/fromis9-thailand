import styles from "./SocialIconLink.module.css";

export type SocialPlatform = "x" | "instagram" | "youtube" | "tiktok";

interface SocialIconLinkProps {
  platform: SocialPlatform;
  label: string;
  href: string;
  variant: "header" | "footer";
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
        />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245h-3.166v12.152a2.663 2.663 0 1 1-2.663-2.663c.267 0 .525.04.768.113V8.817a5.885 5.885 0 0 0-.768-.05 5.826 5.826 0 1 0 5.826 5.826V8.432a7.97 7.97 0 0 0 4.773 1.616V6.879a4.82 4.82 0 0 1-1-.193Z"
      />
    </svg>
  );
}

export function SocialIconLink({
  platform,
  label,
  href,
  variant,
}: SocialIconLinkProps) {
  return (
    <a
      className={`${styles.link} ${styles[variant]}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <SocialIcon platform={platform} />
    </a>
  );
}
