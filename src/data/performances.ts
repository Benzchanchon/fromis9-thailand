import type {
  PerformanceCategory,
  PerformanceItem,
} from "../types/content";

export const performancesPageContent = {
  eyebrow: "PERFORMANCES",
  title: "Performances",
  subtitle: "Performance page introduction pending approved content.",
  archiveEyebrow: "PERFORMANCE ARCHIVE",
  archiveTitle: "All Performances",
} as const;

export const performanceCategories: readonly PerformanceCategory[] = [
  "Music Show",
  "Concert",
  "Special Stage",
  "Cover",
  "Behind the Scenes",
  "Fancam",
  "Other",
];

export const performanceFilters = [
  { id: "all", label: "All" },
  ...performanceCategories.map((category) => ({
    id: category,
    label: category,
  })),
];

export function getYouTubeThumbnail(
  videoId: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault",
) {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

export const performanceItems: readonly PerformanceItem[] = [
  {
    id: "fm-1-24-vitamin-me-behind-2026-08-31",
    title:
      "[FM_1.24] เบื้องหลังการโปรโมต ‘Vitamin ME’ ท่ามกลางบรรยากาศชวนฝันของฤดูร้อน 🎆",
    date: "2026-08-31",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=FPk3aLZjpAs",
    youtubeVideoId: "FPk3aLZjpAs",
    thumbnailAlt: "เบื้องหลังการโปรโมต Vitamin ME ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการทำกิจกรรมโปรโมตเพลง “Vitamin ME” ของ fromis_9 พร้อมโมเมนต์ระหว่างการถ่ายทำและช่วงพักของสมาชิก",
    description:
      "ติดตามสาว ๆ ตั้งแต่ช่วงเตรียมตัวและทำกิจกรรมตามตารางโปรโมต การถ่ายชาเลนจ์และคอนเทนต์ต่าง ๆ ไปจนถึงโมเมนต์ระหว่างพักที่ได้เห็นสมาชิกพูดคุย หยอกล้อ และใช้เวลาร่วมกันอย่างเป็นธรรมชาติ\n\nอีกหนึ่งบันทึกความทรงจำของยุค Glow ME / Vitamin ME ที่รวมทั้งความตั้งใจบนเวทีและโมเมนต์น่ารัก ๆ หลังเวทีของ fromis_9 เอาไว้ในคลิปเดียว 🎆🍀",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "FM_1_24"],
  },
  {
    id: "fm-1-24-vitamin-me-recording-behind-2026-08-21",
    title: "[FM_1.24] เบื้องหลังการบันทึกเสียง ‘Vitamin ME’ 🎙️💊",
    date: "2026-08-21",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=85PUJ2K3jho",
    youtubeVideoId: "85PUJ2K3jho",
    thumbnailAlt: "เบื้องหลังการบันทึกเสียง Vitamin ME ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการบันทึกเสียงเพลง “Vitamin ME” ของ fromis_9 พร้อมเผยขั้นตอนการทำงานและการถ่ายทอดเสน่ห์ของสมาชิกแต่ละคนผ่านเสียงร้อง",
    description:
      "ติดตามสมาชิกแต่ละคนในห้องอัด ตั้งแต่การบันทึกพาร์ตของตัวเอง การปรับน้ำเสียงและรายละเอียดต่าง ๆ ไปจนถึงการพูดคุยและรับคำแนะนำระหว่างการอัด เพื่อถ่ายทอดอารมณ์สดใสและพลังของเพลง “Vitamin ME” ออกมาให้สมบูรณ์ที่สุด\n\nเบื้องหลังที่เผยให้เห็นอีกด้านของ “Vitamin ME” ตั้งแต่ความตั้งใจและสมาธิระหว่างทำงาน ไปจนถึงโมเมนต์เป็นกันเองของสมาชิก ทำให้ได้เห็นกระบวนการก่อนที่เสียงร้องที่เราได้ยินในเพลงจะกลายมาเป็น “Vitamin ME” เวอร์ชันสมบูรณ์ 🎙️☀️💊",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "FM_1_24"],
  },
  {
    id: "fm-1-24-vitamin-me-behind-2026-08-11",
    title: "[FM_1.24] เบื้องหลังการถ่าย ‘Vitamin ME’ PERFORMANCE VIDEO 🌺🏝️",
    date: "2026-08-11",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=LjF81-f2AvI",
    youtubeVideoId: "LjF81-f2AvI",
    thumbnailAlt:
      "เบื้องหลังการถ่าย Vitamin ME PERFORMANCE VIDEO ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการถ่าย Performance Video เพลง “Vitamin ME” ของ fromis_9 พร้อมบรรยากาศสดใสและโมเมนต์ของสมาชิกระหว่างการถ่ายทำ",
    description:
      "ติดตามสาว ๆ fromis_9 ในกองถ่าย Performance Video เพลง “Vitamin ME” ตั้งแต่การเตรียมตัวก่อนเข้าฉาก การถ่ายทำเพอร์ฟอร์แมนซ์ในแต่ละช่วง ไปจนถึงโมเมนต์ระหว่างพักที่เผยให้เห็นทั้งความตั้งใจและความเป็นธรรมชาติของสมาชิก ท่ามกลางบรรยากาศฤดูร้อนในคอนเซ็ปต์ทรอปิคอล\n\nอีกหนึ่งเบื้องหลังของยุค Glow ME / Vitamin ME ที่พาไปเห็นเสน่ห์ของ Performance Video ในอีกมุม ทั้งพลังในการแสดง บรรยากาศสดใส และโมเมนต์น่ารัก ๆ ของ fromis_9 ที่เข้ากับฤดูร้อนได้อย่างลงตัว 🌺🏝️☀️",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "FM_1_24"],
  },
  {
    id: "fm-vitamin-performance-2026-08-02",
    title: "fromis_9 (프로미스나인) ‘Vitamin ME’ PERFORMANCE VIDEO 🌺🏝️",
    date: "2026-08-02",
    category: "Other",
    videoUrl: "https://www.youtube.com/watch?v=96RdpeRxoVs",
    youtubeVideoId: "96RdpeRxoVs",
    thumbnailAlt:
      "Performance Video เพลง Vitamin ME ของ fromis_9 ในบรรยากาศฤดูร้อน",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "Performance Video เพลง “Vitamin ME” ของ fromis_9 ที่ถ่ายทอดเสน่ห์ของเพลงผ่านการแสดงและบรรยากาศฤดูร้อนอันสดใส",
    description:
      "พบกับ Performance Video ของเพลง “Vitamin ME” ที่สาว ๆ fromis_9 ถ่ายทอดทั้งท่าเต้น พลังในการแสดงและเสน่ห์ของสมาชิกแต่ละคน ท่ามกลางฉากและบรรยากาศที่เต็มไปด้วยกลิ่นอายของฤดูร้อน\n\nอีกหนึ่งเวอร์ชันของ “Vitamin ME” ที่ช่วยเติมเต็มคอนเซ็ปต์ฤดูร้อนของ Glow ME ให้ชัดเจนยิ่งขึ้น ด้วยภาพที่สดใส การแสดงที่เต็มไปด้วยพลังและบรรยากาศที่เข้ากับความสดชื่นของเพลงได้อย่างลงตัว 🌺🏝️☀️",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME"],
  },
  {
    id: "fm-1-24-vitamin-me-behind-2026-07-29",
    title:
      "[FM_1.24] ฉันจะทำให้เธอมีความสุขเอง ☀️🌴 เบื้องหลังการถ่าย MV ‘Vitamin ME’",
    date: "2026-07-29",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=4GsIPPN4F5c&t=542s",
    youtubeVideoId: "4GsIPPN4F5c",
    thumbnailAlt: "เบื้องหลังการถ่าย MV Vitamin ME ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการถ่ายทำ MV เพลง “Vitamin ME” ของ fromis_9 พร้อมบรรยากาศในกองถ่ายและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    description:
      "ติดตามสาว ๆ fromis_9 ในกองถ่าย MV “Vitamin ME” ตั้งแต่การเตรียมตัว การถ่ายทำในฉากต่าง ๆ ไปจนถึงช่วงพักระหว่างกอง ที่เผยให้เห็นทั้งความตั้งใจในการทำงานและโมเมนต์เป็นธรรมชาติของสมาชิกท่ามกลางบรรยากาศฤดูร้อนอันสดใส\n\nอีกหนึ่งเบื้องหลังที่พาไปสัมผัสบรรยากาศของ “Vitamin ME” มากขึ้น ทั้งคอนเซ็ปต์ฤดูร้อน สีสันของกองถ่าย และเสน่ห์ของสมาชิกที่ช่วยเติมเต็มภาพของ Glow ME ให้สมบูรณ์ยิ่งขึ้น ☀️🌴💊",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "FM_1_24"],
  },
  {
    id: "answer-me-fromis-9-2026-07-27",
    title: "🗣️ Answer ME! fromis_9 เปิดศูนย์รับปรึกษาปัญหา 💌",
    date: "2026-07-27",
    category: "Other",
    videoUrl: "https://www.youtube.com/watch?v=0WquCfnUIng",
    youtubeVideoId: "0WquCfnUIng",
    thumbnailAlt: "fromis_9 กับคอนเทนต์ Answer ME! เปิดศูนย์รับปรึกษาปัญหา",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "fromis_9 เปิดพื้นที่รับฟังเรื่องราวและปัญหาต่าง ๆ พร้อมช่วยกันแชร์มุมมองและคำแนะนำในสไตล์ของสมาชิกแต่ละคน",
    description:
      "พบกับสาว ๆ fromis_9 ที่มารับหน้าที่เป็นที่ปรึกษา คอยรับฟังเรื่องราวและปัญหาที่ถูกส่งเข้ามา พร้อมช่วยกันพูดคุย แสดงความคิดเห็น และหาคำตอบผ่านมุมมองของสมาชิกแต่ละคน\n\nคอนเทนต์พูดคุยสบาย ๆ ที่ได้ทั้งคำแนะนำและความสนุก พร้อมเผยให้เห็นวิธีคิดและเคมีของสมาชิกผ่านการแลกเปลี่ยนความคิดเห็นในแบบฉบับของ fromis_9 🗣️💌",
    tags: ["fromis_9", "프로미스나인", "GlowME", "VitaminME", "AnswerME"],
  },
  {
    id: "fm-1-24-glow-me-jacket-behind-2026-07-22",
    title: "เบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม Glow ME ของ fromis_9",
    date: "2026-07-22",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=6IJUDC0Y09A",
    youtubeVideoId: "6IJUDC0Y09A",
    thumbnailAlt: "เบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม Glow ME ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม “Glow ME” ของ fromis_9 พร้อมบรรยากาศในกองถ่ายและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    description:
      "ติดตามสาว ๆ fromis_9 ระหว่างการถ่ายภาพแจ็กเก็ตสำหรับอัลบั้ม “Glow ME” ตั้งแต่การเตรียมตัวและโพสถ่ายภาพในคอนเซ็ปต์ต่าง ๆ ไปจนถึงช่วงพักระหว่างการถ่ายทำ ที่ได้เห็นทั้งความตั้งใจและเสน่ห์ของสมาชิกในบรรยากาศเบื้องหลังแบบเป็นธรรมชาติ\n\nอีกหนึ่งเบื้องหลังที่ช่วยเปิดให้เห็นภาพของ “Glow ME” มากขึ้น ทั้งคอนเซ็ปต์ของอัลบั้ม บรรยากาศในกองถ่าย และโมเมนต์น่ารัก ๆ ของสมาชิกก่อนที่ภาพต่าง ๆ จะกลายมาเป็นส่วนหนึ่งของอัลบั้มฉบับสมบูรณ์ 💘✨",
    tags: ["fromis_9", "프로미스나인", "GlowME", "VitaminME", "FM_1_24"],
  },
  {
    id: "fanchant-vitamin-me-2026-07-21",
    title: "fromis_9 (프로미스나인) คู่มือคำเชียร์ ‘Vitamin ME’ 💊📣",
    date: "2026-07-21",
    category: "Other",
    videoUrl: "https://www.youtube.com/watch?v=17tMsblcNh4",
    youtubeVideoId: "17tMsblcNh4",
    thumbnailAlt: "คู่มือคำเชียร์เพลง Vitamin ME ของ fromis_9",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "เรียนรู้คำเชียร์อย่างเป็นทางการของเพลง “Vitamin ME” เพื่อให้ flover สามารถร้องและส่งเสียงเชียร์ไปพร้อมกับ fromis_9 บนเวทีได้อย่างถูกจังหวะ",
    description:
      "มาฝึกคำเชียร์ของเพลง “Vitamin ME” ไปพร้อมกับ fromis_9 ตั้งแต่จังหวะที่ต้องเรียกชื่อสมาชิก ไปจนถึงคำและท่อนต่าง ๆ ที่ flover จะได้ร่วมร้องและส่งเสียงเชียร์ระหว่างการแสดง\n\nคู่มือสำหรับเตรียมตัวให้พร้อมก่อนเจอกับ “Vitamin ME” บนเวที เพื่อเติมพลังและทำให้บรรยากาศการแสดงของยุค Glow ME สนุกยิ่งขึ้นด้วยเสียงเชียร์จาก flover 💊📣🍀",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "Fanchant"],
  },
  {
    id: "vitamin-me-mv-2026-07-21",
    title: "fromis_9 (프로미스나인) ‘Vitamin ME’ MV 💊☀️",
    date: "2026-07-21",
    category: "Other",
    videoUrl: "https://www.youtube.com/watch?v=sLk8zWUuYTA",
    youtubeVideoId: "sLk8zWUuYTA",
    thumbnailAlt:
      "มิวสิกวิดีโอเพลง Vitamin ME ของ fromis_9 จากอัลบั้ม Glow ME",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "มิวสิกวิดีโอเพลงไตเติล “Vitamin ME” จากอัลบั้มเต็มชุดที่ 2 “Glow ME” ของ fromis_9 ที่ถ่ายทอดเสน่ห์สดใสและบรรยากาศของฤดูร้อน",
    description:
      "พบกับ fromis_9 ในมิวสิกวิดีโอ “Vitamin ME” เพลงไตเติลจากอัลบั้ม “Glow ME” ที่ถ่ายทอดเสน่ห์ของสมาชิกผ่านภาพและการแสดง พร้อมบรรยากาศสดใสที่เข้ากับพลังและความสดชื่นของเพลง\n\n“Vitamin ME” ถือเป็นหนึ่งในภาพสำคัญที่เปิดยุค Glow ME อย่างเต็มรูปแบบ ด้วยสีสัน ความสดใส และเสน่ห์ของ fromis_9 ที่ช่วยเติมเต็มบรรยากาศฤดูร้อนให้มีชีวิตชีวามากยิ่งขึ้น 💊☀️🌴",
    tags: ["fromis_9", "프로미스나인", "VitaminME", "GlowME", "MV"],
  },
  {
    id: "fm-1-24-k-pulse-hanoi-2026-07-18",
    title: "[FM_1.24] รักนะ ❤️ เบื้องหลัง K-PULSE HANOI 2026 VN",
    date: "2026-07-18",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=Dufms3ZJyC8",
    youtubeVideoId: "Dufms3ZJyC8",
    thumbnailAlt:
      "เบื้องหลังการแสดงของ fromis_9 ในงาน K-PULSE HANOI 2026 ที่ประเทศเวียดนาม",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการเดินทางของ fromis_9 สู่กรุงฮานอย เพื่อร่วมงาน K-PULSE HANOI 2026 พร้อมบรรยากาศก่อนขึ้นเวทีและโมเมนต์ของสมาชิกระหว่างตารางงาน",
    description:
      "ติดตามสาว ๆ fromis_9 กับเบื้องหลังการเข้าร่วมงาน K-PULSE HANOI 2026 ที่ประเทศเวียดนาม ตั้งแต่การเตรียมตัวก่อนขึ้นเวที บรรยากาศหลังเวที ไปจนถึงช่วงเวลาระหว่างสมาชิก ก่อนออกไปพบกับแฟน ๆ และถ่ายทอดพลังผ่านการแสดงบนเวที\n\nอีกหนึ่งความทรงจำจากฮานอยที่เต็มไปด้วยพลังของการแสดง เสียงเชียร์จากแฟน ๆ และโมเมนต์น่ารัก ๆ ของ fromis_9 ที่ได้ใช้เวลาร่วมกับ flover ชาวเวียดนาม 🇻🇳❤️🍀",
    tags: [
      "fromis_9",
      "프로미스나인",
      "KPULSEHANOI2026",
      "Vietnam",
      "FM_1_24",
    ],
  },
  {
    id: "fm-1-24-nagyung-DoosanBearsears-2026-07-11",
    title:
      "[FM_1.24] นาโกะ นางฟ้าแห่งชัยชนะ 🐻 เบื้องหลังการขว้างลูกเปิดสนาม Doosan Bears ⚾",
    date: "2026-07-11",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=jjD29k__SmQ",
    youtubeVideoId: "jjD29k__SmQ",
    thumbnailAlt:
      "เบื้องหลังการขว้างลูกเปิดสนามของนากยอง fromis_9 ให้กับ Doosan Bears",
    featured: true,
    members: ["nagyung"],
    summary:
      "พาไปชมเบื้องหลังของนากยองจาก fromis_9 กับการกลับมาขว้างลูกเปิดสนามให้ Doosan Bears อีกครั้ง พร้อมบรรยากาศก่อนลงสนามและโมเมนต์ตลอดการแข่งขัน",
    description:
      "ติดตามนากยองกับการกลับมายืนบนสนามเบสบอลจัมชิลในฐานะผู้ขว้างลูกเปิดสนามของ Doosan Bears อีกครั้งในรอบ 8 ปี ตั้งแต่การเตรียมตัวและฝึกซ้อมก่อนลงสนาม ไปจนถึงช่วงเวลาที่ได้ขึ้นไปขว้างลูกบนเนินจริง ท่ามกลางเสียงเชียร์จากแฟน ๆ\n\nอีกหนึ่งวันพิเศษของนากยองที่ไม่ได้จบแค่การขว้างลูกเปิดสนาม แต่ยังกลายเป็น “นางฟ้าแห่งชัยชนะ” หลัง Doosan Bears คว้าชัยในเกมนั้น พร้อมเก็บทั้งความตื่นเต้น ความสนุก และบรรยากาศของสนามเบสบอลเอาไว้เป็นอีกหนึ่งความทรงจำ ⚾🐻🍀",
    tags: [
      "프로미스나인",
      "NAGYUNG",
      "이나경",
      "DoosanBears",
      "FirstPitch",
      "FM_1_24",
    ],
  },
  {
    id: "fm-1-24-jiwon-health-helper-2026-07-05",
    title: "[FM_1.24] สดชื่นซ่า ๆ 🍋🪽 เบื้องหลังจีวอนกับ Health Helper",
    date: "2026-07-05",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=YIV76EX24Xc&t=201s",
    youtubeVideoId: "YIV76EX24Xc",
    thumbnailAlt:
      "เบื้องหลังการถ่ายแคมเปญ Health Helper ของจีวอน fromis_9",
    featured: true,
    members: ["jiwon"],
    summary:
      "พาไปชมเบื้องหลังการถ่ายแคมเปญ Health Helper ของจีวอน fromis_9 พร้อมบรรยากาศในกองถ่ายและเสน่ห์สดใสของเธอในฐานะโมเดลของแบรนด์",
    description:
      "ติดตามจีวอนกับเบื้องหลังการถ่ายแคมเปญให้กับแบรนด์ Health Helper ที่มาพร้อมคอนเซ็ปต์สดชื่นรับฤดูร้อน ตั้งแต่การเตรียมตัวและถ่ายทำคอนเทนต์ต่าง ๆ ไปจนถึงโมเมนต์ระหว่างกองที่เผยให้เห็นทั้งความตั้งใจในการทำงานและพลังสดใสในแบบของจีวอน\n\nอีกหนึ่งเบื้องหลังงานเดี่ยวที่ได้เห็นเสน่ห์อีกด้านของจีวอนในฐานะโมเดลโฆษณา พร้อมบรรยากาศสดใสที่เข้ากับภาพลักษณ์ของแคมเปญ Health Helper และ MAXCUT ได้อย่างลงตัว 🍋🪽✨",
    tags: [
      "fromis_9",
      "프로미스나인",
      "JIWON",
      "박지원",
      "HealthHelper",
      "MAXCUT",
      "FM_1_24",
    ],
  },
  {
    id: "fm-1-24-miimca-teleca-2026-07-02",
    title:
      "[FM_1.24] ⚠️ fromis_9 โหมดดาร์กมาแล้ว ⚠️ เบื้องหลัง MIIMCA x TELECA 🖤",
    date: "2026-07-02",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=193cRsfvuuQ",
    youtubeVideoId: "193cRsfvuuQ",
    thumbnailAlt:
      "เบื้องหลังการถ่าย MIIMCA x TELECA Collection Card ของ fromis_9 ในคอนเซ็ปต์ดาร์ก",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการถ่ายคอลเลกชันการ์ด MIIMCA x TELECA ของ fromis_9 พร้อมเผยเสน่ห์อีกด้านของสมาชิกผ่านคอนเซ็ปต์ที่เข้มและดาร์กกว่าที่เคย",
    description:
      "ติดตามสาว ๆ fromis_9 กับเบื้องหลังการถ่าย MIIMCA x TELECA Collection Card ตั้งแต่การเตรียมตัว การโพสถ่ายภาพ และการถ่ายทอดคอนเซ็ปต์ของสมาชิกแต่ละคน ที่ครั้งนี้มาในลุคเข้มและมีเสน่ห์แตกต่างจากภาพลักษณ์สดใสที่คุ้นเคย\n\nอีกหนึ่งคอนเทนต์ที่ได้เห็น fromis_9 ในมุมใหม่ ผ่านบรรยากาศการถ่ายทำและคอนเซ็ปต์ “Dark fromis_9” ที่เผยทั้งความเท่ ความมั่นใจ และเสน่ห์ของสมาชิกในแบบที่แตกต่างออกไป 🖤📸✨",
    tags: [
      "fromis_9",
      "프로미스나인",
      "MIIMCA",
      "TELECA",
      "CollectionCard",
      "FM_1_24",
    ],
  },
  {
    id: "fm-1-24-jiheon-spao-2026-06-19",
    title:
      "[FM_1.24] ในวันหนึ่งที่อากาศแสนดี จีฮอนนี่ก็ปรากฏตัว 🍎 เบื้องหลังการถ่าย SPAO",
    date: "2026-06-19",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=nTfQ2zbfJW4",
    youtubeVideoId: "nTfQ2zbfJW4",
    thumbnailAlt: "เบื้องหลังการถ่ายแฟชั่น SPAO ของจีฮอน fromis_9",
    featured: true,
    members: ["jiheon"],
    summary:
      "พาไปชมเบื้องหลังการถ่ายแฟชั่นของจีฮอน fromis_9 กับ SPAO พร้อมเสน่ห์สดใสและบรรยากาศสบาย ๆ ในคอนเซ็ปต์ฤดูร้อน",
    description:
      "ติดตามจีฮอนกับเบื้องหลังการถ่ายแฟชั่นให้กับ SPAO ในคอนเซ็ปต์ Breezy Summer ที่ถ่ายทอดสไตล์เดลี่ลุคสำหรับฤดูร้อนผ่านเสื้อผ้าสบาย ๆ และบรรยากาศเป็นธรรมชาติ พร้อมชมขั้นตอนการถ่ายทำและโมเมนต์ต่าง ๆ ของจีฮอนระหว่างกอง\n\nอีกหนึ่งงานเดี่ยวที่ได้เห็นเสน่ห์สดใสและเป็นธรรมชาติของจีฮอน ผ่านบรรยากาศฤดูร้อนอันผ่อนคลายที่เข้ากับสไตล์ของ SPAO และคอนเซ็ปต์ Breezy Summer ได้อย่างลงตัว 🍎🌿☀️",
    tags: [
      "fromis_9",
      "프로미스나인",
      "JIHEON",
      "백지헌",
      "SPAO",
      "BreezySummer",
      "FM_1_24",
    ],
  },
  {
    id: "fm-1-24-university-festival-2026-06-16",
    title:
      "[FM_1.24] รับพลังกลับมาเต็ม ๆ 💓 เบื้องหลังเทศกาลมหาวิทยาลัย 2026",
    date: "2026-06-16",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=qXZHmIas-vs",
    youtubeVideoId: "qXZHmIas-vs",
    thumbnailAlt:
      "เบื้องหลังการแสดงของ fromis_9 ในเทศกาลมหาวิทยาลัยปี 2026",
    featured: true,
    members: ["hayoung", "nagyung", "jiwon", "chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังการเดินสายขึ้นแสดงตามเทศกาลมหาวิทยาลัยต่าง ๆ ของ fromis_9 พร้อมพลังจากผู้ชมและบรรยากาศสนุกสนานตลอดการแสดง",
    description:
      "ติดตามสาว ๆ fromis_9 กับการเดินสายขึ้นเวทีตามเทศกาลมหาวิทยาลัยในปี 2026 ตั้งแต่การเตรียมตัวและบรรยากาศก่อนขึ้นแสดง ไปจนถึงโมเมนต์บนเวทีที่เต็มไปด้วยเสียงเชียร์และพลังจากเหล่านักศึกษาและแฟน ๆ ที่มาร่วมสนุกไปด้วยกัน\n\nอีกหนึ่งช่วงเวลาที่ได้เห็นพลังของ fromis_9 บนเวทีพร้อมกับบรรยากาศอันคึกคักของเทศกาลมหาวิทยาลัย ทั้งความสนุก เสียงเชียร์ และพลังที่สมาชิกได้รับกลับไปอย่างเต็มเปี่ยม 💓🎤🍀",
    tags: [
      "fromis_9",
      "프로미스나인",
      "UniversityFestival",
      "CollegeFestival",
      "FM_1_24",
    ],
  },
  {
    id: "fly-list-nagyung-cover-2026-06-01",
    title: "[fl▶ylist]‘BTS - Euphoria’ cover by นากยอง🩵✨",
    date: "2026-06-01",
    category: "Cover",
    videoUrl: "https://www.youtube.com/watch?v=dzoD-s_fu_8",
    youtubeVideoId: "dzoD-s_fu_8",
    thumbnailAlt: "นากยอง fromis_9 คัฟเวอร์เพลง Euphoria ของ BTS",
    featured: true,
    members: ["nagyung"],
    summary:
      "นากยอง fromis_9 ถ่ายทอดเพลง “Euphoria” ของ BTS ผ่านเสียงร้องและบรรยากาศในแบบของตัวเอง เนื่องในโอกาสวันเกิดของเธอ",
    description:
      "พบกับนากยองใน [fl▶ylist] กับการคัฟเวอร์เพลง “Euphoria” ของ BTS ที่ถ่ายทอดอารมณ์ของบทเพลงผ่านเสียงร้องของเธอ พร้อมนำเสนอเสน่ห์อีกด้านในฐานะนักร้องผ่านการแสดงเดี่ยว\n\nของขวัญพิเศษในวันเกิดของนากยองที่มอบให้ flover ผ่านบทเพลงที่เต็มไปด้วยความอบอุ่นและความรู้สึกดี ๆ อีกหนึ่ง [fl▶ylist] ที่ได้ฟังเสียงของนากยองอย่างเต็มที่ 🩵🎂✨",
    tags: [
      "fromis_9",
      "프로미스나인",
      "NAGYUNG",
      "이나경",
      "Euphoria",
      "BTS",
      "fl_ylist",
    ],
  },
  {
    id: "fm-1-24-busan-2026-05-29",
    title:
      "[FM_1.24] พวกเราไปปูซานมาแล้ว 👩🏻‍❤️‍👩🏻 เบื้องหลัง Longchamp Pop-up",
    date: "2026-05-29",
    category: "Behind the Scenes",
    videoUrl: "https://www.youtube.com/watch?v=9L8Z0Py4Z_w",
    youtubeVideoId: "9L8Z0Py4Z_w",
    thumbnailAlt:
      "เบื้องหลังแชยองและจีฮอน fromis_9 ร่วมงาน Longchamp Pop-up ที่ปูซาน",
    featured: true,
    members: ["chaeyoung", "jiheon"],
    summary:
      "พาไปชมเบื้องหลังของแชยองและจีฮอน fromis_9 กับการเดินทางไปปูซานเพื่อร่วมงานเปิด La Plage Longchamp Pop-up พร้อมบรรยากาศและโมเมนต์ของทั้งคู่ระหว่างตารางงาน",
    description:
      "ติดตามแชยองและจีฮอนกับการเดินทางไปยังปูซานเพื่อร่วมงาน La Plage Longchamp Pop-up ที่ Shinsegae Department Store Centum City ตั้งแต่บรรยากาศระหว่างตารางงาน ไปจนถึงการเข้าร่วมงานและถ่ายภาพในลุคที่ถ่ายทอดเสน่ห์ของทั้งคู่ผ่านสไตล์ของ Longchamp\n\nอีกหนึ่งเบื้องหลังงานคู่ที่ได้เห็นเคมีของแชยองและจีฮอน พร้อมบรรยากาศสบาย ๆ ของทริปปูซานและโมเมนต์แฟชั่นที่แตกต่างจากการทำกิจกรรมบนเวทีของ fromis_9 👩🏻‍❤️‍👩🏻👜✨",
    tags: [
      "fromis_9",
      "프로미스나인",
      "CHAEYOUNG",
      "이채영",
      "JIHEON",
      "백지헌",
      "Longchamp",
      "Busan",
      "FM_1_24",
    ],
  },
];

