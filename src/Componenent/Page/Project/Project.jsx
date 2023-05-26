import React from 'react'
import "./Project.scss"

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
 date.map(({id, github, image, liveLink, title, descriptions }) =>{
return(
  <div key={id} className='singleProject'></div>
)
 })
 }
 </div>

    </section>
  )
}

export default Project