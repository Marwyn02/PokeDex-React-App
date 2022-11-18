import { useEffect } from "react";
import Pokeball from "./Pokeball.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./landing.css"

const LandingPage = () => {
    gsap.registerPlugin(ScrollTrigger);

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
    }, [])

    return (
        <>
            <div className="bg-black/90  ">
                <div className="front-page bg-white h-screen w-full grid place-items-center relative px-5 sm:px-0">
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