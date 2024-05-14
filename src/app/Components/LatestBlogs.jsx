import React, { useEffect, useState } from 'react'
import CardShimmer from './CardShimmer'
import LatestBlogList from './LatestBlogList'
import { getBlogs } from '../actions'

function LatestBlogs({ }) {

    const [blogs, setblogs] = useState(null)
    useEffect(() => {
        (async () => {
            const latestBLogs = await getBlogs()
            console.log(latestBLogs);
            setblogs([...latestBLogs])
        })()
    }, [])

    return (
        <div className='w-full flex flex-wrap'>
            <div className="w-3/6 p-16 h-fit md:sticky relative top-0 sectionTitle flex flex-col sectionTitle justify-center items-center">
                <p className="text-center text-white text-4xl font-extralight">
                    Latest Blogs
                </p>
                <p className='text-center text-white mt-5'>
                Stay ahead of the curve with our Latest Blog section, where we provide you with the freshest insights and groundbreaking developments from the tech world. 
                </p>
                <p className='text-center text-white mt-5'>
                    Dive into our most recent posts and be the first to get the inside scoop on what’s next in technology. Keep exploring, keep learning—your next tech discovery starts here!   
                </p>
            </div>
            <div className="p1-6 latestBlogs">
                <LatestBlogList blogs={blogs}/>
            </div>
        </div>
    )
}

export default LatestBlogs