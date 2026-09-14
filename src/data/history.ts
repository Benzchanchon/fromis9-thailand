import japanImage from "../assets/images/History/japanese-debut-cover.png";
import fromImage from "../assets/images/History/from-cover.png";
import supersonicImage from "../assets/images/History/supersonic-era.png";
import loveFromImage from "../assets/images/History/love-from-poster.png";
import gyuriImage from "../assets/images/History/gyuri-memento.png";
import mementoImage from "../assets/images/History/memento-box-wide.png";
import societyImage from "../assets/images/History/my-little-society-era.png";
import funFactoryImage from "../assets/images/History/fun-factory-era.png";
import from9Image from "../assets/images/History/from9-era.png";
import formationImage from "../assets/images/History/formation-2017.png";
import glassShoesImage from "../assets/images/History/glass-shoes-cover.png";
import toHeartImage from "../assets/images/History/to-heart-official-group.jpg";
import nowTomorrowImage from "../assets/images/History/now-tomorrow-official-poster.jpg";
import firstWinImage from "../assets/images/History/talk-and-talk-first-win.png";
import unlockMyWorldImage from "../assets/images/History/unlock-my-world-cover.png";
import fromOur20sImage from "../assets/images/History/from-our-20s-cover.png";
import glowMeImage from "../assets/images/History/glow-me-concept.png";
import tomorrowGlowImage from "../assets/images/History/tomorrow-glow-tour.jpg";
import type { HistoryEntry } from "../types/history";

export const historyPrimarySource = "https://kpop.fandom.com/wiki/Fromis_9";
const worldTourSource = "https://kpop.fandom.com/wiki/2025_fromis_9_World_Tour_%27Now_Tomorrow.%27";
const glowMeSource = "https://kpop.fandom.com/wiki/Glow_Me";
const asiaTourSource = "https://www.soompi.com/article/1858411wpp/fromis_9-announces-2026-asia-tour-tomorrow-glow";

export const historyPageContent = {
  eyebrow: "FROMIS_9 ARCHIVE",
  title: "History",
  introduction: "จาก Idol School สู่บทใหม่ของสมาชิก 5 คน ย้อนดูหมุดหมายสำคัญที่พา fromis_9 เติบโตมาจนถึงวันนี้",
  timelineTitle: "Growing with fromis_9",
  timelineIntroduction: "แต่ละช่วงเวลาคือส่วนหนึ่งของเรื่องราวที่เติบโตไปด้วยกัน",
  sourceNote: "เรียบเรียงเป็นภาษาไทยจาก Kpop Wiki พร้อมตรวจสอบรายละเอียดเพิ่มเติมจากแหล่งอ้างอิงด้านล่าง ข้อมูลทัวร์อ้างอิงประกาศล่าสุดวันที่ 11 กันยายน 2026 และนำเสนอเป็นกำหนดการที่ประกาศ ไม่ใช่สรุปการแสดงที่ผ่านมา",
  sources: [
    { label: "Kpop Wiki — fromis_9 (แหล่งหลัก)", url: historyPrimarySource },
    { label: "Kpop Wiki — NOW TOMORROW.", url: worldTourSource },
    { label: "Kpop Wiki — Glow Me", url: glowMeSource },
    { label: "Soompi — TOMORROW GLOW.", url: asiaTourSource },
  ],
};

