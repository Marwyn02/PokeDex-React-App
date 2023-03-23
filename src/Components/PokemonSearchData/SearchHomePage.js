import React, { useState } from "react";
import SearchBar from "../UI/SearchBar";
import { GetPokemon } from "./Content/GetPokemon";
import LoadingSpinner from "../UI/LoadingSpinner";

const SearchHomePage = () => {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noInput, setNoInput] = useState(false);

  const getSinglePokemon = async (query) => {
    setError(false);
    setNoInput(false);
    if (!query) {
      setLoading(true);
      setPokemon("");
      setLoading(false);
      setNoInput(true);
    } else {
      try {
        setLoading(true);
        const response = await GetPokemon(query);
        const results = await response.json();
        setPokemon(results);
        // console.log(results);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setPokemon("");
        setError(true);
        // console.log("Invalid Input");
        setLoading(false);
      }
    }
  };
  return (
    <>
      {true && <SearchBar getPokemon={getSinglePokemon} />}
      {error && (
        <div className="text-center tracking-normal text-gray-600 py-10 mx-16">
          <p className="md:text-lg lg:text-xl font-bold">Invalid input.</p>
          <p className="text-xs md:text-sm -mt-0.5 lg:-mt-0">
            Check your spelling if it's correct.
          </p>
        </div>
      )}
      {noInput && (
        <div className="text-center tracking-normal text-gray-600 py-10 mx-16">
          <p className="md:text-lg lg:text-xl font-bold">
            You haven't typed anything.
          </p>
          <p className="text-xs md:text-sm -mt-0.5 lg:-mt-0">
            Please enter a valid input.
          </p>
        </div>
      )}
      {loading && <LoadingSpinner />}
      {!loading && pokemon ? (
        <div className="p-12 lg:pt-3">
          <h1 className="capitalize text-3xl font-bold tracking-wide text-center mb-3">
            {pokemon.name}
          </h1>
          <div className="px-6">
            <img
              className="mx-auto"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt="Pokemon_image"
            />
          </div>
          <div className="md:mx-32 lg:mx-52 xl:mx-72 mb-1 md:mb-3">
            <div className="grid grid-cols-3 gap-x-1 lg:gap-x-2.5 xl:gap-1 text-white/90 pt-4 pb-1">
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
            <div className="grid grid-cols-2 flex items-center justify-center mb-1 md:mb-3">
              <p className="text-black/75 text-sm md:text-base">ID</p>
              <p className="text-xs md:text-base">{pokemon.id}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchHomePage;
