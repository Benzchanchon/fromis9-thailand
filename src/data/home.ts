import type { NewsItem, ReleaseSummary } from "../types/content";
import heroImage from "../assets/images/Homepage/home-hero.jpg";
import newsReleaseImage from "../assets/images/Homepage/news-release-01.jpg";
import vitaminMeArtwork from "../assets/images/Homepage/vitamin-me.jpg";

export const homeHero = {
  eyebrow: "FROMIS_9 THAILAND",
  title: "Welcome to fromis_9 Thailand",
  description:
    "ชุมชนแฟนคลับและคลังข้อมูลสำหรับแฟนชาวไทยของ fromis_9 เพื่อแบ่งปันข่าวสารล่าสุด เนื้อหาแปล และความรักที่พวกเรามีต่อ fromis_9",
  buttonText: "Explore Members",
  buttonLink: "/members",
  imageSrc: heroImage,
  imageAlt: "fromis_9 group photo",
} as const;

export const homeSections = {
  newsTitle: "Latest News & Updates",
  membersTitle: "Meet fromis_9",
  membersDescription: null,
  releaseTitle: "Latest Release",
} as const;

export const homeMemberOrder = [
  "nagyung",
  "hayoung",
  "jiwon",
  "chaeyoung",
  "jiheon",
] as const;

export const newsItems: NewsItem[] = [
  {
    id: "fromis9-announces-2026-asia-tour-tomorrow-glow",
    status: "published",
    slug: "fromis9-announces-2026-asia-tour-tomorrow-glow",
    date: "2026-07-29",
    title: "fromis_9 Announces 2026 Asia Tour “TOMORROW GLOW.”",
    summary:
      "fromis_9 will kick off their 2026 Asia tour “TOMORROW GLOW.” with three concerts in Seoul from September 4–6 at Korea University’s Hwajung Tiger Dome. Additional cities across Asia will be announced later.",
    imageLabel: "fromis_9 TOMORROW GLOW. 2026 Asia Tour Seoul announcement",
    imageSrc: newsReleaseImage,
    imageAlt: "fromis_9 TOMORROW GLOW. 2026 Asia Tour Seoul announcement",
    category: "Tour",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-to-open-2026-asia-tour-tomorrow-glow-in-seoul-on-september-4",
  },
  {
    id: "news-placeholder-02",
    status: "placeholder",
    date: "DATE PENDING",
    title: "News headline pending Figma content export",
    summary:
      "Editorial summary unavailable while structured Figma access is rate-limited.",
    imageLabel: "Latest news image 02",
  },
  {
    id: "news-placeholder-03",
    status: "placeholder",
    date: "DATE PENDING",
    title: "News headline pending Figma content export",
    summary:
      "Editorial summary unavailable while structured Figma access is rate-limited.",
    imageLabel: "Latest news image 03",
  },
];

export const latestRelease: ReleaseSummary = {
  releaseType: "Album",
  title: "Vitamin ME",
  releaseDate: "2026-07-21",
  description:
    "fromis_9 makes their highly anticipated summer return with 'Vitamin Me'! The title track is an energetic, high-tempo pop anthem blending tropical summer synths with the group's signature radiant vocals. Let their cool breeze blow away the summer heat.",
  artworkSrc: vitaminMeArtwork,
  artworkAlt: "Vitamin ME album artwork",
  spotifyUrl: "https://share.google/Jw446jthJ6LQniYOx",
  youtubeUrl: "https://youtu.be/sLk8zWUuYTA?si=wmYvpuCIIYATt6RF",
  spotifyButtonText: "Listen on Spotify",
  youtubeButtonText: "Watch on YouTube",
};
