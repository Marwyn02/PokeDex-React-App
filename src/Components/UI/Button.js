// import './button.css';
import React from "react";
const Button = (props) => {
  return (
    <>
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className="border-2 text-center bg-gray-600 py-1 px-2 text-sm text-white capitalize
                hover:bg-gray-800 focus:outline-none focus:ring-none focus:bg-transparent 
                focus:border-gray-900 focus:text-black duration-300"
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
