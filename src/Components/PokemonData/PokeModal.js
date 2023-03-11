import React from "react";
import "./pokemodal.css";
import { IoClose } from "react-icons/io5";

const PokeModal = (props) => {
  // console.log(props);

  // if (!props.info.sprites.other.dream_world.front_default) {
  //     content = <p>No image available...</p>
  // }

  return (
    <>
      {!props.info ? (
        ""
      ) : (
        <div
          data-te-modal-init
          className="fixed top-0 left-0 z-[1055] hidden h-full w-full p-4 overflow-x-hidden overflow-y-auto outline-none"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="Modal"
          aria-hidden="true"
        >
          <div className="relative w-full h-full max-w-lg md:h-auto transition-all lg:translate-y-[-25px] duration-500 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]  ">
            {/* Modal Content */}
            <div
              data-te-modal-dialog-ref
              className="pointer-events-auto relative bg-white rounded-lg shadow dark:bg-gray-700 min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] flex w-full flex-col border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
            >
              <div className="flex grid grid-cols-4 items-center justify-center p-4 md:p-7 rounded-t dark:border-gray-600">
                <h6 className="text-xl sm:text-2xl text-white/90 font-medium">
                  <span className="text-xs sm:text-md font-normal text-gray-100/70">
                    No
                  </span>
                  {props.info.id}
                </h6>
                <h2
                  className="text-2xl col-span-2 md:text-3xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide"
                  id={props.info.name}
                >
                  {props.info.name}
                </h2>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className=" box-content border-none rounded-none opacity-50 
                  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-te-modal-dismiss
                    aria-label="Close"
                  >
                    <IoClose className="text-white" size={24} />
                  </button>
                </div>
              </div>
              <div className="modal-body relative flex-auto px-3 pb-5 md:pb-8 md:px-5 pt-3">
                <div className="pb-8 px-5 md:px-8">
                  <img
                    className="mx-auto max-w-xs max-h-60"
                    src={props.info.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
                <div className="px-3 sm:px-12">
                  <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-4 pb-1 text-sm">
                    <p className="text-gray-100/70 text-medium">Type</p>
                    {props.info.types.map((poke) => {
                      return (
                        <p
                          className={`${poke.type.name} rounded-md text-center text-xs py-0.5 capitalize`}
                        >
                          {poke.type.name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="px-5 py-2.5 leading-5">
                    {props.info.stats.map((poke) => {
                      return (
                        <p className="capitalize font-medium text-gray-400/90">
                          {poke.stat.name}:{" "}
                          <span className={`${poke.stat.name}`}>
                            {poke.base_stat}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                  <div>
                    <h5 className="-mb-1.5 pt-1 text-sm font-medium text-gray-100/70 capitalize">
                      Moves
                    </h5>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-2 px-10 py-2">
                      {props.info.moves.slice(0, 4).map((poke) => {
                        return (
                          <p
                            className="capitalize text-xs sm:text-sm border border-gray-600 text-gray-300/60
                          text-center w-auto font-bold"
                          >
                            {poke.move.name}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeModal;
