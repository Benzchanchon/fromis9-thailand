import saeromImage from "../assets/images/History/saerom-memento.png";
import jisunImage from "../assets/images/History/jisun-memento.png";
import seoyeonImage from "../assets/images/History/seoyeon-memento.png";
import gyuriImage from "../assets/images/History/gyuri-memento.png";
import type { FormerMember } from "../types/history";
import { historyPrimarySource } from "./history";

export const formerMembersSection = {
  eyebrow: "PART OF OUR STORY",
  title: "Former Members",
  introduction: "สมาชิกที่ร่วมสร้างเรื่องราวของ fromis_9 ในแต่ละช่วงเวลา ทุกคนยังคงเป็นส่วนสำคัญของประวัติวง",
};

export const formerMembers: readonly FormerMember[] = [
  {
    id: "former-saerom", slug: "saerom", name: "Lee Saerom", koreanName: "이새롬", yearsActive: "2017–2024",
    role: "หัวหน้าวง · นักเต้นนำ · นักร้องเสริม · วิชวล",
    biographyTh: "อีแซรมเป็นสมาชิกจาก Idol School และทำหน้าที่หัวหน้าวงตั้งแต่การก่อตั้ง เธอร่วมกิจกรรมกับ fromis_9 จนถึงปี 2024 และเป็นส่วนหนึ่งของผลงานทั้งในยุคสมาชิก 9 คนและ 8 คน",
    image: { src: saeromImage, alt: "Lee Saerom ในภาพคอนเซปต์ From Our Memento Box ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Lee_Saerom_From_Our_Memento_Box_concept_photo_1.png", credit: "From Our Memento Box · Kpop Wiki" },
    sourceUrl: historyPrimarySource,
  },
  {
    id: "former-jisun", slug: "jisun", name: "Roh Jisun", koreanName: "노지선", yearsActive: "2017–2024",
    role: "นักร้องเสริม · เซ็นเตอร์",
    biographyTh: "โนจีซอนคว้าอันดับหนึ่งในรอบสุดท้ายของ Idol School และรับหน้าที่เซ็นเตอร์ของวง เธอร่วมเส้นทางของ fromis_9 ตั้งแต่การก่อตั้งในปี 2017 จนถึงปี 2024",
    image: { src: jisunImage, alt: "Roh Jisun ในภาพคอนเซปต์ From Our Memento Box ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Roh_Jisun_From_Our_Memento_Box_concept_photo_3.png", credit: "From Our Memento Box · Kpop Wiki" },
    sourceUrl: historyPrimarySource,
  },
  {
    id: "former-seoyeon", slug: "seoyeon", name: "Lee Seoyeon", koreanName: "이서연", yearsActive: "2017–2024",
    role: "แร็ปเปอร์หลัก · นักร้องนำ · นักเต้นนำ",
    biographyTh: "อีซอยอนเป็นหนึ่งในสมาชิกชุดแรกที่ได้รับเลือกผ่าน Idol School โดยมีหน้าที่แร็ปเปอร์หลัก รวมถึงนักร้องนำและนักเต้นนำ เธอร่วมทำกิจกรรมกับ fromis_9 ตั้งแต่ปี 2017 จนถึงปี 2024",
    image: { src: seoyeonImage, alt: "Lee Seoyeon ในภาพคอนเซปต์ From Our Memento Box ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Lee_Seoyeon_From_Our_Memento_Box_concept_photo_3.png", credit: "From Our Memento Box · Kpop Wiki" },
    sourceUrl: historyPrimarySource,
  },
  {
    id: "former-gyuri", slug: "gyuri", name: "Jang Gyuri", koreanName: "장규리", yearsActive: "2017–2022",
    role: "นักร้องนำ",
    biographyTh: "จางกยูริเป็นสมาชิกชุดแรกจาก Idol School และรับหน้าที่นักร้องนำ ในปี 2018 เธอเข้าร่วม Produce 48 ก่อนกลับมาร่วมโปรโมต From.9 กับวงครบ 9 คน และสิ้นสุดกิจกรรมกับ fromis_9 เมื่อวันที่ 31 กรกฎาคม 2022",
    image: { src: gyuriImage, alt: "Jang Gyuri ในภาพคอนเซปต์ From Our Memento Box ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Jang_Gyuri_From_Our_Memento_Box_concept_photo_1.png", credit: "From Our Memento Box · Kpop Wiki", objectPosition: "35% center" },
    sourceUrl: historyPrimarySource,
  },
];
