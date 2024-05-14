import React from 'react'
import gsap from "gsap";
import { useEffect } from 'react';


function Hero() {

    var t1 = gsap.timeline()
    useEffect(() => {
        t1.from(".hero__bg--stagger", {
            duration: 2,
            height: '0%', /* If you don't put % it will calculate height in px */
            ease: "power4.out",
            stagger: 0.1,

        }).from(
            "#hero__bg-img", {
            autoAlpha: 0,
            duration: 5,
            ease: "power4.out",
            opacity: 0

        }, "-=0.5").from(".hero__el--stagger", {
            duration: 2,
            y: -100,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.1,

        }, "-=6" /* Overlap animation to -2sec with previous */
        );
    }, [])

    return (
        <div className="hcontainer">

            <section id="hero">

                <div id="hero__bg3" className="hero__bg hero__bg--stagger"></div>
                <div id="hero__bg2" className="hero__bg hero__bg--stagger"></div>
                <div id="hero__bg1" className="hero__bg hero__bg--stagger"></div>
                <div id="hero__bg-img" className="hero__bg"></div>

                <div className="container">
                    <h1 className="hero__el--stagger text-5xl text-light">Frontline Tech Insights at Your Fingertips</h1>
                    <h2 className="hero__el--stagger text-xl text-light mt-8">Stay ahead of the curve with cutting-edge reviews, tutorials, and tech industry</h2>
                </div>

            </section>
        </div>
    )
}

export default Hero