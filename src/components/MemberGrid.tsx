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

    // Main categories requested by user
    const categories = ['OF', 'MF', 'DF', 'G', 'PL', 'MG', 'TR'];

    // Mapping logic: Raw Position -> Category
    const getCategory = (pos: string) => {
        // Check for explicit matches first
        if (pos.includes('AT') || pos.includes('OF')) return 'OF';
        if (pos.includes('DF') || pos.includes('LDF')) return 'DF'; // LDF is Defense
        if (pos.includes('G')) return 'G';
        if (pos.includes('TR')) return 'TR';
        if (pos.includes('MG') || pos.includes('AS')) return 'MG'; // AS -> MG
        if (pos.includes('PL')) return 'PL';

        // Default/Remaining mappings
        // SSDM -> MF (Short Stick Defensive Midfielder)
        // FO -> MF (Face Off Midfielder)
        // MF -> MF
        return 'MF';
    };

    const positions = useMemo(() => {
        const posSet = new Set(members.map(m => m.position));
        return Array.from(posSet).sort();
    }, [members]);

    const grades = Array.from(new Set(members.map(m => m.grade))).sort((a, b) => b - a);

    const filteredMembers = useMemo(() => {
        return members.filter(m => {
            const gradeMatch = selectedGrade === 'ALL' || m.grade === selectedGrade;

            const memberCat = getCategory(m.position);
            const posMatch = selectedPos === 'ALL' || memberCat === selectedPos;

            return gradeMatch && posMatch;
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
                    <span className={styles.filterLabel}>POSITION</span>
                    <div className={styles.filterButtons}>
                        <button
                            className={`${styles.filterButton} ${selectedPos === 'ALL' ? styles.active : ''}`}
                            onClick={() => setSelectedPos('ALL')}
                        >
                            ALL
                        </button>
                        {categories.map(pos => (
                            <button
                                key={pos}
                                className={`${styles.filterButton} ${selectedPos === pos ? styles.active : ''}`}
                                onClick={() => setSelectedPos(pos)}
                            >
                                {pos}
                            </button>
                        ))}
                    </div>
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
