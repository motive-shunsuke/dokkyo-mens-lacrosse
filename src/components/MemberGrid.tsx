"use client";

import { useState, useMemo } from 'react';
import { MemberCard } from './MemberCard';
import styles from './MemberGrid.module.css';

interface Member {
    name: string;
    grade: number;
    department: string;
    highSchool: string;
    position: string;
    message: string;
}

export const MemberGrid = ({ members }: { members: Member[] }) => {
    const [selectedGrade, setSelectedGrade] = useState<number | 'ALL'>('ALL');

    // Extract unique positions for filter if needed, but keeping it simple with Grade for now as per plan
    // Plan mentioned Position filter too on plan, let's add it.
    const [selectedPos, setSelectedPos] = useState<string>('ALL');

    const positions = useMemo(() => {
        const posSet = new Set(members.map(m => m.position));
        return Array.from(posSet).sort();
    }, [members]);

    const grades = Array.from(new Set(members.map(m => m.grade))).sort((a, b) => b - a);

    const filteredMembers = useMemo(() => {
        return members.filter(m => {
            const gradeMatch = selectedGrade === 'ALL' || m.grade === selectedGrade;
            // Position filter: Contains search (e.g. "SSDM/FO" should match "FO" or specific)
            // Let's do exact match first or "Includes"
            const posMatch = selectedPos === 'ALL' || m.position.includes(selectedPos) || (selectedPos === 'STF' && ['MG', 'TR', 'AS'].includes(m.position));
            // Simplified logic: Direct match if in list.
            // Actually `positions` list has "SSDM/FO", "LDF", etc.
            // Let's verify data content: "SSDM/FO", "LDF", "SSDM", "FO", "MF", "TR", "MG", "AS".
            // If filter is "FO", "SSDM/FO" should theoretically show?
            // For now, I'll use the exact strings found in data for the filter buttons, plus a manual "Staff" group maybe?
            return gradeMatch && (selectedPos === 'ALL' || m.position === selectedPos);
        });
    }, [members, selectedGrade, selectedPos]);

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>GRADE:</span>
                    <button
                        className={`${styles.btnFilter} ${selectedGrade === 'ALL' ? styles.active : ''}`}
                        onClick={() => setSelectedGrade('ALL')}
                    >
                        ALL
                    </button>
                    {grades.map(g => (
                        <button
                            key={g}
                            className={`${styles.btnFilter} ${selectedGrade === g ? styles.active : ''}`}
                            onClick={() => setSelectedGrade(g)}
                        >
                            {g}
                        </button>
                    ))}
                </div>

                <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>POSITION:</span>
                    <button
                        className={`${styles.btnFilter} ${selectedPos === 'ALL' ? styles.active : ''}`}
                        onClick={() => setSelectedPos('ALL')}
                    >
                        ALL
                    </button>
                    {positions.map(p => (
                        <button
                            key={p}
                            className={`${styles.btnFilter} ${selectedPos === p ? styles.active : ''}`}
                            onClick={() => setSelectedPos(p)}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {filteredMembers.map((member, idx) => (
                    <MemberCard key={`${member.name}-${idx}`} member={member} />
                ))}
            </div>
        </div>
    );
};
