export interface BlogPost {
    title: string;
    link: string;
    date: string;
    tag: string;
    excerpt?: string;
    image?: string;
}

export async function getLatestAmebaPosts(limit: number = 3): Promise<BlogPost[]> {
    try {
        const res = await fetch('https://rssblog.ameba.jp/dokkyo-mens-lacrosse/rss20.xml', {
            next: { revalidate: 3600 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const xml = await res.text();

        const items = xml.split('<item>').slice(1, limit + 1);

        return items.map(item => {
            const titleMatch = item.match(/<title>(.*?)<\/title>/);
            const linkMatch = item.match(/<link>(.*?)<\/link>/);
            const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
            const descMatch = item.match(/<description>([\s\S]*?)<\/description>/);

            const title = titleMatch ? titleMatch[1].replace('<![CDATA[', '').replace(']]>', '') : '';
            const link = linkMatch ? linkMatch[1] : '';
            const pubDate = pubDateMatch ? pubDateMatch[1] : '';
            const description = descMatch ? descMatch[1].replace('<![CDATA[', '').replace(']]>', '') : '';

            // Format date: Sat, 11 Oct 2025 18:36:54 +0900 -> 2025.10.11
            const d = new Date(pubDate);
            const formattedDate = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;

            // Clean description to get excerpt
            const excerpt = description
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/\s+/g, ' ')    // Normalize whitespace
                .trim()
                .slice(0, 100) + '...';

            // Extract the first image URL from description
            // Ameba images usually look like <img src="...image.ameba.jp..." ...>
            const imageMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
            const image = imageMatch ? imageMatch[1] : '/images/topic-1.jpg'; // Fallback to placeholder if no image found

            // Determine tag based on title or just default to 'BLOG'
            let tag = 'BLOG';
            if (title.includes('試合結果')) tag = 'GAME';
            if (title.includes('部員紹介')) tag = 'MEMBER';
            if (title.includes('お知らせ')) tag = 'NEWS';

            return {
                title,
                link,
                date: formattedDate,
                tag,
                excerpt,
                image
            };
        });
    } catch (error) {
        console.error('Failed to fetch Ameba Blog:', error);
        return [];
    }
}
