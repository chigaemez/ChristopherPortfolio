import React from 'react'
import { Link } from 'react-scroll'
import Typed from 'react-typed'
import './Body.css'

const Body = () => {
  return ( 
    <div className='Body ' id = 'Hero'>
      <div className="main-info container-fluid">
        <h1>web development and web design</h1>
  
        <Typed 
          className='typed-text'
          strings={["web design.", "web development.", "react developer.", "java programming."]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500} className='contact-me nav-link text-light'> contact me</Link>
      </div>
    </div>
  )
}

export default Body
