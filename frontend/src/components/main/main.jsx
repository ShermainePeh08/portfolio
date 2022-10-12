import React from 'react'
import './main.css'
import {BsMoon} from 'react-icons/bs'
import CTA from './cta'
import Skate from '../../assests/skate.gif'

const Main = () => {
  return (
    <main>
      <div className="container main_container">
        <h2>Hello, I'm</h2>
        <h1>Shermaine</h1>
        <h4 className='text-light'>Data Analytics, AI & Web Development</h4>
        {/* <CTA /> */}
        <img src= {Skate} />
      </div>
    </main>
  )
}

export default Main