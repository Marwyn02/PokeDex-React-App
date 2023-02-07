import React from "react";

const PokeModal = (props) => {
  //   console.log(props);
  return (
    <>
      {!props.info ? (
        ""
      ) : (
        <div
          className="modal fade hidden fixed top-0 left-0 w-full h-full overflow-y-hidden outline-none overflow-y-auto"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-bold font-sans leading-normal text-gray-800 capitalize"
                  id="exampleModalLabel"
                >
                  {props.info.name}
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <div className="pb-8 px-5">
                  <img
                    className="mx-auto"
                    src={props.info.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-4 pb-1 text-sm">
                  <p>Type</p>
                  {props.info.types.map((poke) => {
                    return (
                      <p
                        className={`${poke.type.name} rounded-md text-center text-xs py-0.5`}
                      >
                        {poke.type.name}
                      </p>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 px-2 gap-1 md:gap-2 mb-2">
                  {props.info.moves.slice(0, 4).map((poke) => {
                    return (
                      <p
                        className="border-2 border-gray-600 bg-gray-600 text-white
                          rounded-lg text-center w-100 font-semibold
                          hover:border-transparent hover:bg-transparent
                          duration-200 hover:text-gray-700"
                      >
                        {poke.move.name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
px-6 py-2.5 bg-blue-600 ease-in-out ml-1"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeModal;
