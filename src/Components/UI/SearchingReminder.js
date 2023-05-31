import React from "react";

const SearchingReminder = () => {
  return (
    <>
      <div className="border border-black/50 rounded p-2 mt-2 bg-gray-100/40 ">
        <p className="bg-gray-200/80 rounded py-1 px-3 inline text-xs">TIP:</p>
        <span className="ml-2 text-sm">
          You may use (<span className="inline font-bold">pokemon-name</span>
          )-'
          <span className="inline font-bold">mega</span>', '
          <span className="inline font-bold">alola</span>', '
          <span className="inline font-bold">galar</span>' or their variants.
        </span>
      </div>
    </>
  );
};

export default SearchingReminder;
