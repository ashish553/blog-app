'use client'

import React, { useContext } from 'react'
// import { login } from '../lib/auth'
import { login } from '../actions'
import Input from './Input'
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { UserProfileCtx } from '../context/userprofile'
import { LoggedCtx } from '../context/Logged'

function LoginForm() {
    const {setloggedin} = useContext(LoggedCtx)
    function callToastMsg(result) {
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
    }
    return (
        <div className={`max-[450px]:w-8/12 md:w-4/12 lg:w-3/12 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 ease-in-out ${true ? 'hover:shadow-[-5px_5px_10px_0px_rgba(109,40,217)]' : 'hover:shadow-[-5px_5px_10px_0px_rgba(255,0,0)]'} shadow-md w-3/12 mx-auto h-fit flex justify-center items-center flex-col py-10 px-12 rounded-2xl bg-lavender`}>
            <div className='text-center'>Login</div>
            <form action={async (formData) => {
                // "use server"
                const res = await login(formData)
                console.log(res);
                // console.log(result);
                const name = formData.get('username')
                console.log(name);
                res.status === 200 && setloggedin(true);
                // setresult(res)
                callToastMsg(res)
                redirect('/')

            }} className='flex flex-col'>
                {/* <label htmlFor="username" className='mt-4 mb-3'>Username</label> */}
                <Input type="text" id="login" name='username' title='Username' />
                {/* <Input type="text" id="login name/> */}
                {/* <label htmlFor="password" className='mt-4 mb-3'>Password</label> */}
                <Input type="password" id="pass" name='password' title='Password' />
                <button type="submit" className='bg-lavender-2 self-center transition-all ease-in-out duration-300 rounded-full mt-4 border-1 border-gray-200 bg-gray-200 w-fit py-3 px-4 hover:px-8 tracking-wider hover:tracking-extra-wide'>Login</button>
            </form>

        </div>
    )
}

export default LoginForm