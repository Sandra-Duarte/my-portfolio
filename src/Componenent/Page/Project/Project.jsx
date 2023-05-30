import React from 'react'
import "./Project.scss"
import {AiFillGithub} from "react-icons/ai"
import {} from "../../../TINYLEAF.jpg"

const data =[{
  id:"1",
  image:"img",
  liveLink:"https://sandra-duarte-tiny-leaf-project.netlify.app/",
  githup:"https://github.com/Sandra-Duarte/Tiny-leaf-project",
  titlle:"Tiny-leaf-project",
  desc:"",
  tect1:"React",
  tect2:"css",
  tect3:"javaScript",
  }];



const Project = () => {
  return (
    <section id="projects" className='projects container sections'>
     <div className='sectionTitle'>
  <span className='titleNumber'> 03.</span>
  <h5 className='titleText'> Projects
  <div className='underline'><span></span></div>
  </h5>

 </div>

 <div className='projectContainer grid'>
 {
 data.map(({id, github,  image, titlle, desc, tect1, tect2, tect3 }) =>{
return(
  <div key={id} className='singleProject'>
  <div className='externalLinks flex'>

    <div className='githubIcon'>
      <a href={github} target = "_blank" rel= "noreferrer" >
        <AiFillGithub className="icon"/>
      </a>
     </div>

     <div className='imgDiv'>
      <a href="" target = "_blank" rel= "noreferrer" >
        <img src={image} alt='titlle'/>
      </a>
     </div>
     <div className='projectTitle'>
     <h3>{titlle}</h3>
     </div>
     <div className='desc'>
     {desc}
     </div>

    <div className="technologies flex">
      <small>{tect1}</small>
      <small>{tect2}</small>
      <small>{tect3}</small>
    </div>


     </div>
  </div>
)
 })
 }
 </div>

    </section>
  )
}

export default Project