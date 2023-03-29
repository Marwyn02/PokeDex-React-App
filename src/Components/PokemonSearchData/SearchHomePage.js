import React, { useState } from "react";
import SearchBar from "../UI/SearchBar";
import { GetSpeciesPokemon } from "./Content/GetSpeciesPokemon";
import { GetPokemon } from "./Content/GetPokemon";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorInput from "../UI/ErrorInput";
import SearchPokemonData from "./SearchPokemonData";

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
          console.log("Error");
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
      {!loading && pokemon ? <SearchPokemonData poke={pokemon} /> : null}
    </>
  );
};

export default SearchHomePage;
