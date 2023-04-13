import React from "react";
import { IoClose } from "react-icons/io5";
import Pokeball from "./Data-UI/Pokeball-bg-icon.png";

const PokeModal = (props) => {
  // console.log(props.info);
  return (
    <>
      {!props.info ? (
        ""
      ) : (
        <div
          data-te-modal-init
          className="fixed top-0 left-0 z-[1055] hidden h-full w-full p-0.5 md:p-4 overflow-x-hidden overflow-y-auto outline-none"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="Modal"
          aria-hidden="true"
        >
          <div className="relative w-full h-full max-w-lg md:h-auto transition-all translate-y-[20px] lg:translate-y-[-25px] duration-500 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]  ">
            {/* Modal Content */}
            <div
              key={props.info.id}
              data-te-modal-dialog-ref
              className={`pointer-events-auto relative rounded-lg shadow ${props.info.types[0].type.name}-bg min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] flex w-full flex-col border-none bg-white bg-clip-padding text-current shadow-lg outline-none`}
            >
              <div className="flex grid grid-cols-4 items-center justify-center p-4 md:p-7 rounded-t dark:border-gray-600">
                <h6 className="text-xl sm:text-2xl text-white/90 font-medium">
                  <span className="text-xs sm:text-md font-normal mr-0.5 text-gray-100/70">
                    No
                  </span>
                  {props.info.id}
                </h6>
                <h2
                  className={
                    props.info.name.length < 13
                      ? "rounded-full text-2xl col-span-2 md:text-3xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide bg-gray-900/30"
                      : "rounded-full text-lg col-span-2 md:text-xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide bg-gray-900/30"
                  }
                >
                  {props.info.name}
                </h2>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className=" box-content border-none rounded-none  
                  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-te-modal-dismiss
                    aria-label="Close"
                  >
                    <IoClose className="text-white" size={24} />
                  </button>
                </div>
              </div>
              <div className="modal-body relative flex-auto px-2 py-3 md:pb-5 md:px-5 overflow-hidden pointer-events-none">
                <div className="pb-2 px-5 md:px-8 flex justify-center items-center ">
                  <img
                    className="max-w-xs max-h-60 lg:max-h-96 z-10"
                    src={
                      props.info.sprites.other["official-artwork"].front_default
                    }
                    alt={"Pokemon_image"}
                  />
                </div>
                <div className="absolute bottom-24 -right-24 md:bottom-44 md:-right-20 z-0">
                  <img
                    className="opacity-5 w-80 -rotate-12"
                    src={Pokeball}
                    alt=""
                  />
                </div>

                {/* Pokemon Stats */}
                <div className="relative px-3 pb-4 md:mt-2 md:p-4 rounded-lg border border-white/50 z-40">
                  <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white py-4 md:pt-1 text-sm">
                    <p className="text-gray-100/80 text-sm">Type</p>
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
                  <div className="bg-gray-100/10 rounded-lg px-2 py-3">
                    <h5 className="text-gray-100/80 text-sm mb-1">Stats</h5>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-1">
                      {props.info.stats.map((poke) => {
                        return (
                          <div className="grid grid-cols-3">
                            <p className="col-span-2 flex items-center capitalize text-gray-100/70 text-xs md:text-sm">
                              {poke.stat.name}:{" "}
                            </p>
                            <span
                              className={`${poke.stat.name} col-span-1 flex items-center justify-center 
                      rounded text-xs md:text-base text-center`}
                            >
                              {poke.base_stat}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-gray-100/10 p-2 rounded-lg mt-2">
                    <h5 className="-mb-1.5 py-1 text-sm font-medium text-gray-100/80 capitalize">
                      Abilities
                    </h5>
                    <div className="grid grid-cols-2 gap-1.5 md:gap-2 px-10 py-2">
                      {props.info.abilities.map((poke) => {
                        return (
                          <p
                            className="abilities-bg flex justify-center items-center capitalize text-xs opacity-90 sm:text-sm text-black/70
                            rounded"
                          >
                            {poke.ability.name}
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