export function sortPerformancesByDateDesc(
  performances: readonly PerformanceItem[],
) {
  return [...performances].sort((left, right) =>
    right.date.localeCompare(left.date),
  );
}

const newestFeaturedPerformance = sortPerformancesByDateDesc(
  performanceItems.filter((performance) => performance.featured),
)[0];

if (!newestFeaturedPerformance) {
  throw new Error("At least one featured performance is required.");
}

export const featuredPerformance = {
  eyebrow: "FEATURED PERFORMANCE",
  date: newestFeaturedPerformance.date,
  title: newestFeaturedPerformance.title,
  summary: newestFeaturedPerformance.summary,
  imageLabel: newestFeaturedPerformance.thumbnailAlt,
  imageSrc: getYouTubeThumbnail(newestFeaturedPerformance.youtubeVideoId),
  imageFallbackSrc: getYouTubeThumbnail(
    newestFeaturedPerformance.youtubeVideoId,
    "hqdefault",
  ),
  imageAlt: newestFeaturedPerformance.thumbnailAlt,
  actionText: "Watch Performance",
  actionHref: newestFeaturedPerformance.videoUrl,
  actionExternal: true,
} as const;

const memberFeaturedPerformanceLimit = 3;

export function getFeaturedPerformancesByMember(memberSlug: string) {
  return sortPerformancesByDateDesc(
    performanceItems.filter(
      (performance) =>
        performance.featured && performance.members.includes(memberSlug),
    ),
  ).slice(0, memberFeaturedPerformanceLimit);
}

export const loadMoreLabel = "Load More Performances";
