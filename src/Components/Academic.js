import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import { motion } from 'framer-motion';

// Import des logos
import UCA_Logo from '../images/uca_logo.png';
import AaliaLogo from '../images/alaalia_logo.png';

// Parcours Académique
const academicJourney = [
    {
      title: "University of Nice Sophia Antipolis",
      logo: UCA_Logo,
      degree: "Master's Degree in MIAGE - MBDS",
      duration: "2022 – 2024",
      description: [
        "Specialized in Mobiquité, Big Data, and System Integration (MBDS), blending IT engineering with business management.",
        "Focused on developing cutting-edge applications with a strong emphasis on big data and data analytics, equipping graduates with the skills to analyze and leverage data to drive decision-making.",
        "Engaged in a highly professional program that included 'tutored prototypes' developed in collaboration with industry partners, enhancing practical learning and industry readiness.",
        "Participated in comprehensive project management courses and professional seminars, emphasizing agile methodologies such as SCRUM to ensure effective project execution and management.",
        "Studied a comprehensive range of software development frameworks, gaining exposure to nearly all major frameworks used in the industry today, which provided a well-rounded understanding of various development environments.",
        "The MIAGE MBDS pathway boasts a 100% professional integration rate within three months post-graduation and is ranked among the top 10 master's programs in computer science in France as of 2018 (SMBG/Eduniversal)."
      ],
      highlight: "Ranked among the top 10 master's programs in computer science in France (2018)."},
      {
          title: "Université Côte d’Azur - Sophia Antipolis",
          logo: UCA_Logo,
          degree: "Licence Informatique",
          duration: "2019 – 2022",
          description: [
            "Acquired fundamental knowledge in computer science, covering areas such as algorithmics, programming (Python, C), Unix usage and shell programming, data structures, formal tools for computer science, and algorithm design.",
            "Specialized in application development and database management in the final year.",
            "Developed a strong foundation in mathematics, including analysis and linear algebra, to support advanced computing concepts.",
            "Engaged in practical projects to apply theoretical knowledge, enhancing problem-solving and coding skills.",
            "Prepared for diverse careers in the IT industry or further studies in specialized master's programs."
          ],
          highlight: "The program offers a comprehensive education, preparing students for various IT professions and advanced studies."
        },
        {
          title: "L'Aalia Groupe Scolaire",
          logo: AaliaLogo,
          degree: "Baccalauréat Scientifique",
          duration: "2018 – 2019",
          description: [
            "Graduated with honors, achieving an average of 18.91/20.",
            "Focused on core scientific subjects, including mathematics, physics, chemistry, and life and earth sciences.",
            "Developed analytical and problem-solving skills through rigorous coursework and laboratory experiments.",
            "Engaged in extracurricular activities that fostered teamwork, leadership, and a passion for scientific inquiry.",
            "Prepared a solid foundation for pursuing higher education in scientific and technological fields."
          ],
          highlight: "The Baccalauréat Scientifique is a prestigious diploma in Morocco, emphasizing a strong foundation in scientific disciplines."
        }
      ];
      

const Academic = () => {
  return (
    <div className="academic-container">
      {/* Section Éducation */}
      <div className="education-section">
        <h2 className="section-title">My Academic Journey</h2>
        <h3 className="sub-title">University Education</h3>

        {/* Timeline */}
        <div className="timeline">
          {academicJourney.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              <div className="timeline-icon">
                <img src={edu.logo} alt={`${edu.title} Logo`} className="edu-logo" />
              </div>
              <div className="timeline-content">
                <h4>{edu.title}</h4>
                <p><strong>{edu.degree}</strong></p>
                <p><i>{edu.duration}</i></p>
                <ul>
                  {edu.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {edu.highlight && <p className="highlight">{edu.highlight}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Academic;
