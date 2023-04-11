import React from "react";
import ArrowLeft from "../UI/ArrowLeft";
import ArrowRight from "../UI/ArrowRight";

const PokePageButton = (props) => {
  return (
    <>
      <div className="flex justify-between my-6 2xl:my-20">
        <div>
          {props.prev && (
            <button
              className="group bg-black/80 hover:bg-black/95 text-white h-auto py-1 rounded sm:rounded-none"
              onClick={() => {
                props.setData([]);
                props.switch(props.prev);
              }}
            >
              <ArrowLeft />
            </button>
          )}
        </div>

        <div>
          {props.next && (
            <button
              className="group bg-black/80 hover:bg-black/95 text-white h-auto py-1 rounded sm:rounded-none"
              onClick={() => {
                props.setData([]);
                props.switch(props.next);
              }}
            >
              <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PokePageButton;
