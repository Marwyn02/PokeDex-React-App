import React from "react";
import "./navbar.css";
import { SlHome, SlMagnifier, SlMap } from "react-icons/sl";

const Navbar = (props) => {
  return (
    // Navbar is for mobile view navbar below the screen
    <div className="relative z-10 duration-300">
      <div className="bg-white drop-shadow-md md:hidden fixed bottom-0 w-full">
        <div className="grid grid-cols-5 gap-2 flex items-center border-t justify-center px-4 md:py-2 md:px-5 duration-100">
          <button
            className="grid grid-cols-1 flex justify-center col-start-2 duration-100 pb-2 pt-3 px-1 hover:text-gray-500 active:text-blue-500"
            onClick={() => {
              props.click();
            }}
          >
            <SlMagnifier className="mx-auto mb-0.5" />
            <div className="text-xs text-center">Search</div>
          </button>
          <button
            className="grid grid-cols-1 flex justify-center duration-100 pb-2 pt-3 px-1 hover:text-gray-500 active:text-blue-500"
            onClick={() => {
              props.homeClick();
            }}
          >
            <SlHome className="mx-auto mb-0.5" />
            <div className="text-xs text-center">Home</div>
          </button>
          <button
            className="grid grid-cols-1 flex justify-center duration-100 pb-2 pt-3 px-1 hover:text-gray-500 active:text-blue-500"
            onClick={() => {
              props.mapClick();
            }}
          >
            <SlMap className="mx-auto mb-0.5" />
            <div className="text-xs text-center">Region</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
