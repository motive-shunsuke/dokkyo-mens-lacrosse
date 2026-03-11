"use client";

import { motion } from 'framer-motion';
import styles from './Ob.module.css';

export default function ObPage() {
    return (
        <div>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    OB INTRODUCTION
                </motion.h1>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.profileCard}>
                        <div className={styles.profileHeader}>
                            <div className={styles.profileImageWrapper}>
                                <div className={styles.profileImagePlaceholder}>
                                    <span>GM</span>
                                </div>
                            </div>
                            <div className={styles.profileInfo}>
                                <div className={styles.profileRole}>GM／ゼネラルマネージャー</div>
                                <div className={styles.profileCompany}>izul consulting株式会社 代表取締役</div>
                                <h2 className={styles.profileName}>星川 陽祐</h2>
                                <p className={styles.profileNameEn}>Hoshikawa Yousuke</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.messageSection}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.h2
                        className={styles.messageTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        『獨協ラクロス部で得られる素晴らしい経験とは』
                    </motion.h2>

                    <motion.div
                        className={styles.messageBody}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            1学年から早稲田、慶應を含む東京六大学と対等に戦うことができる環境で
                            勝利を重ねることで自己肯定感を高める事が出来ます。
                        </p>

                        <p>
                            卒業後の人生の中で、自己肯定感を高め社会へ出ることが、人生の豊かさに
                            つながるのではないかと考えています。
                            <br />
                            理由は、私自身2004年に2部から1部に昇格した経験から
                            人生の豊かさに繋がりました。
                        </p>

                        <p>
                            勝利を掴む事で、諦めない気持ち、努力の大切さ、勝ち切る粘り強さ、
                            考え抜く力などを得る事ができました。
                        </p>

                        <p>
                            また、同志である後輩の中でも起業家としてそれなりの成功を掴んだ後輩、1部
                            上場企業の社長にあと数年で上り詰めようとしている後輩がいます。
                        </p>

                        <p className={styles.highlight}>
                            君たちの先輩であり、2人とも1部リーグで活躍した先輩です。
                            <br />
                            獨協大学は現在、1部で7期目を迎えています。
                        </p>

                        <p className={styles.emphasis}>
                            そんな素晴らしい環境の中で今年1年生の力が必要です。
                        </p>

                        <p>
                            我々は他大学に比べ人数が少ない中で戦い、勝利を掴んできました、
                            多くのやる気のある選手がいれば更に1、2勝を掴めるのではないかと考えています。
                        </p>

                        <p>
                            部活をしていた方に限定せず、早慶六大学に勝ちたいという、モチベーションの
                            ある方ならどなたでもwelcomeです。
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
