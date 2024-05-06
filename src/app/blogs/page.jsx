
'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// gsap.registerPlugin(useGSAP)
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import BlogFilter from '../Components/BlogFilter'
import blogs from '../Constants/dummyBlogs.json'
import { sql } from '@vercel/postgres';
import { shallowEqual, useSelector } from 'react-redux'
import { useAppSelector } from '../store/store'


function Page() {
  const [Blogs, setBlogs] = useState([])
  const [currentTag, setcurrentTag] = useState(['All'])
  // console.log('tagslist',currentTag);
  // const data = useAppSelector(store=>store.blogDetails)
  // console.log(data);

  useEffect(() => {
    function checkExist (eachBlog) {
      for (let index = 0; index < currentTag.length; index++) {
        if(eachBlog.tags.includes(currentTag[index])){
          return true
        }
      }
    }
    if(currentTag.includes("All")){
      setBlogs([...blogs.data])
    } else {
      const blogListTemp = blogs.data.filter(eachBlog => {
        return checkExist(eachBlog)
      });
      setBlogs([...blogListTemp])
    }
  }, [currentTag])
  
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col'>
        <BlogFilter currentTagFunc={setcurrentTag} currentTag={currentTag}/>
        {/* <p className='mt-5 mb-4 text-xl font-light'>Found {Blogs.length} blogs</p> */}
        <div className='blog-card-container w-11/12 flex flex-wrap justify-center'>
          {
            Blogs && Blogs.map(eachBlog=>{
              const date = new Date(eachBlog.date)
              const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
              const blogDate = [formattedDate.split(', ')[1], ...formattedDate.split(', ')[0].split(' ')]
              return <Card key={eachBlog.id} id={`blog-${eachBlog.id}`} blogDate={blogDate} heading={eachBlog.title} desc={eachBlog.description} blogtags={eachBlog.tags}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Page