import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div className="relative ml-11 flex items-center justify-end">
      <div>
        <input
          className="rounded-md bg-search_color bg-none p-2 px-16  text-normal_white_color focus:outline-none "
          type="text"
          placeholder="search here..."
        />
      </div>
      <div className="absolute right-3 cursor-pointer text-normal_white_color">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
