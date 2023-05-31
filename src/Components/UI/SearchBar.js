import React, { useState } from "react";
import Button from "./Button";
import SearchingReminder from "./SearchingReminder";
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
                    ? "border py-1 pt-2 border-rose-500 bg-transparent focus:ring-0 block w-full pl-10 duration-300 rounded-sm"
                    : "border pb-1 pt-2 focus:ring-0 block w-full pl-10 duration-300 rounded-sm"
                }
                type="text"
                id="name"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search"
              />
            </div>
            {props.searchBarLoading ? (
              <Button disable={props.searchBarLoading}>Searching...</Button>
            ) : (
              <Button onClick={(e) => props.getPokemon(search)}>
                <IoSearchOutline className="w-4 h-4 mr-1.5 ml-.5 -mt-1" />
                Search
              </Button>
            )}
          </div>
          <div className="mx-8 md:mx-10 lg:mx-32 flex items-center">
            {props.noInputError || props.inputError ? (
              <SearchingReminder />
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
