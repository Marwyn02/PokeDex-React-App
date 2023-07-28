import React from "react";
import Pokeball from "./UI-Images/Pokeball.png";

const LoadingSpinner = () => {
  return (
    <>
      <div className="h-96 grid">
        <div className="place-self-center">
          <img
            className="animate-spin h-12 md:h-8 mx-auto pointer-events-none"
            src={Pokeball}
            alt="Loading..."
          />
          <p className="text-black/80 text-sm md:text-base text-center mt-5">
            Please wait, we'll find them for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
