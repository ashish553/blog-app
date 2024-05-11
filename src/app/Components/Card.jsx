'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { UserProfileCtx } from '../context/userprofile'
import Link from 'next/link'
import { deleteBlogDetails } from '../actions'


function Card({ id, heading, desc, blogtags, blogDate, image, isDashboard, setBlogs, blogs }) {
    // console.log(blogDate);

    
    

    const {userProfile} = useContext(UserProfileCtx)

    const handleDelete = async () => {
        const blogid = parseInt(id.split('-')[1])
        console.log(blogid);
        // const res = await deleteBlogDetails(blogid)
        // console.log('res delte', res);
        const temp = blogs.filter(blog=>{
            console.log(blog.blog_id);
            return blog.blog_id !== blogid
        })
        console.log('temp',temp);
        setBlogs([...temp])
    }

    const card1 = gsap.timeline({ paused: true })
    const tag = gsap.timeline({ paused: true })
    const descr = gsap.timeline({ paused: true })
    const day = gsap.timeline({ paused: true })
    useEffect(() => {
        card1.to(`#${id} .content-container`, {
            height: '100%',
            overwrite: true,
            ease: 'power2.inOut',
            duration: 0.3
        }, 0)
        tag.to(`#${id} .tag`, {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            height: '5%',
            ease: 'power3.inOut',
            gap: '8px',
            duration: 0.3,
        }, 0.15)
        descr.to(`#${id} .description`, {
            opacity: 1,
            height: 'auto',
            duration: 0.3,
            // ease: 'power2.out',
        })
        day.to(`#${id} .day`, {
            fontWeight: 'normal',
            fontSize: '0.8rem',
        }, 0.15)
        gsap.fromTo(`#${id}`, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
        })
    })


    const handleMouseEnter = () => {
        tag.play()
        card1.play()
        descr.play()
        day.play()
    };

    const handleMouseLeave = () => {
        tag.reverse()
        card1.reverse()
        descr.reverse()
        day.reverse()
    };

    return (
        <div id={id} style={{ backgroundImage: `url(${image})` }} className={"bg-cover opacity-0 box m-4 shadow-lg hover:shadow-xl"} tabIndex='0' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleMouseEnter} onBlur={handleMouseLeave}>
            <div className="tag w-1/6 p-3 flex flex-col absolute items-center">
                <p className="day text-center font-bold text-lg">{blogDate[2]}</p>
                <p className="text-center text-xs">{blogDate[1]}</p>
                <p className="text-center text-xs">{blogDate[0]}</p>
            </div>
            <div className="content-container px-3 py-5 absolute -bottom-6 w-full bg-white">
                <div className="card-header flex flex-wrap justify-start mb-3">
                    {/* <p className="text-xs">Joe Dane</p>
                    <p className='text-xs'>+</p> */}
                    {blogtags.map((eachtag, index) => <p key={index} className="bg-aquamarine text-xs py-1 px-4 mr-2 mb-1 cursor-default">{eachtag}</p>)}
                </div>
                <div className="heading-container">
                    <h1 className='text-2xl font-extralight mb-5'>{heading}</h1>
                </div>
                <div className='flex flex-col justify-between description opacity-0 h-0'>
                    <p>{desc}</p>
                    {
                        isDashboard && <div className="absolute flex gap-3 bottom-10">
                            <button onClick={handleDelete} className="bg-[red] rounded-full px-6 py-2 shadow text-sm font-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </button>
                            <button className="bg-[#b8c2cc] rounded-full px-6 py-2 shadow text-sm font-normal">
                                <Link href={`/edit/${id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </Link>

                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card