/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import CardShimmer from './CardShimmer'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sql } from "@vercel/postgres";
import { getBlogs } from "../actions";
import Card from './Card'

/* GSAP Scrolltrigger plugin*/
gsap.registerPlugin(ScrollTrigger);

const LatestBlogList = ({ blogs }) => {



    const handleImageAnimation = (img) => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img.parentNode,
                start: "-500px top",
                end: "end end",
                scrub: true,
            },
            scale: 1,
            transformOrigin: "center center",
            autoAlpha: 1,
            duration: 0.2,
            startAt: { scale: 0.9, autoAlpha: 0.9 }
        });
    };

    return (
        <>
            {
                blogs && blogs.slice(0,3).map((eachBlog, index) => {
                    const date = new Date(eachBlog.publisheddate)
                    const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
                    const blogDate = [formattedDate.split(', ')[1], ...formattedDate.split(', ')[0].split(' ')]
                    let imgRef = useRef();

                    useEffect(() => {
                        handleImageAnimation(imgRef.current);
                    }, [imgRef])
                    return (
                        <div className="project-wrapper flex-control" key={index}>
                            <div className="project-img-container flex-control">
                                <div ref={imgRef} className="latestBlogs">
                                    <Card key={eachBlog.blog_id} id={`blog-${eachBlog.blog_id}`} blogDate={blogDate} heading={eachBlog.title} desc={eachBlog.prevdescription} blogtags={eachBlog.tags} image={eachBlog.image} />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default LatestBlogList