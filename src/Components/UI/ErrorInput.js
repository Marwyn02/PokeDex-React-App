import React from "react";
import { TfiAlert } from "react-icons/tfi";

const ErrorInput = (props) => {
  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div className="bg-red-500/95 rounded-lg my-40 text-center tracking-normal shadow-md text-white pb-10 pt-8 mx-10 lg:col-span-2 lg:col-start-3">
          <div className="flex justify-center items-center pb-2">
            <TfiAlert size={24} />
          </div>
          <p className="md:text-lg lg:text-xl font-bold">{props.errorTitle}</p>
          <p className="text-xs md:text-sm -mt-0.5 lg:-mt-0">
            {props.errorMsg}
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorInput;
