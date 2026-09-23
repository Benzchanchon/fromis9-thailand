import type { NewsItem } from "../types/content";
import {
  getFeaturedNews,
  getNewsNavigation as selectNewsNavigation,
  getRelatedNews as selectRelatedNews,
  sortNewsByDateDesc,
} from "../utils/news";

export { newsCategories, newsFilters, newsPageContent, loadMoreNewsLabel } from "./newsPresentation";
export { getNewsDetailPath, sortNewsByDateDesc } from "../utils/news";

// Phase 1: Home still uses this static snapshot. News routes use the API.
export const newsItems: readonly NewsItem[] = [
  {
    slug: "fromis9-2026-asia-tour-tomorrow-glow-seoul",
    title:
      "fromis_9 เตรียมเปิดเอเชียทัวร์ 2026 “TOMORROW GLOW.” ที่กรุงโซล",
    date: "2026-07-30",
    category: "Tour",
    featured: true,
    image:
      "https://www.allkpop.com/upload/2026/07/content/300424/1785399872-thumb.jpg",
    imageAlt:
      "ภาพประกาศเอเชียทัวร์ 2026 TOMORROW GLOW. ของ fromis_9",
    summary:
      "fromis_9 เตรียมเริ่มเอเชียทัวร์ “TOMORROW GLOW.” ด้วยคอนเสิร์ตสามรอบที่กรุงโซล ระหว่างวันที่ 4–6 กันยายน 2026",
    article: [
      "fromis_9 ประกาศเริ่มต้นเอเชียทัวร์ประจำปี 2026 ภายใต้ชื่อ “TOMORROW GLOW.” โดยจะเปิดทัวร์ด้วยการแสดงสามรอบที่ Hwajung Tiger Dome มหาวิทยาลัย Korea University ในกรุงโซล วันที่ 4, 5 และ 6 กันยายน",
      "หลังจบคอนเสิร์ตที่โซล วงมีแผนเดินทางไปพบกับ flover ในเมืองอื่น ๆ ทั่วเอเชีย โดยกำหนดการของแต่ละเมืองจะประกาศเพิ่มเติมในภายหลัง",
      "ข่าวทัวร์ครั้งนี้เกิดขึ้นหลัง fromis_9 คว้าอันดับหนึ่งจากรายการ “Show Champion” ด้วยเพลง “Vitamin ME” ซึ่งเป็นเพลงไตเติลจากอัลบั้มเต็มชุดที่สอง “Glow ME” และยังเป็นทัวร์ถัดจาก “NOW TOMORROW.” ที่ปิดฉากด้วยคอนเสิร์ตอังกอร์ช่วงต้นปี",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-to-open-2026-asia-tour-tomorrow-glow-in-seoul-on-september-4",
  },
  {
    slug: "fromis9-vitamin-me-show-champion-first-win",
    title:
      "fromis_9 คว้าอันดับหนึ่งใน “Show Champion” ด้วยเพลง “Vitamin ME”",
    date: "2026-07-29",
    category: "Events",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/292126/1785374810-thumb.jpg",
    imageAlt:
      "สมาชิก fromis_9 กับถ้วยรางวัล Show Champion จากเพลง Vitamin ME",
    summary:
      "“Vitamin ME” พา fromis_9 คว้าถ้วยจากรายการ “Show Champion” พร้อมยอดขายสัปดาห์แรกของอัลบั้ม “Glow ME” มากกว่า 90,000 ชุด",
    article: [
      "fromis_9 คว้าอันดับหนึ่งจากรายการ “Show Champion” ของ MBC M และ MBC every1 เมื่อวันที่ 29 กรกฎาคม ด้วยเพลง “Vitamin ME” เพลงไตเติลจากอัลบั้มเต็มชุดที่สอง “Glow ME”",
      "หลังรับรางวัล สมาชิกได้ขอบคุณ flover สำหรับความรักและแรงสนับสนุน พร้อมบอกว่าจะตอบแทนแฟน ๆ ด้วยผลงานเพลงและการแสดงที่ดีต่อไป",
      "“Vitamin ME” เป็นเพลงแดนซ์รับฤดูร้อนที่นำเสนอพลังสดใสของวง ขณะที่ “Glow ME” ทำยอดขายสัปดาห์แรกบน Hanteo ได้มากกว่า 90,000 ชุด และวงเดินหน้าโปรโมตเพลงผ่านรายการดนตรีต่อเนื่อง",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-win-on-show-champion-with-vitamin-me",
  },
  {
    slug: "park-jiwon-musical-debut-hells-kitchen-opening",
    title:
      "พัคจีวอนเริ่มต้นบทบาทนักแสดงมิวสิคัลใน “Hell’s Kitchen”",
    date: "2026-07-28",
    category: "Events",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/281405/web_data/allkpop_1785263274_allkpop-header-photo.jpg",
    imageAlt:
      "พัคจีวอนจาก fromis_9 ในภาพประชาสัมพันธ์มิวสิคัล Hell’s Kitchen",
    summary:
      "พัคจีวอนก้าวขึ้นเวทีมิวสิคัลเป็นครั้งแรก รับบทนำ “อัลลี” ใน “Hell’s Kitchen” ซึ่งเปิดการแสดงที่กรุงโซลเมื่อวันที่ 28 กรกฎาคม",
    article: [
      "ASND ประกาศว่าพัคจีวอนจะเริ่มต้นเส้นทางใหม่ในฐานะนักแสดงมิวสิคัล โดยรับบท “อัลลี” ใน “Hell’s Kitchen” ซึ่งเปิดการแสดงรอบแรกเมื่อวันที่ 28 กรกฎาคม",
      "มิวสิคัลเรื่องนี้ได้รับแรงบันดาลใจจากชีวิตและดนตรีของ Alicia Keys เล่าเรื่องความฝัน ดนตรี และครอบครัวในย่าน Hell’s Kitchen ของนครนิวยอร์ก จีวอนถ่ายทอดตัวละครหญิงสาวผู้กำลังค้นหาเสียงและตัวตนของตัวเอง",
      "จีวอนกล่าวว่าเธอทั้งตื่นเต้นและประหม่าในการขึ้นเวทีมิวสิคัลครั้งแรกหลังเดบิวต์ พร้อมขอแรงสนับสนุนจากแฟน ๆ การแสดงมีกำหนดจัดถึงวันที่ 8 พฤศจิกายนที่ GS Arts Center เขตคังนัม กรุงโซล",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9s-park-ji-won-makes-musical-debut-in-hells-kitchen",
  },
  {
    slug: "fromis9-glow-me-comeback-week-performances",
    title:
      "fromis_9 ส่งพลังสดใสตลอดสัปดาห์คัมแบ็ก “Glow ME”",
    date: "2026-07-27",
    category: "Events",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/270759/1785153561-thumb.jpg",
    imageAlt:
      "fromis_9 ระหว่างทำกิจกรรมโปรโมตอัลบั้ม Glow ME",
    summary:
      "fromis_9 เปิดสัปดาห์คัมแบ็กด้วยเวที “Vitamin ME” ในรายการดนตรี พร้อมกิจกรรมพิธีกรพิเศษและรายการวาไรตี้หลายรายการ",
    article: [
      "หลังปล่อยอัลบั้มเต็มชุดที่สอง “Glow ME” เมื่อวันที่ 21 กรกฎาคม fromis_9 เริ่มสัปดาห์คัมแบ็กด้วยเวทีในรายการสำคัญ ได้แก่ “M Countdown”, “Music Bank”, “Show! Music Core” และ “Inkigayo”",
      "เพลงไตเติล “Vitamin ME” ถ่ายทอดท่วงทำนองติดหูและพลังสดใสแบบฤดูร้อน ขณะที่ซงฮายอง อีนากยอง และแบคจีฮอนยังรับหน้าที่พิธีกรพิเศษใน “Show! Music Core”",
      "สมาชิกยังร่วมรายการเพลงและวาไรตี้หลายรูปแบบ ทั้ง “The Seasons”, “Idol Human Theater” และ “Limousine Service” เพื่อแสดงทั้งทักษะการร้องและเคมีของวง โดยอัลบั้ม “Glow ME” นำเสนอเรื่องราวของการค้นพบตัวตนที่เปล่งประกาย ผ่านเสียงดนตรีที่คุ้นเคยและสีสันใหม่ของ fromis_9",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-shines-with-vibrant-performances-in-glow-me-comeback-week",
  },
  {
    slug: "fromis9-vitamin-me-music-video-release",
    title:
      "fromis_9 ปล่อยมิวสิกวิดีโอ “Vitamin ME” เติมพลังสดใสรับฤดูร้อน",
    date: "2026-07-21",
    category: "Releases",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/211626/1784665598_K-Soul.jpg",
    imageAlt:
      "สมาชิก fromis_9 ในมิวสิกวิดีโอเพลง Vitamin ME",
    summary:
      "fromis_9 กลับมาพร้อมมิวสิกวิดีโอ “Vitamin ME” เพลงไตเติลจากอัลบั้มเต็มชุดที่สอง “Glow ME” ที่ถ่ายทอดพลังบวกและบรรยากาศฤดูร้อน",
    article: [
      "fromis_9 ปล่อยมิวสิกวิดีโอเพลง “Vitamin ME” เมื่อวันที่ 21 กรกฎาคม พร้อมการเปิดตัวอัลบั้มเต็มชุดที่สอง “Glow ME” อย่างเป็นทางการ",
      "เพลงใหม่มาพร้อมท่วงทำนองสดชื่นและแนวคิดเรื่องการส่งต่อความสุขและพลังให้กับคนสำคัญ โดยยังคงเสน่ห์อันสดใสที่แฟน ๆ คุ้นเคยจาก fromis_9",
      "“Glow ME” ถือเป็นคัมแบ็กครั้งสำคัญของวงในรูปแบบสมาชิกห้าคนภายใต้ ASND Entertainment และเป็นอีกก้าวของวงหลังการสิ้นสุดสัญญากับ Pledis Entertainment ของสมาชิกบางส่วน",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/video/2026/07/fromis-9-drops-energizing-mv-for-vitamin-me",
  },
  {
    slug: "fromis9-glow-me-highlight-medley",
    title:
      "fromis_9 เผยไฮไลต์เมดลีย์อัลบั้ม “Glow ME”",
    date: "2026-07-18",
    category: "Releases",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/181250/web_data/allkpop_1784393534_fromis.jpg",
    imageAlt:
      "ภาพโปรโมตไฮไลต์เมดลีย์อัลบั้ม Glow ME ของ fromis_9",
    summary:
      "ไฮไลต์เมดลีย์ “Glow ME” เปิดตัวสีสันของเพลงใหม่ ตั้งแต่ “Vitamin ME” ไปจนถึง “Screen Time” และ “Cold Blood” ก่อนปล่อยอัลบั้มวันที่ 21 กรกฎาคม",
    article: [
      "fromis_9 เผยตัวอย่างเพลงจากอัลบั้มเต็มชุดที่สอง “Glow ME” ผ่านไฮไลต์เมดลีย์ที่นำเสนอแนวคิดสดชื่นรับฤดูร้อน",
      "ตัวอย่างประกอบด้วยเพลงไตเติลจังหวะสดใส “Vitamin ME” เพลงที่ให้อารมณ์จริงใจอย่าง “Screen Time” และเพลงที่มีบรรยากาศเข้มขึ้นอย่าง “Cold Blood” สะท้อนความหลากหลายทางดนตรีของอัลบั้ม",
      "“Glow ME” มีกำหนดปล่อยอย่างเป็นทางการในวันที่ 21 กรกฎาคม เวลา 18.00 น. ตามเวลาเกาหลี โดยไฮไลต์เมดลีย์เป็นหนึ่งในคอนเทนต์โปรโมตช่วงสุดท้ายก่อนคัมแบ็ก",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-drops-official-highlight-medley-for-glow-me",
  },
  {
    slug: "fromis9-glow-me-tracklist-reveal",
    title:
      "fromis_9 เปิดรายชื่อ 10 เพลงในอัลบั้มเต็มชุดที่สอง “Glow ME”",
    date: "2026-07-07",
    category: "Releases",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/071201/web_data/allkpop_1783440413_img-1097.jpeg",
    imageAlt:
      "โปสเตอร์รายชื่อเพลงในอัลบั้ม Glow ME ของ fromis_9",
    summary:
      "“Glow ME” ประกอบด้วย 10 เพลง นำโดยเพลงไตเติล “Vitamin ME” พร้อมยูนิตแทร็กของสมาชิกและเพลงใหม่หลากหลายอารมณ์",
    article: [
      "fromis_9 เปิดเผยโปสเตอร์ tracklist ของ “Glow ME” เมื่อวันที่ 7 กรกฎาคม ยืนยันว่าอัลบั้มเต็มชุดที่สองจะมีเพลงทั้งหมด 10 เพลง โดยเลือก “Vitamin ME” เป็นเพลงไตเติล",
      "รายชื่อเพลงประกอบด้วย “ETERNAL”, “Vitamin ME”, “Pocket Treat”, “Blue Heart”, “Screen Time”, “Teacher”, “Cold Blood”, “Why do I cry?”, “Day 1” และ “Wonderland”",
      "“Cold Blood” เป็นเพลงยูนิตของแชยอง นากยอง และจีฮอน ส่วน “Why do I cry?” เป็นเพลงยูนิตของฮายองและจีวอน อัลบั้มมีกำหนดปล่อยวันที่ 21 กรกฎาคม เวลา 18.00 น. ตามเวลาเกาหลี ห่างจากอัลบั้มเต็มชุดแรก “Unlock My World” ราวสามปี",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-rolls-out-the-tracklist-for-their-album-glow-me",
  },
  {
    slug: "fromis9-confirms-july-21-full-album-comeback",
    title:
      "fromis_9 ยืนยันคัมแบ็กพร้อมอัลบั้มเต็มวันที่ 21 กรกฎาคม",
    date: "2026-07-04",
    category: "Updates",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/07/content/041838/web_data/allkpop_1783206121_fromis-9-from-our-20s-group-concept-photo-8.jpg",
    imageAlt:
      "ภาพคอนเซปต์กลุ่มของ fromis_9 ก่อนการประกาศคัมแบ็กเดือนกรกฎาคม",
    summary:
      "แชยองและจีฮอนเปิดเผยผ่าน Fromm ว่า fromis_9 จะคัมแบ็กในวันที่ 21 กรกฎาคม พร้อมอัลบั้มเต็มชุดใหม่",
    article: [
      "fromis_9 ยืนยันวันคัมแบ็กอย่างเป็นทางการ หลังแชยองและจีฮอนแจ้งกับแฟน ๆ ผ่านแพลตฟอร์ม Fromm เมื่อวันที่ 4 กรกฎาคมว่าอัลบั้มใหม่จะปล่อยในวันที่ 21 กรกฎาคม",
      "ก่อนหน้านี้ ASND เคยระบุเพียงว่าวงจะกลับมาในเดือนกรกฎาคมพร้อมอัลบั้มเต็ม การประกาศจากสมาชิกจึงทำให้กำหนดการที่แฟน ๆ รอคอยชัดเจนขึ้น",
      "จีฮอนบอกว่าเหลือเวลาอีกเพียงสองสัปดาห์กว่า ๆ ก่อนถึงวันปล่อยอัลบั้ม ขณะที่ flover เริ่มรอติดตามภาพคอนเซปต์ ตัวอย่างเพลง และคอนเทนต์คัมแบ็กชุดแรก",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-announces-comeback-on-july-21-returning-with-a-full-length-album",
  },
  {
    slug: "park-jiwon-talks-about-first-settlement",
    title:
      "พัคจีวอนเล่าถึงช่วงเวลาแปดปีก่อนเริ่มได้รับส่วนแบ่งรายได้",
    date: "2026-06-17",
    category: "Other",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/06/content/172028/web_data/allkpop_1781743417_img-7650.jpeg",
    imageAlt:
      "พัคจีวอนจาก fromis_9 ระหว่างร่วมรายการ Workdol",
    summary:
      "พัคจีวอนเปิดใจในรายการ “Workdol” ว่าเธอไม่มีรายได้จากกิจกรรมวงเป็นเวลาหลายปี และเพิ่งเริ่มได้รับส่วนแบ่งพร้อมเริ่มเก็บเงิน",
    article: [
      "พัคจีวอนร่วมรายการ “Workdol” ตอนที่พาเธอไปทดลองทำงานเป็นพนักงานธนาคารหนึ่งวัน และได้พูดคุยอย่างตรงไปตรงมาเกี่ยวกับสถานการณ์ทางการเงินในช่วงที่ผ่านมา",
      "จีวอนเล่าว่าเธอไม่มีรายได้จากการทำงานเป็นเวลาประมาณแปดปี ก่อนจะเพิ่งเริ่มได้รับส่วนแบ่งรายได้ในช่วงหลัง และตอนนี้กำลังค่อย ๆ วางแผนเก็บออมเงิน",
      "เรื่องราวดังกล่าวสะท้อนอีกด้านของการทำงานในวงการไอดอล ซึ่งแม้จะมีกิจกรรมต่อเนื่อง ศิลปินอาจต้องใช้เวลาหลายปีกว่าจะเริ่มได้รับรายได้หลังหักค่าใช้จ่ายต่าง ๆ",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/06/fromis-9s-park-jiwon-reveals-she-had-no-income-for-eight-years-before-receiving-settlement",
  },
  {
    slug: "lee-chaeyoung-pauses-festival-schedules-for-health",
    title:
      "อีแชยองพักตารางงานเทศกาลมหาวิทยาลัยเนื่องจากปัญหาสุขภาพ",
    date: "2026-05-14",
    category: "Updates",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/05/content/141457/web_data/allkpop_1778785280_allkpop-header-photo.jpg",
    imageAlt:
      "อีแชยองจาก fromis_9 ในภาพประชาสัมพันธ์ของวง",
    summary:
      "ASND แจ้งว่าอีแชยองจะไม่เข้าร่วมงานเทศกาลมหาวิทยาลัยตามกำหนด เนื่องจากมีอาการปวดท้องและภาวะขาดน้ำ โดยมุ่งพักฟื้นเป็นลำดับแรก",
    article: [
      "ASND ประกาศเมื่อวันที่ 14 พฤษภาคมว่าอีแชยองจะไม่เข้าร่วมการแสดงที่เทศกาลของ Dankook University วิทยาเขต Jukjeon และ Sungkyunkwan University วิทยาเขตโซลในวันดังกล่าว",
      "ต้นสังกัดระบุว่าแชยองมีอาการปวดท้องร่วมกับภาวะขาดน้ำ จึงจำเป็นต้องพักและฟื้นฟูสุขภาพ พร้อมขอความเข้าใจจากแฟน ๆ ก่อนหน้านี้เธอไม่ได้เข้าร่วมเทศกาลที่ Sangji University ด้วยเหตุผลด้านสุขภาพเช่นกัน",
      "ในช่วงเวลาเดียวกัน fromis_9 กำลังเตรียมอัลบั้มเต็มสำหรับการคัมแบ็กเดือนกรกฎาคม ซึ่งจะเป็นสตูดิโออัลบั้มชุดแรกของวงในรอบประมาณสามปี",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/05/fromis-9s-lee-chae-young-misses-university-festival-performances-due-to-health-issues-ahead-of-july-comeback",
  },
  {
    slug: "fromis9-announces-summer-full-album-comeback",
    title:
      "fromis_9 เตรียมคัมแบ็กฤดูร้อนด้วยอัลบั้มเต็มชุดใหม่",
    date: "2026-05-12",
    category: "Updates",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/05/content/120014/web_data/allkpop_1778559402_img-6024.jpeg",
    imageAlt:
      "สมาชิก fromis_9 ในภาพประกาศการเตรียมคัมแบ็กอัลบั้มเต็ม",
    summary:
      "ASND ยืนยันว่า fromis_9 จะกลับมาในเดือนกรกฎาคมพร้อมอัลบั้มเต็มชุดใหม่ ซึ่งเป็นสตูดิโออัลบั้มแรกในรอบเกือบสามปี",
    article: [
      "ASND ประกาศเมื่อวันที่ 12 พฤษภาคมว่า fromis_9 กำลังเตรียมคัมแบ็กในเดือนกรกฎาคมด้วยอัลบั้มเต็มชุดใหม่ พร้อมทุ่มเทให้ผลงานถ่ายทอดพลังและสีสันเฉพาะตัวของวงอย่างสมบูรณ์",
      "อัลบั้มนี้จะเป็นผลงานเต็มชุดแรกในรอบเกือบสามปี นับจาก “Unlock My World” ในปี 2023 และต่อยอดกิจกรรมของวงภายใต้ ASND หลังอัลบั้ม “From Our 20’s” และดิจิทัลซิงเกิล “White Memories”",
      "สมาชิกเคยเผยว่าต้องการนำเสนออารมณ์ที่ลึกขึ้นและเสียงดนตรีที่เติบโตขึ้น โดยยังคงเอกลักษณ์ของ fromis_9 ไว้ ทำให้การกลับมาครั้งนี้ได้รับความสนใจจาก flover ตั้งแต่เริ่มประกาศ",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/05/fromis-9-to-make-summer-comeback-with-new-full-length-album",
  },
  {
    slug: "park-jiwon-cast-hells-kitchen-musical",
    title:
      "พัคจีวอนรับบทนำใน “Hell’s Kitchen” เตรียมเดบิวต์มิวสิคัล",
    date: "2026-04-28",
    category: "Events",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/04/content/280511/web_data/allkpop_1777367818_-2026-04-28-10.jpg",
    imageAlt:
      "พัคจีวอนในภาพประกาศรายชื่อนักแสดงมิวสิคัล Hell’s Kitchen",
    summary:
      "พัคจีวอนได้รับเลือกให้รับบทนำ “อัลลี” ในมิวสิคัล “Hell’s Kitchen” ฉบับเกาหลี ซึ่งมีกำหนดเปิดการแสดงในเดือนกรกฎาคม",
    article: [
      "ASND เปิดเผยเมื่อวันที่ 28 เมษายนว่าพัคจีวอนจะเดบิวต์ในสายมิวสิคัล ด้วยบทนำ “อัลลี” จากเรื่อง “Hell’s Kitchen” ซึ่งเตรียมเปิดการแสดงที่ GS Arts Center ในกรุงโซล",
      "ผลงานเรื่องนี้เป็นมิวสิคัล coming-of-age ที่ได้รับแรงบันดาลใจจากชีวิตและบทเพลงของ Alicia Keys ติดตามการเติบโตของเด็กสาวในย่าน Hell’s Kitchen ของแมนฮัตตัน ผู้ค้นหาตัวตนและเสียงของตัวเองผ่านดนตรี",
      "บทบาทดังกล่าวเปิดโอกาสให้จีวอนได้แสดงเอกลักษณ์ของน้ำเสียงและพลังการร้องในรูปแบบใหม่ นอกเหนือจากกิจกรรมกับ fromis_9 งานเพลงประกอบซีรีส์ และการทำหน้าที่พิธีกรในรายการออนไลน์",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/04/fromis-9s-park-jiwon-makes-musical-debut-as-lead-in-hells-kitchen",
  },
  {
    slug: "lee-nagyung-motorcycle-license-challenge",
    title:
      "อีนากยองเริ่มภารกิจสอบใบขับขี่มอเตอร์ไซค์ตามแรงบันดาลใจจากคุณพ่อ",
    date: "2026-04-16",
    category: "Other",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/04/content/161027/web_data/allkpop_1776349738_hq720-1-1.jpg",
    imageAlt:
      "อีนากยองจาก fromis_9 ระหว่างฝึกขับขี่มอเตอร์ไซค์",
    summary:
      "อีนากยองทดลองฝึกขับขี่มอเตอร์ไซค์เพื่อเตรียมสอบใบอนุญาต โดยมีเป้าหมายอยากออกทริปร่วมกับคุณพ่อในอนาคต",
    article: [
      "วิดีโอจากช่อง “studiofromis_9” เผยให้เห็นอีนากยองเข้ารับบทเรียนขับขี่มอเตอร์ไซค์ เพื่อเตรียมตัวสำหรับการสอบใบอนุญาตอย่างจริงจัง",
      "นากยองอธิบายว่าแรงบันดาลใจมาจากคุณพ่อที่ขี่มอเตอร์ไซค์ และเธออยากมีโอกาสขี่ไปด้วยกันพร้อมใช้เวลาพูดคุยระหว่างทาง",
      "แม้ช่วงแรกจะควบคุมรถขนาดใหญ่ได้ยาก แต่นากยองค่อย ๆ ปรับตัวและมีความมั่นใจมากขึ้นหลังเปลี่ยนมาฝึกกับรถที่ควบคุมง่ายกว่า ผู้ฝึกสอนประเมินว่าเธอมีโอกาสสอบผ่าน ขณะที่นากยองยืนยันว่าจะเดินหน้าทำใบขับขี่ให้สำเร็จ",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/04/fromis-9s-lee-nagyung-takes-on-motorcycle-license-challenge-inspired-by-her-father",
  },
  {
    slug: "fromis9-sky-runner-special-video",
    title:
      "fromis_9 ปล่อยสเปเชียลวิดีโอเพลงใหม่ “Sky Runner”",
    date: "2026-04-01",
    category: "Releases",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/04/content/010807/1775045223_Demian09.jpg",
    imageAlt:
      "สมาชิก fromis_9 ในสเปเชียลวิดีโอเพลง Sky Runner",
    summary:
      "fromis_9 เปิดตัวสเปเชียลวิดีโอ “Sky Runner” เพลงออริจินัลจากอีพีเดบิวต์ญี่ปุ่นที่ถ่ายทอดความตื่นเต้นของการเริ่มต้นบทใหม่",
    article: [
      "fromis_9 ปล่อยสเปเชียลวิดีโอสำหรับเพลง “Sky Runner” พร้อมกับการวางจำหน่ายอีพีญี่ปุ่น “LIKE YOU BETTER (Japanese ver.)” บนแพลตฟอร์มสตรีมมิงทั่วโลก",
      "“Sky Runner” เป็นเพลงใหม่ที่สร้างขึ้นสำหรับการเดบิวต์ในญี่ปุ่นโดยเฉพาะ ถ่ายทอดความรู้สึกตื่นเต้นต่อการออกเดินทางครั้งใหม่ผ่านจังหวะและพลังสดใสในแบบของ fromis_9",
      "ก่อนปล่อยผลงาน สมาชิกได้พบกับแฟน ๆ ชาวญี่ปุ่นในคอนเสิร์ตอังกอร์ “NOW TOMORROW” ที่กรุงโตเกียวเมื่อวันที่ 28 มีนาคม และเตรียมขยายกิจกรรมในประเทศญี่ปุ่นต่อจากการเปิดตัวอีพีชุดนี้",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/video/2026/04/fromis-9-releases-special-video-for-title-track-sky-runner",
  },
  {
    slug: "fromis9-japanese-debut-ep-like-you-better",
    title:
      "fromis_9 เปิดตัวอีพีญี่ปุ่น “LIKE YOU BETTER (Japanese ver.)”",
    date: "2026-04-01",
    category: "Releases",
    featured: false,
    image:
      "https://www.allkpop.com/upload/2026/03/content/312240/web_data/allkpop_1775011317_img-4550.jpeg",
    imageAlt:
      "ภาพโปรโมตอีพีญี่ปุ่น LIKE YOU BETTER Japanese ver. ของ fromis_9",
    summary:
      "fromis_9 เริ่มต้นกิจกรรมในญี่ปุ่นอย่างเป็นทางการด้วยอีพี 6 เพลง นำโดย “LIKE YOU BETTER (Japanese ver.)” และเพลงใหม่ “Sky Runner”",
    article: [
      "fromis_9 ปล่อยอีพีเดบิวต์ญี่ปุ่น “LIKE YOU BETTER (Japanese ver.)” เมื่อวันที่ 1 เมษายน ผ่านแพลตฟอร์มสตรีมมิงทั่วโลก ถือเป็นการเริ่มต้นกิจกรรมในตลาดญี่ปุ่นอย่างเป็นทางการ",
      "อีพีประกอบด้วย 6 แทร็ก ได้แก่ “LIKE YOU BETTER (Japanese ver.)”, “Love=Disaster (Japanese ver.)”, เพลงออริจินัล “Sky Runner” และเวอร์ชัน instrumental ของทั้งสามเพลง",
      "ผลงานชุดนี้ผสมพลังสดใสอันเป็นเอกลักษณ์ของวงเข้ากับบรรยากาศของการเริ่มต้นใหม่ หลังพบกับแฟน ๆ ในคอนเสิร์ตอังกอร์ “2025–26 fromis_9 WORLD TOUR NOW TOMORROW” ที่กรุงโตเกียว วงมีแผนเดินหน้าขยายกิจกรรมและสื่อสารกับแฟน ๆ ชาวญี่ปุ่นมากขึ้น",
    ],
    sourceName: "Allkpop",
    sourceUrl:
      "https://www.allkpop.com/article/2026/04/fromis-9-launch-japanese-debut-ep-mark-new-chapter",
  },
];

export const homeLatestNewsItems = sortNewsByDateDesc(newsItems).slice(0, 3);

export function getNewsBySlug(slug?: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getRelatedNews(currentItem: NewsItem, limit = 3) {
  return selectRelatedNews(newsItems, currentItem, limit);
}

export function getNewsNavigation(slug: string) {
  return selectNewsNavigation(newsItems, slug);
}

const staticFeaturedNews = getFeaturedNews(newsItems);
if (!staticFeaturedNews) {
  throw new Error("At least one featured news item is required.");
}
export const featuredNews = staticFeaturedNews;
