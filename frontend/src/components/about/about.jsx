import React from 'react'
import './about.css'
import ME from '../../assests/ME.PNG'
import {GiSkills} from 'react-icons/gi'
import {GoFileSubmodule} from 'react-icons/go'
import {MdDesignServices} from 'react-icons/md'
import {AiFillHtml5} from 'react-icons/ai'
import {DiReact} from 'react-icons/di'
import {DiPython} from 'react-icons/di'


const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
          <div className= "profile-area">
          <div className = "outer-circle">
            <span class = 'icons'><MdDesignServices /></span>
            <span class = 'icons'><AiFillHtml5 /></span>
            <span class = 'icons'><DiReact /></span>
            <span class = 'icons'><DiPython /></span>
          </div>
          <div className = "inner-circle">
            <img src = {ME} alt = 'me' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'><a href='#experience'>
              <GiSkills className='about_icon'/>
              <h5>Skills</h5></a>
            </article>

            <article className='about_card'><a href = "#portfolio">
              <GoFileSubmodule className='about_icon'/>
              <h5>Portfolio</h5></a>
            </article>
          </div>

          <p>
          I'm Shermaine, currently an AI Explorer at ght. I enjoy creating visuals, developing websites and systems, and challenging the limits of what AI can do beyond humanity. Feel free to view my following projects :D
          </p>

          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About