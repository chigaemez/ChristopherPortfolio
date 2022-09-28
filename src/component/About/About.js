import React from 'react'
import Image from './IMG_20211024_143012_456.jpg'
import './About.css'

const About = () => {
  return (
    <div className='container-fluid' id='About'>
        <div className="img"><img src={Image} alt="" /></div>
        <div className="about">
        <h1>About</h1>
        <p>Hello, my name is Christopher. I have been developing websites for over 2 years. i`m a frontend web developer. Technologies i use are "Reactjs, HTML, CSS AND JS". i create responsive that are displayed on all devices, desktops, smart phones. Ofcourse before i begin developing any web-app, landing-Page, business websites or E-commerce. I need to have a ready made project layout (Sketch). And i'm ready to do this for you, before we start developing you'r websites we will discuss all the details of your niche with, i will conduct a survey of your competitors and make a list of their advantages and weakness. all this is necessary to give your customer something your competitors do not provide. </p>
        </div>
    </div>
  )
}

export default About
