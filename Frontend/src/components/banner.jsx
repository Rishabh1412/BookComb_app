import React from 'react'
import {Link} from 'react-router-dom'

function banner() {
  return (
    <>
        <div className='w-screen-2xl h-screen container mx-auto md:px-20 px-4 flex my-10 justify-center'>
            <div className='w-full md:mt-32 mt-12 justify-center'>
                <div className='space-y-12 w-full justify-center inline-block'>
                    <h1 className='text-5xl font-bold '>BookComb, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                    <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae veritatis magnam soluta rem vero </p>
                </div>
                <p className=' w-full justify-center items-center left-10'>
                <Link to={"/course"}>
                <button className="btn btn-secondary mt-20 text-xl text-white ">Explore</button>
                </Link>
                </p>
            </div>

        </div>
    </>
  )
}

export default banner
