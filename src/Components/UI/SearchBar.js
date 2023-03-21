import { React, useState } from "react";
import Button from "./Button";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        className="mt-10 py-10 border-y md:border-0 border-black/20"
        onSubmit={submitHandler}
      >
        <div className="flex justify-center items-center grid grid-cols-1 px-6 md:px-20 lg:px-40">
          <label
            htmlFor="name"
            className="mr-1 text-sm md:mr-2 md:text-base mb-1"
          >
            Search for pokemon:
          </label>
          <div className="grid grid-cols-3 gap-2 md:px-10 lg:px-32 ">
            <input
              className="border py-1 col-span-2"
              type="text"
              id="name"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Write it here"
            />
            <Button onClick={(e) => props.getPokemon(search)}>Search</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
