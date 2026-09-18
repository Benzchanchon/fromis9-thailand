import type { MemberSummary } from "./content";

/** Historical profiles are deliberately separate from the routable current roster. */
export interface FormerMemberProfile extends MemberSummary {
  status: "former";
  koreanName: string;
  positions: readonly string[];
  birthday: string;
  height: string;
  weight: string;
  bloodType: string;
  mbti: readonly string[];
  instagramUrl: string;
  membershipEndDate: string;
  biographyTh: string;
  sourceUrl: string;
  imageSourceUrl: string;
  imageCredit: string;
  imagePosition?: string;
}
