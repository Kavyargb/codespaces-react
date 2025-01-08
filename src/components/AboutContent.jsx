import React from 'react';
import styles from '../style.module.css';

function AboutContent({ mission, values }) {
    return (
        <section className={styles['about-content']}>
            <div className={styles['about-container']}>
                <h2>Our Mission</h2>
                <p>{mission}</p>
            </div>
             <div className={styles['about-container']}>
                 <h2>Our Values</h2>
                    {values.map((value, index) => (
                    <p key={index}><strong>{value.title}:</strong> {value.description}</p>
                    ))}
             </div>
         </section>
    );
}

export default AboutContent;