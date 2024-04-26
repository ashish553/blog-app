// 'use client';
import '@/app/assets/scss/input.scss'
import RichTextEditor from '@/app/Components/RichTextEditor'
import React from 'react'
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

async function Page() {
  // noStore()
  // const tags = JSON.stringify(['Javacript','Web Dev'])
  // await sql`INSERT INTO blogs (title, description, tags, publisheddate, image) VALUES ('Test1 title','Test desc','{"Javacript","Web Dev"}','2024-04-29','https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1536x1086.png')`;
  // const {rows} =  await sql`SELECT * FROM blogs`;
  // console.log(rows);
  return (
    <div className='text-2xl'>
      <div className="inputContainer px-3 flex items-center flex-col">
        <div className="form__group group field">
          <input type="input" className="text-xl font-light form__field" placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form__label text-sm font-light">Title</label>
        </div>
        <div className='relative mt-5 flex group w-1/4 mr-auto'>
          <input type="text" name="tags" id="tags" className='py-2 border-b border-gray-400 peer outline-none text-base font-light mt-3' required/>
          <label htmlFor="tags" className='transition ease-in-out left-0 absolute bottom-4 text-sm font-light peer-focus:-translate-y-5 peer-valid:-translate-y-5 text-gray-400'>Tags</label>
          <button className="ml-3 mt-3 transition ease-in-out duration-200 text-base bg-aquamarine rounded-full w-fit h-fit py-1.5 px-3 border-2 border-teal-400 hover:border-teal-600 border-2 active:bg-teal-300">
            +
          </button>
          <div className="mx-4 tags-list-container flex flex-wrap items-center">
            <div className="tag rounded-3xl flex items-center px-3 h-4/5">
              <p className='text-sm mr-3 font-light'>Javacript</p>
              <div className="shrink-0 grow-0 delete text-sm border-2 text-center w-6 rounded-full h-6 border-teal-600 bg-teal-600 text-white font-semibold">
                x
              </div>
            </div>
          </div>

        </div>
        {/* <div className='h-fit'>
          <button className="rounded bg-aquamarine px-5 py-3 text-sm">Publish</button>
        </div> */}
      </div>
      <div className='quillContainer'>
        <RichTextEditor />
      </div>
    </div>
  )
}

export default Page
export const dynamic = 'force-dynamic';
