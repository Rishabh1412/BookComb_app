import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function about() {
  return (
    <>

        <Navbar/>
        <div className=' h-screen '>
          <div className='justify-center pt-24 flex'>
            <h1 className=' font-extrabold text-4xl text-white'>About Us</h1>
          </div>
          <p className='p-7  px-14 md:px-24 text-gray-400'>Welcome to BookComb, a web application designed to make discovering and exploring books easier and more enjoyable. Whether you're a casual reader or a book enthusiast, BookComb offers a user-friendly interface to browse, search, and find detailed information about a wide range of books. Dive into the world of literature with ease and find your next great read with BookComb.</p>

        </div>
        <Footer/>

      
    </>
  )
}

export default about
