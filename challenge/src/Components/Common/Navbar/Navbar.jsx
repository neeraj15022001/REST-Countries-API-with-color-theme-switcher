import React, { useContext } from "react";
import { MoonOutline } from "react-ionicons";
import { DarkModeContext } from "../../Context/DarkModeContext.js";

function Navbar() {
  const [darkMode, setdarkMode] = useContext(DarkModeContext);
  const changeMode = () => {
    console.log(darkMode);
    setdarkMode((darkMode) => !darkMode);
  };
  return (
    <div
      className={`flex items-center justify-between px-20 py-4 ${
        darkMode ? "theme-dark" : "theme-white"
      } fixed top-0 left-0 right-0`}
      style={{ boxShadow: darkMode ? "" : "0px 1px 5px 0px rgba(0,0,0,0.1" }}
    >
      <p className="text-xl font-extrabold">Where in the world?</p>
      <div
        className="flex items-center justify-center select-none cursor-pointer"
        onClick={changeMode}
      >
        <MoonOutline
          color={"#00000"}
          title={"Moon"}
          height="25px"
          width="25px"
          className="mr-2"
        />
        <p className="capitalize text-sm">dark mode</p>
      </div>
    </div>
  );
}

export default Navbar;
