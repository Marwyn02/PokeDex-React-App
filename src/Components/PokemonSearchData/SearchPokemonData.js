import React from "react";

const SearchPokemonData = (props) => {
  return (
    <>
      {!props.poke ? (
        ""
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-x-2 bg-gradient-to-b from-white/50 to-gray-300">
          <div
            key={props.poke.id}
            className="px-5 pb-8 sm:col-start-2 sm:col-span-3 lg:col-start-2 lg:col-span-2"
          >
            <h1 className="capitalize text-3xl md:text-4xl lg:text-6xl font-bold sm:tracking-wide text-center mb-1.5 pointer-events-none">
              {props.poke.name}
            </h1>
            <div className="px-6">
              <img
                className="mx-auto pointer-events-none"
                src={props.poke.sprites.other["official-artwork"].front_default}
                alt="Pokemon_image"
              />
            </div>
            <div>
              <div className="hover:bg-gray-400/30 bg-gray-200/75 rounded-lg p-3 mt-2 duration-300">
                <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white/90 py-1 pointer-events-none">
                  <p className="text-black/75 text-sm md:text-base">Type</p>
                  {props.poke.types.map((poke) => {
                    return (
                      <p
                        className={`${poke.type.name} rounded-md text-center text-xs py-0.5 capitalize md:text-base`}
                      >
                        {poke.type.name}
                      </p>
                    );
                  })}
                </div>
                {/* ID */}
                <div className="grid grid-cols-2 flex items-center justify-center py-1.5 pointer-events-none">
                  <p className="text-black/75 text-sm md:text-base">ID</p>
                  <p className="text-xs md:text-base">{props.poke.id}</p>
                </div>
                {/* Stats */}
                <div className="bg-white/90 rounded-lg px-2 py-3 border border-black/60 pointer-events-none">
                  <h5 className="text-black/75 text-sm mb-1">Stats</h5>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-1">
                    {props.poke.stats.map((pokemon) => {
                      return (
                        <div className="grid grid-cols-3">
                          <p className="col-span-2 flex items-center capitalize text-black/75 text-xs md:text-sm">
                            {pokemon.stat.name}:{" "}
                          </p>
                          <span
                            className={`${pokemon.stat.name} col-span-1 flex items-center justify-center 
                      rounded text-xs md:text-base text-center`}
                          >
                            {pokemon.base_stat}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Ability */}
              <div className="grid grid-cols-2">
                <div className="bg-gray-200/75 hover:bg-gray-400/30 p-3 rounded-lg mt-2 duration-300">
                  <h5 className="-mb-1.5 py-1 text-sm font-medium text-black/75 capitalize pointer-events-none">
                    Abilities
                  </h5>
                  <div className="py-2 px-6 grid gap-y-1 pointer-events-none">
                    {props.poke.abilities.map((pokemon) => {
                      return (
                        <p
                          className="abilities-bg flex justify-center items-center py-0.5 capitalize text-xs sm:text-sm text-black/70
                        w-auto rounded"
                        >
                          {pokemon.ability.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* {props.poke.shape && (
                <div className="text-lg text-black">
                  {
                    props.poke.flavor_text_entries[
                      props.poke.flavor_text_entries.length - 1
                    ].flavor_text
                  }
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPokemonData;
