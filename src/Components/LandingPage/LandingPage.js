import { useEffect, useRef } from "react";
import Pokeball from "./Pokeball.png";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "./landing.css"

const LandingPage = () => {
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)
      }

    const uRef = useRef(null)

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".front-page",
                start: "0%",
                end: "100%",
                markers: true,
                scrub: true,
                pin: true
            }
        })
        tl.fromTo(".front-page", { clipPath: "circle(5%)" }, { clipPath: "circle(75%)", duration: 3 });
        tl.fromTo(".pokeball", { scale: 1.8 }, { scale: 0, duration: 1 }, "-=3");
        tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".sub-title", { opacity: 0}, { opacity: 1, duration: 1});
    }, []);

    return (
        <>
            <div className="bg-black/90">
                <div ref={ uRef } className="front-page bg-white h-screen w-full grid place-items-center relative px-5 sm:px-0">
                    <div className="text-black/70 mb-2">
                        <h1 className="title text-2xl md:text-5xl font-bold tracking-wide md:mb-1">Welcome to Pokemon Index</h1>
                        <p className="sub-title text-sm sm:text-base md:text-2xl">Check out your favorite pokemon</p>
                        <img className="pokeball h-5 md:h-8 mx-auto" src={ Pokeball } alt="pokeball" />
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default LandingPage;