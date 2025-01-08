import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import Team from '../components/Team';

function About() {

  const values = [
    { title: 'Quality', description: 'We are committed to providing meticulously crafted notes and answers.' },
    { title: 'Accessibility', description: 'We aim to make educational materials readily available to all learners.' },
    { title: 'Innovation', description: 'We continuously seek new ways to improve the learning experience.' },
    { title: 'Impact', description: 'We strive to empower students and educators through our resources.' },
  ];
   const teamMembers = [
       { name: 'John Doe', image: 'team-member1.jpg', role: 'Founder & CEO' },
       { name: 'Jane Smith', image: 'team-member2.jpg', role: 'Content Lead' },
       { name: 'Alex Kim', image: 'team-member3.jpg', role: 'Technical Lead' },
     ];
  return (
    <>
        <AboutHero
             title="About Neuron IQ"
             subtitle="Learn about our vision, mission, and the team behind providing quality education for everyone."
        />
        <AboutContent
             mission="At Neuron IQ, our mission is to democratize education by providing high-quality, accessible educational resources to learners worldwide. We are dedicated to creating a platform that not only supports academic success but also fosters a lifelong love of learning."
             values={values}
          />
         {/* <Team teamMembers={teamMembers} /> */}
    </>
  );
}

export default About;