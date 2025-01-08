import React from 'react';
import styles from '../content.module.css';
 import TableOfContents from './TableOfContents'

function ContentPage({ content, tableOfContents}) {

    return (
        <div className={styles['content-page-container']}>
           <div className={styles['content-container']}>
               {content}
            </div>
             <TableOfContents tableOfContents={tableOfContents} />
       </div>
    );
}

export default ContentPage;