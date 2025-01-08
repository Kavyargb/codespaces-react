import React, { useEffect, useRef } from 'react';
import styles from '../style.module.css';

function Intro({ introItems }) {
 const introRef = useRef(null)

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
         if(introRef.current){
            introRef.current.querySelectorAll('div').forEach((div) =>{
                observer.observe(div)
            })
        }

    }, []);

    return (
        <section className={styles.intro}>
            <h2>Why Choose Neuron IQ?</h2>
            <div className={styles['intro-grid']} ref={introRef}>
                 {introItems.map((item, index) => (
                      <div key={index}>
                           <img src={item.icon} alt={item.title} />
                           <h3>{item.title}</h3>
                           <p>{item.description}</p>
                       </div>
                  ))}
            </div>
        </section>
    );
}

export default Intro;