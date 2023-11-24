import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Singup = () => {
  const [email , setEmail]= useState('')
  const [Password , setPassword]= useState('')
  const {signUp}= UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signUp(email, Password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='text-white w-full h-screen'>
      <img className='hidden sm:block absolute object-cover w-full h-full -z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div  className='fixed top-0 left-0 bg-black/30 h-screen w-full '></div>
      <div className='w-full fixed top-20 py-24 px-4 z-50 h-full'>
        <div className='max-w-[435px] w-full h-[550px] bg-black/80 mx-auto rounded-md'>
          <div className='w-[320px] mx-auto py-16'>

          <h2 className='text-3xl font-semibold mb-4'>Sing Up</h2>
          <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 mb-6'>
            <input onChange={(e) => setEmail(e.target.value)} className='text-white bg-gray-600 py-3 px-3' type="text" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='text-white bg-gray-600 py-3 px-3' type="text" placeholder='Password' />
          </div>
          <button className='btn w-full py-3 mb-5'>Sing Up</button>
          
          <div className='flex items-center justify-between text-gray-600 text-[15px] mb-9'>
            <div className='flex items-center gap-1 cursor-pointer'><input type="checkbox" name="" id="" /><p>Remember me</p></div>
            <p>Need Help?</p>
          </div>
          <p><span className='text-gray-600'>Already Subscribed to netflix?  </span><Link to={'/login'}>Signin</Link></p>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singup
