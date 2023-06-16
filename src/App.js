import React from 'react'
import "./App.css"
import Navbar from './Componenent/Page/Navbar/Navbar'
import Home from './Componenent/Page/Home Section/Home'
import Skills from './Componenent/Page/Skills Section/Skills'
import About from './Componenent/Page/About Section/About'
import Project from './Componenent/Page/Project Section/Project'
import Footer from './Componenent/Page/Footer.js/Footer'
import Contact from './Componenent/Page/Contact Section/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
   <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App

