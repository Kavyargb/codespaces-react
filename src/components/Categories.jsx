import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style.module.css';

function Categories({ categories }) {
const categoriesRef = useRef(null)

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
       if(categoriesRef.current){
           categoriesRef.current.querySelectorAll('a').forEach((link, index) =>{
               link.style.transitionDelay = `${index * 0.1}s`;
               observer.observe(link)
           })
       }


   }, []);

   return (
       <section className={styles.categories}>
           <h2>Explore Our Subjects</h2>
           <div className={styles['categories-grid']} ref={categoriesRef}>
               {categories.map((category, index) => (
                   <Link key={index} to={category.link}>
                       <img src={category.icon} alt={category.name} />
                       <h3>{category.name}</h3>
                   </Link>
               ))}
           </div>
       </section>
   );
}

export default Categories;