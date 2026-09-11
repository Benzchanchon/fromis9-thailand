import type {
  PerformanceCategory,
  PerformanceItem,
} from "../types/content";

export const performancesPageContent = {
  eyebrow: "PERFORMANCES",
  title: "Performances",
  subtitle: "รวมการแสดง คอนเทนต์พิเศษและเบื้องหลังของ fromis_9",
  archiveEyebrow: "PERFORMANCE ARCHIVE",
  archiveTitle: "All Performances",
} as const;

export const performanceCategories: readonly PerformanceCategory[] = [
  "MV",
  "Special Stage",
  "Cover",
  "Behind the Scenes",
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
    "id": "fm-1-24-esquire-behind-2026-09-10",
    "title": "[FM_1.24] What's up, hey Ladies 🩸 เบื้องหลังการถ่ายนิตยสาร Esquire",
    "date": "2026-09-10",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=5OiZCZo6aTc",
    "youtubeVideoId": "5OiZCZo6aTc",
    "thumbnailAlt": "เบื้องหลังแชยอง นากยอง และจีฮอน fromis_9 ถ่ายนิตยสาร Esquire",
    "featured": true,
    "members": [
      "nagyung",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นของแชยอง นากยอง และจีฮอนจาก fromis_9 ให้กับนิตยสาร Esquire พร้อมลุคโดดเด่นและโมเมนต์ระหว่างการทำงาน",
    "description": "ติดตามแชยอง นากยอง และจีฮอนในกองถ่ายแฟชั่นของนิตยสาร Esquire ตั้งแต่การเตรียมลุค การโพสหน้ากล้อง ไปจนถึงช่วงพักระหว่างเซตที่เผยเคมีและเสน่ห์เฉพาะตัวของทั้งสามคน\n\nเบื้องหลังชุดนี้พาไปเห็นอีกมุมของสมาชิกผ่านคอนเซ็ปต์ที่มั่นใจและโดดเด่น พร้อมบรรยากาศการทำงานที่เป็นธรรมชาติหลังภาพแฟชั่นฉบับสมบูรณ์ 🩸✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "Esquire",
      "FM_1_24",
      "LEECHAEYOUNG",
      "LEENAGYUNG",
      "BAEKJIHEON"
    ]
  },
  {
    "id": "fm-1-24-vitamin-me-behind-2026-08-31",
    "title": "[FM_1.24] เบื้องหลังการโปรโมต ‘Vitamin ME’ ท่ามกลางบรรยากาศชวนฝันของฤดูร้อน 🎆",
    "date": "2026-08-31",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=FPk3aLZjpAs",
    "youtubeVideoId": "FPk3aLZjpAs",
    "thumbnailAlt": "เบื้องหลังการโปรโมต Vitamin ME ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการทำกิจกรรมโปรโมตเพลง “Vitamin ME” ของ fromis_9 พร้อมโมเมนต์ระหว่างการถ่ายทำและช่วงพักของสมาชิก",
    "description": "ติดตามสาว ๆ ตั้งแต่ช่วงเตรียมตัวและทำกิจกรรมตามตารางโปรโมต การถ่ายชาเลนจ์และคอนเทนต์ต่าง ๆ ไปจนถึงโมเมนต์ระหว่างพักที่ได้เห็นสมาชิกพูดคุย หยอกล้อ และใช้เวลาร่วมกันอย่างเป็นธรรมชาติ\n\nอีกหนึ่งบันทึกความทรงจำของยุค Glow ME / Vitamin ME ที่รวมทั้งความตั้งใจบนเวทีและโมเมนต์น่ารัก ๆ หลังเวทีของ fromis_9 เอาไว้ในคลิปเดียว 🎆🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-vitamin-me-recording-behind-2026-08-21",
    "title": "[FM_1.24] เบื้องหลังการบันทึกเสียง ‘Vitamin ME’ 🎙️💊",
    "date": "2026-08-21",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=85PUJ2K3jho",
    "youtubeVideoId": "85PUJ2K3jho",
    "thumbnailAlt": "เบื้องหลังการบันทึกเสียง Vitamin ME ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการบันทึกเสียงเพลง “Vitamin ME” ของ fromis_9 พร้อมเผยขั้นตอนการทำงานและการถ่ายทอดเสน่ห์ของสมาชิกแต่ละคนผ่านเสียงร้อง",
    "description": "ติดตามสมาชิกแต่ละคนในห้องอัด ตั้งแต่การบันทึกพาร์ตของตัวเอง การปรับน้ำเสียงและรายละเอียดต่าง ๆ ไปจนถึงการพูดคุยและรับคำแนะนำระหว่างการอัด เพื่อถ่ายทอดอารมณ์สดใสและพลังของเพลง “Vitamin ME” ออกมาให้สมบูรณ์ที่สุด\n\nเบื้องหลังที่เผยให้เห็นอีกด้านของ “Vitamin ME” ตั้งแต่ความตั้งใจและสมาธิระหว่างทำงาน ไปจนถึงโมเมนต์เป็นกันเองของสมาชิก ทำให้ได้เห็นกระบวนการก่อนที่เสียงร้องที่เราได้ยินในเพลงจะกลายมาเป็น “Vitamin ME” เวอร์ชันสมบูรณ์ 🎙️☀️💊",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-vitamin-me-behind-2026-08-11",
    "title": "[FM_1.24] เบื้องหลังการถ่าย ‘Vitamin ME’ PERFORMANCE VIDEO 🌺🏝️",
    "date": "2026-08-11",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=LjF81-f2AvI",
    "youtubeVideoId": "LjF81-f2AvI",
    "thumbnailAlt": "เบื้องหลังการถ่าย Vitamin ME PERFORMANCE VIDEO ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย Performance Video เพลง “Vitamin ME” ของ fromis_9 พร้อมบรรยากาศสดใสและโมเมนต์ของสมาชิกระหว่างการถ่ายทำ",
    "description": "ติดตามสาว ๆ fromis_9 ในกองถ่าย Performance Video เพลง “Vitamin ME” ตั้งแต่การเตรียมตัวก่อนเข้าฉาก การถ่ายทำเพอร์ฟอร์แมนซ์ในแต่ละช่วง ไปจนถึงโมเมนต์ระหว่างพักที่เผยให้เห็นทั้งความตั้งใจและความเป็นธรรมชาติของสมาชิก ท่ามกลางบรรยากาศฤดูร้อนในคอนเซ็ปต์ทรอปิคอล\n\nอีกหนึ่งเบื้องหลังของยุค Glow ME / Vitamin ME ที่พาไปเห็นเสน่ห์ของ Performance Video ในอีกมุม ทั้งพลังในการแสดง บรรยากาศสดใส และโมเมนต์น่ารัก ๆ ของ fromis_9 ที่เข้ากับฤดูร้อนได้อย่างลงตัว 🌺🏝️☀️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-hayoung-golden-hamster-2026-08-06",
    "title": "[FM_1.24] ฮายองมาในร่างแฮมสเตอร์ทองแล้วเหมียว 🐹",
    "date": "2026-08-06",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=FBDUAFX2-3Q",
    "youtubeVideoId": "FBDUAFX2-3Q",
    "thumbnailAlt": "เบื้องหลังฮายอง fromis_9 ในลุคแฮมสเตอร์สีทอง",
    "featured": true,
    "members": [
      "hayoung"
    ],
    "summary": "ติดตามฮายองจาก fromis_9 ในคอนเทนต์เบื้องหลังลุคแฮมสเตอร์สีทอง พร้อมบรรยากาศการถ่ายทำและโมเมนต์น่ารักเป็นกันเองของเธอ",
    "description": "ติดตามฮายองในคอนเทนต์เบื้องหลังลุคแฮมสเตอร์สีทอง ตั้งแต่การเตรียมตัวหน้ากล้อง ไปจนถึงโมเมนต์สบาย ๆ ระหว่างการถ่ายทำที่ได้เห็นเสน่ห์น่ารักและความเป็นกันเองของเธอ\n\nอีกหนึ่งคลิปเดี่ยวของฮายองที่รวบรวมทั้งบรรยากาศการทำงานและช่วงเวลาขี้เล่นไว้ในสไตล์ FM_1.24 🐹✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SONGHAYOUNG",
      "하영",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-nagyung-puppy-2026-08-05",
    "title": "[FM_1.24] นากยองมาในร่างลูกสุนัขแล้วโฮ่ง 🐶",
    "date": "2026-08-05",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=Fp7NLwOnyZo",
    "youtubeVideoId": "Fp7NLwOnyZo",
    "thumbnailAlt": "เบื้องหลังนากยอง fromis_9 ในคอนเทนต์ลุคลูกสุนัข",
    "featured": true,
    "members": [
      "nagyung"
    ],
    "summary": "ติดตามนากยองจาก fromis_9 ในคอนเทนต์เบื้องหลังลุคลูกสุนัข พร้อมบรรยากาศสบาย ๆ และโมเมนต์ขี้เล่นของเธอระหว่างการถ่ายทำ",
    "description": "ติดตามนากยองในคอนเทนต์เบื้องหลังลุคลูกสุนัข ตั้งแต่ช่วงเตรียมตัวไปจนถึงโมเมนต์ระหว่างพักที่เผยให้เห็นความสดใสและความขี้เล่นของเธออย่างเป็นธรรมชาติ\n\nคลิปเดี่ยวที่ชวน flover ไปชมบรรยากาศสบาย ๆ และเสน่ห์ของนากยองในอีกมุมผ่านสไตล์ FM_1.24 🐶💛",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEENAGYUNG",
      "나경",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-vitamin-performance-2026-08-02",
    "title": "fromis_9 (프로미스나인) ‘Vitamin ME’ PERFORMANCE VIDEO 🌺🏝️",
    "date": "2026-08-02",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=96RdpeRxoVs",
    "youtubeVideoId": "96RdpeRxoVs",
    "thumbnailAlt": "Performance Video เพลง Vitamin ME ของ fromis_9 ในบรรยากาศฤดูร้อน",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "Performance Video เพลง “Vitamin ME” ของ fromis_9 ที่ถ่ายทอดเสน่ห์ของเพลงผ่านการแสดงและบรรยากาศฤดูร้อนอันสดใส",
    "description": "พบกับ Performance Video ของเพลง “Vitamin ME” ที่สาว ๆ fromis_9 ถ่ายทอดทั้งท่าเต้น พลังในการแสดงและเสน่ห์ของสมาชิกแต่ละคน ท่ามกลางฉากและบรรยากาศที่เต็มไปด้วยกลิ่นอายของฤดูร้อน\n\nอีกหนึ่งเวอร์ชันของ “Vitamin ME” ที่ช่วยเติมเต็มคอนเซ็ปต์ฤดูร้อนของ Glow ME ให้ชัดเจนยิ่งขึ้น ด้วยภาพที่สดใส การแสดงที่เต็มไปด้วยพลังและบรรยากาศที่เข้ากับความสดชื่นของเพลงได้อย่างลงตัว 🌺🏝️☀️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME"
    ]
  },
  {
    "id": "fm-1-24-vitamin-me-behind-2026-07-29",
    "title": "[FM_1.24] ฉันจะทำให้เธอมีความสุขเอง ☀️🌴 เบื้องหลังการถ่าย MV ‘Vitamin ME’",
    "date": "2026-07-29",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=4GsIPPN4F5c&t=542s",
    "youtubeVideoId": "4GsIPPN4F5c",
    "thumbnailAlt": "เบื้องหลังการถ่าย MV Vitamin ME ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายทำ MV เพลง “Vitamin ME” ของ fromis_9 พร้อมบรรยากาศในกองถ่ายและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    "description": "ติดตามสาว ๆ fromis_9 ในกองถ่าย MV “Vitamin ME” ตั้งแต่การเตรียมตัว การถ่ายทำในฉากต่าง ๆ ไปจนถึงช่วงพักระหว่างกอง ที่เผยให้เห็นทั้งความตั้งใจในการทำงานและโมเมนต์เป็นธรรมชาติของสมาชิกท่ามกลางบรรยากาศฤดูร้อนอันสดใส\n\nอีกหนึ่งเบื้องหลังที่พาไปสัมผัสบรรยากาศของ “Vitamin ME” มากขึ้น ทั้งคอนเซ็ปต์ฤดูร้อน สีสันของกองถ่าย และเสน่ห์ของสมาชิกที่ช่วยเติมเต็มภาพของ Glow ME ให้สมบูรณ์ยิ่งขึ้น ☀️🌴💊",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "FM_1_24"
    ]
  },
  {
    "id": "answer-me-fromis-9-2026-07-27",
    "title": "🗣️ Answer ME! fromis_9 เปิดศูนย์รับปรึกษาปัญหา 💌",
    "date": "2026-07-27",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=0WquCfnUIng",
    "youtubeVideoId": "0WquCfnUIng",
    "thumbnailAlt": "fromis_9 กับคอนเทนต์ Answer ME! เปิดศูนย์รับปรึกษาปัญหา",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "fromis_9 เปิดพื้นที่รับฟังเรื่องราวและปัญหาต่าง ๆ พร้อมช่วยกันแชร์มุมมองและคำแนะนำในสไตล์ของสมาชิกแต่ละคน",
    "description": "พบกับสาว ๆ fromis_9 ที่มารับหน้าที่เป็นที่ปรึกษา คอยรับฟังเรื่องราวและปัญหาที่ถูกส่งเข้ามา พร้อมช่วยกันพูดคุย แสดงความคิดเห็น และหาคำตอบผ่านมุมมองของสมาชิกแต่ละคน\n\nคอนเทนต์พูดคุยสบาย ๆ ที่ได้ทั้งคำแนะนำและความสนุก พร้อมเผยให้เห็นวิธีคิดและเคมีของสมาชิกผ่านการแลกเปลี่ยนความคิดเห็นในแบบฉบับของ fromis_9 🗣️💌",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "GlowME",
      "VitaminME",
      "AnswerME"
    ]
  },
  {
    "id": "fm-1-24-glow-me-jacket-behind-2026-07-22",
    "title": "เบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม Glow ME ของ fromis_9",
    "date": "2026-07-22",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=6IJUDC0Y09A",
    "youtubeVideoId": "6IJUDC0Y09A",
    "thumbnailAlt": "เบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม Glow ME ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม “Glow ME” ของ fromis_9 พร้อมบรรยากาศในกองถ่ายและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    "description": "ติดตามสาว ๆ fromis_9 ระหว่างการถ่ายภาพแจ็กเก็ตสำหรับอัลบั้ม “Glow ME” ตั้งแต่การเตรียมตัวและโพสถ่ายภาพในคอนเซ็ปต์ต่าง ๆ ไปจนถึงช่วงพักระหว่างการถ่ายทำ ที่ได้เห็นทั้งความตั้งใจและเสน่ห์ของสมาชิกในบรรยากาศเบื้องหลังแบบเป็นธรรมชาติ\n\nอีกหนึ่งเบื้องหลังที่ช่วยเปิดให้เห็นภาพของ “Glow ME” มากขึ้น ทั้งคอนเซ็ปต์ของอัลบั้ม บรรยากาศในกองถ่าย และโมเมนต์น่ารัก ๆ ของสมาชิกก่อนที่ภาพต่าง ๆ จะกลายมาเป็นส่วนหนึ่งของอัลบั้มฉบับสมบูรณ์ 💘✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "GlowME",
      "VitaminME",
      "FM_1_24"
    ]
  },
  {
    "id": "fanchant-vitamin-me-2026-07-21",
    "title": "fromis_9 (프로미스나인) คู่มือคำเชียร์ ‘Vitamin ME’ 💊📣",
    "date": "2026-07-21",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=17tMsblcNh4",
    "youtubeVideoId": "17tMsblcNh4",
    "thumbnailAlt": "คู่มือคำเชียร์เพลง Vitamin ME ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "เรียนรู้คำเชียร์อย่างเป็นทางการของเพลง “Vitamin ME” เพื่อให้ flover สามารถร้องและส่งเสียงเชียร์ไปพร้อมกับ fromis_9 บนเวทีได้อย่างถูกจังหวะ",
    "description": "มาฝึกคำเชียร์ของเพลง “Vitamin ME” ไปพร้อมกับ fromis_9 ตั้งแต่จังหวะที่ต้องเรียกชื่อสมาชิก ไปจนถึงคำและท่อนต่าง ๆ ที่ flover จะได้ร่วมร้องและส่งเสียงเชียร์ระหว่างการแสดง\n\nคู่มือสำหรับเตรียมตัวให้พร้อมก่อนเจอกับ “Vitamin ME” บนเวที เพื่อเติมพลังและทำให้บรรยากาศการแสดงของยุค Glow ME สนุกยิ่งขึ้นด้วยเสียงเชียร์จาก flover 💊📣🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "Fanchant"
    ]
  },
  {
    "id": "vitamin-me-mv-2026-07-21",
    "title": "fromis_9 (프로미스나인) ‘Vitamin ME’ MV 💊☀️",
    "date": "2026-07-21",
    "category": "MV",
    "videoUrl": "https://www.youtube.com/watch?v=sLk8zWUuYTA",
    "youtubeVideoId": "sLk8zWUuYTA",
    "thumbnailAlt": "มิวสิกวิดีโอเพลง Vitamin ME ของ fromis_9 จากอัลบั้ม Glow ME",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "มิวสิกวิดีโอเพลงไตเติล “Vitamin ME” จากอัลบั้มเต็มชุดที่ 2 “Glow ME” ของ fromis_9 ที่ถ่ายทอดเสน่ห์สดใสและบรรยากาศของฤดูร้อน",
    "description": "พบกับ fromis_9 ในมิวสิกวิดีโอ “Vitamin ME” เพลงไตเติลจากอัลบั้ม “Glow ME” ที่ถ่ายทอดเสน่ห์ของสมาชิกผ่านภาพและการแสดง พร้อมบรรยากาศสดใสที่เข้ากับพลังและความสดชื่นของเพลง\n\n“Vitamin ME” ถือเป็นหนึ่งในภาพสำคัญที่เปิดยุค Glow ME อย่างเต็มรูปแบบ ด้วยสีสัน ความสดใส และเสน่ห์ของ fromis_9 ที่ช่วยเติมเต็มบรรยากาศฤดูร้อนให้มีชีวิตชีวามากยิ่งขึ้น 💊☀️🌴",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "VitaminME",
      "GlowME",
      "MV"
    ]
  },
  {
    "id": "fm-1-24-k-pulse-hanoi-2026-07-18",
    "title": "[FM_1.24] รักนะ ❤️ เบื้องหลัง K-PULSE HANOI 2026 VN",
    "date": "2026-07-18",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=Dufms3ZJyC8",
    "youtubeVideoId": "Dufms3ZJyC8",
    "thumbnailAlt": "เบื้องหลังการแสดงของ fromis_9 ในงาน K-PULSE HANOI 2026 ที่ประเทศเวียดนาม",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการเดินทางของ fromis_9 สู่กรุงฮานอย เพื่อร่วมงาน K-PULSE HANOI 2026 พร้อมบรรยากาศก่อนขึ้นเวทีและโมเมนต์ของสมาชิกระหว่างตารางงาน",
    "description": "ติดตามสาว ๆ fromis_9 กับเบื้องหลังการเข้าร่วมงาน K-PULSE HANOI 2026 ที่ประเทศเวียดนาม ตั้งแต่การเตรียมตัวก่อนขึ้นเวที บรรยากาศหลังเวที ไปจนถึงช่วงเวลาระหว่างสมาชิก ก่อนออกไปพบกับแฟน ๆ และถ่ายทอดพลังผ่านการแสดงบนเวที\n\nอีกหนึ่งความทรงจำจากฮานอยที่เต็มไปด้วยพลังของการแสดง เสียงเชียร์จากแฟน ๆ และโมเมนต์น่ารัก ๆ ของ fromis_9 ที่ได้ใช้เวลาร่วมกับ flover ชาวเวียดนาม 🇻🇳❤️🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "KPULSEHANOI2026",
      "Vietnam",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-hayoung-young-street-dj-2026-07-12",
    "title": "[FM_1.24] ฮายองกับภารกิจดีเจพิเศษ Young Street 🎧",
    "date": "2026-07-12",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=7Fy7_L2hIlM",
    "youtubeVideoId": "7Fy7_L2hIlM",
    "thumbnailAlt": "เบื้องหลังฮายอง fromis_9 รับหน้าที่ดีเจพิเศษรายการ Young Street",
    "featured": true,
    "members": [
      "hayoung"
    ],
    "summary": "พาไปชมเบื้องหลังของฮายองจาก fromis_9 ระหว่างรับหน้าที่ดีเจพิเศษในรายการ Young Street ตั้งแต่การเตรียมตัวจนถึงบรรยากาศในสตูดิโอ",
    "description": "ติดตามฮายองตั้งแต่การเตรียมสคริปต์และซ้อมก่อนออกอากาศ ไปจนถึงบรรยากาศจริงในสตูดิโอระหว่างรับหน้าที่ดีเจพิเศษของรายการ Young Street\n\nเบื้องหลังที่เผยทั้งความตั้งใจ การแก้สถานการณ์เฉพาะหน้า และเสน่ห์การดำเนินรายการของฮายองตลอดภารกิจดีเจครั้งนี้ 🎧📻",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SONGHAYOUNG",
      "YoungStreet",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-nagyung-DoosanBearsears-2026-07-11",
    "title": "[FM_1.24] นาโกะ นางฟ้าแห่งชัยชนะ 🐻 เบื้องหลังการขว้างลูกเปิดสนาม Doosan Bears ⚾",
    "date": "2026-07-11",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=jjD29k__SmQ",
    "youtubeVideoId": "jjD29k__SmQ",
    "thumbnailAlt": "เบื้องหลังการขว้างลูกเปิดสนามของนากยอง fromis_9 ให้กับ Doosan Bears",
    "featured": true,
    "members": [
      "nagyung"
    ],
    "summary": "พาไปชมเบื้องหลังของนากยองจาก fromis_9 กับการกลับมาขว้างลูกเปิดสนามให้ Doosan Bears อีกครั้ง พร้อมบรรยากาศก่อนลงสนามและโมเมนต์ตลอดการแข่งขัน",
    "description": "ติดตามนากยองกับการกลับมายืนบนสนามเบสบอลจัมชิลในฐานะผู้ขว้างลูกเปิดสนามของ Doosan Bears อีกครั้งในรอบ 8 ปี ตั้งแต่การเตรียมตัวและฝึกซ้อมก่อนลงสนาม ไปจนถึงช่วงเวลาที่ได้ขึ้นไปขว้างลูกบนเนินจริง ท่ามกลางเสียงเชียร์จากแฟน ๆ\n\nอีกหนึ่งวันพิเศษของนากยองที่ไม่ได้จบแค่การขว้างลูกเปิดสนาม แต่ยังกลายเป็น “นางฟ้าแห่งชัยชนะ” หลัง Doosan Bears คว้าชัยในเกมนั้น พร้อมเก็บทั้งความตื่นเต้น ความสนุก และบรรยากาศของสนามเบสบอลเอาไว้เป็นอีกหนึ่งความทรงจำ ⚾🐻🍀",
    "tags": [
      "프로미스나인",
      "NAGYUNG",
      "이나경",
      "DoosanBears",
      "FirstPitch",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiwon-health-helper-2026-07-05",
    "title": "[FM_1.24] สดชื่นซ่า ๆ 🍋🪽 เบื้องหลังจีวอนกับ Health Helper",
    "date": "2026-07-05",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=YIV76EX24Xc&t=201s",
    "youtubeVideoId": "YIV76EX24Xc",
    "thumbnailAlt": "เบื้องหลังการถ่ายแคมเปญ Health Helper ของจีวอน fromis_9",
    "featured": true,
    "members": [
      "jiwon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแคมเปญ Health Helper ของจีวอน fromis_9 พร้อมบรรยากาศในกองถ่ายและเสน่ห์สดใสของเธอในฐานะโมเดลของแบรนด์",
    "description": "ติดตามจีวอนกับเบื้องหลังการถ่ายแคมเปญให้กับแบรนด์ Health Helper ที่มาพร้อมคอนเซ็ปต์สดชื่นรับฤดูร้อน ตั้งแต่การเตรียมตัวและถ่ายทำคอนเทนต์ต่าง ๆ ไปจนถึงโมเมนต์ระหว่างกองที่เผยให้เห็นทั้งความตั้งใจในการทำงานและพลังสดใสในแบบของจีวอน\n\nอีกหนึ่งเบื้องหลังงานเดี่ยวที่ได้เห็นเสน่ห์อีกด้านของจีวอนในฐานะโมเดลโฆษณา พร้อมบรรยากาศสดใสที่เข้ากับภาพลักษณ์ของแคมเปญ Health Helper และ MAXCUT ได้อย่างลงตัว 🍋🪽✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "JIWON",
      "박지원",
      "HealthHelper",
      "MAXCUT",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-miimca-teleca-2026-07-02",
    "title": "[FM_1.24] ⚠️ fromis_9 โหมดดาร์กมาแล้ว ⚠️ เบื้องหลัง MIIMCA x TELECA 🖤",
    "date": "2026-07-02",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=193cRsfvuuQ",
    "youtubeVideoId": "193cRsfvuuQ",
    "thumbnailAlt": "เบื้องหลังการถ่าย MIIMCA x TELECA Collection Card ของ fromis_9 ในคอนเซ็ปต์ดาร์ก",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายคอลเลกชันการ์ด MIIMCA x TELECA ของ fromis_9 พร้อมเผยเสน่ห์อีกด้านของสมาชิกผ่านคอนเซ็ปต์ที่เข้มและดาร์กกว่าที่เคย",
    "description": "ติดตามสาว ๆ fromis_9 กับเบื้องหลังการถ่าย MIIMCA x TELECA Collection Card ตั้งแต่การเตรียมตัว การโพสถ่ายภาพ และการถ่ายทอดคอนเซ็ปต์ของสมาชิกแต่ละคน ที่ครั้งนี้มาในลุคเข้มและมีเสน่ห์แตกต่างจากภาพลักษณ์สดใสที่คุ้นเคย\n\nอีกหนึ่งคอนเทนต์ที่ได้เห็น fromis_9 ในมุมใหม่ ผ่านบรรยากาศการถ่ายทำและคอนเซ็ปต์ “Dark fromis_9” ที่เผยทั้งความเท่ ความมั่นใจ และเสน่ห์ของสมาชิกในแบบที่แตกต่างออกไป 🖤📸✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "MIIMCA",
      "TELECA",
      "CollectionCard",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiheon-spao-2026-06-19",
    "title": "[FM_1.24] ในวันหนึ่งที่อากาศแสนดี จีฮอนนี่ก็ปรากฏตัว 🍎 เบื้องหลังการถ่าย SPAO",
    "date": "2026-06-19",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=nTfQ2zbfJW4",
    "youtubeVideoId": "nTfQ2zbfJW4",
    "thumbnailAlt": "เบื้องหลังการถ่ายแฟชั่น SPAO ของจีฮอน fromis_9",
    "featured": true,
    "members": [
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นของจีฮอน fromis_9 กับ SPAO พร้อมเสน่ห์สดใสและบรรยากาศสบาย ๆ ในคอนเซ็ปต์ฤดูร้อน",
    "description": "ติดตามจีฮอนกับเบื้องหลังการถ่ายแฟชั่นให้กับ SPAO ในคอนเซ็ปต์ Breezy Summer ที่ถ่ายทอดสไตล์เดลี่ลุคสำหรับฤดูร้อนผ่านเสื้อผ้าสบาย ๆ และบรรยากาศเป็นธรรมชาติ พร้อมชมขั้นตอนการถ่ายทำและโมเมนต์ต่าง ๆ ของจีฮอนระหว่างกอง\n\nอีกหนึ่งงานเดี่ยวที่ได้เห็นเสน่ห์สดใสและเป็นธรรมชาติของจีฮอน ผ่านบรรยากาศฤดูร้อนอันผ่อนคลายที่เข้ากับสไตล์ของ SPAO และคอนเซ็ปต์ Breezy Summer ได้อย่างลงตัว 🍎🌿☀️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "JIHEON",
      "백지헌",
      "SPAO",
      "BreezySummer",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-university-festival-2026-06-16",
    "title": "[FM_1.24] รับพลังกลับมาเต็ม ๆ 💓 เบื้องหลังเทศกาลมหาวิทยาลัย 2026",
    "date": "2026-06-16",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=qXZHmIas-vs",
    "youtubeVideoId": "qXZHmIas-vs",
    "thumbnailAlt": "เบื้องหลังการแสดงของ fromis_9 ในเทศกาลมหาวิทยาลัยปี 2026",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการเดินสายขึ้นแสดงตามเทศกาลมหาวิทยาลัยต่าง ๆ ของ fromis_9 พร้อมพลังจากผู้ชมและบรรยากาศสนุกสนานตลอดการแสดง",
    "description": "ติดตามสาว ๆ fromis_9 กับการเดินสายขึ้นเวทีตามเทศกาลมหาวิทยาลัยในปี 2026 ตั้งแต่การเตรียมตัวและบรรยากาศก่อนขึ้นแสดง ไปจนถึงโมเมนต์บนเวทีที่เต็มไปด้วยเสียงเชียร์และพลังจากเหล่านักศึกษาและแฟน ๆ ที่มาร่วมสนุกไปด้วยกัน\n\nอีกหนึ่งช่วงเวลาที่ได้เห็นพลังของ fromis_9 บนเวทีพร้อมกับบรรยากาศอันคึกคักของเทศกาลมหาวิทยาลัย ทั้งความสนุก เสียงเชียร์ และพลังที่สมาชิกได้รับกลับไปอย่างเต็มเปี่ยม 💓🎤🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "UniversityFestival",
      "CollegeFestival",
      "FM_1_24"
    ]
  },
  {
    "id": "fly-list-nagyung-cover-2026-06-01",
    "title": "[fl▶ylist]‘BTS - Euphoria’ cover by นากยอง🩵✨",
    "date": "2026-06-01",
    "category": "Cover",
    "videoUrl": "https://www.youtube.com/watch?v=dzoD-s_fu_8",
    "youtubeVideoId": "dzoD-s_fu_8",
    "thumbnailAlt": "นากยอง fromis_9 คัฟเวอร์เพลง Euphoria ของ BTS",
    "featured": true,
    "members": [
      "nagyung"
    ],
    "summary": "นากยอง fromis_9 ถ่ายทอดเพลง “Euphoria” ของ BTS ผ่านเสียงร้องและบรรยากาศในแบบของตัวเอง เนื่องในโอกาสวันเกิดของเธอ",
    "description": "พบกับนากยองใน [fl▶ylist] กับการคัฟเวอร์เพลง “Euphoria” ของ BTS ที่ถ่ายทอดอารมณ์ของบทเพลงผ่านเสียงร้องของเธอ พร้อมนำเสนอเสน่ห์อีกด้านในฐานะนักร้องผ่านการแสดงเดี่ยว\n\nของขวัญพิเศษในวันเกิดของนากยองที่มอบให้ flover ผ่านบทเพลงที่เต็มไปด้วยความอบอุ่นและความรู้สึกดี ๆ อีกหนึ่ง [fl▶ylist] ที่ได้ฟังเสียงของนากยองอย่างเต็มที่ 🩵🎂✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NAGYUNG",
      "이나경",
      "Euphoria",
      "BTS",
      "fl_ylist"
    ]
  },
  {
    "id": "fm-1-24-busan-2026-05-29",
    "title": "[FM_1.24] พวกเราไปปูซานมาแล้ว 👩🏻‍❤️‍👩🏻 เบื้องหลัง Longchamp Pop-up",
    "date": "2026-05-29",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=9L8Z0Py4Z_w",
    "youtubeVideoId": "9L8Z0Py4Z_w",
    "thumbnailAlt": "เบื้องหลังแชยองและจีฮอน fromis_9 ร่วมงาน Longchamp Pop-up ที่ปูซาน",
    "featured": true,
    "members": [
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังของแชยองและจีฮอน fromis_9 กับการเดินทางไปปูซานเพื่อร่วมงานเปิด La Plage Longchamp Pop-up พร้อมบรรยากาศและโมเมนต์ของทั้งคู่ระหว่างตารางงาน",
    "description": "ติดตามแชยองและจีฮอนกับการเดินทางไปยังปูซานเพื่อร่วมงาน La Plage Longchamp Pop-up ที่ Shinsegae Department Store Centum City ตั้งแต่บรรยากาศระหว่างตารางงาน ไปจนถึงการเข้าร่วมงานและถ่ายภาพในลุคที่ถ่ายทอดเสน่ห์ของทั้งคู่ผ่านสไตล์ของ Longchamp\n\nอีกหนึ่งเบื้องหลังงานคู่ที่ได้เห็นเคมีของแชยองและจีฮอน พร้อมบรรยากาศสบาย ๆ ของทริปปูซานและโมเมนต์แฟชั่นที่แตกต่างจากการทำกิจกรรมบนเวทีของ fromis_9 👩🏻‍❤️‍👩🏻👜✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "CHAEYOUNG",
      "이채영",
      "JIHEON",
      "백지헌",
      "Longchamp",
      "Busan",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-chaeyoung-green-cup-behind-2026-05-17",
    "title": "[FM_1.24] แชยองกับเบื้องหลังงาน The Green Cup 🍀⛳️",
    "date": "2026-05-17",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=r2EaTjXlHbI",
    "youtubeVideoId": "r2EaTjXlHbI",
    "thumbnailAlt": "เบื้องหลังแชยอง fromis_9 ร่วมงาน The Green Cup",
    "featured": true,
    "members": [
      "chaeyoung"
    ],
    "summary": "พาไปชมเบื้องหลังของแชยองจาก fromis_9 ระหว่างร่วมงาน The Green Cup พร้อมบรรยากาศในสนามกอล์ฟและโมเมนต์สดใสตลอดตารางงาน",
    "description": "พาไปชมแชยองระหว่างร่วมงาน The Green Cup ตั้งแต่การเตรียมตัวก่อนเริ่มกิจกรรม ไปจนถึงบรรยากาศในสนามกอล์ฟและโมเมนต์สนุก ๆ ตลอดตารางงาน\n\nคอนเทนต์เบื้องหลังที่ได้เห็นความสดใสและความเป็นธรรมชาติของแชยองในวันที่กิจกรรมกลางแจ้งเข้ากับเธอได้อย่างลงตัว 🍀⛳️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEECHAEYOUNG",
      "TheGreenCup",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-official-fanclub-flover-2026-05-10",
    "title": "2026 fromis_9 OFFICIAL FANCLUB flover 🍀",
    "date": "2026-05-10",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=uZclo4Uq1A8",
    "youtubeVideoId": "uZclo4Uq1A8",
    "thumbnailAlt": "วิดีโอแนะนำแฟนคลับทางการ flover ประจำปี 2026 ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "fromis_9 ชวนแฟน ๆ มาร่วมเป็นสมาชิกแฟนคลับทางการ flover ประจำปี 2026 ผ่านวิดีโอสั้นที่เต็มไปด้วยบรรยากาศอบอุ่นและเป็นกันเอง",
    "description": "fromis_9 ชวน flover มาร่วมเป็นสมาชิกแฟนคลับทางการประจำปี 2026 ผ่านวิดีโอแนะนำสั้น ๆ ที่สมาชิกทั้งห้าคนมาส่งต่อบรรยากาศอบอุ่นและเป็นกันเอง\n\nอีกหนึ่งคำเชิญสำหรับแฟน ๆ ที่อยากร่วมสร้างความทรงจำและเดินทางไปพร้อมกับ fromis_9 ตลอดปี 2026 🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "flover",
      "OfficialFanclub",
      "2026"
    ]
  },
  {
    "id": "fm-1-24-japan-debut-behind-2026-05-02",
    "title": "[FM_1.24] เริ่มต้นกิจกรรมที่ญี่ปุ่นครั้งแรก 🎀 เบื้องหลังการเดบิวต์ 🫶🏻",
    "date": "2026-05-02",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=BMSRZKCoaX8",
    "youtubeVideoId": "BMSRZKCoaX8",
    "thumbnailAlt": "เบื้องหลังการเริ่มต้นกิจกรรมเดบิวต์ในญี่ปุ่นของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ติดตามเบื้องหลังการเริ่มต้นกิจกรรมเดบิวต์ที่ญี่ปุ่นของ fromis_9 พร้อมบรรยากาศการโปรโมต Japan 1st EP และโมเมนต์ระหว่างสมาชิกกับ flover ชาวญี่ปุ่น",
    "description": "ติดตาม fromis_9 ตั้งแต่ช่วงเตรียมตัวก่อนเริ่มกิจกรรม ไปจนถึงตารางโปรโมต Japan 1st EP และการพบกับ flover ชาวญี่ปุ่นในก้าวแรกของการเดบิวต์ที่ญี่ปุ่น\n\nเบื้องหลังที่บันทึกทั้งความตื่นเต้น ความตั้งใจ และโมเมนต์ระหว่างสมาชิกตลอดการเริ่มต้นกิจกรรมครั้งสำคัญนี้ 🎀🫶🏻",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "JapanDebut",
      "LIKEYOUBETTER",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-chaeyoung-samsung-lions-first-pitch-2026-04-17",
    "title": "[FM_1.24] แชยองกลับมาท้าทายการขว้างลูกเปิดสนาม ⚾️ เบื้องหลัง Samsung Lions",
    "date": "2026-04-17",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=07abaqsuXm0",
    "youtubeVideoId": "07abaqsuXm0",
    "thumbnailAlt": "เบื้องหลังแชยอง fromis_9 ขว้างลูกเปิดสนามให้ Samsung Lions",
    "featured": true,
    "members": [
      "chaeyoung"
    ],
    "summary": "พาไปชมการเตรียมตัวและเบื้องหลังของแชยองจาก fromis_9 ในการกลับมาขว้างลูกเปิดสนามให้ Samsung Lions พร้อมบรรยากาศสนุกสนานในสนามเบสบอล",
    "description": "ติดตามแชยองตั้งแต่การฝึกซ้อมและเตรียมตัวก่อนลงสนาม ไปจนถึงช่วงเวลาจริงของการกลับมารับหน้าที่ขว้างลูกเปิดเกมให้ Samsung Lions\n\nเบื้องหลังที่รวมทั้งความตื่นเต้น ความมุ่งมั่น และบรรยากาศสนุกสนานของแชยองตลอดวันในสนามเบสบอล ⚾️🦁",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEECHAEYOUNG",
      "SamsungLions",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-japan-debut-jacket-behind-2026-04-08",
    "title": "[FM_1.24] ใจเต้นรัว 🎀 เบื้องหลังการถ่ายแจ็กเก็ตเดบิวต์ญี่ปุ่น",
    "date": "2026-04-08",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=fm1PU8X8d14",
    "youtubeVideoId": "fm1PU8X8d14",
    "thumbnailAlt": "เบื้องหลังการถ่ายภาพแจ็กเก็ตเดบิวต์ญี่ปุ่นของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายภาพแจ็กเก็ตสำหรับ Japan 1st EP ของ fromis_9 พร้อมลุคและบรรยากาศที่ถ่ายทอดความตื่นเต้นของการเดบิวต์ในญี่ปุ่น",
    "description": "พาไปชมสมาชิก fromis_9 ระหว่างการถ่ายภาพแจ็กเก็ตสำหรับ Japan 1st EP ตั้งแต่การเตรียมเสื้อผ้าและแต่งหน้า ไปจนถึงการโพสในแต่ละคอนเซ็ปต์\n\nเบื้องหลังที่เผยความตื่นเต้นของการเดบิวต์ในญี่ปุ่น พร้อมลุคและบรรยากาศที่ช่วยเติมเต็มภาพของอีพีชุดนี้ให้ชัดเจนยิ่งขึ้น 🎀✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "JapanDebut",
      "LIKEYOUBETTER",
      "FM_1_24"
    ]
  },
  {
    "id": "sky-runner-special-video-2026-04-01",
    "title": "fromis_9 (프로미스나인) ‘Sky Runner’ SPECIAL VIDEO ☁️",
    "date": "2026-04-01",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=3ivuYBVadVY",
    "youtubeVideoId": "3ivuYBVadVY",
    "thumbnailAlt": "Special Video เพลง Sky Runner ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "Special Video เพลง “Sky Runner” จาก Japan 1st EP ของ fromis_9 ที่นำเสนอเสน่ห์ของสมาชิกผ่านภาพและบรรยากาศสดใสของเพลง",
    "description": "ชม Special Video ฉบับเต็มของเพลง “Sky Runner” จาก Japan 1st EP ที่สมาชิก fromis_9 ถ่ายทอดอารมณ์สดใสและพลังของเพลงผ่านภาพหลากหลายฉาก\n\nวิดีโอพิเศษที่เติมสีสันให้เพลงด้วยบรรยากาศเบาสบายและเคมีของสมาชิกทั้งห้าคน ☁️🏃‍♀️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SkyRunner",
      "SpecialVideo",
      "LIKEYOUBETTER"
    ]
  },
  {
    "id": "fm-1-24-encore-now-tomorrow-tokyo-behind-2026-03-29",
    "title": "[FM_1.24] ขอบคุณที่อยู่ด้วยกัน flover 🍀 เบื้องหลัง ENCORE NOW TOMORROW. IN TOKYO 🏆",
    "date": "2026-03-29",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=6-BAZ3UUAew",
    "youtubeVideoId": "6-BAZ3UUAew",
    "thumbnailAlt": "เบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. IN TOKYO ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. IN TOKYO ตั้งแต่ช่วงเตรียมตัวจนถึงหลังเวที พร้อมคำขอบคุณจาก fromis_9 ถึง flover ที่ร่วมสร้างความทรงจำด้วยกัน",
    "description": "ติดตาม fromis_9 ตั้งแต่การเดินทางและเตรียมตัวก่อนขึ้นเวที ไปจนถึงช่วงเวลาหลังคอนเสิร์ต ENCORE NOW TOMORROW. IN TOKYO ที่ได้พบกับ flover ชาวญี่ปุ่น\n\nเบื้องหลังที่รวบรวมทั้งพลังการแสดง ความประทับใจ และคำขอบคุณจากสมาชิกถึงแฟน ๆ ที่ร่วมสร้างความทรงจำในโตเกียวด้วยกัน 🍀🏆",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "Tokyo",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-chaeyoung-singles-behind-2026-03-22",
    "title": "[FM_1.24] แชยองผู้เปล่งประกาย ✨ เบื้องหลังการถ่ายนิตยสาร Singles",
    "date": "2026-03-22",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=LmrIHIyuaBo",
    "youtubeVideoId": "LmrIHIyuaBo",
    "thumbnailAlt": "เบื้องหลังแชยอง fromis_9 ถ่ายแฟชั่นให้นิตยสาร Singles",
    "featured": true,
    "members": [
      "chaeyoung"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นของแชยองจาก fromis_9 ให้กับนิตยสาร Singles พร้อมลุคสง่างามและโมเมนต์ระหว่างการทำงาน",
    "description": "ติดตามแชยองในกองถ่ายแฟชั่นของนิตยสาร Singles ตั้งแต่การเตรียมลุคและเปลี่ยนคอนเซ็ปต์ ไปจนถึงการโพสหน้ากล้องในแต่ละเซต\n\nเบื้องหลังที่เผยเสน่ห์สง่างามและความเป็นมืออาชีพของแชยอง พร้อมโมเมนต์เป็นกันเองระหว่างการทำงาน ✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEECHAEYOUNG",
      "Singles",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-hayoung-y-magazine-behind-2026-03-19",
    "title": "[FM_1.24] ฮายองกับการถ่ายแฟชั่นเดี่ยวครั้งแรก ˗ˋˏ เบื้องหลัง Y Magazine ˎˊ˗",
    "date": "2026-03-19",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=-7EyzVbxSo0",
    "youtubeVideoId": "-7EyzVbxSo0",
    "thumbnailAlt": "เบื้องหลังฮายอง fromis_9 ถ่ายแฟชั่นเดี่ยวให้ Y Magazine",
    "featured": true,
    "members": [
      "hayoung"
    ],
    "summary": "ติดตามฮายองจาก fromis_9 ในการถ่ายแฟชั่นเดี่ยวครั้งแรกให้กับ Y Magazine พร้อมเบื้องหลังการเปลี่ยนลุคและบรรยากาศในกองถ่าย",
    "description": "ติดตามฮายองในการถ่ายแฟชั่นเดี่ยวครั้งแรกให้กับ Y Magazine ตั้งแต่การเตรียมตัว เปลี่ยนเสื้อผ้าและแต่งหน้า ไปจนถึงการถ่ายทอดอารมณ์ในแต่ละคอนเซ็ปต์\n\nอีกหนึ่งก้าวที่ได้เห็นฮายองแสดงเสน่ห์หลากหลายผ่านหน้ากล้อง พร้อมบรรยากาศเบื้องหลังที่ทั้งตั้งใจและเป็นธรรมชาติ ✨📸",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SONGHAYOUNG",
      "YMagazine",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-encore-now-tomorrow-behind-2026-03-16",
    "title": "[FM_1.24] เบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. 💖",
    "date": "2026-03-16",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=kBV4h9ec5Eg",
    "youtubeVideoId": "kBV4h9ec5Eg",
    "thumbnailAlt": "เบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "รวมภาพเบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. ของ fromis_9 ตั้งแต่การเตรียมตัว ซ้อมการแสดง ไปจนถึงโมเมนต์หลังเวทีกับสมาชิกทั้งห้าคน",
    "description": "รวมภาพเบื้องหลังคอนเสิร์ต ENCORE NOW TOMORROW. ตั้งแต่การซ้อมและเตรียมตัวก่อนขึ้นเวที ไปจนถึงโมเมนต์ระหว่างพักและหลังการแสดงของสมาชิกทั้งห้าคน\n\nบันทึกอีกหน้าของคอนเสิร์ตที่เต็มไปด้วยพลัง ความตั้งใจ และความผูกพันระหว่าง fromis_9 กับ flover 💖🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "EncoreConcert",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-encore-now-tomorrow-vcr-behind-2026-03-10",
    "title": "[FM_1.24] เตรียมพร้อมสำหรับคอนเสิร์ตอังกอร์ 👊 เบื้องหลัง VCR ของ ENCORE NOW TOMORROW.",
    "date": "2026-03-10",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=Fayl8YLtVHc",
    "youtubeVideoId": "Fayl8YLtVHc",
    "thumbnailAlt": "เบื้องหลังการถ่าย VCR คอนเสิร์ต ENCORE NOW TOMORROW. ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย VCR สำหรับคอนเสิร์ต ENCORE NOW TOMORROW. พร้อมขั้นตอนการเตรียมงานและโมเมนต์สนุก ๆ ของสมาชิก fromis_9",
    "description": "พาไปชมเบื้องหลังการถ่าย VCR สำหรับคอนเสิร์ต ENCORE NOW TOMORROW. ตั้งแต่การเตรียมฉากและคอสตูม ไปจนถึงการถ่ายทำในแต่ละช่วงของสมาชิก\n\nคอนเทนต์ที่เผยขั้นตอนก่อนภาพบนจอจะกลายเป็นส่วนหนึ่งของคอนเสิร์ต พร้อมโมเมนต์สนุก ๆ ระหว่างกองถ่าย 👊🎬",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "VCRBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiheon-andhoney-behind-2026-03-06",
    "title": "[FM_1.24] จีฮอนกับเคมีหวานเหมือนน้ำผึ้ง 🍯 เบื้องหลังการถ่าย &honey",
    "date": "2026-03-06",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=VN6JFAHD-gc",
    "youtubeVideoId": "VN6JFAHD-gc",
    "thumbnailAlt": "เบื้องหลังจีฮอน fromis_9 ถ่ายแคมเปญให้แบรนด์ &honey",
    "featured": true,
    "members": [
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแคมเปญของจีฮอนจาก fromis_9 กับแบรนด์ &honey พร้อมลุคสดใสและบรรยากาศอบอุ่นในกองถ่าย",
    "description": "ติดตามจีฮอนระหว่างการถ่ายแคมเปญของแบรนด์ &honey ตั้งแต่การเตรียมลุค ไปจนถึงบรรยากาศหน้ากล้องและช่วงพักระหว่างเซต\n\nเบื้องหลังที่ถ่ายทอดเคมีหวานละมุนระหว่างจีฮอนกับคอนเซ็ปต์ของแบรนด์ พร้อมเสน่ห์สดใสของเธอตลอดการทำงาน 🍯✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "BAEKJIHEON",
      "andhoney",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-lunar-new-year-message-2026-02-16",
    "title": "ข้อความอวยพรวันตรุษเกาหลีปี 2026 จาก fromis_9 🧧",
    "date": "2026-02-16",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=MCQj7p8RaE4",
    "youtubeVideoId": "MCQj7p8RaE4",
    "thumbnailAlt": "ข้อความอวยพรวันตรุษเกาหลีปี 2026 จากสมาชิก fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "สมาชิก fromis_9 ส่งคำอวยพรถึง flover เนื่องในวันซอลลัลหรือตรุษเกาหลีปี 2026 พร้อมชวนทุกคนใช้ช่วงวันหยุดอย่างอบอุ่นและมีความสุข",
    "description": "สมาชิก fromis_9 มาส่งคำอวยพรถึง flover เนื่องในวันซอลลัลหรือตรุษเกาหลีปี 2026 พร้อมแบ่งปันข้อความดี ๆ สำหรับการเริ่มต้นช่วงวันหยุด\n\nวิดีโอสั้นที่เต็มไปด้วยความอบอุ่นและความห่วงใยจากสมาชิกทั้งห้าคน ขอให้ flover ใช้เวลากับคนสำคัญอย่างมีความสุข 🧧💚",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LunarNewYear",
      "Seollal",
      "2026"
    ]
  },
  {
    "id": "chaeyoung-toxic-now-tomorrow-2026-02-13",
    "title": "fromis_9 (프로미스나인) LEE CHAE YOUNG ‘TOXIC’ with NOW TOMORROW.",
    "date": "2026-02-13",
    "category": "Special Stage",
    "videoUrl": "https://www.youtube.com/watch?v=qByrjaPN3Js",
    "youtubeVideoId": "qByrjaPN3Js",
    "thumbnailAlt": "แชยอง fromis_9 แสดงเพลง TOXIC ในคอนเสิร์ต NOW TOMORROW.",
    "featured": true,
    "members": [
      "chaeyoung"
    ],
    "summary": "ชมการแสดงเดี่ยวเพลง “TOXIC” ของแชยองจาก fromis_9 บนเวทีคอนเสิร์ต NOW TOMORROW. ที่เผยเสน่ห์และพลังการแสดงอีกด้านของเธอ",
    "description": "ชมแชยองถ่ายทอดการแสดงเดี่ยวเพลง “TOXIC” บนเวทีคอนเสิร์ต NOW TOMORROW. ผ่านการเต้นและสีหน้าที่เผยเสน่ห์เข้มข้นอีกด้านของเธอ\n\nสเตจพิเศษที่สะท้อนพลังการแสดงและคาแรกเตอร์ของแชยองได้อย่างโดดเด่นตั้งแต่ต้นจนจบ 🔥",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEECHAEYOUNG",
      "TOXIC",
      "NOWTOMORROW"
    ]
  },
  {
    "id": "fm-1-24-nagyung-upbit-mc-behind-2026-02-06",
    "title": "[FM_1.24] นากยองได้เป็นพิธีกรแล้ว 🎮 เบื้องหลังงาน Upbit",
    "date": "2026-02-06",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=_cWpVUZFaZw",
    "youtubeVideoId": "_cWpVUZFaZw",
    "thumbnailAlt": "เบื้องหลังนากยอง fromis_9 รับหน้าที่พิธีกรในงาน Upbit",
    "featured": true,
    "members": [
      "nagyung"
    ],
    "summary": "ติดตามเบื้องหลังของนากยองจาก fromis_9 กับการรับหน้าที่พิธีกรในงาน Upbit พร้อมการเตรียมตัวและบรรยากาศระหว่างดำเนินรายการ",
    "description": "ติดตามนากยองตั้งแต่การเตรียมสคริปต์และซ้อมก่อนเริ่มงาน ไปจนถึงบรรยากาศจริงระหว่างรับหน้าที่พิธีกรในงาน Upbit\n\nเบื้องหลังที่เผยทั้งความตั้งใจ ความตื่นเต้น และทักษะการดำเนินรายการของนากยองในอีกบทบาทหนึ่ง 🎮🎤",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEENAGYUNG",
      "Upbit",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-eighth-anniversary-winter-trip-2026-01-24",
    "title": "[FM_1.24] ทริปฤดูหนาวฉลองครบรอบ 8 ปี 🚗💨 ไปด้วยกันจนถึงปีที่ 88 💚",
    "date": "2026-01-24",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=FgXTo_D8_CI",
    "youtubeVideoId": "FgXTo_D8_CI",
    "thumbnailAlt": "ทริปฤดูหนาวฉลองครบรอบ 8 ปีของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ร่วมเดินทางไปกับ fromis_9 ในทริปฤดูหนาวฉลองครบรอบ 8 ปี เต็มไปด้วยกิจกรรมสนุก ๆ บทสนทนาอบอุ่น และความทรงจำของสมาชิกทั้งห้าคน",
    "description": "ร่วมเดินทางไปกับ fromis_9 ในทริปฤดูหนาวฉลองครบรอบ 8 ปี ผ่านกิจกรรม บทสนทนา และช่วงเวลาสบาย ๆ ที่สมาชิกได้ใช้ร่วมกัน\n\nคอนเทนต์พิเศษที่บันทึกมิตรภาพและความทรงจำตลอดแปดปี พร้อมคำสัญญาว่าจะเดินไปด้วยกันจนถึงวันครบรอบปีที่ 88 🚗💨💚",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "8thAnniversary",
      "WinterTrip",
      "FM_1_24"
    ]
  },
  {
    "id": "a-letter-from-fromis-9-2026-01-23",
    "title": "A Letter from fromis_9 💌",
    "date": "2026-01-23",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=rI_nXzAz6xI",
    "youtubeVideoId": "rI_nXzAz6xI",
    "thumbnailAlt": "จดหมายจากสมาชิก fromis_9 ถึง flover",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ข้อความจากใจของสมาชิก fromis_9 ที่ถ่ายทอดความรู้สึกและคำขอบคุณถึง flover ผ่านบทสนทนาและจดหมายในบรรยากาศเรียบง่ายแต่อบอุ่น",
    "description": "สมาชิก fromis_9 ถ่ายทอดความรู้สึกและเรื่องราวที่อยากบอกกับ flover ผ่านบทสนทนาและจดหมายในบรรยากาศเรียบง่าย\n\nวิดีโอที่เปิดพื้นที่ให้คำขอบคุณ ความทรงจำ และความจริงใจของสมาชิกทั้งห้าคนส่งตรงไปถึงแฟน ๆ อย่างอบอุ่น 💌🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "ALetterFromFromis9",
      "flover"
    ]
  },
  {
    "id": "fm-1-24-white-memories-promotion-behind-2026-01-21",
    "title": "[FM_1.24] ฤดูหนาวที่เราได้พบกันอีกครั้ง ❄️ เบื้องหลังการโปรโมต ‘White Memories’",
    "date": "2026-01-21",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=jShysn3mfN0",
    "youtubeVideoId": "jShysn3mfN0",
    "thumbnailAlt": "เบื้องหลังการโปรโมตเพลง White Memories ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการทำกิจกรรมโปรโมตเพลง “White Memories” ของ fromis_9 พร้อมภาพการเตรียมเวที ช่วงพัก และโมเมนต์ของสมาชิกในบรรยากาศฤดูหนาว",
    "description": "ติดตาม fromis_9 ตั้งแต่ช่วงเตรียมตัวและซ้อมก่อนขึ้นเวที ไปจนถึงการทำกิจกรรมโปรโมตเพลง “White Memories” และโมเมนต์ระหว่างพักของสมาชิก\n\nเบื้องหลังที่เก็บบรรยากาศฤดูหนาว ความตั้งใจบนเวที และความอบอุ่นของการได้กลับมาพบ flover อีกครั้ง ❄️☃️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "WhiteMemories",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-2025-year-end-stage-behind-2026-01-12",
    "title": "[FM_1.24] ทุกอย่างเกิดขึ้นได้เพราะ flover 🍀 เบื้องหลังเวทีส่งท้ายปี 2025",
    "date": "2026-01-12",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=z4evTl0oYkA",
    "youtubeVideoId": "z4evTl0oYkA",
    "thumbnailAlt": "เบื้องหลังเวทีส่งท้ายปี 2025 ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "รวมภาพเบื้องหลังการเตรียมตัวและขึ้นแสดงบนเวทีส่งท้ายปี 2025 ของ fromis_9 พร้อมคำขอบคุณถึง flover ที่คอยมอบพลังให้เสมอ",
    "description": "รวมภาพเบื้องหลังของ fromis_9 จากตารางเวทีส่งท้ายปี 2025 ตั้งแต่การเตรียมตัวและซ้อม ไปจนถึงโมเมนต์ก่อนและหลังการแสดง\n\nสมาชิกส่งต่อคำขอบคุณถึง flover ที่คอยมอบพลังและร่วมเดินทางมาตลอดทั้งปี พร้อมปิดท้ายความทรงจำด้วยบรรยากาศอบอุ่น 🍀✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "YearEndStage",
      "2025",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-nagyung-dr-g-behind-2026-01-07",
    "title": "[FM_1.24] ชุ่มชื้นแม้ในฤดูหนาว ✨ เบื้องหลังนากยองกับ Dr.G",
    "date": "2026-01-07",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=40aDkVR7OZ8",
    "youtubeVideoId": "40aDkVR7OZ8",
    "thumbnailAlt": "เบื้องหลังนากยอง fromis_9 ถ่ายแคมเปญให้ Dr.G",
    "featured": true,
    "members": [
      "nagyung"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแคมเปญของนากยองจาก fromis_9 กับแบรนด์ Dr.G พร้อมลุคสดใสและบรรยากาศการทำงานในคอนเซ็ปต์ฤดูหนาว",
    "description": "ติดตามนากยองระหว่างการถ่ายแคมเปญของแบรนด์ Dr.G ตั้งแต่การเตรียมลุค ไปจนถึงการโพสหน้ากล้องและโมเมนต์ระหว่างพัก\n\nเบื้องหลังในคอนเซ็ปต์ฤดูหนาวที่เผยเสน่ห์สดใสและความเป็นมืออาชีพของนากยอง พร้อมบรรยากาศการทำงานที่เป็นกันเอง ✨❄️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEENAGYUNG",
      "DrG",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-now-tomorrow-usa-behind-2025-12-31",
    "title": "[FM_1.24] ปี 2025 ที่วิ่งไปสู่จุดหมายเดียวกัน เบื้องหลัง NOW TOMORROW. IN USA",
    "date": "2025-12-31",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=uhIB-02ODM0",
    "youtubeVideoId": "uhIB-02ODM0",
    "thumbnailAlt": "เบื้องหลังทัวร์ NOW TOMORROW. IN USA ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการเดินทางและการแสดงของ fromis_9 ในทัวร์ NOW TOMORROW. IN USA พร้อมโมเมนต์ตลอดเส้นทางช่วงปลายปี 2025",
    "description": "ติดตามสมาชิกตั้งแต่การเดินทางและเตรียมตัวก่อนขึ้นเวที ไปจนถึงบรรยากาศหลังการแสดงในแต่ละเมืองของทัวร์ NOW TOMORROW. IN USA\n\nเบื้องหลังที่บันทึกทั้งพลังบนเวที ความทรงจำระหว่างสมาชิก และความขอบคุณถึง flover ที่ร่วมวิ่งไปสู่จุดหมายเดียวกันตลอดปี 2025 🇺🇸🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "USA",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiheon-singles-winter-behind-2025-12-22",
    "title": "[FM_1.24] ฤดูหนาวนี้อยู่กับจีฮอน ❄️☃️ เบื้องหลังการถ่ายนิตยสาร Singles",
    "date": "2025-12-22",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=dW-GtgYLnOM",
    "youtubeVideoId": "dW-GtgYLnOM",
    "thumbnailAlt": "เบื้องหลังจีฮอน fromis_9 ถ่ายแฟชั่นฤดูหนาวให้นิตยสาร Singles",
    "featured": true,
    "members": [
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นฤดูหนาวของจีฮอน fromis_9 ให้กับนิตยสาร Singles พร้อมลุคและบรรยากาศอบอุ่นในกองถ่าย",
    "description": "ติดตามจีฮอนตั้งแต่การเตรียมเสื้อผ้าและแต่งหน้า ไปจนถึงการโพสหน้ากล้องในแต่ละเซตของการถ่ายแฟชั่นให้กับนิตยสาร Singles\n\nเบื้องหลังที่เผยเสน่ห์สดใสและความเป็นมืออาชีพของจีฮอน ท่ามกลางคอนเซ็ปต์ฤดูหนาวที่ทั้งอบอุ่นและน่ารัก ❄️📸",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "BAEKJIHEON",
      "Singles",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-white-memories-mv-behind-2025-12-08",
    "title": "[FM_1.24] ราวกับความฝัน ✨ เบื้องหลังการถ่าย MV ‘White Memories’",
    "date": "2025-12-08",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=zSU-2EWLckc",
    "youtubeVideoId": "zSU-2EWLckc",
    "thumbnailAlt": "เบื้องหลังการถ่ายมิวสิกวิดีโอ White Memories ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย MV เพลง “White Memories” ของ fromis_9 พร้อมฉากฤดูหนาวและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    "description": "ติดตาม fromis_9 ในกองถ่าย MV “White Memories” ตั้งแต่การเตรียมตัว การถ่ายทำในฉากต่าง ๆ ไปจนถึงช่วงพักที่สมาชิกได้พูดคุยและหยอกล้อกัน\n\nอีกหนึ่งเบื้องหลังที่ช่วยเติมเต็มบรรยากาศฤดูหนาวของเพลง พร้อมเผยความตั้งใจและความทรงจำราวกับความฝันของสมาชิกทั้งห้าคน ❄️✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "WhiteMemories",
      "MVBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-santa-gift-content-2025-12-03",
    "title": "fromis_9 (프로미스나인) ซานต้ามีอยู่จริงเหรอ?! | ตามหาของขวัญให้ flover 🎁",
    "date": "2025-12-03",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=JWiE2q8F7Y4",
    "youtubeVideoId": "JWiE2q8F7Y4",
    "thumbnailAlt": "fromis_9 ตามหาของขวัญคริสต์มาสให้ flover",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ร่วมสนุกกับ fromis_9 ในภารกิจตามหาของขวัญสำหรับ flover พร้อมบรรยากาศคริสต์มาสและโมเมนต์เฮฮาของสมาชิกทั้งห้าคน",
    "description": "สมาชิก fromis_9 มาร่วมภารกิจธีมคริสต์มาสเพื่อค้นหาของขวัญที่จะมอบให้ flover ผ่านเกมและบทสนทนาสนุก ๆ\n\nคอนเทนต์พิเศษที่เต็มไปด้วยเสียงหัวเราะ ความอบอุ่น และเคมีของสมาชิกในช่วงเทศกาลปลายปี 🎅🎄🎁",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "Christmas",
      "Santa",
      "flover"
    ]
  },
  {
    "id": "white-memories-fanchant-2025-12-02",
    "title": "fromis_9 (프로미스나인) คู่มือคำเชียร์ ‘White Memories’ ❄️📣",
    "date": "2025-12-02",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=UlGeN6JHAJc",
    "youtubeVideoId": "UlGeN6JHAJc",
    "thumbnailAlt": "คู่มือคำเชียร์เพลง White Memories ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "เรียนรู้คำเชียร์อย่างเป็นทางการของเพลง “White Memories” เพื่อให้ flover ร่วมร้องและส่งเสียงเชียร์ไปพร้อมกับ fromis_9 ได้อย่างถูกจังหวะ",
    "description": "มาฝึกคำเชียร์เพลง “White Memories” ไปพร้อมกับสมาชิก ตั้งแต่ช่วงเรียกชื่อไปจนถึงคำและท่อนต่าง ๆ ที่ flover จะได้ร่วมส่งเสียงบนเวที\n\nคู่มือสำหรับเตรียมตัวให้พร้อมก่อนชมการแสดง เพื่อเติมบรรยากาศฤดูหนาวของเพลงด้วยพลังจาก flover ❄️📣🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "WhiteMemories",
      "Fanchant",
      "flover"
    ]
  },
  {
    "id": "white-memories-mv-2025-12-02",
    "title": "fromis_9 (프로미스나인) ‘White Memories’ MV ❄️",
    "date": "2025-12-02",
    "category": "MV",
    "videoUrl": "https://www.youtube.com/watch?v=5ZB9JLfIw_Q",
    "youtubeVideoId": "5ZB9JLfIw_Q",
    "thumbnailAlt": "มิวสิกวิดีโอเพลง White Memories ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "มิวสิกวิดีโอเพลง “White Memories” ซิงเกิลดิจิทัลพิเศษของ fromis_9 ที่ถ่ายทอดความคิดถึงและความอบอุ่นท่ามกลางบรรยากาศฤดูหนาว",
    "description": "มิวสิกวิดีโอซิงเกิลดิจิทัลพิเศษ “White Memories” ถ่ายทอดเรื่องราวและความรู้สึกผ่านภาพฤดูหนาว พร้อมเสียงร้องของสมาชิกทั้งห้าคน\n\nผลงานที่ชวนย้อนนึกถึงความทรงจำอันอบอุ่น และเติมช่วงปลายปีด้วยเสน่ห์อ่อนโยนในแบบของ fromis_9 ❄️☃️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "WhiteMemories",
      "MV",
      "DigitalSingle"
    ]
  },
  {
    "id": "fm-1-24-2025-university-festival-behind-2025-11-20",
    "title": "[FM_1.24] สนุกกันเป็นแล้วนี่นา 😖💞 เบื้องหลังเทศกาลมหาวิทยาลัย 2025",
    "date": "2025-11-20",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=IOCcghLQGlA",
    "youtubeVideoId": "IOCcghLQGlA",
    "thumbnailAlt": "เบื้องหลังการแสดงของ fromis_9 ในเทศกาลมหาวิทยาลัยปี 2025",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "รวมเบื้องหลังการเดินสายขึ้นแสดงตามเทศกาลมหาวิทยาลัยปี 2025 ของ fromis_9 พร้อมพลังจากผู้ชมและบรรยากาศสนุกสนานหลังเวที",
    "description": "ติดตามสมาชิกตั้งแต่การเดินทางและเตรียมตัว ไปจนถึงช่วงก่อนและหลังขึ้นแสดงตามเทศกาลมหาวิทยาลัยต่าง ๆ ในปี 2025\n\nเบื้องหลังที่เต็มไปด้วยพลังจากผู้ชม ความสนุกบนเวที และโมเมนต์เฮฮาของ fromis_9 ระหว่างตารางงาน 😖💞",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "UniversityFestival",
      "2025",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-2026-seasons-greetings-behind-2025-11-16",
    "title": "[FM_1.24] ฝากเนื้อฝากตัวกับ flover ในปี 2026 ❤️ เบื้องหลัง SEASON’S GREETINGS",
    "date": "2025-11-16",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=bsCCbluOfzg",
    "youtubeVideoId": "bsCCbluOfzg",
    "thumbnailAlt": "เบื้องหลังการถ่าย SEASON’S GREETINGS 2026 ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย SEASON’S GREETINGS 2026 ของ fromis_9 พร้อมคอนเซ็ปต์ประจำปีและโมเมนต์เป็นกันเองของสมาชิก",
    "description": "ติดตามสมาชิกในกองถ่าย SEASON’S GREETINGS 2026 ตั้งแต่การเตรียมลุค การถ่ายภาพและวิดีโอ ไปจนถึงช่วงพักระหว่างเซต\n\nเบื้องหลังที่เผยบรรยากาศของคอนเซ็ปต์ประจำปี พร้อมคำทักทายอบอุ่นจาก fromis_9 ถึง flover สำหรับปี 2026 ❤️🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SeasonsGreetings",
      "2026",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-now-tomorrow-vcr-behind-2025-11-06",
    "title": "[FM_1.24] ความทรงจำในวันฤดูร้อน 🫧 เบื้องหลัง VCR ของ NOW TOMORROW.",
    "date": "2025-11-06",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=k6hBb7OJEak",
    "youtubeVideoId": "k6hBb7OJEak",
    "thumbnailAlt": "เบื้องหลังการถ่าย VCR คอนเสิร์ต NOW TOMORROW. ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย VCR สำหรับคอนเสิร์ต NOW TOMORROW. ที่เก็บความทรงจำของ fromis_9 ในบรรยากาศวันฤดูร้อน",
    "description": "ติดตามสมาชิกระหว่างการถ่าย VCR สำหรับคอนเสิร์ต NOW TOMORROW. ตั้งแต่การเตรียมฉากและคอสตูม ไปจนถึงโมเมนต์ในแต่ละเซต\n\nเบื้องหลังที่เผยที่มาของภาพความทรงจำในวันฤดูร้อน พร้อมบรรยากาศสนุกสนานและเป็นธรรมชาติของสมาชิกทั้งห้าคน 🫧☀️",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "VCRBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-now-tomorrow-behind-2025-10-29",
    "title": "[FM_1.24] วิ่งไปสู่จุดหมายเดียวกันกับ NOW TOMORROW.",
    "date": "2025-10-29",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=IuCM4CT_UOo",
    "youtubeVideoId": "IuCM4CT_UOo",
    "thumbnailAlt": "เบื้องหลังคอนเสิร์ต NOW TOMORROW. ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ติดตามเบื้องหลังคอนเสิร์ต NOW TOMORROW. ของ fromis_9 ตั้งแต่การเตรียมตัว ซ้อม ไปจนถึงโมเมนต์หลังเวทีตลอดการแสดง",
    "description": "พาไปชมขั้นตอนก่อนคอนเสิร์ต NOW TOMORROW. ทั้งการซ้อม การเตรียมคอสตูม และบรรยากาศก่อนสมาชิกขึ้นพบกับ flover\n\nบันทึกความตั้งใจและพลังของสมาชิกทั้งห้าคนที่มองไปยังจุดหมายเดียวกัน พร้อมความทรงจำจากหลังเวทีของคอนเสิร์ตครั้งสำคัญ 🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "ConcertBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-chuseok-message-2025-10-02",
    "title": "ข้อความอวยพรเทศกาลชูซอกปี 2025 จาก fromis_9 🌕",
    "date": "2025-10-02",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=1MkIYLPmTag",
    "youtubeVideoId": "1MkIYLPmTag",
    "thumbnailAlt": "ข้อความอวยพรเทศกาลชูซอกปี 2025 จาก fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "สมาชิก fromis_9 ส่งคำอวยพรถึง flover เนื่องในเทศกาลชูซอกปี 2025 พร้อมข้อความอบอุ่นสำหรับช่วงวันหยุด",
    "description": "สมาชิกทั้งห้าคนมาทักทายและส่งคำอวยพรให้ flover ใช้ช่วงเทศกาลชูซอกปี 2025 อย่างมีความสุขกับครอบครัวและคนสำคัญ\n\nวิดีโอสั้นที่เต็มไปด้วยความห่วงใยและบรรยากาศอบอุ่นจาก fromis_9 ในช่วงเทศกาล 🌕🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "Chuseok",
      "2025",
      "Greeting"
    ]
  },
  {
    "id": "fm-1-24-still-at-jangchung-flover-2025-10-01",
    "title": "[FM_1.24] flover ที่ยังอยู่ในจางชุง 🙌💚",
    "date": "2025-10-01",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=40lvY6SYSOE",
    "youtubeVideoId": "40lvY6SYSOE",
    "thumbnailAlt": "เบื้องหลัง fromis_9 กับ flover ที่จางชุง",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "ย้อนชมบรรยากาศและโมเมนต์ของ fromis_9 กับ flover ที่จางชุง พร้อมความประทับใจจากช่วงเวลาหลังคอนเสิร์ต",
    "description": "พา flover ย้อนกลับไปยังบรรยากาศที่จางชุง ผ่านภาพเบื้องหลังและบทสนทนาของสมาชิกเกี่ยวกับช่วงเวลาที่ได้ใช้ร่วมกัน\n\nคอนเทนต์ที่เก็บทั้งความคิดถึง ความประทับใจ และสายสัมพันธ์ระหว่าง fromis_9 กับ flover เอาไว้อย่างอบอุ่น 🙌💚",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "Jangchung",
      "flover",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-chaeyoung-mens-noblesse-behind-2025-09-15",
    "title": "[FM_1.24] แชยองเจ้าแม่คอนเซ็ปต์ เบื้องหลังการถ่าย Men Noblesse",
    "date": "2025-09-15",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=6GENlygmsoY",
    "youtubeVideoId": "6GENlygmsoY",
    "thumbnailAlt": "เบื้องหลังแชยอง fromis_9 ถ่ายแฟชั่นให้ Men Noblesse",
    "featured": true,
    "members": [
      "chaeyoung"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นของแชยอง fromis_9 ให้กับ Men Noblesse พร้อมลุคหลากหลายและเสน่ห์หน้ากล้องของเธอ",
    "description": "ติดตามแชยองตั้งแต่การเตรียมเสื้อผ้าและแต่งหน้า ไปจนถึงการเปลี่ยนอารมณ์และโพสในแต่ละคอนเซ็ปต์ของ Men Noblesse\n\nเบื้องหลังที่แสดงให้เห็นความเป็นเจ้าแม่คอนเซ็ปต์และความเป็นมืออาชีพของแชยอง พร้อมโมเมนต์เป็นกันเองระหว่างการทำงาน 📸✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LEECHAEYOUNG",
      "MenNoblesse",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-now-tomorrow-preparation-2025-09-04",
    "title": "[FM_1.24] ช่วงเวลาที่เตรียมพร้อมสำหรับวันพรุ่งนี้ NOW TOMORROW.",
    "date": "2025-09-04",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=_In-57QQG6Y",
    "youtubeVideoId": "_In-57QQG6Y",
    "thumbnailAlt": "เบื้องหลังการเตรียมคอนเสิร์ต NOW TOMORROW. ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมช่วงเวลาการเตรียมตัวของ fromis_9 สำหรับคอนเสิร์ต NOW TOMORROW. พร้อมภาพการทำงานและโมเมนต์ก่อนขึ้นเวที",
    "description": "ติดตามสมาชิกในช่วงเตรียมพร้อมสำหรับ NOW TOMORROW. ตั้งแต่การซ้อม ตรวจรายละเอียด ไปจนถึงช่วงเวลาสั้น ๆ ก่อนการแสดงเริ่มต้น\n\nเบื้องหลังที่สะท้อนความตั้งใจของ fromis_9 ในการสร้างเวทีให้สมบูรณ์ และความตื่นเต้นก่อนพบกับ flover ✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "NOWTOMORROW",
      "ConcertPreparation",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-like-you-better-promotion-behind-2025-08-07",
    "title": "[FM_1.24] วันอันเปล่งประกาย ✨ เบื้องหลังการโปรโมต ‘LIKE YOU BETTER’",
    "date": "2025-08-07",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=p2Z_fE1toWg",
    "youtubeVideoId": "p2Z_fE1toWg",
    "thumbnailAlt": "เบื้องหลังการโปรโมตเพลง LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "รวมเบื้องหลังการทำกิจกรรมโปรโมตเพลง “LIKE YOU BETTER” ของ fromis_9 พร้อมเวทีและโมเมนต์ระหว่างสมาชิกตลอดช่วงคัมแบ็ก",
    "description": "ติดตามสมาชิกตั้งแต่การเตรียมตัวและขึ้นเวทีตามรายการต่าง ๆ ไปจนถึงการถ่ายชาเลนจ์และช่วงพักระหว่างตารางโปรโมต\n\nอีกหนึ่งบันทึกจากยุค “LIKE YOU BETTER” ที่รวมทั้งความตั้งใจบนเวทีและโมเมนต์สดใสของ fromis_9 เอาไว้ในคลิปเดียว ✨🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "FromOur20s",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-like-you-better-npop-behind-2025-08-05",
    "title": "[FM_1.24] ความน่ารักไม่รู้จบ 😋 เบื้องหลัง ‘LIKE YOU BETTER’ ที่ NPOP",
    "date": "2025-08-05",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=AAHHYaW_8Mg",
    "youtubeVideoId": "AAHHYaW_8Mg",
    "thumbnailAlt": "เบื้องหลังการแสดง LIKE YOU BETTER ของ fromis_9 ที่ NPOP",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายทำและแสดงเพลง “LIKE YOU BETTER” ของ fromis_9 ที่ NPOP พร้อมโมเมนต์น่ารักของสมาชิก",
    "description": "ติดตามสมาชิกตั้งแต่การเตรียมตัว ซ้อม และถ่ายทำเวที “LIKE YOU BETTER” ที่ NPOP ไปจนถึงช่วงพักระหว่างเซต\n\nเบื้องหลังที่เต็มไปด้วยความน่ารัก เสียงหัวเราะ และเคมีของสมาชิกทั้งห้าคนตลอดตารางงาน 😋💞",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "NPOP",
      "FM_1_24"
    ]
  },
  {
    "id": "rebelutional-special-video-2025-07-30",
    "title": "fromis_9 (프로미스나인) ‘REBELUTIONAL’ SPECIAL VIDEO",
    "date": "2025-07-30",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=SrW-ILDJxdM",
    "youtubeVideoId": "SrW-ILDJxdM",
    "thumbnailAlt": "Special Video เพลง REBELUTIONAL ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "Special Video เพลง “REBELUTIONAL” จากมินิอัลบั้ม “From Our 20’s” ที่ถ่ายทอดพลังและเสน่ห์มั่นใจของ fromis_9",
    "description": "ชม Special Video ฉบับเต็มของเพลง “REBELUTIONAL” ที่สมาชิกทั้งห้าคนถ่ายทอดพลังของเพลงผ่านภาพและคอนเซ็ปต์อันโดดเด่น\n\nวิดีโอพิเศษที่ช่วยขยายบรรยากาศของมินิอัลบั้ม “From Our 20’s” และเผยอีกด้านที่เข้มแข็งของ fromis_9 🔥",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "REBELUTIONAL",
      "SpecialVideo",
      "FromOur20s"
    ]
  },
  {
    "id": "fm-1-24-like-you-better-recording-behind-2025-07-21",
    "title": "[FM_1.24] เบื้องหลังการบันทึกเสียง ‘LIKE YOU BETTER’ 🎙️",
    "date": "2025-07-21",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=qxgBE8Bj8Q8",
    "youtubeVideoId": "qxgBE8Bj8Q8",
    "thumbnailAlt": "เบื้องหลังการบันทึกเสียงเพลง LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการบันทึกเสียงเพลง “LIKE YOU BETTER” พร้อมขั้นตอนการทำงานและการถ่ายทอดอารมณ์ของสมาชิก fromis_9 แต่ละคน",
    "description": "ติดตามสมาชิกแต่ละคนในห้องอัด ตั้งแต่การบันทึกพาร์ตของตัวเอง การปรับน้ำเสียงและรายละเอียด ไปจนถึงการรับคำแนะนำเพื่อทำให้เพลงสมบูรณ์\n\nเบื้องหลังที่เผยความตั้งใจและสมาธิระหว่างทำงาน ก่อนเสียงร้องที่ได้ยินใน “LIKE YOU BETTER” จะกลายเป็นเวอร์ชันสมบูรณ์ 🎙️✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "RecordingBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiheon-polarepo-ice-guy-behind-2025-07-11",
    "title": "[FM_1.24] ความฝันเป็นจริง! เบื้องหลังจีฮอนถ่ายโฆษณา Polarepo และ Ice Guy",
    "date": "2025-07-11",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=6o94IvPLxno",
    "youtubeVideoId": "6o94IvPLxno",
    "thumbnailAlt": "เบื้องหลังจีฮอน fromis_9 ถ่ายโฆษณา Polarepo และ Ice Guy",
    "featured": true,
    "members": [
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายโฆษณาของจีฮอน fromis_9 ให้กับ Polarepo และ Ice Guy พร้อมบรรยากาศสดใสในกองถ่าย",
    "description": "ติดตามจีฮอนตั้งแต่การเตรียมตัวและเปลี่ยนลุค ไปจนถึงการถ่ายทำในแต่ละฉากของโฆษณา Polarepo และ Ice Guy\n\nเบื้องหลังที่เผยความตื่นเต้นและเสน่ห์สดใสของจีฮอน เมื่อความฝันในการร่วมงานกับแบรนด์กลายเป็นจริง 🍦✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "BAEKJIHEON",
      "Polarepo",
      "IceGuy",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-like-you-better-mv-behind-2025-07-03",
    "title": "[FM_1.24] ความหวานของ ‘LIKE YOU BETTER’ เบื้องหลังการถ่าย MV",
    "date": "2025-07-03",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=7moHyzUP0UE",
    "youtubeVideoId": "7moHyzUP0UE",
    "thumbnailAlt": "เบื้องหลังการถ่ายมิวสิกวิดีโอ LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่าย MV เพลง “LIKE YOU BETTER” ของ fromis_9 พร้อมฉากและโมเมนต์ของสมาชิกระหว่างการทำงาน",
    "description": "ติดตาม fromis_9 ในกองถ่าย MV “LIKE YOU BETTER” ตั้งแต่การเตรียมตัวและถ่ายทำฉากต่าง ๆ ไปจนถึงช่วงพักที่ได้เห็นสมาชิกพูดคุยกันอย่างเป็นธรรมชาติ\n\nเบื้องหลังที่ช่วยเติมเต็มคอนเซ็ปต์ของเพลงด้วยบรรยากาศหวานสดใส ความตั้งใจ และเคมีของสมาชิกทั้งห้าคน 🍓✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "MVBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "like-you-better-dance-practice-2025-06-30",
    "title": "fromis_9 (프로미스나인) ‘LIKE YOU BETTER’ DANCE PRACTICE",
    "date": "2025-06-30",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=KHFtbVgdKwQ",
    "youtubeVideoId": "KHFtbVgdKwQ",
    "thumbnailAlt": "วิดีโอซ้อมเต้นเพลง LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "วิดีโอซ้อมเต้นเพลง “LIKE YOU BETTER” ที่เผยท่าเต้น การจัดแถว และพลังการแสดงของ fromis_9 แบบเต็มเพลง",
    "description": "ชมสมาชิกทั้งห้าคนถ่ายทอดท่าเต้น “LIKE YOU BETTER” ในห้องซ้อมแบบเต็มเพลง เห็นทั้งรายละเอียดการเคลื่อนไหวและการเปลี่ยนฟอร์เมชันอย่างชัดเจน\n\nอีกเวอร์ชันที่ช่วยให้ flover ได้ติดตามเสน่ห์ด้านเพอร์ฟอร์แมนซ์และความพร้อมเพรียงของ fromis_9 🕺✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "DancePractice",
      "FromOur20s"
    ]
  },
  {
    "id": "fm-1-24-from-our-20s-jacket-behind-2025-06-27",
    "title": "[FM_1.24] จุดเริ่มต้นของการเดินทาง เบื้องหลังการถ่ายแจ็กเก็ต ‘From Our 20’s’",
    "date": "2025-06-27",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=lcJK08T4xHA",
    "youtubeVideoId": "lcJK08T4xHA",
    "thumbnailAlt": "เบื้องหลังการถ่ายภาพแจ็กเก็ตอัลบั้ม From Our 20’s ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายภาพแจ็กเก็ตมินิอัลบั้ม “From Our 20’s” พร้อมคอนเซ็ปต์และโมเมนต์ของสมาชิก fromis_9",
    "description": "ติดตามสมาชิกตั้งแต่การเตรียมเสื้อผ้าและแต่งหน้า ไปจนถึงการโพสในแต่ละคอนเซ็ปต์ของภาพแจ็กเก็ตมินิอัลบั้ม “From Our 20’s”\n\nเบื้องหลังที่เปิดให้เห็นจุดเริ่มต้นของการเดินทางครั้งใหม่ พร้อมเสน่ห์และความเป็นธรรมชาติของสมาชิกทั้งห้าคน 🧳✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "FromOur20s",
      "JacketBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "like-you-better-mv-reaction-2025-06-26",
    "title": "fromis_9 (프로미스나인) ‘LIKE YOU BETTER’ MV REACTION",
    "date": "2025-06-26",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=If153tgB5ec",
    "youtubeVideoId": "If153tgB5ec",
    "thumbnailAlt": "fromis_9 ชมและรีแอ็กมิวสิกวิดีโอ LIKE YOU BETTER",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "สมาชิก fromis_9 รับชม MV “LIKE YOU BETTER” ไปพร้อมกัน พร้อมเล่าเบื้องหลังและรีแอ็กต่อฉากต่าง ๆ ในมิวสิกวิดีโอ",
    "description": "ชมปฏิกิริยาของสมาชิกทั้งห้าคนระหว่างรับชม MV “LIKE YOU BETTER” ฉบับสมบูรณ์ พร้อมความคิดเห็นและเรื่องราวจากกองถ่าย\n\nคอนเทนต์ที่ช่วยให้ flover ได้เห็นรายละเอียดของมิวสิกวิดีโอผ่านมุมมองของ fromis_9 และสนุกกับโมเมนต์ระหว่างสมาชิก 🎬💞",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "MVReaction",
      "FromOur20s"
    ]
  },
  {
    "id": "like-you-better-fanchant-2025-06-25",
    "title": "fromis_9 (프로미스나인) คู่มือคำเชียร์ ‘LIKE YOU BETTER’ 📣",
    "date": "2025-06-25",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=kZcZ-UWL7Gw",
    "youtubeVideoId": "kZcZ-UWL7Gw",
    "thumbnailAlt": "คู่มือคำเชียร์เพลง LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "เรียนรู้คำเชียร์อย่างเป็นทางการของเพลง “LIKE YOU BETTER” เพื่อให้ flover ร่วมร้องและส่งเสียงเชียร์บนเวทีได้อย่างถูกจังหวะ",
    "description": "มาฝึกคำเชียร์เพลง “LIKE YOU BETTER” ไปพร้อมกับ fromis_9 ตั้งแต่จังหวะเรียกชื่อสมาชิก ไปจนถึงคำและท่อนต่าง ๆ ตลอดเพลง\n\nคู่มือสำหรับเตรียมตัวให้พร้อมก่อนชมการแสดง และเติมพลังให้เวทีด้วยเสียงเชียร์จาก flover 📣🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "Fanchant",
      "flover"
    ]
  },
  {
    "id": "like-you-better-mv-2025-06-25",
    "title": "fromis_9 (프로미스나인) ‘LIKE YOU BETTER’ MV",
    "date": "2025-06-25",
    "category": "MV",
    "videoUrl": "https://www.youtube.com/watch?v=r1QapH1SIAI",
    "youtubeVideoId": "r1QapH1SIAI",
    "thumbnailAlt": "มิวสิกวิดีโอเพลง LIKE YOU BETTER ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "มิวสิกวิดีโอเพลงไตเติล “LIKE YOU BETTER” จากมินิอัลบั้มชุดที่ 6 “From Our 20’s” และการเริ่มต้นบทใหม่ของ fromis_9 ในฐานะสมาชิกห้าคน",
    "description": "มิวสิกวิดีโอเพลง “LIKE YOU BETTER” ถ่ายทอดเรื่องราวการเดินทาง ความสดใส และช่วงเวลาของวัยยี่สิบผ่านสมาชิกทั้งห้าคน\n\nผลงานเพลงไตเติลจากมินิอัลบั้ม “From Our 20’s” ที่เป็นก้าวสำคัญและการเริ่มต้นบทใหม่ของ fromis_9 ภายใต้ ASND ✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "LIKEYOUBETTER",
      "MV",
      "FromOur20s"
    ]
  },
  {
    "id": "fm-1-24-harpers-bazaar-korea-behind-2025-06-22",
    "title": "[FM_1.24] เสียงหัวเราะไม่หยุด 😆 เบื้องหลังการถ่าย Harper’s BAZAAR Korea",
    "date": "2025-06-22",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=epBIK--rcCo",
    "youtubeVideoId": "epBIK--rcCo",
    "thumbnailAlt": "เบื้องหลัง fromis_9 ถ่ายแฟชั่นให้ Harper’s BAZAAR Korea",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการถ่ายแฟชั่นของ fromis_9 ให้กับ Harper’s BAZAAR Korea พร้อมลุคและโมเมนต์เฮฮาในกองถ่าย",
    "description": "ติดตามสมาชิกตั้งแต่การเตรียมลุคและโพสหน้ากล้อง ไปจนถึงช่วงพักระหว่างการถ่ายแฟชั่นให้ Harper’s BAZAAR Korea\n\nเบื้องหลังที่ได้เห็นทั้งความเป็นมืออาชีพ เคมีของสมาชิก และเสียงหัวเราะที่เกิดขึ้นตลอดวันในกองถ่าย 😆📸",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "HarpersBAZAAR",
      "Photoshoot",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-sudden-attack-behind-2025-06-08",
    "title": "[FM_1.24] การพบกันครั้งที่ 4 💟 เบื้องหลังการถ่าย Sudden Attack",
    "date": "2025-06-08",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=ct0KOytb0m0",
    "youtubeVideoId": "ct0KOytb0m0",
    "thumbnailAlt": "เบื้องหลัง fromis_9 ถ่ายคอนเทนต์ให้เกม Sudden Attack",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังการร่วมงานครั้งที่ 4 ระหว่าง fromis_9 กับเกม Sudden Attack พร้อมคอนเซ็ปต์และเคมีที่เข้ากันของสมาชิก",
    "description": "ติดตาม fromis_9 ในกองถ่ายคอนเทนต์สำหรับเกม Sudden Attack ตั้งแต่การเตรียมลุค ไปจนถึงการถ่ายทำในแต่ละฉาก\n\nการพบกันครั้งที่สี่ซึ่งยังเต็มไปด้วยเคมีที่ลงตัว ความตั้งใจ และโมเมนต์สนุก ๆ ของสมาชิกทั้งห้าคน 💟🎮",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "SuddenAttack",
      "BehindTheScenes",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-official-fanclub-flover-2025-05-08",
    "title": "2025 fromis_9 OFFICIAL FANCLUB flover 🍀",
    "date": "2025-05-08",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=9gfr1Sh5jAA",
    "youtubeVideoId": "9gfr1Sh5jAA",
    "thumbnailAlt": "วิดีโอแนะนำแฟนคลับทางการ flover ประจำปี 2025 ของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "fromis_9 ชวนแฟน ๆ มาร่วมเป็นสมาชิกแฟนคลับทางการ flover ประจำปี 2025 ผ่านวิดีโอแนะนำจากสมาชิกทั้งห้าคน",
    "description": "สมาชิก fromis_9 มาทักทายและชวนแฟน ๆ สมัครแฟนคลับทางการ flover ประจำปี 2025 พร้อมบรรยากาศสดใสและเป็นกันเอง\n\nอีกหนึ่งคำเชิญสำหรับ flover ที่อยากร่วมสร้างความทรงจำและเดินทางไปพร้อมกับสมาชิกทั้งห้าคนตลอดปี 🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "flover",
      "OfficialFanclub",
      "2025"
    ]
  },
  {
    "id": "fm-1-24-jiheon-your-song-mv-behind-2025-05-08",
    "title": "[FM_1.24] เบื้องหลังจีฮอนถ่าย MV เพลง ‘Your Song’",
    "date": "2025-05-08",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=lhgT0OBasrY",
    "youtubeVideoId": "lhgT0OBasrY",
    "thumbnailAlt": "เบื้องหลังจีฮอน fromis_9 ถ่ายมิวสิกวิดีโอเพลง Your Song ของพัคแจจอง",
    "featured": true,
    "members": [
      "jiheon"
    ],
    "summary": "พาไปชมเบื้องหลังของจีฮอน fromis_9 ระหว่างถ่าย MV เพลง “Your Song” ของพัคแจจอง พร้อมการทำงานในแต่ละฉาก",
    "description": "ติดตามจีฮอนตั้งแต่การเตรียมตัวและซ้อม ไปจนถึงการถ่ายทำฉากต่าง ๆ ในมิวสิกวิดีโอเพลง “Your Song” ของพัคแจจอง\n\nเบื้องหลังที่เผยการถ่ายทอดอารมณ์หน้ากล้อง ความตั้งใจ และโมเมนต์สบาย ๆ ของจีฮอนระหว่างการทำงาน 🎬✨",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "BAEKJIHEON",
      "YourSong",
      "MVBehind",
      "FM_1_24"
    ]
  },
  {
    "id": "fm-1-24-jiwon-chaeyoung-samsung-lions-behind-2025-04-25",
    "title": "[FM_1.24] นางฟ้าแห่งชัยชนะ จีวอนและแชยอง ⚾ เบื้องหลัง Samsung Lions",
    "date": "2025-04-25",
    "category": "Behind the Scenes",
    "videoUrl": "https://www.youtube.com/watch?v=fEzWf5o4-8Y",
    "youtubeVideoId": "fEzWf5o4-8Y",
    "thumbnailAlt": "เบื้องหลังจีวอนและแชยอง fromis_9 ขว้างและตีลูกเปิดสนามให้ Samsung Lions",
    "featured": true,
    "members": [
      "jiwon",
      "chaeyoung"
    ],
    "summary": "ติดตามเบื้องหลังจีวอนและแชยอง fromis_9 กับการขว้างและตีลูกเปิดสนามให้ Samsung Lions พร้อมบรรยากาศในสนามเบสบอล",
    "description": "พาไปชมจีวอนและแชยองตั้งแต่การฝึกซ้อมและเตรียมตัว ไปจนถึงช่วงเวลาจริงของการขว้างและตีลูกเปิดเกมให้ Samsung Lions\n\nเบื้องหลังที่รวมทั้งความตื่นเต้น ความมุ่งมั่น และโมเมนต์สนุกสนานของทั้งคู่ตลอดวันในสนามเบสบอล ⚾🦁",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "PARKJIWON",
      "LEECHAEYOUNG",
      "SamsungLions",
      "FM_1_24"
    ]
  },
  {
    "id": "fromis-9-new-profile-interview-2025-04-18",
    "title": "โปรไฟล์และบทสัมภาษณ์ fromis_9 สมาชิก 5 คน",
    "date": "2025-04-18",
    "category": "Other",
    "videoUrl": "https://www.youtube.com/watch?v=0uD2W5a4woc",
    "youtubeVideoId": "0uD2W5a4woc",
    "thumbnailAlt": "วิดีโอเปิดตัวโปรไฟล์และบทสัมภาษณ์สมาชิกห้าคนของ fromis_9",
    "featured": true,
    "members": [
      "hayoung",
      "nagyung",
      "jiwon",
      "chaeyoung",
      "jiheon"
    ],
    "summary": "วิดีโอแรกของช่องทางการใหม่ที่เปิดตัวโปรไฟล์และบทสัมภาษณ์ของฮายอง จีวอน แชยอง นากยอง และจีฮอน พร้อมยืนยันการเริ่มต้นบทใหม่ในชื่อ fromis_9",
    "description": "ทำความรู้จักสมาชิกทั้งห้าคนผ่านภาพโปรไฟล์ใหม่และบทสัมภาษณ์ที่เผยความคิด เสน่ห์ และตัวตนของแต่ละคน หลังกลับมาเริ่มกิจกรรมร่วมกันภายใต้ ASND\n\nวิดีโอแรกของช่องทางการนี้ถือเป็นการเปิดฉากบทใหม่ของ fromis_9 พร้อมคำทักทายถึง flover ที่รอคอยการกลับมาของพวกเธอ ✨🍀",
    "tags": [
      "fromis_9",
      "프로미스나인",
      "ASND",
      "Profile",
      "Interview"
    ]
  }
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
