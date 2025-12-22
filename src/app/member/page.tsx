import { MemberGrid } from '@/components/MemberGrid';
import membersData from '@/data/members.json';

export const metadata = {
    title: 'MEMBERS | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 部員紹介',
};

export default function MemberPage() {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-oswald)', marginBottom: '0.5rem' }}>
                    MEMBERS
                </h1>
                <p style={{ color: '#aaa' }}>チームを支える選手・スタッフの紹介</p>
            </header>
            <MemberGrid members={membersData} />
        </div>
    );
}
