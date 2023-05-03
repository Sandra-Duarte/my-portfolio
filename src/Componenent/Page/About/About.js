import React from 'react'
import "./About.css"

const About = () => {
  return (
  <section id="about" className='about section container'>
 About Componenent
 <div className='sectionTitle'>
  <span className='titleNumber'> 01.</span>
  <h5 className='titleText'> About Me
  <div className='underline'><span></span></div>
  </h5>

 </div>
<div className='sectionContent grid'>
  <div className='textSection'>
    <h4>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</h4>
 </div>
</div>

  </section>
  )
}

export default About