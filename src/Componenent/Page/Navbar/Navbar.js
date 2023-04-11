import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {setIsOpen(!isOpen);
  // };

  return (
    <nav className={Style.navbar}>
      <div className='logo-container d-flex'>
    <div className='d-flex'>
    <div className="navbar-image-container"></div>
    <div className='navbar-heading-container'>
   <h4>Tiny Leaf Tea house</h4>
   </div>
   </div>
   <div className='hamburger-menu' onClick={() => setIsOpen(!isOpen)}>
    {
      isOpen ? (<img src={Close} alt= "close-tag"/>) :  (<img src={Menu}  alt= "meno-tag"/>)
    }

   </div>
  </div>
      <ul className={`list-items ${isOpen ? "show-items": ""} `}>
        <li><Link to="/" className={ Style.nav_link}>Home</Link></li>
        <li><Link to="/about" className={ Style.nav_link}>About</Link></li>
        <li><Link to="/skills" className={ Style.nav_link}>Skills</Link></li>
        <li><Link to="portfolio/" className={ Style.nav_link}>Portfolio</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;




