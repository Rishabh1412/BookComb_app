import React from 'react'
import Navbar from '../components/navbar'

function about() {
  return (
    <>

        <Navbar/>
        <div className=' h-screen '>
          <div className='justify-center md:pt-24 pt-12 flex'>
            <h1 className=' font-extrabold text-4xl text-white'>About Us</h1>
          </div>
          <p className='p-7 px-24'>Welcome to BookComb, a web application designed to make discovering and exploring books easier and more enjoyable. Whether you're a casual reader or a book enthusiast, BookComb offers a user-friendly interface to browse, search, and find detailed information about a wide range of books. Dive into the world of literature with ease and find your next great read with BookComb.</p>

        </div>

      
    </>
  )
}

export default about
