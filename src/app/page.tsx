import { Hero } from "@/components/Hero";
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      {/* LATEST TOPICS */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>LATEST <span>TOPICS</span></h2>
          <div className={styles.topicsGrid}>
            {[
              { date: '2025.12.10', title: '【試合結果】関東1部リーグ 5位タイ獲得', tag: 'GAME' },
              { date: '2025.11.25', title: '新チーム始動！2026年度スローガンは「覇氣」', tag: 'NEWS' },
              { date: '2025.11.01', title: '【新入生向け】体験会の日程が決まりました', tag: 'RECRUIT' },
            ].map((topic, i) => (
              <Link href="/blog" key={i} className={styles.topicCard}>
                <div className={styles.topicImage} style={{ background: `url(/images/topic-${i + 1}.jpg) center/cover` }} />
                <div className={styles.topicContent}>
                  <div className={styles.topicDate}>{topic.date}</div>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <span className={styles.topicTag}>{topic.tag}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* CONCEPT - OUR PHILOSOPHY */}
      <section className={styles.conceptSection}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>OUR <span>PHILOSOPHY</span></h2>
          <div className={styles.conceptText}>覇氣</div>
          <div className={styles.conceptMain}>
            圧倒する、空気を変える、強い主体性を持つ。
          </div>
          <p className={styles.conceptDescription}>
            私たちは「覇氣」をスローガンに掲げ、フィールド内外で圧倒的な存在感を示します。<br />
            試合では相手を圧倒し、チームの空気を変え、一人ひとりが強い主体性を持って行動する。<br />
            それが獨協大学男子ラクロス部BLITZの誇りです。
          </p>
        </div>
      </section>

      {/* OFFICIAL SNS */}
      <section className={styles.section}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>OFFICIAL <span>SNS</span></h2>
          <div className={styles.snsGrid}>
            {/* Instagram */}
            <a href="https://www.instagram.com/dokkyomlax?igsh=c2prb2EwdThtNnVo&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <h3>INSTAGRAM</h3>
              <p>@dokkyomlax</p>
            </a>
            {/* Twitter (X) */}
            <a href="https://x.com/dokkyo_men_lax?s=21&t=PdKSOHTH7r38zAycVK9nVw" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)' }}>
              <h3>X (Twitter)</h3>
              <p>@dokkyo_men_lax</p>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@blitz.lax?_r=1&_t=ZS-92I0fG8EHpP" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: 'linear-gradient(135deg, #ff0050, #00f2ea)' }}>
              <h3>TikTok</h3>
              <p>@blitz.lax</p>
            </a>
          </div>
        </div>
      </section>

      {/* RECRUIT CTA */}
      <section className={`${styles.section} ${styles.joinSection}`}>
        <div className={`container ${styles.joinContent}`}>
          <h2 className={styles.joinHeading}>JOIN THE TEAM</h2>
          <p className={styles.joinDescription}>初心者から日本一へ。君の挑戦を待っている。</p>
          <Link href="/recruit" className="btn-cta">
            RECRUIT PAGE
          </Link>
        </div>
      </section>
    </>
  );
}
