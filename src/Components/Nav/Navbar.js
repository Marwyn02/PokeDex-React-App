import "./navbar.css";
// import Logo from "./nav-utils/pokedexlogo.png";
import { SlHome } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="relative z-10 duration-300">
      <div className="bg-white drop-shadow-md md:hidden fixed bottom-0 w-full">
        <div className="flex justify-center items-center py-4 px-2 md:pt-4 md:pb-3 md:px-5 duration-300">
          <SlHome />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
