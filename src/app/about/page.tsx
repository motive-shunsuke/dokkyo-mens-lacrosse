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

            {/* Coach Section */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>COACH INTRODUCTION</h2>
                    <div className={styles.messageGrid}>
                        {/* Kishi Head Coach */}
                        <div className={styles.messageCard}>
                            <div className={styles.messageHeader}>
                                <img src="/images/岸さん.jpg" alt="岸 ヘッドコーチ" className={styles.messageImage} />
                                <div className={styles.messageText}>
                                    <div className={styles.messageRole}>HEAD COACH</div>
                                    <h3 className={styles.messageName}>岸 啓之</h3>
                                </div>
                            </div>
                            <div className={styles.messageBody}>
                                <p>
                                    一橋大学出身。2021年より獨協大学男子ラクロス部のコーチに就任すると、その卓越した指導力でチームを変革。獨協大学を史上初の「Final4」進出へと導いた実績を持つ。
                                </p>
                                <p style={{ marginTop: '0.5rem' }}>
                                    その手腕はまさに名将。今シーズンもヘッドコーチとして指揮を執り、チームをさらなる高みへと導く。
                                </p>
                            </div>
                        </div>

                        {/* Soma Coach */}
                        <div className={styles.messageCard}>
                            <div className={styles.messageHeader}>
                                <img src="/images/相馬さん.jpg" alt="相馬 コーチ" className={styles.messageImage} />
                                <div className={styles.messageText}>
                                    <div className={styles.messageRole}>COACH</div>
                                    <h3 className={styles.messageName}>相馬 啓太</h3>
                                </div>
                            </div>
                            <div className={styles.messageBody}>
                                <p>
                                    2021年卒。獨協大学時代は主将として強力なリーダーシップを発揮し、関東ユースにも選出された実力者。
                                </p>
                                <p style={{ marginTop: '0.5rem' }}>
                                    現在は社会人クラブチーム「川崎ファルコンズ」に所属し、トップレベルで活躍中。現役選手としての高い技術と、主将として培った経験をチームに還元する。
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
