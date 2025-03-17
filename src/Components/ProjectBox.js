import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
      BiblioTechDesc: "BiblioTech is a project designed to build a web service along with a Windows client application for managing and accessing a digital book library. The project includes an ASP.NET Core-based server for book storage and management and a WPF-based Windows application for browsing and reading books. It features an admin interface, a REST API, and functionalities like book filtering, author management, and OpenLibrary integration. The client-server communication is managed through OpenAPI, and additional enhancements include pagination, speech synthesis for book reading, and dynamic plugin support.",
      BiblioTechGithub: "https://github.com/aarjinho/TP.NET",
  
      SignatureCheckerDesc: "SignatureChecker-Website is a web application built using React that helps users verify digital signatures. The project was initialized with Create React App and includes functionalities for checking, validating, and displaying signature authenticity. It is designed for ease of use and provides an interactive interface for users to upload and analyze signatures. The app can be run in development mode for testing and debugging, and it includes a production build setup for deployment.",
      SignatureCheckerGithub: "https://github.com/aarjinho/SignatureChecker-Website",
        
      BabylonCarShooterDesc: "BabylonCarShooter is a 3D browser-based mini-game built with Babylon.js where players control a car and shoot small bullets at enemies in an open terrain. The game features smooth driving mechanics, enemy AI, collision detection, and an engaging shooting system. Players must navigate the environment, dodge obstacles, and eliminate enemies to score points. The project is designed for both fun and learning, showcasing Babylon.js capabilities for physics and rendering.",
      BabylonCarShooterGithub: "https://github.com/aarjinho/BabylonJS-devoir",
  
    
      SaveItDesc: "SaveIt is a 3D browser-based game developed using Babylon.js to raise awareness about waste sorting and environmental sustainability. Players control a character who must collect and correctly sort waste while avoiding obstacles. The game features different graphical settings, multiple game modes including 'Endless' and 'Levels', and progressively increasing difficulty. It also utilizes JSON-based level generation, modular code structure, and dynamic terrain rendering to enhance gameplay and maintain performance.",
      SaveItGithub: "https://github.com/AyoubAdm/SaveIt",
    
      ThornamentDesc: "Thornament is a web platform that allows users to create and join fully customizable e-sports tournaments for a variety of video games. The tournament system automates match management, updating brackets dynamically based on players' reported results. Features include user authentication, public and private tournaments, solo and team participation, and administrative controls for tournament organizers. Built with React for the frontend and Firebase with Express for backend services, Thornament provides a seamless competitive experience.",
        
  }

  let show ='';
  if(!desc[projectName + 'Github']?.includes("https")){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
{/* 
            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox