import React, { useState } from 'react';
import "./Navbar.scss"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {
const [active, setActive] = useState("navBar");
//this will bring in the navbar from the top

const showNavBar = ()=>{
  setActive("navBar activeNavbar")
}

//this will hide the navbar again.
const removeNavBar =() =>{
  setActive("navBar")
}

const[activeHeader, setactiveHeader] = useState("header")
const addBg = () =>{
  if(window.scrollY >= 10){
    setactiveHeader("header activeHeader")
  }
  else{
    setactiveHeader("header")
  }
}
window.addEventListener("scroll", addBg)
// const Navbar = () => {
  return (
    <header className={activeHeader}>
<div className='logoDiv'>
  <h1 className='logo'> <a href='#home'>Ai.</a> </h1>
</div>

<div className={active}>
<ul  onClick={removeNavBar} className='navLists'>
<li className="navItem">
  <a href='#about' className='navLink'>
  <span className='headerNumber'>1.</span>About</a>
  </li>
  <li className="navItem">
  <a href='#skills' className='navLink'>
  <span className='headerNumber'>2.</span>Skills</a>
  </li>
  <li className="navItem">
  <a href='#projects' className='navLink'>
  <span className='headerNumber'>3.</span>Projects</a>
  </li>
  <li className="navItem">
  <a href='#contact' className='navLink'>
  <span className='headerNumber'>4.</span>Contact</a>
  </li>
<button className='btn'> <a href="Sandra UML.docx" download="Sandra UML.docx">Resume</a> </button>


</ul>
<div onClick={removeNavBar} className='closeNavBar'>
  <AiFillCloseCircle className ="icon"/>
</div>

</div>
<div onClick={showNavBar} className='toggleNavBar'>
  <TbGridDots className="icon"  />
</div>

    </header>
  )
}

export default Navbar



