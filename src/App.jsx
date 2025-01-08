import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';
import Contact from './pages/Contact';
import SubjectPage from './pages/SubjectPage';
import SubTopicPage from './pages/SubTopicPage';
import ArticlePage from './pages/ArticlePage';
import "./style.module.css";

function App() {
  const [subjects, setSubjects] = useState(null);
  const { subjectName, articleName, topicName } = useParams();

    useEffect(() => {
      const fetchSubjectData = async () => {
         const initialSubjects = [
              {
                name: 'Mathematics',
               icon: 'icons/maths.png',
                link: '/mathematics',
               description: 'Explore a variety of mathematical concepts.',
               subTopics: [
                     {name: 'Algebra', id: 'algebra'},
                     {name: 'Calculus', id: 'calculus'},
                     {name: 'Geometry', id: 'geometry'},
                    ],
                articles: [
                       {title: 'Introduction to Algebra', content: (<p>This is the content of introduction to Algebra, with id: intro-algebra.</p>), tableOfContents: [{title:'Introduction to Algebra', id:'intro-algebra'}] },
                       {title: 'Understanding Calculus', content: (<p>This is the content of understanding calculus, with id: understanding-calculus.</p>), tableOfContents: [{title:'Understanding Calculus', id:'understanding-calculus'}]  },
                       {title: 'Basics of Geometry', content: (<p>This is the content of basics of geometry, with id: basics-geometry.</p>), tableOfContents: [{title:'Basics of Geometry', id:'basics-geometry'}]  },
                     ],
                 mainTopics: [

                     ],
              },
              {
                name: 'Physics',
               icon: 'icons/physics.png',
                link: '/physics',
               description: 'Discover the fascinating world of physics.',
               subTopics: [
                     {name: 'Mechanics', id:'mechanics'},
                     {name: 'Thermodynamics', id: 'thermodynamics'},
                     {name: 'Electromagnetism', id:'electromagnetism'},
                   ],
                articles: [
                       {title: 'Introduction to Mechanics', content: (<p>This is the content of introduction to mechanics, with id: intro-mechanics.</p>), tableOfContents: [{title:'Introduction to Mechanics', id: 'intro-mechanics'}] },
                       {title: 'Understanding Thermodynamics', content: (<p>This is the content of understanding thermodynamics, with id: understanding-thermodynamics.</p>), tableOfContents: [{title:'Understanding Thermodynamics', id:'understanding-thermodynamics'}]  },
                       {title: 'Introduction to Electromagnetism', content: (<p>This is the content of introduction to electromagnetism, with id: intro-electromagnetism.</p>), tableOfContents: [{title:'Introduction to Electromagnetism', id:'intro-electromagnetism'}] },
                    ],
                   mainTopics: [

                     ],
              },
              {
                name: 'Chemistry',
               icon: 'icons/chemistry.png',
                link: '/chemistry',
                description: 'Study the principles of chemistry.',
                subTopics: [
                       {name: 'Atomic Structure', id: 'atomic-structure'},
                        {name: 'Chemical Bonding', id: 'chemical-bonding'},
                         {name: 'The Periodic Table', id:'the-periodic-table'},
                          {name: 'Organic Chemistry', id: 'organic'},
                          {name: 'Reaction Kinetics', id:'reaction-kinetics'},
                        {name: 'Acid-Base Chemistry', id:'acid-base-chemistry'},
                        {name: 'Analytical Chemistry', id:'analytical-chemistry'},
                        {name: 'Isomers and Nomenclature', id:'isomers-and-nomenclature'},
                         {name: 'Biochemistry', id:'biochemistry'},
                   ],
               articles: [
                   {
                       title: 'Introduction to Atomic Structure',
                       content: (
                           <>
                               <h2 id="intro-atomic-structure">Introduction to Atomic Structure</h2>
                               <p>This is an introduction to atomic structure.</p>
                               <h3 id="sub-section-atomic">Sub section in atomic structure</h3>
                               <p> This is a sub-section in atomic structure.
                               </p>
                           </>
                       ),
                         tableOfContents: [
                           {title: 'Introduction to Atomic Structure', id: 'intro-atomic-structure'},
                             {title:'Sub section in atomic structure', id: 'sub-section-atomic'}
                         ]
                   },
                        {title: 'Basic Principles of Chemical Bonding', content: (<p>This is the content of basic principles of chemical bonding, with id: basic-chemical-bonding.</p>),  tableOfContents:[{title:'Basic Principles of Chemical Bonding', id: 'basic-chemical-bonding'}] },
                        {title: 'Understanding the Periodic Table', content: (<p>This is the content of understanding the periodic table, with id: periodic-table.</p>),  tableOfContents:[{title:'Understanding the Periodic Table', id: 'periodic-table'}] },
                       {title: 'Introduction to Organic Chemistry', content: (<p>This is the content of introduction to organic chemistry, with id: intro-organic-chemistry.</p>),  tableOfContents:[{title:'Introduction to Organic Chemistry', id:'intro-organic-chemistry'}] },
                       {title: 'Reaction Kinetics Explained', content: (<p>This is the content of reaction kinetics explained, with id: reaction-kinetics-explained.</p>),  tableOfContents:[{title:'Reaction Kinetics Explained', id:'reaction-kinetics-explained'}]  },
                        {title: 'Acid-Base Chemistry', content: (<p>This is the content of acid-base chemistry, with id: acid-base-chemistry.</p>),  tableOfContents:[{title:'Acid-Base Chemistry', id:'acid-base-chemistry'}] },
                       ],
                mainTopics: [
                          {name: 'Organic Chemistry', description: 'Study of carbon-containing compounds.', icon:'Orga',
                             subTopics:[
                                {name: 'Alkanes', id: 'alkanes'},
                               {name:'Alkenes', id: 'alkenes'},
                               {name: 'Alkynes', id: 'alkynes'}
                              ]
                            },
                          {name: 'Inorganic Chemistry', description: 'Explore non-carbon based substances.', icon: 'Inorg'},
                           {name: 'Physical Chemistry', description: 'Study of the underlying physical principles in chemical systems.', icon: 'Physi'},
                           {name: 'Analytical Chemistry', description: 'Study of chemical properties for identifying and quantifying chemical substances.', icon:'Analy'},
                       ],
               },
                {
                name: 'Biology',
               icon: 'icons/biology.png',
                link: '/biology',
               description: 'Uncover the intricacies of life sciences.',
                subTopics: [
                       {name: 'Cell Biology', id:'cell-biology'},
                       {name: 'Genetics', id: 'genetics'},
                        {name: 'Ecology', id:'ecology'},
                     ],
                   articles: [
                           {title: 'Introduction to Cell Biology', content: (<p>This is the content of introduction to cell biology, with id: intro-cell-biology.</p>), tableOfContents:[{title:'Introduction to Cell Biology', id: 'intro-cell-biology'}] },
                           {title: 'Principles of Genetics', content: (<p>This is the content of principles of genetics, with id: genetics-principles.</p>), tableOfContents:[{title:'Principles of Genetics', id: 'genetics-principles'}]  },
                          {title: 'Overview of Ecology', content: (<p>This is the content of overview of ecology, with id: overview-ecology.</p>), tableOfContents:[{title:'Overview of Ecology', id: 'overview-ecology'}] },
                      ],
                     mainTopics: [

                     ],
                },
               {
                   name: 'Computer Science',
                   icon: 'icons/programming.png',
                    link: '/computer-science',
                   description: 'Develop coding and logical thinking skills.',
                     subTopics: [
                         {name: 'Data Structures', id:'data-structures'},
                         {name: 'Algorithms', id: 'algorithms'},
                           {name: 'Programming Languages', id: 'programming-languages'},
                      ],
                  articles: [
                          {title: 'Introduction to Data Structures', content: (<p>This is the content of introduction to data structures, with id: intro-data-structures.</p>), tableOfContents:[{title:'Introduction to Data Structures', id:'intro-data-structures'}]  },
                         {title: 'Basics of Algorithms', content: (<p>This is the content of basics of algorithms, with id: basics-algorithms.</p>),  tableOfContents:[{title:'Basics of Algorithms', id:'basics-algorithms'}] },
                        {title: 'Overview of Programming Languages', content: (<p>This is the content of overview of programming languages, with id: programming-overview.</p>),  tableOfContents:[{title:'Overview of Programming Languages', id: 'programming-overview'}]  },
                     ],
                      mainTopics: [

                     ],
               },
                 {
                    name: 'History',
                    icon: 'icons/history.png',
                     link: '/history',
                    description: 'Explore past civilizations and events.',
                      subTopics: [
                           {name: 'Ancient History', id:'ancient-history'},
                            {name: 'Medieval History', id:'medieval-history'},
                             {name: 'Modern History', id:'modern-history'},
                          ],
                        articles: [
                               {title: 'Introduction to Ancient History', content: (<p>This is the content of introduction to ancient history, with id: intro-ancient-history.</p>), tableOfContents:[{title:'Introduction to Ancient History', id:'intro-ancient-history'}] },
                              {title: 'Overview of Medieval History', content: (<p>This is the content of overview of medieval history, with id: overview-medieval-history.</p>), tableOfContents:[{title:'Overview of Medieval History', id: 'overview-medieval-history'}]  },
                            {title: 'Modern History Overview', content: (<p>This is the content of modern history overview, with id: overview-modern-history.</p>), tableOfContents:[{title:'Modern History Overview', id:'overview-modern-history'}]  },
                          ],
                         mainTopics: [

                         ],
                   },
                     {
                       name: 'English Literature',
                       icon: 'icons/english.png',
                        link: '/english-literature',
                       description: 'Appreciate classic and contemporary literature.',
                        subTopics: [
                           {name: 'Shakespearean Literature', id: 'shakespearean-literature'},
                           {name: 'Modern Literature', id:'modern-literature'},
                            {name: 'Poetry', id:'poetry'},
                         ],
                        articles: [
                               {title: 'Introduction to Shakespearean Literature', content: (<p>This is the content of introduction to shakespearean literature, with id: intro-shakespeare.</p>), tableOfContents:[{title:'Introduction to Shakespearean Literature', id: 'intro-shakespeare'}]  },
                                 {title: 'Overview of Modern Literature', content: (<p>This is the content of overview of modern literature, with id: overview-modern-lit.</p>), tableOfContents:[{title:'Overview of Modern Literature', id: 'overview-modern-lit'}] },
                                  {title: 'Introduction to Poetry', content: (<p>This is the content of introduction to poetry, with id: intro-poetry.</p>), tableOfContents:[{title:'Introduction to Poetry', id: 'intro-poetry'}] },
                             ],
                            mainTopics: [

                            ],
                      },
                      {
                           name: 'Economics',
                          icon: 'icons/economics.png',
                           link: '/economics',
                           description: 'Understand the systems of production, distribution, and consumption.',
                            subTopics: [
                                  {name: 'Microeconomics', id: 'microeconomics'},
                                 {name: 'Macroeconomics', id:'macroeconomics'},
                                  {name: 'International Economics', id:'international-economics'},
                               ],
                           articles: [
                                  {title: 'Introduction to Microeconomics', content: (<p>This is the content of introduction to microeconomics, with id: intro-microeconomics.</p>), tableOfContents:[{title:'Introduction to Microeconomics', id: 'intro-microeconomics'}]  },
                                {title: 'Overview of Macroeconomics', content: (<p>This is the content of overview of macroeconomics, with id: overview-macroeconomics.</p>), tableOfContents:[{title:'Overview of Macroeconomics', id: 'overview-macroeconomics'}] },
                                  {title: 'Introduction to International Economics', content: (<p>This is the content of introduction to international economics, with id: intro-international-economics.</p>), tableOfContents:[{title:'Introduction to International Economics', id: 'intro-international-economics'}]  },
                              ],
                             mainTopics: [

                             ],
                      },
                       {
                           name: 'Geography',
                          icon: 'icons/geography.png',
                           link: '/geography',
                          description: 'Explore the earth and its different ecosystems and human societies.',
                            subTopics: [
                                  {name: 'Physical Geography', id:'physical-geography'},
                                 {name: 'Human Geography', id: 'human-geography'},
                                 {name: 'Environmental Geography', id:'environmental-geography'},
                             ],
                           articles: [
                                  {title: 'Introduction to Physical Geography', content: (<p>This is the content of introduction to physical geography, with id: intro-physical-geography.</p>), tableOfContents:[{title:'Introduction to Physical Geography', id:'intro-physical-geography'}] },
                                 {title: 'Overview of Human Geography', content: (<p>This is the content of overview of human geography, with id: overview-human-geography.</p>), tableOfContents:[{title:'Overview of Human Geography', id:'overview-human-geography'}]  },
                                {title: 'Overview of Environmental Geography', content: (<p>This is the content of overview of environmental geography, with id: overview-environmental-geography.</p>), tableOfContents:[{title:'Overview of Environmental Geography', id: 'overview-environmental-geography'}] },
                            ],
                          mainTopics: [

                          ],
                       },
          ];

         setSubjects(initialSubjects);
      };

    fetchSubjectData();
  }, []);
  const subject = subjects?.find((subj)=> subj.name.toLowerCase() === subjectName?.toLowerCase());

    let article;

    if(subject){
       article =  subject.articles?.find(article => article.title.toLowerCase().replace(/ /g, '-') === articleName?.toLowerCase());
    }

    if (subjectName && !subjects) return <div>Loading Subject Data</div>;
     if (articleName && !article) return <div>Loading Article Data</div>
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:subjectName" element={<SubjectPage subjects={subjects} />} />
         <Route path="/:subjectName/:topicName" element={<SubTopicPage subjects={subjects}/> } />
            <Route path="/:subjectName/articles/:articleName/" element={<ArticlePage subjects={subjects}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;