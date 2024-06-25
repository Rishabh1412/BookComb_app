import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Courses from './courses/Courses';
import Contact from './contact/contact';
import About from './about/about';
import Description from './components/description';

const App = () => {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default App;
