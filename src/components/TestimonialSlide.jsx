import React from 'react'
import styles from '../style.module.css'
const TestimonialSlide = ({testimonial}) => {
  return (
    <div className={styles['testimonial-slide']}>
      <p>{testimonial.text}</p>
      <p className={styles.author}>- {testimonial.author}</p>
    </div>
  )
}

export default TestimonialSlide