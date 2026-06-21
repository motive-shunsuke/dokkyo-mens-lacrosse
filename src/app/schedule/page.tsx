import teamInfo from '@/data/teamInfo.json';

export const metadata = {
    title: 'SCHEDULE | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 スケジュール・試合結果',
};

type LeagueGame = {
    game: number;
    date: string | null;
    opponent: string;
    time: string | null;
    venue: string | null;
    status: string;
};

export default function SchedulePage() {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-oswald)', marginBottom: '2rem', textAlign: 'center' }}>SCHEDULE &amp; RESULTS</h1>

            {/* LEAGUE SCHEDULE */}
            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ color: 'var(--color-accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                    2026 LEAGUE SCHEDULE
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                    {(teamInfo.leagueSchedule as LeagueGame[]).map((game) => (
                        <div
                            key={game.game}
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: game.status === '確定' ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '10px',
                                padding: '1.25rem 1.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Game number badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                fontSize: '0.75rem',
                                color: '#666',
                                fontFamily: 'var(--font-oswald)',
                                letterSpacing: '0.05em',
                            }}>
                                GAME {game.game}
                            </div>

                            {/* Status badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                marginBottom: '0.75rem',
                                background: game.status === '確定' ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: game.status === '確定' ? '#000' : '#888',
                            }}>
                                {game.status === '確定' ? '✓ 確定' : '時間・場所 未定'}
                            </div>

                            {/* Opponent */}
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-oswald)', letterSpacing: '0.02em' }}>
                                vs {game.opponent}
                            </div>

                            {/* Date */}
                            <div style={{ fontSize: '0.95rem', color: '#ccc', marginBottom: '0.3rem' }}>
                                📅 {game.date ?? '日時未定'}
                            </div>

                            {/* Time */}
                            {game.time && (
                                <div style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '0.3rem' }}>
                                    🕑 {game.time}
                                </div>
                            )}

                            {/* Venue */}
                            {game.venue && (
                                <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem', lineHeight: 1.4 }}>
                                    📍 {game.venue}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* LAST SEASON RESULTS */}
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
