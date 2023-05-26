import React from "react";
import RadarChart from "../PokemonData/Data-UI/Chart";

const SearchPokemonData = (props) => {
  return (
    <>
      {!props.poke ? (
        ""
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-x-2 pt-8">
          <div
            className="z-10 text-9xl font-bold origin-top-left rotate-90 absolute top-1/4 left-24 vertical-rl uppercase bg-gradient-to-r from-purple-500 to-pink-500 
            text-transparent bg-clip-text opacity-10 tracking-wider"
          >
            {props.poke.name}
          </div>
          <div
            key={props.poke.id}
            className="px-5 pb-8 sm:col-start-2 sm:col-span-3 lg:col-start-2 lg:col-span-2"
          >
            <h1 className="capitalize text-3xl md:text-4xl lg:text-6xl font-bold sm:tracking-wide text-center pointer-events-none">
              {props.poke.name}
            </h1>
            {props.poke.types.length === 2 ? (
              <div className="grid grid-cols-6 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pb-2 md:pt-1 text-sm pointer-events-none">
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
              <div className="grid grid-cols-5 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-1 pb-2 md:pt-1 text-sm pointer-events-none">
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
            <div className="px-6 z-20">
              <img
                className="mx-auto pointer-events-none"
                src={props.poke.sprites.other["official-artwork"].front_default}
                alt="Pokemon_image"
              />
            </div>
            <div>
              <div className="bg-black/40 z-0 rounded-lg">
                <RadarChart pokeData={props.poke} />
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
