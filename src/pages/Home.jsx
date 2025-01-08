import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import LatestResources from '../components/LatestResources';
import CTA from '../components/CTA';

function Home() {

    const introItems = [
      { icon: 'icons/quality.png', title: 'High-Quality Content', description: 'Expertly crafted notes by experienced educators.' },
      { icon: 'icons/subjects.png', title: 'Extensive Subject Coverage', description: 'A wide range of subjects from STEM to humanities.' },
      { icon: 'icons/time.png', title: 'Efficient Learning', description: 'Save time with comprehensive and clear explanations.' },
    ];

    const categories = [
      { name: 'Mathematics', icon: 'icons/maths.png', link: '#' },
      { name: 'Physics', icon: 'icons/physics.png', link: '#' },
      { name: 'Chemistry', icon: 'icons/chemistry.png', link: '/Chemistry' },
      { name: 'Biology', icon: 'icons/biology.png', link: '#' },
      { name: 'Computer Science', icon: 'icons/programming.png', link: '#' },
       { name: 'History', icon: 'icons/history.png', link: '#' },
         { name: 'English Literature', icon: 'icons/english.png', link: '#' },
     ];

     const testimonials = [
         { text: '"Neuron IQ helped me ace my exams! The notes are so clear and easy to understand."', author: 'Sarah J.' },
        { text: '"I love how comprehensive and helpful the resources are. I can always find what I need!"', author: 'Alex M.' },
        { text: '"I have been using this since last year and have gotten better at studies!"', author: 'Mike' },
    ];
       const resources = [
         { title: 'Introduction to Calculus', description: 'A brief introduction to the fundamental concepts of Calculus.' },
           { title: 'Quantum Mechanics', description: 'Introductory quantum mechanics notes for those interested in the subject.' },
          { title: 'History of World War II', description: 'An exploration of events that led to World War II and its consequences.' },
     ];
    return (
        <>
            <Hero
                title="Unlock Your Potential with Neuron IQ"
                subtitle="Your Source for High-Quality Educational Notes and Answers"
                buttonText="Explore Our Resources"
                className={""}
             />
            <Intro introItems={introItems} />
            <Categories categories={categories} />
            <Testimonials testimonials={testimonials} />
            <LatestResources resources={resources} />
           <CTA title="Ready to Elevate Your Learning?" buttonText="Start Exploring Now" />
        </>
    );
}

export default Home;