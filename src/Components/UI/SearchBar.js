import React, { useState } from "react";
import Button from "./Button";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className={
          props.inputError || props.noInputError
            ? "pt-8 -mb-10 "
            : "py-10 md:pt-10 md:pb-20"
        }
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
              className={
                props.inputError || props.noInputError
                  ? "border py-1 col-span-2 border-rose-500 bg-transparent focus:ring-0"
                  : "py-1 col-span-2 bg-transparent focus:ring-0"
              }
              type="text"
              id="name"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="Write it here"
            />
            {props.searchBarLoading ? (
              <Button>Searching...</Button>
            ) : (
              <Button onClick={(e) => props.getPokemon(search)}>Search</Button>
            )}
          </div>
          {props.noInputError || props.inputError ? (
            <div className="border border-black/50 rounded p-2 mt-2 bg-gray-100/40 md:mx-10 lg:mx-32">
              <p className="bg-gray-200/80 rounded py-1 px-3 inline text-xs">
                TIP:
              </p>
              <span className="ml-2 text-sm">
                You may use (
                <span className="inline font-bold">pokemon-name</span>)-'
                <span className="inline font-bold">mega</span>', '
                <span className="inline font-bold">alola</span>' or their
                variants.
              </span>
            </div>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default SearchBar;
