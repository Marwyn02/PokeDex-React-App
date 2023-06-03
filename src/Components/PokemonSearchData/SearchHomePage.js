import React, { useState } from "react";
import { GetSpeciesPokemon } from "./Content/GetSpeciesPokemon";
import { GetPokemon } from "./Content/GetPokemon";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorInput from "../UI/ErrorInput";
import SearchPokemonData from "./SearchPokemonData";
import SearchBar from "../UI/SearchBar";

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
          if (responseSpecies.ok === false) {
            // console.log("NO POKEMON-SPECIES");
            setPokemon(results);
            setLoading(false);
            // console.log(results);
          } else {
            // console.log("HAVE POKEMON-SPECIES");
            const resultsSpecies = await responseSpecies.json();
            setPokemon({ ...results, ...resultsSpecies });
            // console.log(resultsSpecies);
            setLoading(false);
          }
        } catch (error) {
          // console.log("Error");
          setLoading(true);
          setPokemon("");
          setError(true);
          setLoading(false);
        }
      }, 2000);
    }
    // console.log(pokemon);
  };
  return (
    <>
      <SearchBar
        noInputError={noInput}
        inputError={error}
        getPokemon={getSinglePokemon}
        searchBarLoading={loading}
      />
      {error && <ErrorInput errorTitle={"Pokemon not found."} />}
      {noInput && (
        <ErrorInput
          errorTitle={"Please type anything."}
          errorMsg={"You can search 'Pikachu' if you want."}
        />
      )}
      {!error && !noInput && !pokemon && !loading ? (
        <div className="h-screen w-full bg-gradient-to-b from-white/50 to-gray-300"></div>
      ) : null}
      {loading && <LoadingSpinner />}
      {!loading && pokemon ? <SearchPokemonData poke={pokemon} /> : null}
    </>
  );
};

export default SearchHomePage;
