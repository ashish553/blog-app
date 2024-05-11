'use client'
import React from 'react'
import LoginForm from '../Components/LoginForm'
import { ToastContainer, toast } from 'react-toastify'

function Page() {
  return (
    <div className='h-[calc(100%-5rem)] flex justify-center items-center '>
      <LoginForm />
      {/* <div className='mt-20'>
        <ToastContainer/>
      </div> */}
    </div>
  )
}

export default Page