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
                    <div className="flex relative w-full h-full max-w-lg md:h-auto transition-all duration-500 ease-in-out mx-auto min-[576px]:max-w-[500px]-h-full items-center justify-center p-4 text-center sm:p-0">
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
                          <div className="px-5 pt-1.5 sm:px-5 sm:pt-5 md:pt-6 md:px-8 md:pb-2">
                            <div className="">
                              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title
                                  as="h3"
                                  className="grid grid-cols-4 font-semibold leading-6 text-gray-900
                  flex items-center justify-center"
                                >
                                  {/* POKEMON NAME */}
                                  <h6 className="text-xl sm:text-2xl text-white/90 font-medium flex justify-start items-center">
                                    <span className="text-xs sm:text-md font-normal mr-0.5 text-gray-100/70">
                                      No
                                    </span>
                                    {props.info.id}
                                  </h6>
                                  <h2
                                    className={
                                      props.info.name.length < 13
                                        ? "rounded-full text-2xl col-span-2 md:text-3xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide"
                                        : "rounded-full text-lg col-span-2 md:text-xl font-bold text-white/90 subpixel-antialiased text-center capitalize sm:tracking-wide"
                                    }
                                  >
                                    {props.info.name}
                                  </h2>
                                  <div className="flex justify-end">
                                    <button
                                      type="button"
                                      className="box-content border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black 
                      hover:no-underline"
                                      onClose={() => {
                                        setOpen(true);
                                      }}
                                      onClick={() => {
                                        props.disabler(false);
                                      }}
                                      ref={cancelButtonRef}
                                    >
                                      <IoClose
                                        className="text-white"
                                        size={24}
                                      />
                                    </button>
                                  </div>
                                </Dialog.Title>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex-auto overflow-hidden px-4 pb-4 pt-1.5 sm:px-6 sm:pb-6 sm:pt-2.5 md:px-5 md:pb-5 md:pt-3">
                            <div className="md:pb-2 px-5 md:px-8 flex justify-center items-center">
                              {/* POKEMON IMAGE */}
                              <img
                                className="max-w-xs max-h-60 sm:max-h-72 lg:max-h-96 z-10 pointer-events-none"
                                src={
                                  props.info.sprites.other["official-artwork"]
                                    .front_default
                                }
                                alt=""
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
                            <div className="relative z-40">
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
