import React from 'react'
import {Link} from 'react-router-dom'

function banner() {
  return (
    <>
        <div className='w-screen-2xl h-screen container mx-auto md:px-20 px-4 flex pt-10 justify-center'>
            <div className='w-full md:mt-32 mt-12 justify-center'>
                <div className='space-y-12 w-full justify-center inline-block'>
                    <h1 className='text-5xl font-bold text-white'><span className='text-yellow-300'>BookComb</span>, Unleash your imagination with every page. </h1>
                    <p className='text-lg text-gray-500'>Expand your horizons and enrich your life through the transformative power of reading. With every book, unlock new worlds and experiences. </p>
                </div>
                <p className=' w-full justify-center items-center left-10'>
                <Link to={"/course"}>
                <button className="btn bg-black text-yellow-300 mt-20 text-xl border border-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-110 hover:rotate-6">Explore</button>
                </Link>
                </p>
            </div>

        </div>
    </>
  )
}

export default banner
