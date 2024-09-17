import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    <div className="App">
      <Navbar className="Navbar"/>
      <Intro/>
      <AboutMe/><br></br>
      <Projects/>
      <h1>Blogs</h1>
      <Blogs/>
      <Contact/>
      
    </div>
  );
}

export default App;
