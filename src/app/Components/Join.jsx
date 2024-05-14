import React from 'react'
import joinBg from '../assets/img/peakpx0.jpg'
import '../assets/scss/home.scss'

function Join() {
    return (
        <div className='join mt-10 pt-20 pb-10'>
            <div className="content w-6/12 m-auto text-center">
                <h2 className="text-3xl font-light text-white">
                    Share Your Voice With the World!
                </h2>
                <p className='mt-4 text-white'>
                    Join our community of passionate bloggers and share your insights with thousands of readers. Whether youre a seasoned writer or a first-timer, your voice matters. Build your profile, enhance your portfolio, and connect with like-minded individuals as you bring your unique perspective to our audience.
                </p>
                {/* <button > */}
                <a href="/signup" type="button" class="mt-10 inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 focus:bg-indigo-800 active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">
                    Join Us Today
                </a>
            </div>
        </div>
    )
}

export default Join