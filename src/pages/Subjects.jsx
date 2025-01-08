import React from 'react';
import SubjectHero from '../components/SubjectHero';
import SubjectList from '../components/SubjectList';

function Subjects() {

    const subjects = [
         {
           name: 'Mathematics',
          icon: 'icons/maths.png',
           link: '/mathematics',
          description: 'Explore a variety of mathematical concepts.'
       },
       {
         name: 'Physics',
          icon: 'icons/physics.png',
         link: '/physics',
        description: 'Discover the fascinating world of physics.'
     },
      {
         name: 'Chemistry',
         icon: 'icons/chemistry.png',
         link: '/chemistry',
         description: 'Study the principles of chemistry.'
      },
      {
          name: 'Biology',
           icon: 'icons/biology.png',
         link: '/biology',
        description: 'Uncover the intricacies of life sciences.'
    },
     {
         name: 'Computer Science',
           icon: 'icons/programming.png',
           link: '/computer-science',
        description: 'Develop coding and logical thinking skills.'
   },
     {
        name: 'History',
        icon: 'icons/history.png',
        link: '/history',
        description: 'Explore past civilizations and events.'
   },
     {
         name: 'English Literature',
         icon: 'icons/english.png',
        link: '/english-literature',
        description: 'Appreciate classic and contemporary literature.'
  },
       {
          name: 'Economics',
           icon: 'icons/economics.png',
          link: '/economics',
         description: 'Understand the systems of production, distribution, and consumption.'
      },
      {
         name: 'Geography',
         icon: 'icons/geography.png',
          link: '/geography',
          description: 'Explore the earth and its different ecosystems and human societies.'
    },
    ];
    return (
        <>
           <SubjectHero title="Explore Subjects" subtitle="Delve into our extensive collection of educational notes and answers, tailored for a diverse range of disciplines"/>
          <SubjectList subjects={subjects} />
        </>
    );
}

export default Subjects;