import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../subject.module.css'
function SubjectCard({ topic, subjectName }) {
  return (
    <div className={styles['subject-card']}>
        <div className={styles.icon}>
            {topic.icon}
        </div>
       <Link to={`/${subjectName}/${topic.name.toLowerCase()}`}>
          <h3>{topic.name}</h3>
          <p>{topic.description}</p>
       </Link>
      </div>
  );
}

export default SubjectCard;