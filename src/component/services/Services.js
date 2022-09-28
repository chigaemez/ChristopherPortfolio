import React from 'react'
import './services.css'
import {FaFileCode, FaReact, FaJava } from 'react-icons/fa'

 

const Services = () => {

  return (
    <div className="service row" id='Services'>
      <h1 className='header'>Services</h1>
      <div className="service-holder col  m-70">
        <div className="web-design col justify-content-start p-70">
          <FaFileCode className='icon'/>
          <header>Web Design</header>
          <p>I approach each project individually and always focus on the result.</p>
        </div>
        <div className="web-design col  justify-content-start m-70">
        <FaFileCode className='icon'/>
          <header>Web Development</header>
          <p>your website is build with an new proven technologies</p>
        </div>
        <div className="web-design col justify-content-start m-70">
          <FaJava className='icon'/>
          <header>Java Programming</header>
          <p>Authenticate and maintaining your Application and others</p>
        </div>
        <div className="web-design col">
        <FaReact className='icon'/>
          <header>React Development</header>
          <p>We use new technologies create by facebook to make your Application more efficient</p>
        </div>
      </div>
    </div>
  )
}

export default Services
