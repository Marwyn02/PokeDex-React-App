import { Fragment, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import Pokeball from "./Data-UI/Pokeball-bg-icon.png";
import "tw-elements";
import { Dialog, Transition } from "@headlessui/react";
import ModalTab from "./Data-UI/ModalTab";
import { GetPokemonSpecies } from "./Data-UI/GetPokemonSpecies";

const PokeModal = (props) => {
  const [Pokemon, setPokemon] = useState("");
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const getPokemonSpeciesHandler = async (query) => {
      try {
        const speciesResponse = await GetPokemonSpecies(query);
        const result = await speciesResponse.json();
        setPokemon(result);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonSpeciesHandler(props.info.name);
  }, [props.info.name]);

  return (
    <>
      {props.enabler && (
        <>
          {!props.info ? (
            ""
          ) : (
            <>
              <Transition.Root
                show={open}
                onClose={() => {
                  setOpen(true);
                  props.disabler(false);
                }}
                onClick={() => {
                  props.disabler(false);
                }}
              >
                <Dialog
                  as="div"
                  className="relative z-10"
                  key={props.info.id}
                  initialFocus={cancelButtonRef}
                  onClose={() => {
                    props.disabler(false);
                  }}
                  onClick={() => {
                    props.disabler(false);
                  }}
                >
                  <Transition.Child
                    onClose={() => {
                      props.disabler(false);
                    }}
                    onClick={() => {
                      props.disabler(false);
                    }}
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex relative w-full h-full max-w-lg md:h-auto transition-all duration-500 ease-in-out mx-auto min-[425px]:max-w-auto-h-full items-center justify-center p-4 text-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel
                          className={`${props.info.types[0].type.name}-bg relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:m-8 w-full max-w-lg flex-auto`}
                        >
                          <div className="px-5 pt-1 sm:px-5 sm:pt-5 md:pt-6 md:px-8 md:pb-2">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                              <Dialog.Title
                                as="div"
                                className="grid grid-cols-4 font-semibold leading-6 text-gray-900 flex items-center justify-between"
                              >
                                {/* POKEMON NAME */}
                                <div className="flex justify-start items-center">
                                  <p
                                    className="text-base sm:text-xl text-white/90
                                    font-medium border border-white/50 hover:border-white px-3 py-0.5 rounded-lg duration-300 cursor-default"
                                  >
                                    <span className="text-xs sm:text-md font-normal mr-0.5 text-gray-100/70">
                                      no
                                    </span>
                                    {props.info.id}
                                  </p>
                                </div>
                                <h1
                                  className={
                                    props.info.name.length < 12
                                      ? "rounded-full text-2xl col-span-2 md:text-3xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide"
                                      : "rounded-full text-lg col-span-2 md:text-xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide"
                                  }
                                >
                                  {props.info.name}
                                </h1>
                                <div className="flex justify-end">
                                  <button
                                    type="button"
                                    className="box-content border-none rounded-full p-1 no-underline text-white/75 focus:shadow-none focus:outline-none focus:opacity-100 
                                    hover:no-underline hover:text-white/90 hover:bg-black/30 rounded focus:no-underline focus:text-white duration-300"
                                    onClose={() => {
                                      setOpen(true);
                                    }}
                                    onClick={() => {
                                      props.disabler(false);
                                    }}
                                    ref={cancelButtonRef}
                                  >
                                    <IoClose className="" size={24} />
                                  </button>
                                </div>
                              </Dialog.Title>
                            </div>
                          </div>
                          {/* POKEMON TYPE */}
                          {props.info.types.length === 2 ? (
                            <div className="grid grid-cols-6 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-1 pb-2 md:pt-1 text-sm">
                              {props.info.types.map((poke) => {
                                return (
                                  <p
                                    className={`${poke.type.name} col-start-${
                                      poke.slot === 1 ? "3" : "4"
                                    } rounded-md text-center text-xs shadow-sm py-0.5 capitalize`}
                                  >
                                    {poke.type.name}
                                  </p>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="grid grid-cols-5 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-1 pb-2 md:pt-1 text-sm">
                              {props.info.types.map((poke) => {
                                return (
                                  <p
                                    className={`${poke.type.name} col-start-3 shadow-sm rounded-md text-center text-xs py-0.5 capitalize`}
                                  >
                                    {poke.type.name}
                                  </p>
                                );
                              })}
                            </div>
                          )}
                          <div className="relative flex-auto overflow-hidden px-4 pb-2 sm:px-6 sm:pb-4 sm:pt-1 md:px-5 md:pb-5 md:pt-1.5">
                            <div className="md:pb-2 px-5 md:px-8 flex justify-center items-center">
                              {/* POKEMON IMAGE */}
                              <img
                                className="max-w-xs max-h-56 sm:max-h-72 lg:max-h-96 z-10 pointer-events-none"
                                src={
                                  props.info.sprites.other["official-artwork"]
                                    .front_default
                                }
                                alt=""
                              />
                            </div>
                            <div className="absolute top-16 -right-24 md:top-28 md:-right-20 z-0">
                              <img
                                className="opacity-5 w-80 -rotate-12"
                                src={Pokeball}
                                alt=""
                              />
                            </div>
                            {/* Pokemon Stats */}
                            <div key={props.info.id} className="relative z-40">
                              <ModalTab stats={props.info} species={Pokemon} />
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PokeModal;
