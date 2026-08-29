export const socialLinks = [
  {
    id: "x",
    label: "X",
    href: "https://share.google/vxeHMp1P2B0ncWZpX",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://share.google/dv5PLXLQ3s5hyW1Bn",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://share.google/Qd9UzSkDKNYik7PeW",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://share.google/72GvE5oQvAG1DVa5S",
  },
] as const;

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
