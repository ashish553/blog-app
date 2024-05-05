import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'



function Tag({ eachTag, setblogDetails, blogDetails, index }) {

    const tagref = useRef()
    const removeAnimation = useRef()
    const id = Date.now()
    function deleteTag() {
        const tempTags = [...blogDetails.tags]
        tempTags.splice(index, 1)
        setblogDetails({
            ...blogDetails,
            tags: tempTags
        })
    }
    
    const deleteTagTimeline = gsap.timeline({ paused: true })
    let gsapremove = ''
    useEffect(() => {
        console.log(tagref.current);
        gsap.fromTo(tagref.current, {
            x: -100,
            opacity: 0,
            ease: 'power4.inOut'
        }, {
            x: 0,
            opacity: 1,
            ease: 'power4.inOut'
        })
        // deleteTagTimeline.to(`#tag-${index}`, {
        //     // width: '0px',
        //     // height: '0px',
        //     opacity: 0,
        //     onComplete: deleteTag,
        //     // y: 100,
        //     ease: 'power4.inOut'
        // })
        return () => {
            removeAnimation.current && removeAnimation.current.kill()
        }
    }, [])

    const handleRemoveTag = () => {
        if(removeAnimation.current){
            return;
        }
        removeAnimation.current = gsap.to(tagref.current, {
            x: 100,
            opacity: 0,
            ease: "power4.in",
            duration: 0.3,
            onComplete: () => {
                const updatedTags = [...blogDetails.tags];
                updatedTags.splice(index, 1);
                setblogDetails({
                    ...blogDetails,
                    tags: updatedTags
                });
            },
        });
    };

    return (
        <div ref={tagref} id={index} className="border-2 border-teal-600 my-1 sm:my-0 mx-2 tag rounded-3xl flex items-center px-2 h-4/5 bg-aquamarine">
            <p className='text-sm mr-3 font-light'>{eachTag}</p>
            <button onClick={handleRemoveTag} className="shrink-0 grow-0 delete text-sm border-2 text-center w-6 rounded-full h-6 border-teal-600 bg-teal-600 text-white font-semibold">
                x
            </button>
        </div>
    )
}

export default Tag