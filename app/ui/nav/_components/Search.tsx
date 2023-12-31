import React from "react";
import {SearchIcon} from "../../icons";

const Search = () => {

  return (
    <form className="relative grow md:max-w-[50rem] ">
      <button type="submit" className="absolute right-2 top-2 opacity-50">
        <SearchIcon clasess="h-8 w-8 fill-dark_4 opacity-70 " />
      </button>
      <input
        className="leading-[3rem] w-full pr-11 bg-slate-100 rounded-xl text-lg"
        placeholder="جستجو کالا  "
        type="text"
        id="search"
        name="searchQuery"
      />
    </form>
  );
};

export default Search;
