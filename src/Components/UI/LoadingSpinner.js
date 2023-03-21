import React from "react";
import Pokeball from "./UI-Images/Pokeball.png";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    // <div className="text-center text-xl">Loading...</div>
    <>
      <div className="py-20">
        <img
          className="animate-spin h-12 md:h-8 mx-auto"
          src={Pokeball}
          alt="Loading..."
        />
      </div>
    </>
  );
};

export default LoadingSpinner;
