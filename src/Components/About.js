import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';
import { motion } from 'framer-motion';

// Import des logos d'entreprise
import PROBTPLogo from '../images/probtp.png';
import FiverrLogo from '../images/fiverr.png';

// Expériences professionnelles
const workExperience = [
  {
    title: "PROBTP Group",
    logo: PROBTPLogo,
    role: "Full Stack Developer",
    duration: "Sep 2023 – Sep 2024",
    description: [
      "Maintained, enhanced, and developed features for critical applications used daily by managers.",
      "Optimized advanced searches in the 'Suivi Flux' application by implementing dynamic filters in AngularJS and improving navigation, reducing response and query times by 50% and increasing user productivity.",
      "Enhanced sensitive data security by developing a feature to anonymize sensitive fields in the user interface, ensuring compliance with data protection regulations.",
      "Developed a data extraction batch using Spring Boot with parallel processing, increasing data extraction speed by 30% for feeding a data warehouse.",
      "Automated and improved deployment reliability using Jenkins and GitLab, reducing manual errors and accelerating production deployment cycles.",
      "Participation aux réunions de sprint (daily stand-up, sprint planning, review, rétrospective) avec suivi des tâches via Jira et documentation sur Confluence."
    ],
    
    technologies: "AngularJS, Spring Boot, Java, JavaScript, Maven, Jenkins, GitLab, Postman, MySQL, PostgreSQL, IBM DB2, Méthodologie Agile, AppDynamics, Confluence ,Kanban, Kibana"
  },
  {
    title: "Freelance Developer (Fiverr)",
    logo: FiverrLogo,
    role: "Freelance Developer",
    duration: "2021 – 2023",
    description: [
      "Developed websites and applications with a focus on automation and performance optimization.",
      "Developed a Python-based tool using Optical Character Recognition (OCR) to automate absence detection in scanned PDFs. This software verified absences for 1,000 students in 1.8 seconds, compared to several hours of manual processing.",
      "Created a platform for organizing and managing tournaments, using React and Bootstrap for a fast and smooth interface. The solution enabled the management of tournaments with up to 256 participants simultaneously, while simplifying administration for organizers."
    ],
    
    technologies: " Angular, React, Java, JavaScript, Python, PHP, TypeScript, NodeJs, ExpressJs, Maven, GitHub, AWS, Oracle Database, MariaDB, Firebase Realtime Database, MongoDB"
  }
];

const About = () => {
  return (
    <div className="about-container">
      {/* Section Expérience */}
      <div className="experience-section">
        <h2 className="section-title">What I have done so far</h2>
        <h3 className="sub-title">Work Experience</h3>

        {/* Timeline */}
        <div className="timeline">
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              <div className="timeline-icon">
                <img src={work.logo} alt={`${work.title} Logo`} className="work-logo" />
              </div>
              <div className="timeline-content">
                <h4>{work.title} | <i>{work.role}</i></h4>
                <p><strong>{work.duration}</strong></p>
                <ul>
                  {work.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p><strong>Technologies:</strong> {work.technologies}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Lottie */}
      <div className="illustrationContainer">
        <Tilt>
          <Lottie 
            className="illustration" 
            animationData={Coder} 
            loop={true} 
          />
        </Tilt>
      </div>

      {/* Section Compétences */}
      <h1 className='skills-heading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Angular' />
        <Skills skill='Springboot' />
        <Skills skill='Java' />
        <Skills skill='Javascript' />
        <Skills skill='Html'/>
        <Skills skill='Css'/>
        <Skills skill='Bootstrap'/>
        <Skills skill='Node' />
        <Skills skill='Docker' />
        <Skills skill='Git' />
        <Skills skill='Jenkins' />
        <Skills skill='Postman' />
        <Skills skill='Jira' />
        <Skills skill='Kibana'/>
        <Skills skill='MongoDb' />
        <Skills skill='MySql'/>
        <Skills skill='Postgres'/>
        <Skills skill='Ibm'/>
        <Skills skill='Cassandra'/>

      </div>
    </div>
  );
};

export default About;
