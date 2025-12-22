import styles from './MemberCard.module.css';

interface Member {
    name: string;
    grade: number;
    department: string;
    highSchool: string;
    position: string;
    message: string;
}

export const MemberCard = ({ member }: { member: Member }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.position}>{member.position}</span>
            </div>
            <div className={styles.info}>
                <span>GRADE: {member.grade}</span>
                <span>{member.department}</span>
                <span>High School: {member.highSchool}</span>
            </div>
            {member.message && (
                <p className={styles.message}>"{member.message}"</p>
            )}
        </div>
    );
};
