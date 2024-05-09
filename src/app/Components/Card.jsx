'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


function Card({ id, heading, desc, blogtags, blogDate, image }) {
    // console.log(blogDate);
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
        },0)
        tag.to(`#${id} .tag`,{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            height: '5%',
            ease: 'power3.inOut',
            gap: '8px',
            duration: 0.3,
        },0.15)
        descr.to(`#${id} .description`,{
            opacity: 1,
            height: 'auto',
            duration: 0.3,
            // ease: 'power2.out',
        })
        day.to(`#${id} .day`,{
            fontWeight: 'normal',
            fontSize: '0.8rem',
        },0.15)
        gsap.fromTo(`#${id}`,{
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
        <div id={id} style={{ backgroundImage: `url(${image})` }} className={" opacity-0 box m-4 shadow-lg hover:shadow-xl"} tabIndex='0' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleMouseEnter} onBlur={handleMouseLeave}>
            <div className="tag w-1/6 p-3 flex flex-col absolute items-center">
                <p className="day text-center font-bold text-lg">{blogDate[2]}</p>
                <p className="text-center text-xs">{blogDate[1]}</p>
                <p className="text-center text-xs">{blogDate[0]}</p>
            </div>
            <div className="content-container px-3 py-5 absolute -bottom-6 w-full bg-white">
                <div className="card-header flex flex-wrap justify-start mb-3">
                    {/* <p className="text-xs">Joe Dane</p>
                    <p className='text-xs'>+</p> */}
                    {blogtags.map((eachtag,index)=><p key={index} className="bg-aquamarine text-xs py-1 px-4 mr-2 mb-1 cursor-default">{eachtag}</p>)}
                </div>
                <div className="heading-container">
                    <h1 className='text-2xl font-extralight mb-5'>{heading}</h1>
                </div>
                <p className='description opacity-0 h-0'>{desc}</p>
            </div>
        </div>
    )
}

export default Card