"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const NAV_ITEMS = [
    { label: 'Top', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Member', href: '/member' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Blog', href: '/blog' },
    { label: 'Recruit', href: '/recruit', cta: true },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link href="/" className={styles.logo}>
                    DOKKYO <span>BLITZ</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.navDesktop}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`${styles.navLink} ${item.cta ? styles.cta : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={styles.navLink}
                            style={{ fontSize: '1.5rem' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};
