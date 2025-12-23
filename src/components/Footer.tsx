import Link from 'next/link';
import { Instagram, Twitter, Youtube } from 'lucide-react'; // Using Youtube as placeholder for TikTok if Lucide doesn't have it, or just Text. Lucide has generic Video maybe? Lucide has `Music2` or `Video`. I'll check.
// Lucide doesn't have TikTok icon by default. I'll use text or generic.
import styles from './Footer.module.css';
import teamInfo from '@/data/teamInfo.json';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h2>DOKKYO <span>BLITZ</span></h2>
                    <p className={styles.address}>
                        獨協大学男子ラクロス部<br />
                        埼玉県草加市学園町1-1
                    </p>
                    <div className={styles.social}>
                        {teamInfo.social.instagram && (
                            <a href={teamInfo.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Instagram />
                            </a>
                        )}
                        {teamInfo.social.twitter && (
                            <a href={teamInfo.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Twitter />
                            </a>
                        )}
                        {/* TikTok usually requires custom SVG or separate lib, omitting icon for simple link */}
                        {teamInfo.social.tiktok && (
                            <a href={teamInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                TikTok
                            </a>
                        )}
                    </div>
                </div>

                <div className={styles.links}>
                    <h3>MENU</h3>
                    <Link href="/about">About</Link>
                    <Link href="/member">Member</Link>
                    <Link href="/schedule">Schedule</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.links}>
                    <h3>RECRUIT</h3>
                    <Link href="/recruit">新入生の方へ</Link>
                    <Link href="/recruit#faq">よくある質問</Link>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Dokkyo University Men's Lacrosse Club BLITZ. All Rights Reserved.
            </div>
        </footer>
    );
};
