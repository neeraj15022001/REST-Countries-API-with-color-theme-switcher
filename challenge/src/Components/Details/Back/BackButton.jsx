import React, { useContext } from "react";
import { ArrowBackOutline } from "react-ionicons";
import { DarkModeContext } from "../Services/Context.js";

function BackButton() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div>
<<<<<<< HEAD
      <div
        className={`flex items-center justify-between ${
          darkMode ? "bg-darkBlue text-white" : "bg-white text-black"
        } rounded-sm px-8 py-3 shadow-lg`}
      >
=======
      <div className={`flex items-center justify-between ${darkMode? "bg-darkBlue text-white" : "bg-white text-black"} rounded-sm px-8 py-3 shadow-lg cursor-pointer`} onClick={() => window.location.assign("/")}>
>>>>>>> 5e88046 (added details page)
        <ArrowBackOutline
          color={darkMode ? "#fff" : "#000"}
          title={"Back"}
          height="25px"
          width="25px"
          className="mr-3"
        />
        <span className="capitalize">back</span>
      </div>
    </div>
  );
}

export default BackButton;
