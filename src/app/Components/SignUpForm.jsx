'use client'

import React, { useState } from 'react'
// import { login } from '../lib/auth'
import { handleSignUp, login, testActions } from '../actions'
import Input from './Input'
// import { signUp } from '../lib/auth'

function SignUp() {
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const fData = Object.fromEntries(formData)
    //     console.log(fData);
    //     // console.log(process.browser);
    //     // login(fData)
    //     // console.log(123);
    // }
  const [signUpDetails, setsignUpDetails] = useState({
    username: '',
    password: '',
    cpassword: ''
  })
  function handleChange(e) {
    console.log(signUpDetails);
    setsignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  function handlesubmit(signUpDetails) {
    // 'use server'
    // e.preventDefault()
    console.log(signUpDetails);
    handleSignUp(signUpDetails)
  }
  return (
    <div>
        <div className="w-1/4 mx-auto h-full flex justify-center items-center flex-col">
            <div className='text-center mb-6'>Sign Up</div>
            <form className='flex flex-col'>

                <Input id='username' name='username' title='Username' type='text' value={signUpDetails.username} onchange={handleChange}/>
                <Input id='password' name='password' title='Password' type='password' value={signUpDetails.password} onchange={handleChange}/>
                <Input id='cpassword' name='cpassword' title='Confirm Password' type='password' value={signUpDetails.cpassword} onchange={handleChange} labelClass={signUpDetails.password!==signUpDetails.cpassword && 'text-red-600'}/>
                
                <button type="submit" onClick={(e)=>{
                  e.preventDefault()
                  handlesubmit(signUpDetails)
                }} className='self-center transition-all ease-in-out duration-300 rounded-full hover:bg-gray-400 mt-4 border-1 border-gray-200 bg-gray-200 w-fit py-3 px-4 hover:px-8 tracking-wider hover:tracking-extra-wide active:border active:border-gray-700 active:bg-gray-400'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp