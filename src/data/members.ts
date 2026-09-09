import chaeyoungImage from "../assets/images/Members/chaeyoung.jpg";
import hayoungImage from "../assets/images/Members/hayoung.jpg";
import jiheonImage from "../assets/images/Members/jiheon.jpg";
import jiwonImage from "../assets/images/Members/jiwon.jpg";
import nagyungImage from "../assets/images/Members/nagyung.jpg";
import type {
  MemberProfile,
  ProfileFact,
} from "../types/content";

export const members: MemberProfile[] = [
  {
    slug: "nagyung",
    stageName: "Nagyung (นากยอง)",
    fullName: "Lee Na-gyung (อีนากยอง)",
    koreanName: "이나경",
    dateOfBirth: "2000-06-01",
    position: "นักเต้นนำ, นักร้อง, แร็ปเปอร์, วิชวล",
    height: "160 cm",
    weight: "42 kg",
    bloodType: "A",
    mbtiType: "TBD",
    representativeEmoji: "🐣",
    instagramUrl: "https://www.instagram.com/blossomlng_0/",
    biography:
      "อีนากยอง (Lee Na-gyung) เป็นสมาชิก fromis_9 ที่โดดเด่นด้วยเสน่ห์บนเวทีและภาพลักษณ์ที่เป็นเอกลักษณ์ เธอมีจุดแข็งทั้งด้านการเต้น การร้อง และการแสดงออกผ่านสีหน้า ทำให้สามารถถ่ายทอดคอนเซปต์ได้หลากหลาย ตั้งแต่ความสดใสไปจนถึงลุคที่มีเสน่ห์และมั่นใจ นากยองยังเป็นหนึ่งในสมาชิกที่ได้รับความสนใจจากแฟน ๆ ด้วยบุคลิกที่เป็นธรรมชาติและมีสีสันของตัวเอง",
    imageSrc: nagyungImage,
    imageAlt: "Nagyung from fromis_9",
  },
  {
    slug: "hayoung",
    stageName: "Hayoung (ฮายอง)",
    fullName: "Song Ha-young (ซงฮายอง)",
    koreanName: "송하영",
    dateOfBirth: "1997-09-29",
    position: "รองหัวหน้าวง (ผู้นำร่วม), นักร้องนำ, นักเต้นนำ",
    height: "163 cm",
    weight: "43 kg",
    bloodType: "A",
    mbtiType: "INFP",
    representativeEmoji: "🍞",
    instagramUrl: "https://www.instagram.com/shy9_29/",
    biography:
      "ซงฮายอง (Song Ha-young) เป็นหนึ่งในกำลังสำคัญของ fromis_9 ทั้งด้านการร้องและการเต้น ด้วยน้ำเสียงที่มีเอกลักษณ์และทักษะการแสดงที่แข็งแรง เธอสามารถถ่ายทอดทั้งเพลงที่สดใสและเพลงที่ต้องใช้อารมณ์ได้อย่างเป็นธรรมชาติ นอกจากความสามารถบนเวทีแล้ว ฮายองยังมีบุคลิกที่อบอุ่นและเป็นกันเอง ซึ่งกลายเป็นเสน่ห์สำคัญที่ทำให้เธอได้รับความรักจากแฟน ๆ มาอย่างต่อเนื่อง",
    imageSrc: hayoungImage,
    imageAlt: "Hayoung from fromis_9",
  },
  {
    slug: "jiwon",
    stageName: "Jiwon (จีวอน)",
    fullName: "Park Ji-won (พัคจีวอน)",
    koreanName: "박지원",
    dateOfBirth: "1998-03-20",
    position: "นักร้องนำ",
    height: "157 cm",
    weight: "44 kg",
    bloodType: "A",
    mbtiType: "INTJ / ENTJ",
    representativeEmoji: "🐰",
    instagramUrl: "https://www.instagram.com/xjiwonparkx/",
    biography:
      "พัคจีวอน (Park Ji-won) เป็นสมาชิกที่โดดเด่นด้านพลังเสียงและการถ่ายทอดอารมณ์ผ่านการร้อง ด้วยเสียงที่แข็งแรงและมีเอกลักษณ์ เธอเป็นหนึ่งในสีสันสำคัญของเพลง fromis_9 ทั้งในท่อนที่ต้องใช้พลังและช่วงที่ต้องการความละเอียดอ่อน นอกเวที จีวอนยังเป็นที่รู้จักจากบุคลิกที่มีพลัง สนุกสนาน และเป็นธรรมชาติ ทำให้เธอสร้างบรรยากาศที่สดใสให้กับวงอยู่เสมอ",
    imageSrc: jiwonImage,
    imageAlt: "Jiwon from fromis_9",
  },
  {
    slug: "chaeyoung",
    stageName: "Chaeyoung (แชยอง)",
    fullName: "Lee Chae-young (อีแชยอง)",
    koreanName: "이채영",
    dateOfBirth: "2000-05-14",
    position: "นักเต้นหลัก, แร็ปเปอร์นำ, นักร้อง",
    height: "168 cm",
    weight: "48 kg",
    bloodType: "B",
    mbtiType: "INFJ",
    representativeEmoji: "🐿️",
    instagramUrl: "https://www.instagram.com/chaengrang_/",
    biography:
      "อีแชยอง (Lee Chae-young) เป็นสมาชิกที่โดดเด่นด้วยการแสดงบนเวทีที่เต็มไปด้วยพลังและความมั่นใจ เธอมีจุดแข็งด้านการเต้น พร้อมทั้งสามารถถ่ายทอดทั้งการร้องและแร็ปได้อย่างลงตัว ทำให้เป็นสมาชิกที่ช่วยเพิ่มมิติให้กับการแสดงของ fromis_9 แชยองยังมีบุคลิกที่สดใส เป็นกันเอง และมีอารมณ์ขัน ซึ่งทำให้เธอเป็นหนึ่งในสมาชิกที่สร้างสีสันให้กับวงทั้งบนเวทีและนอกเวที",
    imageSrc: chaeyoungImage,
    imageAlt: "Chaeyoung from fromis_9",
  },
  {
    slug: "jiheon",
    stageName: "Jiheon (จีฮอน)",
    fullName: "Baek Ji-heon (แพคจีฮอน)",
    koreanName: "백지헌",
    dateOfBirth: "2003-04-17",
    position: "นักร้องนำ, มักเน่",
    height: "166 cm",
    weight: "45 kg",
    bloodType: "B",
    mbtiType: "INFJ / ENFJ",
    representativeEmoji: "🍯",
    instagramUrl: "https://www.instagram.com/jiheonnibaek/",
    biography:
      "แพคจีฮอน (Baek Ji-heon) เป็นสมาชิกที่อายุน้อยที่สุดของ fromis_9 และเติบโตให้แฟน ๆ ได้เห็นพัฒนาการมาตั้งแต่ช่วงเริ่มต้นของวง เธอโดดเด่นด้วยภาพลักษณ์สดใส รอยยิ้มที่เป็นเอกลักษณ์ และเสน่ห์บนเวทีที่พัฒนาขึ้นอย่างต่อเนื่อง นอกจากการร้องและการแสดงแล้ว จีฮอนยังมีบุคลิกที่สุขุมและมีความมุ่งมั่น ทำให้เธอเป็นอีกหนึ่งสีสันสำคัญของ fromis_9 ในปัจจุบัน",
    imageSrc: jiheonImage,
    imageAlt: "Jiheon from fromis_9",
  },
];

function getInstagramHandle(instagramUrl: string) {
  const path = new URL(instagramUrl).pathname.replace(/^\/+|\/+$/g, "");
  return path ? `@${path}` : instagramUrl;
}

export function getMemberProfileFacts(member: MemberProfile): ProfileFact[] {
  return [
    { label: "Stage Name", value: member.stageName },
    { label: "Korean Name", value: member.koreanName },
    { label: "Position", value: member.position },
    { label: "MBTI Type", value: member.mbtiType },
    { label: "Height", value: member.height },
    {
      label: "Instagram",
      value: getInstagramHandle(member.instagramUrl),
      href: member.instagramUrl,
    },
    { label: "Full Name", value: member.fullName },
    { label: "Date of Birth", value: member.dateOfBirth },
    { label: "Blood Type", value: member.bloodType },
    { label: "Representative Emoji", value: member.representativeEmoji },
    { label: "Weight", value: member.weight },
  ];
}

export function getMemberBySlug(slug?: string) {
  return members.find((member) => member.slug === slug);
}
