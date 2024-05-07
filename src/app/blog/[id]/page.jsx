import React from "react";
import { getBlogDetails } from "../../actions";
import Image from "next/image";

export default async function Page(params) {
    // console.log();
    const data = await getBlogDetails(15)
    return (
        // <div className="h-full text-white text-3xl">HEY</div>
        <div className="h-full w-full h-full pt-10">
            <div className="w-5/6 mx-auto text-white">

                <div className="text-white text-3xl font-light">{data.title}</div>
                
                <div>
                <Image src={data.image} alt='banner image' width={100} height={100} className='rounded-2xl' />

                </div>
                
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
        </div>
    )
}