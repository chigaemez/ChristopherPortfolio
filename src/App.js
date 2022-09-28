import Header from './component/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from './component/container/Body';
import About from './component/About/About';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import './App.css';
import React, { useRef } from 'react';

function App() {

  const contactsection = useRef(null);

  const gotoAbout = () => window.scrollTo({top: contactsection.current.offsetTop, behavior: 'smooth'})
  return (
    <>

      <Header gotoAbout={gotoAbout} />
      <Body />
      <About   />
      <Services />
      <Portfolio />
      <Contact set={contactsection} />



    </>

  );
}

export default App;
