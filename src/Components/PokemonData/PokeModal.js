import React from "react";
import Modal from "../UI/Modal";
import "./pokemodal.css";
import { IoCloseCircleOutline } from "react-icons/io5";

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
        <Modal>
          <div className="modal-header flex flex-shrink-0 items-center justify-between pt-4 p-3 bg-black/80 drop-shadow-xl rounded-t-md">
            <h6 className="text-2xl sm:text-3xl text-white/90 font-medium pr-2 sm:pr-3">
              <span className="text-lg font-normal text-white/80">No</span>
              {props.info.id}
            </h6>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white/90 subpixel-antialiased capitalize tracking-wide"
              id="exampleModalLabel"
            >
              {props.info.name}
            </h2>
            <button
              type="button"
              className="btn-close box-content border-none rounded-none opacity-50 
                  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <IoCloseCircleOutline className="text-white" size={24} />
            </button>
          </div>
          <div className="modal-body relative p-4 pt-5">
            <div className="pb-8 px-5">
              <img
                className="mx-auto"
                src={props.info.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
            <div className="px-3 sm:px-12">
              <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-4 pb-1 text-sm">
                <p className="text-black/60 text-medium">Type</p>
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
                    <p className="capitalize font-medium">
                      {poke.stat.name}:{" "}
                      <span className={`${poke.stat.name}`}>
                        {poke.base_stat}
                      </span>
                    </p>
                  );
                })}
              </div>
              <div>
                <h5 className="-mb-1.5 text-sm font-medium text-black/60 capitalize">
                  Moves
                </h5>
                <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-2 px-10 py-2">
                  {props.info.moves.slice(0, 4).map((poke) => {
                    return (
                      <p
                        className="capitalize text-xs sm:text-sm border border-gray-600 text-black
                          text-center w-auto font-semibold"
                      >
                        {poke.move.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PokeModal;
