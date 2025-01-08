import React from 'react';
 import { useParams } from 'react-router-dom';
  import styles from '../subject.module.css'
 import { Link } from 'react-router-dom'

 function SubTopicPage({ subjects }) {
     const { subjectName, topicName } = useParams();
      const subject = subjects.find(subj => subj.name.toLowerCase() === subjectName.toLowerCase());
      if (!subject) {
          return <div>Subject not found</div>
      }
        const mainTopic = subject.mainTopics?.find(topic => topic.name.toLowerCase() === topicName.toLowerCase());
      let subTopics = []
      if(mainTopic){
          subTopics = mainTopic.subTopics
      } else {
         subTopics = subject.subTopics.filter((topic)=> topic.id === topicName )
         if(subTopics.length === 0){
             return <div> Main topic not found</div>
         }
          
      }
     return (
       <div className={styles['sub-topic-page']}>
        
        <h1> {mainTopic ? mainTopic.name : subTopics[0].name} </h1>
            <ul className={styles['sub-topic-list']}>
                
                {mainTopic && subTopics?.map((topic, index)=>(
                    <li key={index}><Link to={`/${subjectName}/${topic.id}`}>{topic.name}</Link></li>
                ))}
                {!mainTopic && (
                     <li > Sub topics not found for {subTopics[0].name}</li>
                )}
         </ul>
     </div>
   );
 }

 export default SubTopicPage;
