import React from 'react'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contacts from './components/contacts/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Main from './components/main/main.jsx'
import {MdOutlineEmail} from "react-icons/md"
import {BiMenuAltRight} from 'react-icons/bi'
import {BsFillMoonFill} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from "react-icons/fa"

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
    
  )
}

export default App