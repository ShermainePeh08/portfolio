import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {GoFileSubmodule} from 'react-icons/go'
import {MdOutlineMessage} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"
import {BiMenuAltRight} from 'react-icons/bi'
import {BsFillMoonFill} from 'react-icons/bs'
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <header>
        <div class="navbrand">
          <a href="">Shermaine</a>
        </div>
        <nav class="nav">
          <ul class="nav__ul">
            <li class="nav__li">
              <a href="#about" class="nav__link">About</a>
            </li>
            <li class="nav__li">
              <a href="#experience" class="nav__link">Skills</a>
            </li>
            <li class="nav__li">
              <a href="#proj" class="nav__link">Projects</a>
            </li>
            <li class="nav__li">
              <a href="#contact" class="nav__link">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="nav__socials">
          <a href='mailto:shermainepehcm@gmail.com' target="_blank"><MdOutlineEmail /></a>
          <a href = "https://www.linkedin.com/in/pehshermaine0704/" target = "_blank"><FaLinkedin /></a>
          <a href = "https://github.com/ShermainePeh08" target = "_blank"><FaGithub /></a>
          {/* <button class="change-theme-btn light" id="changeThemeBtn"><BsFillMoonFill/></button> */}
          {/* <button class="menu__btn" id="menuBtn"><BiMenuAltRight/></button> */}
        </div>
        <nav class="menu">
          <a href ="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
          <a href ="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
          <a href ="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><FiBookOpen/></a>
          <a href ="#portfolio" onClick={() => setActiveNav('#portfolio')} className= {activeNav === '#portfolio' ? 'active' : ''}><GoFileSubmodule/></a>
          <a href ="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
        </nav>
      </header>
  )
}

export default Nav