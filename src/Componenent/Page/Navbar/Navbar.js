import React from 'react'
import "./Navbar.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"




const Navbar = () => {
  return (
    <header className='header'>
<div className='logoDiv'>
  <h1 className='logo'> <a href='#Home'> AII.</a> </h1>
</div>

<div className='navBar'>
<ul className='navLists'>
<li className="navItem">
  <a href='#about' className='navLink'>1.
  <span>About</span></a>
  </li>
  <li className="navItem">
  <a href='#skills' className='navLink'>1.
  <span>Skills</span></a>
  </li>
  <li className="navItem">
  <a href='#projects' className='navLink'>1.
  <span>Projects</span></a>
  </li>
  <li className="navItem">
  <a href='#contact' className='navLink'>1.
  <span>Contact</span></a>
  </li>
<button className='btn'>  </button>

</ul>
<div className='closeNavBar'>
  <AiFillCloseCircle className ="icon"/>
</div>

</div>
<div className='toggleNavBar'>
  <TbGridDots className="icon"  />
</div>

    </header>
  )
}

export default Navbar



