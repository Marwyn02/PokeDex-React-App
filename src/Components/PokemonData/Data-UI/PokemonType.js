import React from "react";

const PokemonType = (props) => {
  return (
    <>
      {props.data.types.length === 2 ? (
        <div className="grid grid-cols-6 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pb-5 md:pt-1 text-sm pointer-events-none">
          {props.data.types.map((pokemon) => {
            return (
              <p
                className={`${pokemon.type.name} col-start-${
                  pokemon.slot === 1 ? "3" : "4"
                } rounded-md text-center text-xs shadow-sm py-0.5 capitalize`}
              >
                {pokemon.type.name}
              </p>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white pt-1 pb-5 md:pt-1 text-sm pointer-events-none">
          {props.data.types.map((pokemon) => {
            return (
              <p
                className={`${pokemon.type.name} col-start-3 shadow-sm rounded-md text-center text-xs py-0.5 capitalize`}
              >
                {pokemon.type.name}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokemonType;
