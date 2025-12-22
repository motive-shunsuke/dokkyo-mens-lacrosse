"use client";

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Hero.module.css';

export const Hero = () => {
    const controls = useAnimation();
    const [flash, setFlash] = useState(false);

    // Random lightning flash effect
    useEffect(() => {
        const triggerFlash = async () => {
            setFlash(true);
            setTimeout(() => setFlash(false), 50); // Short flash

            // Schedule next flash
            const delay = Math.random() * 5000 + 2000;
            setTimeout(triggerFlash, delay);
        };

        triggerFlash();
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />

            {/* Lightning Flash Overlay */}
            <div
                className={styles.lightning}
                style={{ opacity: flash ? 0.15 : 0 }}
            />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <motion.h1 className={styles.title}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        DOKKYO
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ color: 'var(--color-accent)' }}
                    >
                        BLITZ
                    </motion.div>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    MEN'S LACROSSE TEAM
                </motion.p>
            </motion.div>

            <div className={styles.scrollDown}>SCROLL DOWN</div>
        </section>
    );
};
