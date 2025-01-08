import React from 'react';
import styles from '../style.module.css';

function SubjectList({ subjects }) {
    return (
        <section className={styles['subject-list']}>
            <div className={styles['subject-grid']}>
                {subjects.map((subject, index) => (
                    <a key={index} href={subject.link}>
                        <img src={subject.icon} alt={subject.name} />
                        <h3>{subject.name}</h3>
                        <p>{subject.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default SubjectList;