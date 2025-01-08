import React from 'react';
import { useParams } from 'react-router-dom';
import ContentPage from '../components/ContentPage'


function ArticlePage({ subjects }) {
    const { subjectName, articleName } = useParams();
    const subject = subjects.find(subj => subj.name.toLowerCase() === subjectName.toLowerCase());
    if (!subject) {
          return <div>Subject not found</div>;
    }

    const article = subject.articles?.find(article => article.title.toLowerCase().replace(/ /g, '-') === articleName.toLowerCase());

    if (!article) {
          return <div>Article not found</div>;
    }

   const content = article.content
   const tableOfContents = article.tableOfContents

     return (
       <ContentPage content={content} tableOfContents={tableOfContents}/>
   );
}

export default ArticlePage;