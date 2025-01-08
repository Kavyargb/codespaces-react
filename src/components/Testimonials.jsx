import React, { useState, useEffect, useRef } from 'react';
import styles from '../style.module.css';
import TestimonialSlide from './TestimonialSlide';

function Testimonials({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null)
    let autoSlideInterval = useRef(null)


   useEffect(() => {

     function updateSlider() {
             if(sliderRef.current){
             sliderRef.current.querySelectorAll(`.${styles['testimonial-slide']}`).forEach((slide, index)=>{
                slide.classList.remove(styles.active)
                  });
             sliderRef.current.querySelectorAll(`.${styles['testimonial-slide']}`)[currentIndex].classList.add(styles.active);
              sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;

           }
        }

      const startAutoSlide = () => {
            autoSlideInterval.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
              }, 5000);
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval.current);
        };

       updateSlider();
       startAutoSlide();

       return () => {
           stopAutoSlide()
       }

       }, [testimonials, currentIndex]);

    const handlePrev = () => {
         clearInterval(autoSlideInterval.current)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
         setTimeout(() => {
              autoSlideInterval.current = setInterval(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
             }, 5000);
           }, 500);
    };

    const handleNext = () => {
      clearInterval(autoSlideInterval.current)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
         setTimeout(() => {
               autoSlideInterval.current = setInterval(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
             }, 5000);
           }, 500);
    };


    return (
        <section className={styles.testimonials}>
            <h2>What Students Are Saying</h2>
             <div className={styles['testimonial-slider']} ref={sliderRef}>
                 {testimonials.map((testimonial, index)=>(
                     <TestimonialSlide key={index} testimonial={testimonial}  />
                 ))}
            </div>
            <div className={styles['slider-buttons']}>
                <button className={styles['prev-btn']} onClick={handlePrev}>←</button>
                <button className={styles['next-btn']} onClick={handleNext}>→</button>
            </div>
        </section>
    );
}

export default Testimonials;