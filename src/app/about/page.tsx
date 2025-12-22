import styles from './About.module.css';
import teamInfo from '@/data/teamInfo.json';

export const metadata = {
    title: 'ABOUT | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部について。理念、スローガン、チーム紹介。',
};

export default function AboutPage() {
    return (
        <div>
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>ABOUT US</h1>
            </div>

            {/* Philosophy Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>PHILOSOPHY</h2>
                    <div className={styles.philosophyContainer}>
                        <div className={styles.kanjiMain}>{teamInfo.philosophy || "相思相愛"}</div>
                        <p className={styles.philosophyDesc}>
                            「相思相愛」とは、チーム内でお互いを尊重し、信頼し合うこと。<br />
                            そして、地域や大学、応援してくださる全ての方々から愛されるチームを目指すことです。<br />
                            勝利だけでなく、人としての成長と深い絆を大切にしています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Slogan Section */}
            <section className={styles.section} style={{ background: '#050208' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>SLOGAN</h2>
                    <div className={styles.sloganContainer}>
                        <div className={styles.kanjiMain} style={{ color: 'var(--color-accent)' }}>
                            {teamInfo.slogan?.split('　')[0] || "覇氣"}
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#fff' }}>
                            {teamInfo.slogan?.split('意味：')[1] || "圧倒する、空気を変える、強い主体性を持つ"}
                        </p>
                        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--color-primary)', borderRadius: '4px' }}>
                            GOAL: {teamInfo.goal || "Final4"}
                        </div>
                    </div>
                </div>
            </section>

            {/* Message Section (Placeholder) */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>MESSAGE</h2>
                    <div className={styles.messageGrid}>
                        <div className={styles.messageCard}>
                            <div className={styles.messageRole}>CAPTAIN</div>
                            <div className={styles.messageName}>関根 駿</div>
                            <div className={styles.messageBody}>
                                <p>
                                    2026年度主将を務めます、関根です。
                                    今年のチームは「覇氣」をスローガンに掲げ、Final4進出という高い目標に向かって日々邁進しています。
                                </p>
                                <p style={{ marginTop: '1rem', color: '#666' }}>
                                    [ここに主将からの熱いメッセージが入ります。これまでの経験、今年のチームへの想い、新入生への言葉など。テキストは現在準備中です。]
                                </p>
                            </div>
                        </div>

                        <div className={styles.messageCard}>
                            <div className={styles.messageRole}>HEAD COACH</div>
                            <div className={styles.messageName}>[COACH NAME]</div>
                            <div className={styles.messageBody}>
                                <p style={{ color: '#666' }}>
                                    [ここにヘッドコーチからのメッセージが入ります。チームの育成方針、ラクロスの楽しさ、学生たちへの期待などについて語られます。テキストは現在準備中です。]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Section (Placeholder) */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>ORIGIN</h2>
                    <div className={styles.originContent}>
                        <p className={styles.originText}>
                            なぜ「BLITZ」なのか？<br />
                            その名の通り、稲妻のような衝撃とスピードでフィールドを駆け抜けるスタイルを象徴しています。<br />
                            <span style={{ color: '#666', fontSize: '0.9rem' }}>
                                [チーム名の由来や歴史についての詳細テキストが入ります。創部からの歴史や、BLITZという名前に込められた先輩たちの想いなどを掲載します。]
                            </span>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
