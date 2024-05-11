
'use client'

import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import BlogFilter from '../Components/BlogFilter'
import blogs from '../Constants/dummyBlogs.json'
import { getBlogs } from '../actions'
import CardShimmer from '../Components/CardShimmer'

function Page() {
  const [Blogs, setBlogs] = useState(null)
  const [currentTag, setcurrentTag] = useState(['All'])
  // console.log('tagslist',currentTag);
  // const data = useAppSelector(store=>store.blogDetails)
  // console.log(data);
  

  useEffect(() => {
    (async ()=>{
      setBlogs([])
      const blogs = await getBlogs()
      // setBlogs([...blogs])
      function checkExist (eachBlog) {
        for (let index = 0; index < currentTag.length; index++) {
          if(eachBlog.tags.includes(currentTag[index])){
            return true
          }
        }
      }
      if(currentTag.includes("All")){
        setBlogs([...blogs])
      } else {
        const blogListTemp = blogs.filter(eachBlog => {
          return checkExist(eachBlog)
        });
        setBlogs([...blogListTemp])
      }

    })()
  }, [currentTag])
  

  // useEffect(() => {
    
  // }, [currentTag])
  
  return (
    <div>
      <div className='w-full flex justify-center items-center flex-col'>
        <BlogFilter currentTagFunc={setcurrentTag} currentTag={currentTag}/>
        {/* <p className='mt-5 mb-4 text-xl font-light'>Found {Blogs.length} blogs</p> */}
        <div className='blog-card-container w-11/12 flex flex-wrap justify-center'>
          {
            Blogs ? Blogs.map(eachBlog=>{
              const date = new Date(eachBlog.publisheddate)
              const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
              const blogDate = [formattedDate.split(', ')[1], ...formattedDate.split(', ')[0].split(' ')]
              return <Card key={eachBlog.blog_id} id={`blog-${eachBlog.blog_id}`} blogDate={blogDate} heading={eachBlog.title} desc={eachBlog.prevdescription} blogtags={eachBlog.tags} image={eachBlog.image}/>
            }) : new Array(3).fill(null).map((each,index)=>{
              return <CardShimmer key={index}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Page