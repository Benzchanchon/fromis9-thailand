import type {
  MemberSummary,
  NewsItem,
  ReleaseSummary,
} from "../types/content";

export const newsItems: NewsItem[] = [
  {
    id: "news-placeholder-01",
    date: "DATE PENDING",
    title: "News headline pending Figma content export",
    summary:
      "Editorial summary unavailable while structured Figma access is rate-limited.",
    imageLabel: "Latest news image 01",
  },
  {
    id: "news-placeholder-02",
    date: "DATE PENDING",
    title: "News headline pending Figma content export",
    summary:
      "Editorial summary unavailable while structured Figma access is rate-limited.",
    imageLabel: "Latest news image 02",
  },
  {
    id: "news-placeholder-03",
    date: "DATE PENDING",
    title: "News headline pending Figma content export",
    summary:
      "Editorial summary unavailable while structured Figma access is rate-limited.",
    imageLabel: "Latest news image 03",
  },
];

// Names are limited to the five labels visible in the supplied Figma frame.
// No profile facts are added until the source content can be exported.
export const members: MemberSummary[] = [
  {
    slug: "nagyung",
    name: "Nagyung",
    secondary: "Profile details pending",
    imageLabel: "Nagyung portrait",
  },
  {
    slug: "hayoung",
    name: "Hayoung",
    secondary: "Profile details pending",
    imageLabel: "Hayoung portrait",
  },
  {
    slug: "jiwon",
    name: "Jiwon",
    secondary: "Profile details pending",
    imageLabel: "Jiwon portrait",
  },
  {
    slug: "chaeyoung",
    name: "Chaeyoung",
    secondary: "Profile details pending",
    imageLabel: "Chaeyoung portrait",
  },
  {
    slug: "jisun",
    name: "Jisun",
    secondary: "Profile details pending",
    imageLabel: "Jisun portrait",
  },
];

export const latestRelease: ReleaseSummary = {
  title: "Vitamin ME",
  eyebrow: "RELEASE DETAILS PENDING",
  description:
    "Release copy and metadata will be added from the approved Figma content export.",
  imageLabel: "Vitamin ME release artwork",
};

