import { React, useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>{search}</h1>
        <label htmlFor="name">Search:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(e) => props.getPokemon(search)}>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
