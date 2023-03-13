import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Elements/Welcome/welcome';
import About from './Elements/About/about';
import Courses from './Elements/Courses/courses';
import Experience from './Elements/Experience/experience';
import SkillsandLenguages from './Elements/Languages/skillsandlenguages';
import Nav from './Elements/Nav/nav';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/skills-lenguages' element={<SkillsandLenguages/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
