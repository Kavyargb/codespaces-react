import React from 'react'
import styles from '../content.module.css'

const TableOfContents = ({tableOfContents}) => {
  return (
     <div className={styles['table-of-content']}>
          <h2>Table of Contents</h2>
            <ul>
              {tableOfContents.map((item, index)=>(
                  <li key={index}>
                       <a href={`#${item.id}`}>{item.title}</a>
                     </li>
                ))}
           </ul>
     </div>
  )
}

export default TableOfContents