"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import { useLoading } from '@/context/LoadingContext';

const backgroundImages = [
    '/images/hero-bg.jpg',
    '/images/insta-1.jpg',
    '/images/insta-2.jpg',
    '/images/insta-3.jpg',
    '/images/insta-4.jpg',
];

export const Hero = () => {
    const { isOpening, finishOpening, startLogoMove, isLogoMoving } = useLoading();
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [showSlideshow, setShowSlideshow] = useState(false);

    useEffect(() => {
        // Animation Timings
        // 0s: Lightning
        // 0.8s: Logo reveals
        // 2.3s: Logo starts moving to header
        // 3.3s: Animation finishes

        const moveTimer = setTimeout(() => {
            startLogoMove();
        }, 2000);

        const finishTimer = setTimeout(() => {
            finishOpening();
        }, 3000);

        return () => {
            clearTimeout(moveTimer);
            clearTimeout(finishTimer);
        };
    }, [startLogoMove, finishOpening]);

    // Start slideshow after animation finishes
    useEffect(() => {
        const slideshowTimer = setTimeout(() => {
            setShowSlideshow(true);
        }, 3000);
        return () => clearTimeout(slideshowTimer);
    }, []);

    // Background slideshow - change every 4 seconds
    useEffect(() => {
        if (!showSlideshow) return;

        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [showSlideshow]);

    return (
        <section className={styles.hero}>
            {/* Background Slideshow */}
            <div className={styles.backgroundSlideshow}>
                {backgroundImages.map((img, index) => (
                    <div
                        key={img}
                        className={`${styles.backgroundImage} ${index === currentBgIndex && showSlideshow ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>
            <AnimatePresence>
                {isOpening && (
                    <motion.div
                        className={styles.openingOverlay}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className={styles.openingBolt}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 0.8, times: [0, 0.3, 0.5, 1] }}
                        >
                            <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
                                <motion.path
                                    d="M50,0 L45,200 L55,200 L48,400 L58,400 L52,600 L60,600 L50,1000"
                                    stroke="url(#lightning-gradient)"
                                    strokeWidth="4"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.3, ease: "easeIn" }}
                                />
                                <defs>
                                    <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#fff" />
                                        <stop offset="50%" stopColor="#fbbf24" />
                                        <stop offset="100%" stopColor="#fff" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>
                        <motion.div
                            className={styles.openingLogo}
                            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%', left: '50%', top: '50%' }}
                            animate={isLogoMoving ? {
                                left: 'max(2rem, calc((100vw - 1440px) / 2 + 2rem))',
                                top: '40px',
                                x: '0%',
                                y: '-50%',
                                scale: 0.12,
                                opacity: 1
                            } : {
                                opacity: 1,
                                scale: 1,
                                left: '50%',
                                top: '50%',
                                x: '-50%',
                                y: '-50%'
                            }}
                            transition={isLogoMoving ? {
                                duration: 1.2,
                                ease: [0.65, 0, 0.35, 1]
                            } : {
                                delay: 0.5,
                                duration: 0.3,
                                type: 'spring'
                            }}
                        >
                            <img src="/images/blitz-logo.png" alt="DOKKYO BLITZ" />
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
                    BLITZ
                </motion.h1>
                <motion.div
                    className={styles.tagline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className={styles.achievement}>関東一部リーグ所属</p>
                    <p className={styles.message}>
                        <span className={styles.messageLine}>実績も推薦も、高校までの過去なんて関係ない。</span>
                        <span className={styles.messageLine}>大学から始めて日本代表さえ狙えるこの唯一のスポーツにおいて、必要なのは経験ではなく、サークルじゃ燃え尽きない「その熱量」だけ。</span>
                        <span className={styles.messageLine}>すべてを捨ててゼロになり、本気で日本一を狙わないか。</span>
                    </p>
                </motion.div>
            </div>

            <div className={styles.scrollDown}>SCROLL DOWN</div>
        </section>
    );
};
