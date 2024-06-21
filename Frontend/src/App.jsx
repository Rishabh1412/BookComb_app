import React from 'react';
import Home from "./home/home";
import Courses from "./courses/Courses";
import {Route, Routes} from "react-router-dom"
import Signup from "./components/signup"
import Contact from './contact/contact';

const App = () => {
  return (
    <>
   {/* <div className='dark:bg-slate-900 dark:text-white'> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

   {/* </div> */}
    </>  )
}

export default App