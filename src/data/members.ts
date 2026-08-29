import type { MemberProfile } from "../types/content";

const names = ["Nagyung", "Hayoung", "Jiwon", "Chaeyoung", "Jiheon"] as const;

export const members: MemberProfile[] = names.map((name) => {
  const slug = name.toLowerCase();

  return {
    slug,
    name,
    secondary: "Profile details pending",
    imageLabel: `${name} portrait`,
    biography:
      "Biography placeholder — approved member biography content is not yet available from Figma.",
    heroStatLabel: "PROFILE STAT",
    heroStatValue: "Pending approved content",
    profileFacts: Array.from({ length: 6 }, (_, index) => ({
      label: `Profile field ${String(index + 1).padStart(2, "0")}`,
      value: "Pending approved content",
    })),
    performances: Array.from({ length: 3 }, (_, index) => ({
      id: `${slug}-performance-${index + 1}`,
      date: "DATE PENDING",
      title: `Performance title placeholder ${index + 1}`,
      imageLabel: `${name} performance thumbnail ${index + 1}`,
    })),
  };
});

export function getMemberBySlug(slug?: string) {
  return members.find((member) => member.slug === slug);
}
