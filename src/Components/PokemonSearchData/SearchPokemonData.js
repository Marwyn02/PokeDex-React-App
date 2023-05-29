import React from "react";
import RadarChart from "../PokemonData/Data-UI/Chart";

const SearchPokemonData = (props) => {
  const name_design =
    "text-9xl font-bold origin-top-left rotate-90 absolute top-0 left-[75px] vertical-lr uppercase bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text opacity-60 tracking-wider lg:rotate-[24deg] lg:top-10 lg:-left-4 lg:opacity-10 lg:text-[250px]";
  const name_design_more =
    "text-9xl font-bold origin-top-left rotate-90 absolute top-0 left-[75px] vertical-lr uppercase bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text opacity-60 tracking-wider lg:rotate-[24deg] lg:top-44 lg:-left-4 lg:opacity-10 lg:text-[250px]";

  return (
    <>
      {!props.poke ? (
        ""
      ) : (
        <div className="mx-auto pt-8 lg:pt-0 max-w-xl lg:max-w-none lg:mx-0 bg-gradient-to-bl from-red-100 from-30% to-blue-200 to-80%">
          <div key={props.poke.id} className="px-5 lg:pr-0 overflow-hidden">
            <div className="relative">
              <div
                className={
                  props.poke.name.length <= 10 ? name_design_more : name_design
                }
              >
                {props.poke.name} {/* Pokemon rotated name */}
              </div>
            </div>
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-6">
              {/* Name and ID for desktop */}
              <div className="lg:col-start-1 lg:order-1 text-center px-0"></div>
              <div
                className={`lg:col-start-5 lg:col-span-2 lg:order-3 
                lg:pt-9 lg:overflow-x-hidden lg:px-4 ${props.poke.types[0].type.name}-info-bg`}
              >
                <div className="relative mt-6 mx-auto w-fit -mb-1 lg:mb-0.5 lg:mx-auto">
                  <div className="absolute bottom-auto left-auto -right-5 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-md bg-black/70 px-2.5 pb-1 pt-1.5 text-center align-baseline text-xs font-bold leading-none text-white">
                    {props.poke.id}
                  </div>
                  <div className="flex items-center justify-center dark:text-gray-200">
                    <h1 className="relative capitalize text-black/70 text-3xl md:text-4xl lg:text-4xl font-bold md:tracking-wide pointer-events-none lg:text-white/80">
                      {props.poke.name}
                    </h1>
                  </div>
                </div>
                {props.poke.types.length === 2 ? (
                  <div className="grid grid-cols-6 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pb-5 md:pt-1 text-sm pointer-events-none">
                    {props.poke.types.map((data) => {
                      return (
                        <p
                          className={`${data.type.name} col-start-${
                            data.slot === 1 ? "3" : "4"
                          } rounded-md text-center text-xs shadow-sm py-0.5 capitalize`}
                        >
                          {data.type.name}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-5 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-1 pb-5 md:pt-1 text-sm pointer-events-none">
                    {props.poke.types.map((data) => {
                      return (
                        <p
                          className={`${data.type.name} col-start-3 shadow-sm rounded-md text-center text-xs py-0.5 capitalize`}
                        >
                          {data.type.name}
                        </p>
                      );
                    })}
                  </div>
                )}
                {/* Pokemon Stats for large viewpoint */}
                <div className="hidden lg:block -mt-7">
                  <div className="md:rounded-lg mt-5 -mx-5 lg:mx-0 duration-300 relative">
                    <p className="text-white/40 lowercase font-bold text-sm -mb-20 pt-8 px-10 absolute">
                      Statistics:
                    </p>
                    <RadarChart pokeData={props.poke} />
                  </div>
                </div>
              </div>

              {/* Pokemon Image and chart for mobile */}
              <div className="relative lg:col-start-2 lg:col-span-3 lg:order-2">
                <div className="px-6 lg:py-16 mt-1">
                  <img
                    className="mx-auto pointer-events-none z-50"
                    src={
                      props.poke.sprites.other["official-artwork"].front_default
                    }
                    alt="Pokemon_image"
                  />
                </div>
                <div className="block lg:hidden">
                  <div className="bg-gray-900 md:rounded-lg mb-8 mt-6 -mx-5 lg:mx-0 duration-300 relative">
                    <p className="text-white/40 lowercase font-bold text-sm -mb-20 pt-8 px-10 absolute">
                      Statistics:
                    </p>
                    <RadarChart pokeData={props.poke} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {props.poke.shape && (
                <div className="text-lg text-black">
                  {
                    props.poke.flavor_text_entries[
                      props.poke.flavor_text_entries.length - 1
                    ].flavor_text
                  }
                </div>
              )} */}
    </>
  );
};

export default SearchPokemonData;
