import React from 'react'
import "./Project.scss"
import {AiFillGithub} from "react-icons/ai"

const date = [
  {
  id:1,
  image:"",
  liveLink: "",
  github:"",
  title:"",
  descriptions:"",
  }
]



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
 date.map(({id, github }) =>{
return(
  <div key={id} className='singleProject'>
  <div className='externalLinks flex'>

    <div className='githubIcon'>
      <a href={github} target = "_blank" rel= "noreferrer" >
        <AiFillGithub className="icon"/>
      </a>
     </div>
     <div className= "">
      <a>

      </a>

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