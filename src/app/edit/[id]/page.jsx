'use client';
import '../../assets/scss/input.scss'
import RichTextEditor from '../../Components/RichTextEditor'
import React, { useContext, useState } from 'react'
import { unstable_noStore as noStore } from 'next/cache';
import Tag from '../../Components/Tag';
import { UserProfileCtx } from '../../context/userprofile'
import useBlogDetails from '../../hooks/useBlogDetails';
import { updateBlogDetails } from '../../actions';

function Page({params}) {
  noStore()
  const {userProfile} = useContext(UserProfileCtx)
  console.log('userProfile',userProfile);

  const {blogDetails, setblogDetails} = useBlogDetails(params.id.split('-')[1])
  console.log(blogDetails);

  const [tag, setTag] = useState()
  const blogId = params.id.split('-')[1]

  const update = async () => {
    // console.log(JSON.stringify(blogDetails));
    // const formData = new FormData()
    // formData.append('title', blogDetails.title)
    // formData.append('desc', blogDetails.desc)
    // formData.append('previewDesc', blogDetails.previewDesc)
    // formData.append('tags', blogDetails.tags)
    // formData.append('date', new Date().toISOString().slice(0, 10))
    // const res = await fetch('/api', {
    //   method: 'POST',
    //   body: formData,
    // })
    const data = await updateBlogDetails(blogId, blogDetails)
    console.log(data);
  }
  return (
    blogDetails.title && <div className='text-2xl'>
      <div className="inputContainer px-3 flex items-center flex-col">
        <div className="form__group group field">
          <input value={blogDetails.title} type="input" onChange={(e) => {
            setblogDetails({
              ...blogDetails,
              title: e.target.value
            })
          }} className="text-xl font-light form__field" placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form__label text-sm font-light">Title</label>
        </div>
        <div className="previewContainer relative flex w-full mt-3">
          <input value={blogDetails.previewDesc} onChange={(e) => {
            setblogDetails({
              ...blogDetails,
              previewDesc: e.target.value
            })
          }} type="text" name="previewDesc" id="previewDesc" className='w-full py-2 border-b border-gray-400 peer outline-none text-base font-light mt-3' required />
          <label htmlFor="previewDesc" className='transition ease-in-out left-0 absolute bottom-4 text-sm font-light peer-focus:-translate-y-5 peer-valid:-translate-y-5 text-gray-400'>Short Description</label>
        </div>
        {/* <div className="previewContainer relative flex w-full mt-10">
          <input value={blogDetails.image} onChange={(e)=>{
            setblogDetails({
              ...blogDetails,
              image: e.target.files[0],
            })
            // console.log(1);
          }} type="file" name="previewImage" id="previewImage" className='w-2/6 py-2 border-b border-gray-400 peer outline-none text-base font-light' required />
          <label htmlFor="previewImage" className='transition ease-in-out left-0 absolute text-sm font-light text-gray-400 bottom-12'>Preview Image</label>
        </div> */}
        <div className='relative mt-5 flex flex-col sm:flex-row group w-full mr-auto'>
          <div className="tagInputContainer relative flex">
            <input onChange={(e) => {
              setTag(e.target.value)
            }} type="text" name="tags" id="tags" className='w-full sm:w-auto py-2 border-b border-gray-400 peer outline-none text-base font-light mt-3' required />
            <label htmlFor="tags" className='transition ease-in-out left-0 absolute bottom-4 text-sm font-light peer-focus:-translate-y-5 peer-valid:-translate-y-5 text-gray-400'>Tags</label>
            <button onClick={() => {
              if (blogDetails.tags.length < 4 && !blogDetails.tags.includes(tag)) {
                setblogDetails(prev => {
                  const tempTag = [...prev.tags]
                  tempTag.push(tag)
                  return {
                    ...prev,
                    tags: tempTag
                  }
                })
              }
            }} className={`ml-3 mt-3 transition ease-in-out duration-200 text-base rounded-full w-fit h-fit py-1.5 px-3 border-2  border-2 ${blogDetails.tags.length === 4 ? 'cursor-not-allowed bg-gray-300' : 'bg-aquamarine border-teal-400 hover:border-teal-600 active:bg-teal-300'}`}>
              +
            </button>
          </div>
          <div className="sm:mx-4 my-4 sm:my-0 sm:mt-0 tags-list-container flex flex-wrap flex-col sm:flex-row items-center">
            {
              blogDetails.tags && blogDetails.tags.map((eachTag, index) => {
                const id = Date.now()
                return (
                  <Tag {...{setblogDetails,eachTag,blogDetails,id,index}} key={index} />

                )
              })
            }
          </div>
        </div>
        
        <div className='h-fit'>
          <button className="rounded bg-aquamarine px-5 py-3 text-sm" onClick={update}>Update</button>
        </div>
      </div>
      <div className='quillContainer'>
        <RichTextEditor setBlogDetails={setblogDetails} blogDetails={blogDetails} />
      </div>
    </div>
  )
}

export default Page
// export const dynamic = 'force-dynamic';
