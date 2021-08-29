import React, { useContext, useState, useEffect } from "react";
import { SearchOutline } from "react-ionicons";
import { DarkModeContext } from "../Services/Context.js";

function SearchBar() {
  const [inputValue, setInput] = useState("");
  useEffect(() => {
    var filter, ul, li, a, i, txtValue;
    filter = inputValue.toUpperCase();
    ul = document.getElementById("cards-grid");
    li = ul.querySelectorAll(".country-name");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // li[i].style.display = "";
        li[i].parentElement.parentElement.style.display = "";
      } else {
        // li[i].style.display = "none";
        li[i].parentElement.parentElement.style.display = "none";
      }
    }
  }, [inputValue]);
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
        onChange={(e) => setInput(e.target.value)}
        className={`bg-transparent outline-none ${
          darkMode ? "text-white" : "text-black"
        }`}
      />
    </div>
  );
}

export default SearchBar;
