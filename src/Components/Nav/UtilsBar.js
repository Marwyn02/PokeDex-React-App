import React from "react";
import { SlHome, SlMagnifier, SlMap } from "react-icons/sl";

const UtilsBar = (props) => {
  return (
    <div>
      <div
        className="hidden md:block group w-full bg-black/80 mt-20 mb-14 border-b-4 border-white/60
      hover:bg-gray-50 hover:border-black duration-300"
      >
        <div className="mx-20 grid grid-cols-3 md:grid-cols-10 gap-2">
          <div className="text-white md:col-start-3 md:col-span-2 group-hover:text-black hover:bg-black mx-auto duration-300">
            <button
              className="md:px-10 md:py-5 hover:text-white"
              onClick={() => {
                props.homeClick();
              }}
            >
              <SlHome />
            </button>
          </div>
          <div className="text-white md:col-span-2 group-hover:text-black hover:bg-black mx-auto duration-300">
            <button
              className="md:px-10 md:py-5 hover:text-white"
              onClick={() => {
                props.click();
              }}
            >
              <SlMagnifier />
            </button>
          </div>
          <div className="text-white md:col-span-2 group-hover:text-black hover:bg-black mx-auto duration-300">
            <button
              className="md:px-10 md:py-5 hover:text-white"
              onClick={() => {
                props.click();
              }}
            >
              <SlMap />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilsBar;
