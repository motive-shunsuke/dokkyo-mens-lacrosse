import teamInfo from '@/data/teamInfo.json';
import Link from 'next/link';

export const metadata = {
    title: 'SCHEDULE | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 スケジュール・試合結果',
};

export default function SchedulePage() {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-oswald)', marginBottom: '2rem', textAlign: 'center' }}>SCHEDULE & RESULTS</h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: 'var(--color-accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    LAST SEASON RESULTS
                </h2>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1rem' }}>
                    {teamInfo.results.map((res, i) => (
                        <div key={i} style={{ padding: '0.5rem', borderBottom: i < teamInfo.results.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                            {res}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 style={{ color: 'var(--color-accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    SEASON SCHEDULE
                </h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ background: '#222', color: '#fff' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>MONTH</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>EVENT</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>OTHER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamInfo.schedule.map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #333' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.month}</td>
                                    <td style={{ padding: '1rem' }}>{row.event}</td>
                                    <td style={{ padding: '1rem', color: '#aaa' }}>{row.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
