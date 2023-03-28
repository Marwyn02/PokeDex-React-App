import React, { useState } from "react";
import SearchBar from "../UI/SearchBar";
import { GetSpeciesPokemon } from "./Content/GetSpeciesPokemon";
import { GetPokemon } from "./Content/GetPokemon";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorInput from "../UI/ErrorInput";

const SearchHomePage = () => {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noInput, setNoInput] = useState(false);

  const getSinglePokemon = async (query) => {
    setError(false);
    setNoInput(false);
    // console.log(query);
    if (!query) {
      setLoading(true);
      setPokemon("");
      setLoading(false);
      setNoInput(true);
    } else {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await GetPokemon(query);
          const responseSpecies = await GetSpeciesPokemon(query);
          const results = await response.json();
          const resultsSpecies = await responseSpecies.json();
          setPokemon({ ...results, ...resultsSpecies });
          // console.log(pokemon);
          setLoading(false);
        } catch (error) {
          setLoading(true);
          setPokemon("");
          setError(true);
          setLoading(false);
        }
      }, 2000);
    }
  };
  return (
    <>
      <SearchBar getPokemon={getSinglePokemon} />
      {error && (
        <ErrorInput
          errorTitle={"Invalid input."}
          errorMsg={"Check your spelling if it's correct."}
        />
      )}
      {noInput && (
        <ErrorInput
          errorTitle={"Please type anything."}
          errorMsg={"You can search 'Pikachu' if you want."}
        />
      )}
      {loading && <LoadingSpinner />}
      {!loading && pokemon ? (
        <div key={pokemon.id} className="px-5 py-8 lg:pt-3">
          <h1 className="capitalize text-3xl font-bold tracking-wide text-center mb-3">
            {pokemon.species.name}
          </h1>
          <div className="px-6">
            <img
              className="mx-auto"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="Pokemon_image"
            />
          </div>
          <div className="md:mx-32 lg:mx-52 xl:mx-72">
            <div className="bg-gray-400/30 rounded-lg p-3 mt-2">
              <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white/90 py-1">
                <p className="text-black/75 text-sm md:text-base">Type</p>
                {pokemon.types.map((poke) => {
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
              <div className="grid grid-cols-2 flex items-center justify-center py-1.5 mb-1 md:mb-2">
                <p className="text-black/75 text-sm md:text-base">ID</p>
                <p className="text-xs md:text-base">{pokemon.id}</p>
              </div>
              {/* Stats */}
              <div className="bg-blue-600/20 rounded-lg px-2 py-3">
                <h5 className="text-black/75 text-sm mb-1">Stats</h5>
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 px-1">
                  {pokemon.stats.map((poke) => {
                    return (
                      <div className="grid grid-cols-3">
                        <p className="col-span-2 flex items-center capitalize text-black/75 text-xs md:text-sm">
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
            </div>
            {/* Ability */}
            <div className="grid grid-cols-2">
              <div className="bg-gray-200/75 p-3 rounded-lg mt-2">
                <h5 className="-mb-1.5 py-1 text-sm font-medium text-black/75 capitalize">
                  Abilities
                </h5>
                <div className="py-2 px-6 grid gap-y-1">
                  {pokemon.abilities.map((poke) => {
                    return (
                      <p
                        className="flex justify-center items-center py-0.5 capitalize text-xs sm:text-sm bg-gray-900/60 text-white/80
                        w-auto rounded"
                      >
                        {poke.ability.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* {pokemon.shape && (
              <div className="text-lg text-black">{pokemon.shape.name}</div>
            )} */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchHomePage;
