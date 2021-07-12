import React from "react";
import { SearchOutline } from "react-ionicons";

function SearchBar() {
  return (
    <div className="flex items-center justify-center bg-darkBlue px-5 py-3 rounded-sm">
      <SearchOutline
        color={"#fff"}
        title={"Search"}
        height="25px"
        width="25px"
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent outline-none text-white"
      />
    </div>
  );
}

export default SearchBar;
