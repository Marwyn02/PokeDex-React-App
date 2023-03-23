import "./navbar.css";
import { SlHome, SlMagnifier, SlMap } from "react-icons/sl";

import { useState } from "react";

const Navbar = (props) => {
  const [ChangeSearchLogo, setChangeSearchLogo] = useState(false);

  return (
    // Navbar is for mobile view navbar below the screen
    <div className="relative z-10 duration-300">
      <div className="bg-white drop-shadow-md md:hidden fixed bottom-0 w-full">
        <div className="grid grid-cols-5 gap-2 flex items-center border-t justify-center px-4 md:py-2 md:px-5 duration-100">
          {ChangeSearchLogo && (
            <button
              className="flex justify-center col-start-3 duration-100 py-4 px-1"
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
              className="flex justify-center col-start-3 duration-100 py-4 px-1"
              onClick={() => {
                props.click();
                setChangeSearchLogo(true);
              }}
            >
              <SlMagnifier />
            </button>
          )}
          <button
            className="flex justify-center duration-100 py-4 px-1"
            onClick={() => {
              props.mapClick();
              setChangeSearchLogo(true);
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
