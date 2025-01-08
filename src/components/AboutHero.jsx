import React from 'react';
import styles from '../style.module.css';

function AboutHero({ title, subtitle}) {
    return (
        <section className={styles['about-hero']}>
            <div className={styles['about-hero-content']}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}

export default AboutHero;