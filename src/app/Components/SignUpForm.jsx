'use client'

import React, { useState } from 'react'
// import { login } from '../lib/auth'
import { handleSignUp, login, testActions } from '../actions'
import Input from './Input'
import {toast } from 'react-toastify'
import Link from 'next/link'

function SignUp() {
  const [signUpDetails, setsignUpDetails] = useState({
    username: '',
    password: '',
    cpassword: ''
  })
  const [spin, setspin] = useState(false)
  
  function handleChange(e) {
    console.log(signUpDetails);
    setsignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  async function handlesubmit(signUpDetails,setspin) {
    console.log(signUpDetails);
    const result = await handleSignUp(signUpDetails)
    console.log('res', result);
    result.status === 200 ? toast.success(result.msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  }) : toast.error(result.msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  })
  

    // setspin(false)
  }
  return (
      <div className={`transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 eease-in-out ${signUpDetails.password===signUpDetails.cpassword ? 'hover:shadow-[-5px_5px_0px_0px_rgba(109,40,217)]' : 'hover:shadow-[-5px_5px_0px_0px_rgba(255,0,0)]'} shadow-md max-[450px]:w-8/12 md:w-4/12 lg:w-3/12 mx-auto h-fit flex justify-center items-center flex-col py-10 px-12 rounded-2xl bg-lavender`}>
          <div className='text-center mb-6'>Sign Up</div>
          <form onSubmit={async (e)=>{
                e.preventDefault()
                setspin(true)
                await handlesubmit(signUpDetails,setspin)
                setspin(false)
              }} className='flex flex-col'>

              <Input id='username' name='username' title='Username' type='text' value={signUpDetails.username} onchange={handleChange} pattern={'^[a-z][A-Za-z0-9_]{7,29}$'}/>
              <Input id='password' name='password' title='Password' type='password' value={signUpDetails.password} onchange={handleChange}/>
              <Input id='cpassword' name='cpassword' title='Confirm Password' type='password' value={signUpDetails.cpassword} onchange={handleChange} labelClass={signUpDetails.password!==signUpDetails.cpassword && 'text-red-600'}/>
              
              <button type="submit" className='group flex justify-center items-center self-center transition-all ease-in-out duration-300 rounded-full mt-4 border-1 border-gray-200 bg-lavender-2 w-fit py-3 px-4 hover:px-8 tracking-wider hover:tracking-extra-wide active:bg-gray-400'>
                {
                  spin ? <div className="transition-all ease-in-out duration-700 group-hover:animate-spin spinner w-4 h-4 border-2 border-black border-t-transparent rounded-full" /> : <div className="border-2 border-transparent h-4 flex justify-center items-center" >Sign Up</div>
                }
                
              </button>
              <p className='mt-3 text-center text-sm'>Already have an account? <span className='hover:text-[blue]'><Link href='/login'>Login</Link></span></p>
          </form>
      </div>
  )
}

export default SignUp

// signUpDetails.password!==signUpDetails.cpassword ? hover:shadow-[-5px_5px_10px_0px_rgba(109,40,217)] : hover:shadow-[-5px_5px_10px_0px_rgba(255,0,0)]