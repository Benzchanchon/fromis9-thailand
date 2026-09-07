import type { ReleaseSummary } from "../types/content";
import heroImage from "../assets/images/Homepage/home-hero.jpg";
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
