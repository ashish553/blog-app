import React, { useEffect, useState } from 'react'
import { getBlogDetails } from '../actions'


function useBlogDetails(id) {

    // const [blog, setBlog] = useState({})

    const [blogDetails, setblogDetails] = useState({
        title: '',
        desc: '',
        previewDesc: '',
        tags: '',
        image: '',
        date: '',
    })

    useEffect(() => {
        (async () => {
            const data = await getBlogDetails(id)
            // setBlog(data)
            console.log('dataaa', data);
            const temp = {
                title: data.title,
                desc: data.description,
                previewDesc: data.prevdescription,
                tags: data.tags,
                image: '',
                date: data.publisheddate,
                author: data.author,
              }
            setblogDetails({...temp})
        })()
    }, [id])

    return { blogDetails, setblogDetails }
}

export default useBlogDetails