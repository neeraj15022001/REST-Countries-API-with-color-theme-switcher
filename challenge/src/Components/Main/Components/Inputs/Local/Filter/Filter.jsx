import React, { useContext } from "react";
import { DarkModeContext } from "../Services/Context.js";

function Filter() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-darkBlue text-white" : "bg-white text-black"
      } px-6 py-3 rounded-md mr-auto sm:m-0`}
    >
      <select
        name="countries"
        className="bg-transparent outline-none"
        defaultValue="none"
      >
        <option value="none" disabled hidden>
          Filter By Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
}

export default Filter;
