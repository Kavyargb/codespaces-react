import React, { useEffect, useRef } from 'react';
import styles from '../style.module.css';

function Hero({ title, subtitle, buttonText, className }) {
    const heroRef = useRef(null);

      useEffect(() => {
       const heroElement = heroRef.current
        if(heroElement){
          heroElement.classList.add(styles.loaded)
        }

    }, []);
    return (
        <section className={`${styles.hero} ${className}`} ref={heroRef}>
            <div className={styles['hero-content']}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <a href="#" className={styles.btn}>{buttonText}</a>
            </div>
        </section>
    );
}

export default Hero;