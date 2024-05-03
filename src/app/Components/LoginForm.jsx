// 'use client'

import React from 'react'
// import { login } from '../lib/auth'
import { login } from '../actions'
import Input from './Input'

function LoginForm() {

  return (
    <div>
        <div className="w-1/4 mx-auto h-full flex justify-center items-center flex-col">
            <div className='text-center'>Login</div>
            <form action={async (formData)=>{
                // "use server"
                const result = await login(formData)
                console.log(result);
                // redirect('/')

            }} className='flex flex-col'>
                {/* <label htmlFor="username" className='mt-4 mb-3'>Username</label> */}
                <Input type="text" id="login" name='username' title='Username'/>
                {/* <Input type="text" id="login name/> */}
                {/* <label htmlFor="password" className='mt-4 mb-3'>Password</label> */}
                <Input type="password" id="pass" name='password' title='Password'/>
                <button type="submit" className='self-center transition-all ease-in-out duration-300 rounded-full hover:bg-gray-400 mt-4 border-1 border-gray-200 bg-gray-200 w-fit py-3 px-4 hover:px-8 tracking-wider hover:tracking-extra-wide active:border active:border-gray-700 active:bg-gray-400'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm