'use client'

import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { sql } from '@vercel/postgres'
import { UserProfileCtx } from '../context/userprofile'
import { getBlogsByUser } from '../actions'

function Page() {

  const {userProfile} = useContext(UserProfileCtx)
  // const {rows} = await sql`SELECT * from blogs WHERE blog_id=${id}`
  const [blogs, setblogs] = useState([])
  
  useEffect(() => {
    async function fetchDetials() {
      console.log(userProfile.name);
      const data = await getBlogsByUser(userProfile.name)
      console.log(data);
      data !== blogs && setblogs(data)
    }
    
    fetchDetials()

  }, [userProfile])
  
  
  return (
    <div className='p-5'>
        <div className="w-5/6 m-auto">
          <div className="mt-4 text-xl text-white">
            My Blogs ({blogs.length})
          </div>
          <div className='blog-card-container w-11/12 flex flex-wrap justify-center'>
            {
            blogs.map(blog=>{

              const date = new Date(blog.publisheddate)
              const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
              const blogDate = [formattedDate.split(', ')[1], ...formattedDate.split(', ')[0].split(' ')]

              return (
                <Card id={`blog-${blog.blog_id}`} key={blog.blog_id} heading={blog.title} desc={blog.prevdescription} blogtags={blog.tags} blogDate={blogDate} image={blog.image} isDashboard={true} setBlogs={setblogs} blogs={blogs}/>
              )
            })}
          </div>       
        </div>
    </div>
  )
}

export default Page