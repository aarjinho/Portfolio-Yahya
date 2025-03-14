import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaJira, FaBootstrap, FaAngular, FaJava, FaDocker} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiApachecassandra, SiCss3, SiExpress, SiHtml5, SiIbm, SiJenkins, SiKibana, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSpringboot, SiTypescript, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Angular: <FaAngular/>,
        Python : <FaPython />,
        Java: <FaJava />,
        Docker : <FaDocker />,
        Kubernetes : <SiKubernetes />,
        Springboot : <SiSpringboot />,
        Kibana : <SiKibana />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Typescript : <SiTypescript />,
        Html : <SiHtml5 />,
        Css: <SiCss3 />,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Jira : <FaJira/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        MySql : <SiMysql />,
        Postgres : <SiPostgresql />,
        Cassandra : <SiApachecassandra />,
        Jenkins : <SiJenkins />,
        Ibm : <SiIbm />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
