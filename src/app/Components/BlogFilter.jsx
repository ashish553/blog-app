// 'use client'
import React from 'react'
import tags from '../Constants/tagsList.json';

function BlogFilter({currentTag,currentTagFunc}) {
    console.log(currentTag);
  const filterItemsClick = (tag) => {
    let tempTagList = [...currentTag]

    if(tag==='All'){
      // currentTag = ['All']
      currentTag = currentTag.includes('All') ? [] : ['All']
    } else {
      currentTag.includes('All') && currentTag.splice(currentTag.indexOf('All'),1)
      currentTag.includes(tag) ? currentTag.splice(currentTag.indexOf(tag),1) : currentTag.push(tag)
    }// tempTagList = [..]

    currentTagFunc([...currentTag])
    // !currentTag.includes(tag) ? tempTagList.push(tag) : (tempTagList = currentTag.filter(eachTag=>{
    //   return eachTag!==tag
    // }))
    // if(currentTag.includes(tag)){

    // }
  }
  return (
    <div className='flex justify-center items-center my-5 flex-wrap'>
        {
            tags.data.map((eachTag, index)=>{
              // console.log('currentTag.includes(eachTag)',currentTag.includes(eachTag),currentTag,eachTag);
                return(
                    <div key={index} tabIndex='0' role="button" className={`cursor-default text-center mx-4 my-2 transition ease-in-out tagItem rounded-full bg-aquamarine border-4 py-2 px-5 duration-200 hover:-translate-y-1 ${currentTag.includes(eachTag) ? 'border-teal-600 hover:border-teal-600' : 'border-transparent active:border-transparent'}`} onClick={()=>{
                      filterItemsClick(eachTag)
                    }} onKeyDown={(e)=>{
                        if(e.key===' '){
                          e.preventDefault()
                          filterItemsClick(eachTag)
                        }
                    }}>
                        {eachTag}
                    </div>
                )
            })
        }
    </div>
  )
}

export default BlogFilter