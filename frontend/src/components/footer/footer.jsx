import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>SHERMAINE</a>

      <ul className='permalinks'>
        <li><a href = "#">Home</a></li>
        <li><a href = "#about">About</a></li>
        <li><a href = "#experience">Skills</a></li>
        <li><a href = "#portfolio">Portfolio</a></li>
        <li><a href = "#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='mailto:shermainepehcm@gmail.com' target="_blank"><MdOutlineEmail /></a>
        <a href = "https://www.linkedin.com/in/pehshermaine0704/" target = "_blank"><FaLinkedin /></a>
        <a href = "https://github.com/ShermainePeh08" target = "_blank"><FaGithub /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Shermaine. All rights reserved</small>
      </div>
      
    </footer>
  )
}

export default Footer