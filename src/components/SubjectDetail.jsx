import React from 'react';
import styles from '../style.module.css';

function SubjectDetail({ subject, subTopics }) {
    return (
      <section className={styles['subject-detail']}>
            <div className={styles['subject-hero-content']}>
               <h1>{subject.name}</h1>
                <p>{subject.description}</p>
               </div>
            {subTopics && subTopics.length > 0 && (
               <>
                 <h2>Sub-Topics</h2>
                 <ul className={styles['sub-topic-list']}>
                    {subTopics.map((topic, index) => (
                         <li key={index}><a href="#">{topic.name}</a></li>
                    ))}
               </ul>
               </>
            )}
         </section>
    );
}

export default SubjectDetail;