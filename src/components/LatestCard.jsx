import React from 'react';
import styles from '../style.module.css'
const LatestCard = ({resource}) => {
  return (
    <div className={styles['latest-card']}>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <a href="#">Read More</a>
    </div>
  )
}

export default LatestCard