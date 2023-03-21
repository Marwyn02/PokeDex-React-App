import "./navbar.css";
import { SlHome, SlMagnifier, SlMap } from "react-icons/sl";

import { useState } from "react";

const Navbar = (props) => {
  const [ChangeSearchLogo, setChangeSearchLogo] = useState(false);

  return (
    <div className="relative z-10 duration-300">
      <div className="bg-white drop-shadow-md md:hidden fixed bottom-0 w-full">
        <div className="grid grid-cols-5 gap-2 flex items-center justify-center py-1 px-4 md:pt-4 md:pb-3 md:px-5 duration-100">
          {ChangeSearchLogo && (
            <button
              className="flex justify-center col-start-3 hover:scale-125 hover:text-white hover:bg-black duration-100 py-3 px-1
              active:border-2 active:border-black focus:bg-black focus:text-white"
              onClick={() => {
                props.homeClick();
                setChangeSearchLogo(false);
              }}
            >
              <SlHome />
            </button>
          )}
          {!ChangeSearchLogo && (
            <button
              className="flex justify-center col-start-3 hover:scale-125 hover:text-white hover:bg-black duration-100 py-3 px-1
              active:border-2 active:border-black focus:bg-black focus:text-white"
              onClick={() => {
                props.click();
                setChangeSearchLogo(true);
              }}
            >
              <SlMagnifier />
            </button>
          )}
          <button
            className="flex justify-center hover:scale-125 hover:text-white hover:bg-black duration-100 py-3 px-1
              active:border-2 active:border-black focus:bg-black focus:text-white"
            onClick={() => {
              props.mapClick();
            }}
          >
            <SlMap />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
