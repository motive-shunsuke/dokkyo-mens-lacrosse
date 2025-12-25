"use client";
import styles from './Recruit.module.css';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const REASONS = [
    { title: "スタートラインが同じ", desc: "ラクロスは大学から始めるスポーツ。経験者・未経験者の差がありません。" },
    { title: "日本一を本気で目指す環境", desc: "高い目標に向かって切磋琢磨する日々が、あなたを成長させます。" },
    { title: "一生の仲間", desc: "4年間を共にする仲間は、卒業後も続く特別な絆で結ばれます。" }
];

const QA_LIST = [
    { q: "勉強との両立はできますか？", a: "可能です。多くの部員が学業と両立しており、テスト期間のオフや授業優先のスケジュール管理を徹底しています。" },
    { q: "バイトはできますか？", a: "はい、可能です。練習は主に朝行われるため、放課後の時間を有効に活用して多くの部員がアルバイトをしています。" },
    { q: "就職活動には有利ですか？", a: "非常に有利です。BLITZでは学生が主体となってチーム運営を行うため、論理的思考力や問題解決能力が磨かれます。その経験は高く評価され、毎年多くの部員が超有名企業・大手企業への内定を獲得しています。" },
    { q: "なぜ大学でラクロスを始めるのですか？", a: "「究極の達成感」を味わえるからです。全員が同じスタートラインから日本一を目指す環境は、他では得られない成長と熱狂を約束します。新しい自分に出会いたい人に最高のスポーツです！" },
    { q: "お金はどれくらいかかりますか？", a: "初期費用として防具代等がかかりますが、OB会からの支援や、部内での譲渡制度など、学生の負担を軽減するサポート体制が整っています。" }
];

const QAItem = ({ q, a }: { q: string, a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.qaItem}>
            <div className={styles.question} onClick={() => setOpen(!open)}>
                <span>Q. {q}</span>
                {open ? <ChevronUp /> : <ChevronDown />}
            </div>
            {open && <p className={styles.answer}>A. {a}</p>}
        </div>
    );
};

export default function RecruitPage() {
    return (
        <div>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    BE A HERO.
                </motion.h1>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>WHY LACROSSE?</h2>
                    <div className={styles.reasonGrid}>
                        {REASONS.map((r, i) => (
                            <motion.div
                                key={i}
                                className={styles.reasonCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <h3>0{i + 1}. {r.title}</h3>
                                <p>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section} style={{ background: '#111' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className={styles.sectionTitle}>Q&A</h2>
                    {QA_LIST.map((qa, i) => (
                        <QAItem key={i} {...qa} />
                    ))}
                </div>
            </section>

            <section className={styles.section} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>JOIN US</h2>
                <p style={{ marginBottom: '2rem' }}>まずは体験会へお越しください。</p>
                <button className="btn-cta">
                    体験会に申し込む
                </button>
            </section>
        </div>
    );
}
