import React from 'react';
import styles from '../style.module.css';

function SubjectHero({ title, subtitle}) {
    return (
        <section className={styles['subject-hero']}>
            <div className={styles['subject-hero-content']}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}

export default SubjectHero;