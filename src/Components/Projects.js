import React from 'react';
import ProjectBox from './ProjectBox';

import DotNetImage from '../images/dotnet.png';
import ReactImage from '../images/reactlogo.png';
import BabyloneImage from '../images/babylonelogo.png'
import SaveIt from '../images/saveitlogo.png'
import Thornament from '../images/thornament.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SaveIt} projectName="SaveIt" />
        <ProjectBox projectPhoto={Thornament} projectName="Thornament" />
        <ProjectBox projectPhoto={BabyloneImage} projectName="BabylonCarShooter" />
        <ProjectBox projectPhoto={DotNetImage} projectName="DotNet" />
        <ProjectBox projectPhoto={ReactImage} projectName="SignatureChecker" />
      </div>

    </div>
  )
}

export default Projects