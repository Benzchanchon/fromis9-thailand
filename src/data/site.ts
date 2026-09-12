export const socialLinks = [
  {
    id: "x",
    label: "X",
    href: "https://x.com/realfromis_9?lang=en",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/officialfromis_9/?hl=en",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@fromis9_official",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@official_fromis9?lang=en",
  },
] as const;

function getConfiguredSiteOrigin() {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return null;
  }
}

export const siteConfig = {
  name: "fromis_9 Thailand",
  configuredOrigin: getConfiguredSiteOrigin(),
} as const;

export function getPublicSiteOrigin() {
  return siteConfig.configuredOrigin ?? window.location.origin;
}

interface FooterContent {
  description: string | null;
  copyright: string;
  disclaimer: string;
}

export const footerContent: FooterContent = {
  description: null,
  copyright: "© 2026 fromis_9 Thailand",
  disclaimer: "Unofficial fan-made website for fromis_9.",
};
