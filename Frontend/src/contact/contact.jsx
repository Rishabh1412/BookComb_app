import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form"


function contact() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <>
    <Navbar/>
    <div className=" bg-black flex h-screen items-center justify-center shadow-lg ">
         <div className="modal-box w-96">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            {/* <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link> */}
            
            <h3 className="font-bold text-lg text-white">Contact Us</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input 
                autoFocus
                type='text' 
                placeholder='Your name' 
                className='w-80 px-3 py-2 border-none rounded-md outline-none'
                {...register("email", { required: true })} /><br/>
                 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input 
                type='email' 
                placeholder='Your email' 
                className='w-80 px-3 py-2 border-none rounded-md outline-none'
                {...register("email", { required: true })} /><br/>
                 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div  className='mt-4 space-y-2'>
                <span>Message</span>
                <br/>
                <textarea 
                // type='textarea' 
                // placeholder='Your message'  
                placeholder='Message....'
                className=' w-80 h-20 px-3 py-1 border-none rounded-md outline-none'
                {...register("password", { required: true })} ></textarea><br/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className=' left-0 ml-5 justify-around mt-4'>
                <button className='bg-yellow-500 text-black rounded-md px-3 py-1 hover:bg-yellow-700 duration-200'> Send </button>
                {/* <p>Not registered? <Link to={"/signup"}><span className='underline text-blue-500 cursor-pointer'>SignUp</span></Link></p> */}
            </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default contact
