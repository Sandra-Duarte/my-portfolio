import React from 'react'
import {TbBrandReactNative} from "react-icons/tb"
import {IoLogoJavascript} from "react-icons/io"
import {SiCss3} from "react-icons/si"
import {SiHtml5} from "react-icons/si"
import {FiFigma} from "react-icons/fi"
import {BsFillBootstrapFill} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {TbBrandVscode} from "react-icons/tb"
import "./Skills.scss"




const Skills = () => {
  return (
    <section id = "skill" className='skills Container'>
  <div className='sectionTitle'>
  <span className='titleNumber'>02.</span>
  <h5 className='titleText'>Skills
  <div className='underline'><span></span> </div>
  </h5>
  </div>
  {/* skills container */}
  <div className='skillsContainer grid'>
    {/* single Group of Skill */}
    <div className='skillGroup'>
     <div className='groupTitle'> <h2 className='title'>Web Development</h2>
     <span className='subTitle'>
       2 Yeas Experience
       </span>
     </div>
     <div className='generalSkills'>
      {/* single skill div */}
      <div className='singleSkill'>
        <div className='iconBox flex'>
          <TbBrandReactNative className= "icon"/>
        </div>
       <span className='skillName'>React</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <IoLogoJavascript className= "icon"/>
        </div>
       <span className='skillName'>JavaScript</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <SiCss3 className= "icon"/>
        </div>
       <span className='skillName'>CSS</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <SiHtml5 className= "icon"/>
        </div>
       <span className='skillName'>HTML</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <FiFigma className= "icon"/>
        </div>
       <span className='skillName'>Figma</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <BsGithub className= "icon"/>
        </div>
       <span className='skillName'>Git</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <BsFillBootstrapFill className= "icon"/>
        </div>
       <span className='skillName'>Bootstrap</span>
      </div>

      <div className='singleSkill'>
        <div className='iconBox flex'>
          <TbBrandVscode className= "icon"/>
        </div>
       <span className='skillName'>Vscode</span>
      </div>

     </div>
    </div>

  </div>


    </section>
  )
}

export default Skills