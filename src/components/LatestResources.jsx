import React, { useEffect, useRef } from 'react';
import styles from '../style.module.css';
import LatestCard from './LatestCard';

function LatestResources({ resources }) {

  const latestRef = useRef(null);
   useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         entry.target.classList.add(styles['fade-in']);
                        observer.unobserve(entry.target)
                       }
                });
            },
             {
                 threshold: 0.2,
             }
          );
        if(latestRef.current){
             latestRef.current.querySelectorAll(`.${styles['latest-card']}`).forEach((card) =>{
                 observer.observe(card)
            })
        }

      }, []);

    return (
        <section className={styles.latest}>
            <h2>Latest Resources</h2>
            <div className={styles['latest-grid']} ref={latestRef}>
                {resources.map((resource, index) => (
                 <LatestCard key={index} resource={resource} />
                ))}
            </div>
        </section>
    );
}

export default LatestResources;