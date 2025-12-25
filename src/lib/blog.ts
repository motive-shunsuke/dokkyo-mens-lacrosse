export interface BlogPost {
    title: string;
    link: string;
    date: string;
    tag: string;
    image?: string;
}

export async function getLatestAmebaPosts(limit: number = 3): Promise<BlogPost[]> {
    try {
        const res = await fetch('https://rssblog.ameba.jp/dokkyo-mens-lacrosse/rss20.xml', { next: { revalidate: 3600 } });
        const xml = await res.text();

        const items = xml.split('<item>').slice(1, limit + 1);

        return items.map(item => {
            const title = item.match(/<title>(.*?)<\/title>/)?.[1] || '';
            const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
            const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';

            // Format date: Sat, 11 Oct 2025 18:36:54 +0900 -> 2025.10.11
            const d = new Date(pubDate);
            const formattedDate = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;

            // Determine tag based on title or just default to 'BLOG'
            let tag = 'BLOG';
            if (title.includes('試合結果')) tag = 'GAME';
            if (title.includes('部員紹介')) tag = 'MEMBER';
            if (title.includes('お知らせ')) tag = 'NEWS';

            return {
                title: title.replace('<![CDATA[', '').replace(']]>', ''),
                link,
                date: formattedDate,
                tag,
                image: '/images/topic-1.jpg' // Default image if none found
            };
        });
    } catch (error) {
        console.error('Failed to fetch Ameba Blog:', error);
        return [];
    }
}
