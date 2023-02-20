import React from "react";
import SearchBar from "../UI/SearchBar";
import { GetPokemon } from "./Content/GetPokemon";
import UnderConstruction from "../UI/UnderConstruction";

const SearchHomePage = () => {
  const getPokemon = async (query) => {
    const res = await GetPokemon(query);
    console.log(res);
  };
  return (
    <>
      {false && <SearchBar getPokemon={getPokemon} />}
      <UnderConstruction />
    </>
  );
};

export default SearchHomePage;
