
import React from 'react'
import "./About.scss"
import {TbCloudDownload} from "react-icons/tb"
import Sandra from "../../../img/sandra.jpg"

const About = () => {
  return (
  <section id="about" className='about section Container'>
 <div className='sectionTitle'>
  <span className='titleNumber'> 01.</span>
  <h5 className='titleText'> About Me
  <div className='underline'><span></span></div>
  </h5>

 </div>
<div className='sectionContent grid'>
  <div className='textSection'>
    <h4> Recently completing Code Your Future comprehensive 10-month Front end Web Developer course, I am now seeking a dynamic company that values diversity and inclusivity, providing me with an opportunity to make a meaningful impact with my skills.

    </h4>
    <div className='aboutBtn'>
      <a href = "Sandra Duarte.pdf" download="Sandra Duarte.pdf" className="flex">
        Download CV<TbCloudDownload className="icon"/>
      </a>
    </div>

    fafafafa
 </div>
 <div className='aboutImgDiv'>
  <img src={Sandra} alt="sandra" className='aboutImg'/>
 </div>
</div>

  </section>

  )
}

export default About