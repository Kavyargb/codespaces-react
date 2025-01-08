import React from 'react';
import { useParams } from 'react-router-dom';
import SubjectDetail from '../components/SubjectDetail';
import TopicList from '../components/TopicList'
 import styles from '../subject.module.css'
 import ArticleList from '../components/ArticleList';
 import SubjectCard from '../components/SubjectCard'


function SubjectPage({ subjects }) {
    const { subjectName } = useParams();
     const subject = subjects.find(subj => subj.name.toLowerCase() === subjectName.toLowerCase());
     if (!subject) {
         return <div>Subject not found</div>
    }

    const subTopics = subject.subTopics;
    const articles = subject.articles;
     const mainTopics = subject.mainTopics;


    return (
        <div className={styles['subject-page-container']}>
            <ArticleList articles={articles} subjectName={subjectName} />

          <div className={styles['main-content']}>
               <SubjectDetail subject={subject}/>
                <div className={styles['subject-cards']}>
                     {mainTopics.map((topic, index) => (
                        <SubjectCard key={index} topic={topic} subjectName={subjectName} />
                      ))}
                </div>
            </div>
             <div className={styles['topics']}>
                 <h2>Topics</h2>
              {subTopics && subTopics.length > 0 && (
                  <TopicList topics={subTopics} subjectName={subjectName}/>
               )}

            </div>
       </div>
    );
}

export default SubjectPage;