import { ContentRail } from "../layout/ContentRail";
import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import { RainbowVitaminStrip } from "../layout/RainbowVitaminStrip";
import { Seo } from "../seo/Seo";
import styles from "./NewsRequestState.module.css";

export function NewsRequestState({ error = false, retry }: { error?: boolean; retry: () => void }) {
  return (
    <>
      <Seo title="News | fromis_9 Thailand" description="ติดตามข่าวสารของ fromis_9" />
      <Navbar activeRoute="news" mobileHome />
      <main>
        <ContentRail className={styles.state}>
          <h1>News</h1>
          <p role={error ? "alert" : "status"}>
            {error ? "ไม่สามารถโหลดข่าวได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง" : "กำลังโหลดข่าว…"}
          </p>
          {error ? <button className={styles.retry} type="button" onClick={retry}>ลองใหม่อีกครั้ง</button> : null}
        </ContentRail>
      </main>
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
