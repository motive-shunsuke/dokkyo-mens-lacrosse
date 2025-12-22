"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

export const Hero = () => {
    const [openingFinished, setOpeningFinished] = useState(false);

    useEffect(() => {
        // Sequence timer
        // 0s: Start
        // 0.2s: Bolt hits bottom
        // 0.3s: Logo appears
        // 2.5s: Finish
        const timer = setTimeout(() => {
            setOpeningFinished(true);
        }, 2800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <AnimatePresence>
                {!openingFinished && (
                    <motion.div
                        className={styles.openingOverlay}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            className={styles.openingBolt}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: [0, 1, 1, 0] }}
                            transition={{ duration: 0.4, times: [0, 0.4, 0.5, 1] }}
                        />
                        <motion.div
                            className={styles.openingLogo}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.2, type: 'spring' }}
                        >
                            DOKKYO<br />BLITZ
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={styles.flash} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span>DOKKYO MEN'S LACROSSE</span>
                    覇氣
                </motion.h1>
            </div>

            <div className={styles.scrollDown}>SCROLL DOWN</div>
        </section>
    );
};
