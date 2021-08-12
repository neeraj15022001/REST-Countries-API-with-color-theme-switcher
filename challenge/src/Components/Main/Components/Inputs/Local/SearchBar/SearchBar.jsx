import React, { useContext, useState } from "react";
import { SearchOutline } from "react-ionicons";
import { DarkModeContext } from "../Services/Context.js";

function SearchBar() {
  const [inputValue,setInput] = useState('');
  console.log(inputValue)
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`flex items-center justify-center ${
        darkMode ? "bg-darkBlue text-white" : "bg-white text-black"
      } px-5 py-3 rounded-md w-full sm:w-auto mb-5 sm:m-0`}
    >
      <SearchOutline
        color={darkMode ? "#fff" : "#000"}
        title={"Search"}
        height="25px"
        width="25px"
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={e => setInput(e.target.value)}
        className={`bg-transparent outline-none ${
          darkMode ? "text-white" : "text-black"
        }`}
      />
    </div>
  );
}

export default SearchBar;
