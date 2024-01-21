import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <div className="h-[20px] w-[20px]">
        <IoSearchOutline />
      </div>
      <div className="w-full">
        <input
          className="outline-none border-0 w-full bg-transparent h-[20px]"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
