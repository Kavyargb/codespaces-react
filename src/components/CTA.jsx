import React from 'react';
import styles from '../style.module.css'
function CTA({ title, buttonText }) {
    return (
        <section className={styles.cta}>
            <h2>{title}</h2>
            <a href="#" className={styles.btn}>{buttonText}</a>
        </section>
    );
}

export default CTA;