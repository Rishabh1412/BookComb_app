import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

function login() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
        <div className=" bg-base-300 flex h-screen items-center justify-center ">
        
        <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
            
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input 
                type='email' 
                placeholder='Your email' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })} /><br/>
                 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div  className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input 
                type='password' 
                placeholder='Password'  
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })} /><br/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                <p>Not registered? <Link to={"/signup"}><span className='underline text-blue-500 cursor-pointer'>SignUp</span></Link></p>
            </div>
            </form>
        </div>
        </div>
      
    </div>
  )
}

export default login
