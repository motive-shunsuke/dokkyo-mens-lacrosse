import styles from './Blog.module.css';
import { getLatestAmebaPosts } from '@/lib/blog';

export const metadata = {
    title: 'BLOG & NEWS | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 ブログ・活動報告。最新の試合結果やニュース、部員の日常を公開中。',
};

export default async function BlogPage() {
    const posts = await getLatestAmebaPosts(15);

    return (
        <div className={styles.blogContainer}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className={styles.title}>BLOG & NEWS</h1>
                    <p className={styles.subtitle}>アメーバブログで発信中の最新情報・活動報告</p>
                </div>

                <div className={styles.postsGrid}>
                    {posts.map((post, i) => (
                        <a
                            href={post.link}
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.postCard}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className={styles.postImage}
                            />
                            <div className={styles.postContent}>
                                <div className={styles.postMeta}>
                                    <span className={styles.postDate}>{post.date}</span>
                                    <span className={styles.postCategory}>{post.tag}</span>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a
                        href="https://ameblo.jp/dokkyo-mens-lacrosse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                    >
                        アメブロで全記事を見る
                    </a>
                </div>
            </div>
        </div>
    );
}
