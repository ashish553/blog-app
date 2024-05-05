import React, { useEffect } from 'react'
// import logo from '/assets/img/logo.JPG'
import logo from '../assets/img/logoNew.png'
// import logo1 from '../assets/img/nocap-logo.png'
import logo1 from '../assets/img/another.png'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

function Header() {
  
  const navTimeline = gsap.timeline({paused: true})
  const navLinksTimeline = gsap.timeline({paused: true})

  useEffect(() => {
    navTimeline.fromTo('#mobile-navContainer',{
      display: 'none',
      opacity: 0,
      ease: 'power3.inOut',
      duration: '1',
      xPercent: 50
    },{
      display: 'flex',
      opacity: 1,
      ease: 'power3.inOut',
      duration: '1',
      xPercent: 0
    })

    navLinksTimeline.fromTo('.navLinks',{
      opacity: 0,
      yPercent: -100,
      ease: 'power3.inOut',
      duration: '0.8',
    },{
      opacity: 1,
      yPercent: 0,
      ease: 'power3.inOut',
      duration: '0.7',
    })
  
  }, [])
  
  function showMobileNav() {
    navTimeline.play()
    navLinksTimeline.play()
    // navTimeline.to('#mobile-navContainer',{
    //   display: 'flex',
    //   opacity: 1,
    //   ease: 'power3.inOut',
    //   duration: '1'
    // })
  }

  function closeMobileNav() {
    navLinksTimeline.reverse()
    navTimeline.reverse()
    // navTimeline.to('#mobile-navContainer',{
    //   display: 'none',
    //   opacity: 0,
    //   ease: 'power3.inOut',
    //   duration: '1'
    // })
  }

  return (
    // <div className="relative">
    <div className='navContainer'>
      <div className='z-10 sticky top-0 px-5 w-full h-20 bg-[#a0a0eb] flex justify-between items-center'>
        <div className='imageContaner'>
          <Image src={logo1} alt='asd' width={80} height={80} className='rounded-full' />
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
        </div>
        <div className='max-[768px]:hidden'>
          <div>
            Ashish
            <button className='ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white'>Logout</button>
          </div>
        </div>
        <div className='hidden max-[768px]:block'>
          <div>
            <button onClick={showMobileNav} className='ml-4 bg-gray-600 text-white transition-all easi-in-out duration-100 text-white border border-gray-600 px-2 py-1 text-xs rounded-md active:border-white'>+</button>
          </div>
        </div>
      </div>
      {/* <button className="ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white" onClick={showMobileNav}>++</button> */}

      <div id="mobile-navContainer" className="navContainer h-full w-full hidden absolute mobileHeader flex-col items-center justify-start">
        <div className='flex justify-between w-full px-4 items-center'>
          <Image src={logo1} alt='asd' width={80} height={80} className='rounded-full mb-4 mt-5' />
          <div className='hidden max-[768px]:block mt-4'>
            <div>
              <button onClick={closeMobileNav} className='bg-gray-600 text-white transition-all ease-in-out duration-100 text-white border border-gray-600 px-4 py-1 text-xs rounded-md active:border-white'>{'<-'}</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between text-white mt-10 text-2xl items-center font-semibold'>
          <div className='navLinks mx-4 my-1'>
            <Link href="/">HOME</Link>
          </div>
          <div className='navLinks mx-4 my-1'>
            <Link href="/blogs">BLOGS</Link>
          </div>
          <div className='navLinks mx-4 my-1'>
            <Link href="/create">CREATE</Link>
          </div>
        </div>
        <div className='navLinks'>
          <div className='mt-10'>
            Ashish
            <button className='ml-4 bg-rose-600 text-white transition-all easi-in-out duration-100 text-white border border-rose-600 px-2 py-1 text-xs rounded-md active:border-white'>Logout</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header