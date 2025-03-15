import React from 'react';
import { useState } from 'react';
import { Link } from "react-scroll";
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>YA</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
        <li>
           <Link to="home" smooth={true} duration={500}>Home</Link>
         </li>
         <li>
           <Link to="about" smooth={true} duration={500}>About</Link>
         </li>
         <li>
           <Link to="work" smooth={true} duration={500}>Work</Link>
         </li>
         <li>
          <Link to="academic" smooth={true} duration={500}>Study</Link>
         </li>
         <li>
           <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}>Resume</Link>
         </li>
       </ul>
        
    </nav>

    
  )
}

export default Nav


// import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="home" smooth={true} duration={500}>Home</Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500}>About</Link>
//         </li>
//         <li>
//           <Link to="projects" smooth={true} duration={500}>Projects</Link>
//         </li>
//         <li>
//           <Link to="resume" smooth={true} duration={500}>Resume</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
