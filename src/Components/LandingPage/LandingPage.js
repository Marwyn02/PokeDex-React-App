import React, { useState } from "react";
import { gsap } from "gsap/all";
import CountUp from "react-countup";

const LandingPage = (props) => {
  const [counting, setCounting] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(false);

  const onEnd = () => {
    setButtonOpen(true);
  };
  const openApp = () => {
    let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(
      ".openButton",
      {
        opacity: 1,
        scale: 1,
      },
      { scale: 0.1, opacity: 0, duration: 0.1 }
    );
    tl.fromTo(
      ".upper-bg",
      {
        y: "0%",
      },
      { y: "-100%", delay: 1, duration: 1.5 }
    );
    tl.fromTo(
      ".lower-bg",
      {
        y: "0%",
      },
      { y: "100%", delay: 0.5, duration: 1 },
      "-=2"
    );

    setTimeout(() => {
      setCounting(true);
      props.countingLoad();
    }, 2000);
  };
  return (
    <>
      {!counting && (
        <div className="black-screen absolute top-100 left-0 h-screen w-full z-20">
          <div
            id="intro"
            className="upper-bg bg-red-500/90 h-1/2 border-b-4 border-black"
          ></div>
          <div className="absolute grid content-center flex justify-center items-center w-full h-auto my-auto">
            {!buttonOpen && (
              <div
                className="cursor-default absolute place-self-center border-8 border-black
              bg-white py-9 w-28 rounded-full"
              >
                <p className="percent text-center text-black/50 hover:text-black duration-300">
                  <CountUp
                    start={0}
                    end={100}
                    delay={0.7}
                    duration={6}
                    onEnd={onEnd}
                  />
                  %
                </p>
              </div>
            )}
            {buttonOpen && (
              <div className="openButton group absolute place-self-center border-8 border-black p-4 bg-white rounded-full duration-300 z-20">
                <button
                  className="bg-white p-8 rounded-full duration-300 border-2 border-black group-hover:bg-red-500/40"
                  onClick={openApp}
                ></button>
              </div>
            )}
          </div>
          <div className="lower-bg bg-gray-500 h-1/2 border-t-4 border-black"></div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
