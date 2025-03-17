import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import About from './About.js';
import Projects from './Projects.js';
import { Reveal } from './Reveal.tsx'; // Import du composant Reveal
import Contact from './Contact.js';
import Academic from './Academic.js';
import Testimonials from './Testimonials.js';
import Me from '../images/me.png';

const Home = () => {
  return (
    <div>
      <div id="home" className="HomePage">
        <Reveal>
          <div className="HomeText">
            <h1>Hi There!</h1>
            <h1>I'M <b>YAHYA AARJI</b></h1>
            <Typed />
          </div>
        </Reveal>

        <Reveal>
          <img src={Me} alt='Me' className='me' /> 
        </Reveal>
      </div>

      <div id="about" className="AboutPage">
        <Reveal className="AboutText">
            <h1 className="AboutTextHeading">Brief <b>introduction</b></h1>
            <p>
              With several professional experiences, notably at PROBTP Group as a Full Stack Developer, I contributed to the maintenance and development of features for critical applications. My role involved optimizing advanced searches, enhancing the security of sensitive data, and automating deployments. As a freelance developer on Fiverr, I also designed websites and applications, focusing on automation and performance optimization. These experiences have allowed me to master various technologies and adapt to diverse work environments.
            </p>
        
        </Reveal>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>


      

      <Reveal id="work" className="aboutMe">
        <About />
      </Reveal>

      <Reveal id = "academic">
        <Academic />
      </Reveal>

      <Reveal id="projects" className="projects">
        <Projects />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal id = "contact" className='contact'>
        <Contact />
      </Reveal>
      
    </div>
  );
};

export default Home;
