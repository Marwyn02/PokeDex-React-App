// import './button.css';
import React from "react";
const Button = (props) => {
  return (
    <>
      <button
        type={props.type || "button"}
        onClick={props.onClick}
        className="inline-flex items-center text-center bg-gray-800 pb-2 pt-3 px-4 md:px-8 text-sm text-white capitalize
                focus:border hover:bg-black focus:bg-transparent focus:outline-none font-light tracking-wide
                focus:border-gray-900 focus:text-black duration-500 ml-2 rounded-md"
        disabled={props.disable}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
