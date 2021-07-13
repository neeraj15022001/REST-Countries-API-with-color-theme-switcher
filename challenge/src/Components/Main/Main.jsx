import React, { useContext } from "react";
import Inputs from "./Components/Inputs/Inputs";
import CardContent from "./Components/CardContent/CardContent";
import { DarkModeContext } from "../Context/DarkModeContext.js";

function Main() {
  const [darkMode, setdarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`h-screen w-screen ${
        darkMode ? "bg-veryDarkBlue" : "bg-light"
      } px-20 pb-10 pt-24 overflow-auto`}
    >
      <Inputs />
      <CardContent />
    </div>
  );
}

export default Main;
