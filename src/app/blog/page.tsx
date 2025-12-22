export const metadata = {
    title: 'BLOG | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 ブログ・活動報告',
};

export default function BlogPage() {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-oswald)', marginBottom: '1rem' }}>BLOG</h1>
            <p style={{ color: '#aaa', fontSize: '1.2rem' }}>記事の準備中です。更新をお待ちください。</p>
        </div>
    );
}
