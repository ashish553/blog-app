'use client'
import React from 'react'
import LoginForm from '../Components/LoginForm'
import { ToastContainer, toast } from 'react-toastify'

function Page() {
  return (
    <div className='h-[calc(100%-5rem)] flex justify-center items-center '>
      <LoginForm />
      <ToastContainer
      />
    </div>
  )
}

export default Page