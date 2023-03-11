import "./navbar.css";
// import Logo from "./nav-utils/pokedexlogo.png";
import { SlHome, SlMagnifier } from "react-icons/sl";

import { useState } from "react";

const Navbar = (props) => {
  const [ChangeSearchLogo, setChangeSearchLogo] = useState(false);

  return (
    <div className="relative z-10 duration-300">
      <div className="bg-white drop-shadow-md md:hidden fixed bottom-0 w-full">
        <div className="flex justify-center items-center py-1 px-2 md:pt-4 md:pb-3 md:px-5 duration-300">
          {ChangeSearchLogo && (
            <button
              className="hover:scale-125 hover:text-white hover:bg-black duration-300 p-3"
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
              className="hover:scale-125 hover:text-white hover:bg-black duration-300 p-3"
              onClick={() => {
                props.click();
                setChangeSearchLogo(true);
              }}
            >
              <SlMagnifier />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
