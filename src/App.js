import React from 'react'
import "./App.css"
import Navbar from './Componenent/Page/Navbar/Navbar'
import Home from './Componenent/Page/Home/Home'
import Skills from './Componenent/Page/Skills/Skills'
import About from './Componenent/Page/About/About'
// import Skills from "./Componenent/Page/Skills/Skills"
// import Project from './Componenent/Page/Project/Project'
// import Footer from './Componenent/Page/Footer.js/Footer'
// import Contact from './Componenent/Page/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
   <About/>
    <Skills/>
    {/* <Project/>
    <Contact/>
    <Footer/> */}

    </>
  )
}

export default App

