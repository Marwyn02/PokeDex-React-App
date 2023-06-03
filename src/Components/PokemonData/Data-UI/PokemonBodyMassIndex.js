import React from "react";

const PokemonBodyMassIndex = (props) => {
  return (
    <>
      {props.pokemon.is_legendary === true ? (
        <div
          className="grid grid-cols-3 md:grid-cols-4 text-center px-6 md:px-16 lg:px-5 xl:px-16 text-white/40
         font-bold text-xs -mt-14 mb-5 pb-5 lg:mb-0 lg:pb-0 sm:-mt-12 md:-mt-6"
        >
          <div className="lg:pr-1.5">
            Height
            <p className="mt-0.5 md:mt-1 text-sm md:text-base text-white font-normal">
              {props.pokemon.height}
            </p>
          </div>
          <div className="border-x border-white/60 md:col-span-2">
            <p className="mt-0.5 md:mt-1 text-sm lg:text-base tracking-wide opacity-90 legendaryPokemon font-bold uppercase pt-2 lg:pt-1.5">
              Legendary
            </p>
          </div>
          <div className="lg:pl-1.5">
            Weight
            <p className="mt-0.5 md:mt-1 text-sm md:text-base text-white font-normal">
              {props.pokemon.weight}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 text-center px-16 text-white/40 font-bold text-xs -mt-14 mb-5 pb-5 lg:mb-0 lg:pb-0 md:-mt-6">
          <div>
            Height
            <p className="mt-0.5 md:mt-1 text-sm md:text-base text-white font-normal">
              {props.pokemon.height}
            </p>
          </div>
          <div className="border-l border-white/60">
            Weight
            <p className="mt-0.5 md:mt-1 text-sm md:text-base text-white font-normal">
              {props.pokemon.weight}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonBodyMassIndex;
