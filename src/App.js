
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Aboutme from './components/About-me';
import Project from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollTotop';
import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      <Nav />
        <Routes>
        <Route path="/" element={<Aboutme />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/about-me" element={<Aboutme />}/>
        <Route path="/contact-me" element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
