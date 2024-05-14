import React from "react";
import { getBlogDetails } from "../../actions";
import Image from "next/image";
import '../../assets/scss/article.scss'

export default async function Page({params}) {
    console.log(params.id);
    const data = await getBlogDetails(params.id)
    return (
        // <div className="h-full text-white text-3xl">HEY</div>
        <div className="articleContainer w-full pt-10">
            <div className="w-5/6 mx-auto text-white">

                <div className="text-white text-3xl font-light text-center mb-8">{data.title}</div>
                
                <div>
                {/* <Image src={data.image} alt='banner image' width={100} height={100} className='rounded-2xl' /> */}

                </div>
                
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
        </div>
    )
}