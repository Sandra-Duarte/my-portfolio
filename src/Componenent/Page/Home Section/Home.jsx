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
           <p className='homeParagraph'>As a recent graduate of a coding bootcamp, I am eager to secure my first role in the tech industry!</p>


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