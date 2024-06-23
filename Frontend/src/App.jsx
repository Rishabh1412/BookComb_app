import React from 'react';
import Home from "./home/home";
import Courses from "./courses/Courses";
import {Route, Routes} from "react-router-dom"
import Signup from "./components/signup"
import Contact from './contact/contact';
import About from './about/about'
import Login from './components/login'

const App = () => {
  return (
    <>
   {/* <div className='bg-white'> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>

   {/* </div> */}
    </>  )
}

export default App