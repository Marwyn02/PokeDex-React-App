import React, { useState } from "react";
import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";

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
            ? "pt-8 -mb-8"
            : "pt-8 pb-5 md:py-10 border-b border-black md:border-0"
        }
        onSubmit={submitHandler}
      >
        <div className="mx-au md:mx-20 lg:mx-40 xl:mx-96 2xl:mx-96">
          <div className="flex items-center mx-8 md:mx-10 lg:mx-32">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearchOutline />
              </div>
              <input
                className={
                  props.inputError || props.noInputError
                    ? "border py-1 border-rose-500 bg-transparent focus:ring-0 block w-full pl-10"
                    : "border py-1 focus:ring-0 block w-full pl-10"
                }
                type="text"
                id="name"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search"
              />
            </div>
            {props.searchBarLoading ? (
              <Button>Searching...</Button>
            ) : (
              <Button onClick={(e) => props.getPokemon(search)}>
                <IoSearchOutline className="w-4 h-4 mr-1.5 ml-.5" />
                Search
              </Button>
            )}
          </div>
          <div className="mx-8 md:mx-10 lg:mx-32 flex items-center">
            {props.noInputError || props.inputError ? (
              <div className="border border-black/50 rounded p-2 mt-2 bg-gray-100/40 ">
                <p className="bg-gray-200/80 rounded py-1 px-3 inline text-xs">
                  TIP:
                </p>
                <span className="ml-2 text-sm">
                  You may use (
                  <span className="inline font-bold">pokemon-name</span>
                  )-'
                  <span className="inline font-bold">mega</span>', '
                  <span className="inline font-bold">alola</span>', '
                  <span className="inline font-bold">galar</span>' or their
                  variants.
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