export const historyEntries: readonly HistoryEntry[] = [
  {
    id: "idol-school-formation",
    year: 2017,
    date: "2017-09-29",
    dateLabel: "13 กรกฎาคม–29 กันยายน 2017",
    title: "จุดเริ่มต้นจาก Idol School",
    category: "ORIGINS",
    summaryTh: [
      "Idol School ของ Mnet เริ่มออกอากาศวันที่ 13 กรกฎาคม 2017 เพื่อคัดเลือกเกิร์ลกรุ๊ปวงใหม่ผ่านการฝึกและคะแนนโหวตจากผู้ชม",
      "รอบสุดท้ายวันที่ 29 กันยายนคัดเลือกสมาชิก 9 คนในชื่อ fromis_ โดย Roh Jisun ได้อันดับหนึ่ง ส่วน Pledis Entertainment รับหน้าที่ดูแลการฝึกและเตรียมวงสำหรับการเดบิวต์",
    ],
    image: { src: formationImage, alt: "ภาพโปรไฟล์ทางการ fromis_9 ยุคพรีเดบิวต์ปี 2017", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_group_profile_photo_(1).png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 65%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "glass-shoes-pre-debut",
    year: 2017,
    date: "2017-11-30",
    dateLabel: "พฤศจิกายน 2017",
    title: "จาก fromis_ สู่ fromis_9 และ Glass Shoes",
    category: "PRE-DEBUT",
    summaryTh: [
      "หลังรายการ Fromis_'s Room ออกอากาศตอนสุดท้ายในวันที่ 23 พฤศจิกายน วงเปลี่ยนชื่อเป็น fromis_9 โดยเลข 9 สื่อถึงสมาชิกทั้งเก้าคนจาก Idol School",
      "วงแสดงเพลงพรีเดบิวต์ Glass Shoes ในงาน 2017 Mnet Asian Music Awards ที่ญี่ปุ่นเมื่อวันที่ 29 พฤศจิกายน ก่อนปล่อยเพลงเป็นดิจิทัลซิงเกิลในวันถัดมา",
    ],
    image: { src: glassShoesImage, alt: "ปกซิงเกิลพรีเดบิวต์ Glass Shoes ของ fromis_9 ปี 2017", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Glass_Shoes_cover_art.png", credit: "Glass Shoes · ปกซิงเกิล / Kpop Wiki", kind: "artwork" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "to-heart-debut",
    year: 2018,
    date: "2018-01-24",
    dateLabel: "24 มกราคม 2018",
    title: "เดบิวต์อย่างเป็นทางการกับ To. Heart",
    category: "DEBUT",
    summaryTh: [
      "fromis_9 เดบิวต์อย่างเป็นทางการเมื่อวันที่ 24 มกราคม 2018 พร้อมมินิอัลบั้มแรก To. Heart",
      "มินิอัลบั้มและเพลงไตเติลชื่อเดียวกันเปิดเส้นทางการทำกิจกรรมอย่างเป็นทางการของวงสมาชิก 9 คน",
    ],
    image: { src: toHeartImage, alt: "ภาพโปรโมต To. Heart ปี 2018 สมาชิก fromis_9 ทั้ง 9 คนในห้องเรียน", sourceUrl: "https://www.soompi.com/article/1106067wpp/idol-school-girl-group-fromis_9-kicks-off-debut-teasers-releasing-track-list", credit: "To. Heart · ภาพโปรโมตทางการ / Soompi", kind: "photo" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "to-day-from9-off-the-record",
    year: 2018,
    date: "2018-10-10",
    dateLabel: "มิถุนายน–ตุลาคม 2018",
    title: "คัมแบ็กแรกและการกลับมาครบทีมใน From.9",
    category: "NEW ERA",
    summaryTh: [
      "fromis_9 ปล่อยมินิอัลบั้ม To. Day วันที่ 5 มิถุนายน และโปรโมตด้วยสมาชิก 8 คน ระหว่างที่ Jang Gyuri เข้าร่วมรายการ Produce 48",
      "ในเดือนกันยายน วงย้ายมาอยู่ภายใต้การดูแลของ Off The Record Entertainment ก่อนกลับมาครบ 9 คนกับซิงเกิลอัลบั้มพิเศษ From.9 และเพลง Love Bomb เมื่อวันที่ 10 ตุลาคม",
    ],
    image: { src: from9Image, alt: "ภาพโปรโมต From.9 สมาชิก fromis_9 ทั้ง 9 คน", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_From.9_group_promotional_photo.png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 0%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "flover-fun-factory",
    year: 2019,
    date: "2019-06-04",
    dateLabel: "มกราคม–มิถุนายน 2019",
    title: "ชื่อ flover และสีสันของ Fun Factory",
    category: "TOGETHER",
    summaryTh: [
      "วันที่ 24 มกราคม 2019 ซึ่งเป็นวันครบรอบเดบิวต์หนึ่งปี วงประกาศชื่อแฟนคลับว่า flover ชื่อนี้ผสมคำว่า fromis กับ clover และสื่อถึงคำสัญญาที่จะมีช่วงเวลาดี ๆ ร่วมกัน",
      "วันที่ 4 มิถุนายน fromis_9 กลับมาพร้อมซิงเกิลอัลบั้มแรก Fun Factory และเพลงไตเติล Fun!",
    ],
    image: { src: funFactoryImage, alt: "ภาพคอนเซปต์ Fun Factory ปี 2019", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Fun_Factory_group_concept_photo_(Fun_ver.).png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "my-little-society",
    year: 2020,
    date: "2020-09-16",
    dateLabel: "16 กันยายน 2020",
    title: "กลับมาพบกันใน My Little Society",
    category: "RELEASE",
    summaryTh: [
      "หลังห่างจากการคัมแบ็กไปกว่าหนึ่งปี fromis_9 ปล่อยมินิอัลบั้ม My Little Society พร้อมเพลง Feel Good (Secret Code) เมื่อวันที่ 16 กันยายน 2020",
      "ในปีเดียวกัน แผนปล่อย Love Bomb เวอร์ชันภาษาญี่ปุ่นและกิจกรรมในญี่ปุ่นต้องเลื่อนออกไปจากสถานการณ์ COVID-19",
    ],
    image: { src: societyImage, alt: "ภาพโปรโมต My Little Society ปี 2020", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_My_Little_Society_group_promo_photo_(1).png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "pledis-talk-and-talk-first-win",
    year: 2021,
    date: "2021-09-07",
    dateLabel: "สิงหาคม–กันยายน 2021",
    title: "Pledis และถ้วยแรกจาก Talk & Talk",
    category: "MILESTONE",
    summaryTh: [
      "วันที่ 16 สิงหาคม Pledis Entertainment ประกาศรับช่วงดูแลวงต่อจาก Off The Record จากนั้น fromis_9 ปล่อยซิงเกิลอัลบั้มพิเศษ Talk & Talk ในวันที่ 1 กันยายน",
      "Talk & Talk พาวงคว้ารางวัลอันดับหนึ่งในรายการเพลงเป็นครั้งแรกจาก The Show เมื่อวันที่ 7 กันยายน 2021",
    ],
    image: { src: firstWinImage, alt: "fromis_9 รับถ้วยรางวัลครั้งแรกจาก Talk & Talk ใน The Show วันที่ 7 กันยายน 2021", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_first_music_show_win_(September_7,_2021).png", credit: "The Show · ภาพบันทึกหมุดหมาย / Kpop Wiki", kind: "photo" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "midnight-guest-memento-box",
    year: 2022,
    date: "2022-06-27",
    dateLabel: "มกราคม–มิถุนายน 2022",
    title: "Midnight Guest สู่ From Our Memento Box",
    category: "RELEASES",
    summaryTh: [
      "วงเริ่มปี 2022 ด้วยมินิอัลบั้ม Midnight Guest ที่วางจำหน่ายวันที่ 17 มกราคม ก่อนคัมแบ็กฤดูร้อนกับ From Our Memento Box ในวันที่ 27 มิถุนายน",
      "Jiheon ที่พักกิจกรรมด้วยเหตุผลด้านสุขภาพในช่วงต้นปี กลับมาร่วมกิจกรรมอีกครั้งก่อนคัมแบ็กฤดูร้อน ทำให้วงกลับมาโปรโมตครบทีม",
    ],
    image: { src: mementoImage, alt: "ภาพคอนเซปต์ From Our Memento Box ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_From_Our_Memento_Box_group_concept_photo_3.png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 62%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "gyuri-lineup-change",
    year: 2022,
    date: "2022-07-31",
    dateLabel: "31 กรกฎาคม 2022",
    title: "การอำลาของ Gyuri และบทใหม่ของสมาชิก 8 คน",
    category: "CHAPTER",
    summaryTh: [
      "Pledis ประกาศเมื่อวันที่ 28 กรกฎาคมว่า Jang Gyuri จะสิ้นสุดการทำกิจกรรมกับ fromis_9 ในวันที่ 31 กรกฎาคม 2022",
      "วงจึงเดินหน้าต่อด้วยสมาชิก 8 คน ส่วน Gyuri ยังคงเป็นส่วนหนึ่งของเรื่องราวตั้งแต่วันก่อตั้งและผลงานในยุคสมาชิก 9 คน",
    ],
    image: { src: gyuriImage, alt: "Jang Gyuri ในภาพคอนเซปต์ From Our Memento Box ก่อนสิ้นสุดกิจกรรมกับวง", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Jang_Gyuri_From_Our_Memento_Box_concept_photo_1.png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "35% 35%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "love-from-first-concert",
    year: 2022,
    date: "2022-08-26",
    dateLabel: "สิงหาคม 2022",
    title: "คอนเสิร์ตเดี่ยวครั้งแรก Love From.",
    category: "ON STAGE",
    summaryTh: [
      "วันที่ 26 สิงหาคม fromis_9 ประกาศจัดคอนเสิร์ตเดี่ยวครั้งแรกในชื่อ 2022 fromis_9 Concert <Love From.> พร้อมแผนการแสดงที่โซลและโตเกียว",
      "การประกาศคอนเสิร์ตครั้งนี้เป็นอีกก้าวสำคัญของวงในช่วงที่เริ่มทำกิจกรรมด้วยสมาชิก 8 คน",
    ],
    image: { src: loveFromImage, alt: "โปสเตอร์คอนเสิร์ต Love From. ที่โซล ปี 2022", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Love_From_Seoul_concert_poster.png", credit: "ภาพทางการ / Kpop Wiki", kind: "poster", objectPosition: "50% 12%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "unlock-my-world",
    year: 2023,
    date: "2023-06-05",
    dateLabel: "5 มิถุนายน 2023",
    title: "อัลบั้มเต็มชุดแรก Unlock My World",
    category: "FIRST ALBUM",
    summaryTh: [
      "fromis_9 ปล่อยอัลบั้มเต็มชุดแรก Unlock My World เมื่อวันที่ 5 มิถุนายน 2023 เป็นอีกหมุดหมายสำคัญของวง",
      "ก่อนหน้านั้นในเดือนมกราคม วงเปิดเผยดีไซน์แท่งไฟอย่างเป็นทางการสำหรับแฟน ๆ",
    ],
    image: { src: unlockMyWorldImage, alt: "ปกดิจิทัลอัลบั้มเต็มชุดแรก Unlock My World ของ fromis_9", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Unlock_My_World_digital_cover_album_art.png", credit: "Unlock My World · ปกอัลบั้ม / Kpop Wiki", kind: "artwork" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "supersonic",
    year: 2024,
    date: "2024-08-12",
    dateLabel: "12 สิงหาคม 2024",
    title: "คัมแบ็กฤดูร้อนกับ Supersonic",
    category: "RELEASE",
    summaryTh: [
      "fromis_9 กลับมาพร้อมซิงเกิลอัลบั้มชุดที่สาม Supersonic ที่วางจำหน่ายวันที่ 12 สิงหาคม 2024",
      "อัลบั้มนี้เป็นผลงานในช่วงท้ายของการทำกิจกรรมภายใต้ Pledis Entertainment ก่อนการเปลี่ยนผ่านในปลายปี",
    ],
    image: { src: supersonicImage, alt: "ภาพโปรโมตยุค Supersonic จาก Melon ปี 2024", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Supersonic_Melon_exclusive_photo_1.png", credit: "ภาพทางการ / Kpop Wiki", kind: "photo", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "from-pledis-contracts",
    year: 2024,
    date: "2024-12-31",
    dateLabel: "ธันวาคม 2024",
    title: "From และการสิ้นสุดสัญญากับ Pledis",
    category: "TRANSITION",
    summaryTh: [
      "fromis_9 ปล่อยเพลงพิเศษ From เป็นของขวัญให้แฟน ๆ เมื่อวันที่ 23 ธันวาคม 2024",
      "Pledis ประกาศว่าสมาชิกตัดสินใจไม่ต่อสัญญา โดยสัญญากับค่ายสิ้นสุดลงวันที่ 31 ธันวาคม ก่อนวงเข้าสู่บทใหม่ในปีถัดมา",
    ],
    image: { src: fromImage, alt: "ปกดิจิทัลซิงเกิล From ปี 2024", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_From_digital_cover.png", credit: "ภาพทางการ / Kpop Wiki", kind: "artwork", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "asnd-five-member-chapter",
    year: 2025,
    date: "2025-03-26",
    dateLabel: "มกราคม–มีนาคม 2025",
    title: "บทใหม่ของสมาชิก 5 คนกับ ASND",
    category: "NEW CHAPTER",
    summaryTh: [
      "วันที่ 26 มกราคม 2025 ASND ประกาศว่า Hayoung, Jiwon, Chaeyoung, Nagyung และ Jiheon เซ็นสัญญากับค่าย เพื่อเดินหน้าร่วมกันด้วยสมาชิก 5 คน",
      "วันที่ 26 มีนาคม ASND ยืนยันว่าได้รับสิทธิ์เครื่องหมายการค้าชื่อ fromis_9 พร้อมเผยภาพโปรไฟล์ใหม่ของสมาชิกทั้งห้า",
    ],
    image: { src: fromOur20sImage, alt: "ปก From Our 20's ผลงานยุคสมาชิก 5 คนภายใต้ ASND", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_From_Our_20%27s_online_cover.png", credit: "ภาพทางการ / Kpop Wiki", kind: "artwork", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "from-our-20s",
    year: 2025,
    date: "2025-06-25",
    dateLabel: "25 มิถุนายน 2025",
    title: "คัมแบ็กในบทใหม่กับ From Our 20's",
    category: "RELEASE",
    summaryTh: [
      "fromis_9 กลับมาพร้อมมินิอัลบั้มชุดที่หก From Our 20's ในวันที่ 25 มิถุนายน 2025",
      "อัลบั้มนี้เป็นการคัมแบ็กครั้งแรกด้วยสมาชิก 5 คนภายใต้ ASND หลังการเปลี่ยนผ่านจากค่ายเดิม",
    ],
    image: { src: fromOur20sImage, alt: "ปกดิจิทัลมินิอัลบั้ม From Our 20's ของ fromis_9", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_From_Our_20%27s_online_cover.png", credit: "From Our 20's · ปกอัลบั้ม / Kpop Wiki", kind: "artwork" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "now-tomorrow-world-tour",
    year: 2025,
    date: "2025-08-08",
    dateLabel: "8 สิงหาคม 2025",
    title: "เวิลด์ทัวร์ครั้งแรก NOW TOMORROW.",
    category: "ON STAGE",
    summaryTh: [
      "2025 fromis_9 World Tour [Now Tomorrow.] เป็นเวิลด์ทัวร์ครั้งแรกของวง โดยเปิดทัวร์ที่ Jangchung Arena ในโซลเมื่อวันที่ 8 สิงหาคม 2025",
      "ทัวร์พาวงไปพบแฟน ๆ ในสหรัฐอเมริกา ญี่ปุ่น ไต้หวัน และฮ่องกง ก่อนปิดท้ายด้วยการแสดงที่โซลช่วงต้นปี 2026",
    ],
    image: { src: nowTomorrowImage, alt: "โปสเตอร์ทางการ NOW TOMORROW. IN SEOUL ปี 2025 พร้อมสมาชิก fromis_9 ทั้ง 5 คน", sourceUrl: "https://fromis9.fanpla.jp/news/detail/48965", credit: "NOW TOMORROW. · Official flover Japan", kind: "poster", objectPosition: "50% 28%" },
    sourceUrls: [historyPrimarySource, worldTourSource],
  },
  {
    id: "japanese-debut",
    year: 2026,
    date: "2026-04-01",
    dateLabel: "1 เมษายน 2026",
    title: "เดบิวต์ญี่ปุ่นกับ Like You Better (Japanese Ver.)",
    category: "DEBUT",
    summaryTh: [
      "fromis_9 เดบิวต์ในญี่ปุ่นอย่างเป็นทางการด้วย EP Like You Better (Japanese Ver.) เมื่อวันที่ 1 เมษายน 2026",
      "การเดบิวต์ครั้งนี้เกิดขึ้นหลังแผนกิจกรรมญี่ปุ่นในปี 2020 ต้องเลื่อนออกไปจากสถานการณ์ COVID-19",
    ],
    image: { src: japanImage, alt: "ปก Like You Better (Japanese Ver.) รุ่น Regular Edition", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Like_You_Better_(Japanese_Ver.)_album_cover_(Regular_Edition).png", credit: "ภาพทางการ / Kpop Wiki", kind: "artwork", objectPosition: "50% 50%" },
    sourceUrls: [historyPrimarySource],
  },
  {
    id: "glow-me",
    year: 2026,
    date: "2026-07-21",
    dateLabel: "21 กรกฎาคม 2026",
    title: "อัลบั้มเต็มชุดที่สอง Glow ME",
    category: "SECOND ALBUM",
    summaryTh: [
      "fromis_9 ปล่อยอัลบั้มเต็มชุดที่สอง Glow ME เมื่อวันที่ 21 กรกฎาคม 2026 โดยมี Vitamin ME เป็นเพลงไตเติล",
      "อัลบั้มนี้สานต่อบทสมาชิก 5 คนภายใต้ ASND หลังมินิอัลบั้ม From Our 20's",
    ],
    image: { src: glowMeImage, alt: "ภาพคอนเซปต์สมาชิก fromis_9 ทั้ง 5 คนสำหรับอัลบั้ม Glow ME", sourceUrl: "https://kpop.fandom.com/wiki/File:Fromis_9_Glow_Me_group_concept_photo_(2).png", credit: "Glow ME · ภาพคอนเซปต์ / Kpop Wiki", kind: "photo", objectPosition: "50% 10%" },
    sourceUrls: [historyPrimarySource, glowMeSource],
  },
  {
    id: "tomorrow-glow-asia-tour",
    year: 2026,
    date: "2026-09-11",
    dateLabel: "กรกฎาคม–กันยายน 2026",
    title: "บทต่อไปบนเวทีเอเชียกับ TOMORROW GLOW.",
    category: "ON STAGE",
    summaryTh: [
      "วันที่ 29 กรกฎาคม fromis_9 ประกาศเอเชียทัวร์ปี 2026 ในชื่อ TOMORROW GLOW. ต่อจากเวิลด์ทัวร์ NOW TOMORROW.",
      "ประกาศวันที่ 11 กันยายนระบุสามจุดหมายแรก ได้แก่ ไทเป โตเกียว และฮ่องกง พร้อมแจ้งว่าจะประกาศเมืองอื่นเพิ่มเติมในภายหลัง",
    ],
    image: { src: tomorrowGlowImage, alt: "โปสเตอร์ประกาศเอเชียทัวร์ TOMORROW GLOW. ของ fromis_9 สำหรับการเปิดทัวร์ที่โซล", sourceUrl: asiaTourSource, credit: "TOMORROW GLOW. · โปสเตอร์ประกาศทัวร์ / Soompi", kind: "poster", objectPosition: "50% 65%" },
    sourceUrls: [historyPrimarySource, asiaTourSource],
  },
];

export function getHistoryTimeline(entries: readonly HistoryEntry[] = historyEntries) {
  return [...entries].sort((a, b) => a.date.localeCompare(b.date));
}

export function getCurrentHistoryEntry(entries: readonly HistoryEntry[] = historyEntries) {
  return getHistoryTimeline(entries).at(-1);
}
