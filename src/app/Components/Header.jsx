'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
// import logo from '/assets/img/logo.JPG'
import logo from '../assets/img/logoNew.png'
// import logo1 from '../assets/img/nocap-logo.png'
import logo1 from '../assets/img/another.png'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { UserProfileCtx } from '../context/userprofile'
import { deleteCookies, getCookies } from '../actions'
import { useRouter } from 'next/navigation'
import { LoggedCtx } from '../context/Logged'
// import { redirect } from 'next/dist/server/api-utils'

function Header() {
  const { loggedin, setloggedin } = useContext(LoggedCtx)
  const route = useRouter()
  async function logout() {
    await deleteCookies()
    route.push('/')
    setloggedin(false)
    // setuserProfile()
  }
  const { userProfile, setuserProfile } = useContext(UserProfileCtx)

  const navTimeline = useRef(gsap.timeline({ paused: true }))
  const navLinksTimeline = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    async function setUserContext() {
      const cookies = await getCookies()
      cookies?.userId && setuserProfile({ ...{ name: cookies?.userId } })
      cookies?.userId && setloggedin(true)
    }
    setUserContext()
  }, [loggedin])

  useEffect(() => {

    navTimeline.current.fromTo('#mobile-navContainer', {
      display: 'none',
      opacity: 0,
      ease: 'power3.inOut',
      duration: '1',
      xPercent: 50
    }, {
      display: 'flex',
      opacity: 1,
      ease: 'power3.inOut',
      duration: '1',
      xPercent: 0
    })

    navLinksTimeline.current.fromTo('.navLinks', {
      opacity: 0,
      yPercent: -100,
      ease: 'none',
      duration: '0.3',
    }, {
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      duration: '0.3',
    })
    // setUserContext()

  }, [])

  function showMobileNav() {
    console.log('called animation gsap');
    navTimeline.current.play().then(() => {
      navLinksTimeline.current.play();
    }).catch(error => {
      console.error('Error reversing navLinksTimeline');
    });
  }
  function closeMobileNav() {
    navLinksTimeline.current.reverse().then(() => {
      navTimeline.current.reverse();
    }).catch(error => {
      console.error('Error reversing navLinksTimeline:', error);
    });
  }

  return (
    <>
      <div className='top-0 bg-[#232222] sticky w-full z-20 navContainer'>
        <div className='px-5 w-full h-20 flex justify-between items-center'>
          <div className='imageContaner'>
            <Link href="/">
              <Image src={logo1} alt='asd' width={60} height={60} className='rounded-2xl' />
            </Link>
          </div>
          <div className='max-[768px]:hidden flex justify-between text-white text-xl font-light'>
            <div className='transition ease-in-out duration-300 mx-4 border-b-2 border-transparent hover:border-white'>
              <Link href="/">HOME</Link>
            </div>
            <div className='transition ease-in-out duration-300 mx-4 border-b-2 border-transparent hover:border-white'>
              <Link href="/blogs">BLOGS</Link>
            </div>
            <div className='transition ease-in-out duration-300 mx-4 border-b-2 border-transparent hover:border-white'>
              <Link href="/create">CREATE</Link>
            </div>
            {loggedin && <div className='transition ease-in-out duration-300 mx-4 border-b-2 border-transparent hover:border-white'>
              <Link href="/dashboard">DASHBOARD</Link>
            </div>}
          </div>
          {loggedin && <div className='max-[768px]:hidden'>
            <div>
              <span className='text-white'>
                {userProfile.name}
              </span>
              <button onClick={logout} className='ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white'>Logout</button>
            </div>
          </div>}
          {!loggedin && <div className='max-[768px]:hidden'>
            <div>
              <div className='text-xl text-white transition ease-in-out duration-300 mx-4 border-b-2 border-transparent hover:border-white'>
                <Link href="/login">LOGIN</Link>
              </div>
            </div>
          </div>}
          <div className='hidden max-[768px]:block'>
            <div>
              <button onClick={showMobileNav} className='ml-4 text-white transition-all easi-in-out duration-100 text-white px-2 py-1 text-xs rounded-md active:border-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        {/* <button className="ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white" onClick={showMobileNav}>++</button> */}

      </div>
      <div id="mobile-navContainer" className="bg-[#232222] navContainer h-full w-full hidden absolute mobileHeader flex-col items-center justify-start">
        <div className='flex justify-between w-full px-4 items-center'>
          <Image src={logo1} alt='asd' width={80} height={80} className='rounded-full mb-4 mt-5' />
          <div className='hidden max-[768px]:block mt-4'>
            <div>
              <button onClick={closeMobileNav} className='text-white transition-all ease-in-out duration-100 text-white px-4 py-1 text-xs rounded-md active:border-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between text-white mt-10 text-2xl items-center font-semibold'>
          <div className='navLinks mx-4 my-1'>
            <Link href="/" onClick={closeMobileNav}>HOME</Link>
          </div>
          <div className='navLinks mx-4 my-1'>
            <Link href="/blogs" onClick={closeMobileNav}>BLOGS</Link>
          </div>
          <div className='navLinks mx-4 my-1'>
            <Link href="/create" onClick={closeMobileNav}>CREATE</Link>
          </div>
          {loggedin && <div className='navLinks mx-4 my-1'>
            <Link href="/dashboard" onClick={closeMobileNav}>DASHBOARD</Link>
          </div>}
          {!userProfile.name && <>
            <div className='navLinks mx-4 my-1'>
              <Link href="/login" onClick={closeMobileNav}>LOGIN</Link>
            </div>
            <div className='navLinks mx-4 my-1'>
              <Link href="/signup" onClick={closeMobileNav}>SIGN UP</Link>
            </div>
          </>}
        </div>
        <div className='navLinks'>
          {loggedin && <div className='mt-10'>
            <span className='text-white'>
              {userProfile.name}
            </span>
            <button className='ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white'>Logout</button>
          </div>}
        </div>

      </div>
    </>
  )
}

export default Header