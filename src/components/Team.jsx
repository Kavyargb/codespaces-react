import React from 'react';
import styles from '../style.module.css';

function Team({ teamMembers }) {
    return (
        <section className={styles['about-team']}>
            <h2>Meet the Team</h2>
            <div className={styles['team-grid']}>
                {teamMembers.map((member, index) => (
                    <div className={styles['team-member']} key={index}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;