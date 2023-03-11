import React from "react";
import ImgURL from "./UI-Images/UnderConstructionIcon.png";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <>
      <div className="mb-80 mt-10 md:mt-40">
        <h1 className="color-red text-center font-bold text-xl md:text-2xl mb-4">
          This feature is still in development...
        </h1>
        <img
          className="Icon-spin h-20 w-20 mx-auto "
          src={ImgURL}
          alt="Under development"
        />
      </div>
    </>
  );
};

export default UnderConstruction;
