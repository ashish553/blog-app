import { ToastContainer } from 'react-toastify'
import SignUp from '../Components/SignUpForm'
import React from 'react'

function Page() {
  return (
    <div className='h-[calc(100%-5rem)] flex justify-center items-center'>
        <SignUp />
        {/* <ToastContainer /> */}
    </div>
    
  )
}

export default Page