import React from 'react';
import styles from '../content.module.css';
import { Link } from 'react-router-dom'

const TopicList = ({topics, subjectName}) => {
    return (
       <ul className={styles['sub-topic-list']}>
          {topics.map((topic, index)=>(
                <li key={index}><Link to={`/${subjectName}/${topic.id}`}>{topic.name}</Link></li>
          ))}
       </ul>
    )
}

export default TopicList