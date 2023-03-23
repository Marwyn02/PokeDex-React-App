import React from "react";
import Pokeball from "./UI-Images/Pokeball.png";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <>
      <div className="py-32">
        <img
          className="animate-spin h-12 md:h-8 mx-auto"
          src={Pokeball}
          alt="Loading..."
        />
        <p className="text-black/80 text-sm md:text-base text-center pt-5">
          Please wait, we'll find them for you.
        </p>
      </div>
    </>
  );
};

export default LoadingSpinner;
