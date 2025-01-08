import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../subject.module.css'

function ArticleList({ articles, subjectName }) {
  return (
        <div className={styles['article-list']}>
          <h2>Articles</h2>
            {articles.map((article, index) => (
                 <Link key={index} to={`/${subjectName}/articles/${article.title.toLowerCase().replace(/ /g, '-')}/`}>{article.title}</Link>
              ))}
        </div>
  );
}

export default ArticleList;