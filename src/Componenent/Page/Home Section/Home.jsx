import React from 'react';
import "./Home.scss";
import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin } from "react-icons/bs"
import {TbArrowBigRightLines} from "react-icons/tb"
import {FiChevronsDown} from "react-icons/fi"



const Home = () => {
  return (
    <section id="home" className='home Section'>
      <div className='leftIcons'>
        <div className='socials grid'>
        <a href='#github' target='_blank'>
            <AiFillGithub className ="icon"/>
          </a>
          <a href='#linkedin' target='_blank'>
            <BsLinkedin className ="icon"/>
          </a>
          <div className='line'></div>
          <div className='lefIcons'></div>
          </div>
          </div>


        <div className='container homeContainer'>
           <span className='introText'> Hi my name is,</span>
           <h1 className='title'> Sandra Duarte </h1>
           <span className='subTitle'> Front-end Web Developer </span>
           <p className='homeParagraph'>Recently completing Code Your Future  10-month Front end Web Developer course, I am now seeking a dynamic company that values diversity and inclusivity, providing me with an opportunity to make a meaningful impact with my skills.</p>
           <p className='homeParagraph'>I am enthusiastic about broadening my knowledge across various domains, including software development, operations, network, and infrastructure. I am excited to explore new technologies and implement them to enhance our teams ability to deliver products with exceptional speed and efficiency.</p>

           <div className='lowerHomeSection'>
            <button className='contactBtn'>
              <a href='#contact' className='flex'> Contact Me <TbArrowBigRightLines className ="icon"/></a>
            </button>
            <div className='scrollDiv'>
            <a href='#about' className='flex'>
            <h6 className='scroll'>Scroll Down</h6>
            <FiChevronsDown className ="icon"/>
            </a>
            </div>
            </div>


           {/* right div, whith email adress */}
           <div className="rightEmail">
          <div>
           <div className='emailAddress'>
           <a href=" #https://sandra:sandjesus19@gmail.com" target='_blank'>sandjesus19@gmail.com
           </a>
           </div>

           <div className='line'></div>

           </div>
           </div>
        </div>
    </section>
  )
}

export default Home;