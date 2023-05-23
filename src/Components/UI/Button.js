// import './button.css';
import React from "react";
const Button = (props) => {
  return (
    <>
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className="inline-flex items-center text-center bg-gray-600 py-2 px-3 text-sm text-white capitalize
                focus:border hover:bg-gray-800 focus:bg-transparent focus:outline-none font-light tracking-wide
                focus:border-gray-900 focus:text-black duration-500 ml-2 rounded-md"
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
